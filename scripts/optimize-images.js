#!/usr/bin/env node

/**
 * Image Optimization Script for BaleNet Group Website
 * 
 * This script helps optimize images for web use by:
 * - Resizing images to required dimensions
 * - Compressing images for faster loading
 * - Converting to appropriate formats
 * 
 * Usage: node scripts/optimize-images.js
 */

const fs = require('fs');
const path = require('path');

// Image requirements by directory
const imageRequirements = {
  'hero': [
    {
      name: 'construction-hero-bg.jpg',
      width: 1920,
      height: 1080,
      description: 'Hero background - Professional construction site'
    }
  ],
  'services': [
    {
      name: 'professional-cleaning-team.jpg',
      width: 600,
      height: 400,
      description: 'Clean services - Professional cleaning team'
    },
    {
      name: 'emergency-restoration-team.jpg',
      width: 600,
      height: 400,
      description: 'Restore services - Emergency restoration team'
    },
    {
      name: 'construction-workers.jpg',
      width: 600,
      height: 400,
      description: 'Construct services - Construction workers'
    }
  ],
  'about': [
    {
      name: 'professional-team-portrait.jpg',
      width: 600,
      height: 400,
      description: 'About section - Professional team portrait'
    }
  ],
  'projects': [
    {
      name: 'office-cleanup-project.jpg',
      width: 400,
      height: 300,
      description: 'Office complex cleanup project'
    },
    {
      name: 'residential-renovation.jpg',
      width: 400,
      height: 300,
      description: 'Residential renovation project'
    },
    {
      name: 'water-damage-restoration.jpg',
      width: 400,
      height: 300,
      description: 'Water damage restoration project'
    },
    {
      name: 'commercial-fitout.jpg',
      width: 400,
      height: 300,
      description: 'Commercial fit-out project'
    },
    {
      name: 'industrial-cleaning.jpg',
      width: 400,
      height: 300,
      description: 'Industrial cleaning project'
    },
    {
      name: 'fire-restoration.jpg',
      width: 400,
      height: 300,
      description: 'Fire restoration project'
    }
  ]
};

function checkImageRequirements() {
  console.log('🔍 Checking image requirements for BaleNet Group website...\n');
  
  const basePath = path.join(__dirname, '..', 'public', 'images');
  let missingImages = [];
  let foundImages = [];
  
  Object.entries(imageRequirements).forEach(([directory, images]) => {
    const dirPath = path.join(basePath, directory);
    
    console.log(`📁 ${directory.toUpperCase()} Directory:`);
    
    images.forEach(image => {
      const imagePath = path.join(dirPath, image.name);
      const exists = fs.existsSync(imagePath);
      
      if (exists) {
        foundImages.push(image);
        console.log(`  ✅ ${image.name} (${image.width}x${image.height})`);
      } else {
        missingImages.push({...image, directory});
        console.log(`  ❌ ${image.name} (${image.width}x${image.height}) - MISSING`);
      }
    });
    console.log('');
  });
  
  console.log('📊 SUMMARY:');
  console.log(`✅ Found: ${foundImages.length} images`);
  console.log(`❌ Missing: ${missingImages.length} images\n`);
  
  if (missingImages.length > 0) {
    console.log('🚨 MISSING IMAGES:');
    missingImages.forEach(image => {
      console.log(`   📍 ${image.directory}/${image.name}`);
      console.log(`      ${image.description}`);
      console.log(`      Required: ${image.width}x${image.height}px\n`);
    });
    
    console.log('📋 NEXT STEPS:');
    console.log('1. Source the missing images using the IMAGE_SOURCING_GUIDE.md');
    console.log('2. Resize images to required dimensions');
    console.log('3. Optimize images for web (compress to <500KB)');
    console.log('4. Place images in the correct directories');
    console.log('5. Run this script again to verify\n');
  } else {
    console.log('🎉 All required images are present!');
    console.log('💡 Consider running image optimization to ensure fast loading times.\n');
  }
  
  return { foundImages, missingImages };
}

