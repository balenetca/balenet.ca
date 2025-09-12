const CACHE_NAME = 'balenet-v1.0.0';
const CRITICAL_CACHE = [
  '/',
  '/manifest.json',
  '/images/balenet-logo.png',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

const STATIC_CACHE = [
  '/images/construction-site-bg.jpg',
  '/images/worker-cleaning.jpg',
  '/images/team-cleaning.jpg',
  '/images/before-after.jpg',
  '/images/debris-containers.jpg',
  '/images/debris-pile.jpg',
  '/images/demolition-service.jpg',
  '/images/floor-cleaning.jpg'
];

// Install event - cache critical resources
self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching critical resources');
        return cache.addAll(CRITICAL_CACHE);
      })
      .then(() => {
        console.log('Critical resources cached successfully');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Failed to cache critical resources:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip external requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version if available
        if (response) {
          return response;
        }

        // Otherwise, fetch from network
        return fetch(event.request)
          .then(fetchResponse => {
            // Don't cache if not a valid response
            if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
              return fetchResponse;
            }

            // Clone the response
            const responseToCache = fetchResponse.clone();

            // Cache static assets
            if (isStaticAsset(event.request.url)) {
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
            }

            return fetchResponse;
          })
          .catch(() => {
            // Return offline page for navigation requests
            if (event.request.destination === 'document') {
              return caches.match('/');
            }
          });
      })
  );
});

// Helper function to determine if URL is a static asset
function isStaticAsset(url) {
  return url.includes('/images/') || 
         url.includes('/icons/') || 
         url.includes('/fonts/') ||
         url.includes('.css') ||
         url.includes('.js');
}

// Handle background sync for form submissions
self.addEventListener('sync', event => {
  if (event.tag === 'contact-form') {
    event.waitUntil(
      // Handle offline form submissions when connection is restored
      handleOfflineFormSubmissions()
    );
  }
});

// Handle push notifications (for future use)
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'New update from BALE•NET',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View Services',
        icon: '/icons/icon-192x192.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icons/icon-192x192.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('BALE•NET', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/#services')
    );
  } else {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Helper function for offline form handling
async function handleOfflineFormSubmissions() {
  try {
    // Get stored form submissions from IndexedDB
    const submissions = await getStoredFormSubmissions();
    
    for (const submission of submissions) {
      try {
        // Attempt to submit the form
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submission)
        });

        if (response.ok) {
          // Remove from storage if successful
          await removeStoredFormSubmission(submission.id);
        }
      } catch (error) {
        console.error('Failed to submit offline form:', error);
      }
    }
  } catch (error) {
    console.error('Error handling offline form submissions:', error);
  }
}

// Placeholder functions for IndexedDB operations
async function getStoredFormSubmissions() {
  // Implementation would use IndexedDB to retrieve stored submissions
  return [];
}

async function removeStoredFormSubmission(id) {
  // Implementation would use IndexedDB to remove a submission
  return true;
}