function generateImagePlaceholders() {
  console.log('🎨 Generating image placeholder information...\n');
  
  const placeholderInfo = {
    hero: {
      'construction-hero-bg.jpg': {
        description: 'Professional construction site with modern equipment and workers in safety gear',
        searchTerms: ['construction site aerial view', 'modern construction equipment', 'professional construction workers'],
        colorScheme: 'Blue sky, construction equipment, safety gear, orange/green accents'
      }
    },
    services: {
      'professional-cleaning-team.jpg': {
        description: 'Professional cleaning team in modern uniforms with high-tech equipment',
        searchTerms: ['professional cleaning team', 'commercial cleaning services', 'cleaners in uniform'],
        colorScheme: 'Clean white/blue uniforms, bright environment, professional equipment'
      },
      'emergency-restoration-team.jpg': {
        description: 'Emergency restoration team with professional disaster response equipment',
        searchTerms: ['emergency restoration team', 'disaster recovery services', 'emergency cleanup team'],
        colorScheme: 'Professional safety gear, emergency equipment, serious professional demeanor'
      },
      'construction-workers.jpg': {
        description: 'Professional construction workers with hard hats and modern construction tools',
        searchTerms: ['construction workers safety', 'professional construction team', 'hard hat workers'],
        colorScheme: 'Hard hats, safety gear, construction tools, professional work environment'
      }
    },
    about: {
      'professional-team-portrait.jpg': {
        description: 'Diverse group of construction professionals in clean business attire',
        searchTerms: ['construction team portrait', 'professional construction workers', 'diverse team'],
        colorScheme: 'Professional attire, clean background, friendly trustworthy expressions'
      }
    },
    projects: {
      'office-cleanup-project.jpg': {
        description: 'Clean modern office space with professional cleaning equipment',
        searchTerms: ['office cleaning services', 'commercial office cleaning', 'post construction cleanup'],
        colorScheme: 'Clean office space, bright environment, professional equipment'
      },
      'residential-renovation.jpg': {
        description: 'Modern kitchen/bathroom renovation with clean construction work',
        searchTerms: ['residential renovation', 'kitchen bathroom renovation', 'home renovation'],
        colorScheme: 'Modern fixtures, clean finishes, professional construction work'
      },
      'water-damage-restoration.jpg': {
        description: 'Water damage restoration work with professional restoration equipment',
        searchTerms: ['water damage restoration', 'flood damage cleanup', 'emergency water restoration'],
        colorScheme: 'Professional equipment, clean restored space, emergency restoration work'
      },
      'commercial-fitout.jpg': {
        description: 'Commercial space construction with modern interior and professional work',
        searchTerms: ['commercial fit out', 'office construction', 'commercial interior construction'],
        colorScheme: 'Modern commercial interior, professional construction, office space'
      },
      'industrial-cleaning.jpg': {
        description: 'Industrial facility cleaning with large-scale cleaning equipment',
        searchTerms: ['industrial cleaning services', 'manufacturing facility cleaning', 'industrial deep cleaning'],
        colorScheme: 'Industrial equipment, clean environment, large-scale cleaning'
      },
      'fire-restoration.jpg': {
        description: 'Fire damage restoration with professional restoration work and clean space',
        searchTerms: ['fire damage restoration', 'smoke damage cleanup', 'fire restoration services'],
        colorScheme: 'Professional restoration work, clean restored space, fire damage repair'
      }
    }
  };
  
  console.log('📝 DETAILED IMAGE SPECIFICATIONS:\n');
  
  Object.entries(placeholderInfo).forEach(([category, images]) => {
    console.log(`📁 ${category.toUpperCase()}:`);
    Object.entries(images).forEach(([filename, info]) => {
      console.log(`\n  🖼️  ${filename}`);
      console.log(`     Description: ${info.description}`);
      console.log(`     Search Terms: ${info.searchTerms.join(', ')}`);
      console.log(`     Color Scheme: ${info.colorScheme}`);
    });
    console.log('');
  });
}

// Main execution
if (require.main === module) {
  console.log('🏗️  BaleNet Group - Image Requirements Checker\n');
  console.log('=' * 50);
  
  const results = checkImageRequirements();
  generateImagePlaceholders();
  
  console.log('✨ Image checking complete!');
  console.log('📖 See IMAGE_SOURCING_GUIDE.md for detailed sourcing instructions.\n');
}

module.exports = { checkImageRequirements, generateImagePlaceholders, imageRequirements };
