const fs = require('fs');
const path = require('path');

/**
 * Script to generate metadata files for NFTs
 * Uses the template in metadata/metadataTemplate.json as base
 * Generates numbered files (1, 2, 3...) without extension
 */

// Configurations
const TEMPLATE_PATH = path.join(__dirname, '../metadata/metadataTemplate.json');
const OUTPUT_DIR = path.join(__dirname, '../metadata/tokens');

// Function to read the template
function readTemplate() {
  try {
    const templateContent = fs.readFileSync(TEMPLATE_PATH, 'utf8');
    return JSON.parse(templateContent);
  } catch (error) {
    console.error('Error reading template:', error.message);
    process.exit(1);
  }
}

// Function to create output directory if it doesn't exist
function ensureOutputDir() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`Directory created: ${OUTPUT_DIR}`);
  }
}

// Function to generate a metadata file
function generateMetadataFile(tokenId, template) {
  const metadata = {
    ...template,
    name: template.name.replace('#{tokenId}', tokenId)
  };

  const fileName = tokenId.toString();
  const filePath = path.join(OUTPUT_DIR, fileName);
  
  try {
    fs.writeFileSync(filePath, JSON.stringify(metadata, null, 2));
    return true;
  } catch (error) {
    console.error(`Error creating file ${fileName}:`, error.message);
    return false;
  }
}

// Main function
function generateMetadata(quantity) {
  console.log('🚀 Starting metadata generation...');
  console.log(`📁 Template: ${TEMPLATE_PATH}`);
  console.log(`📂 Output directory: ${OUTPUT_DIR}`);
  console.log(`🔢 Quantity: ${quantity}`);
  console.log('');

  // Read template
  const template = readTemplate();
  console.log('✅ Template loaded successfully');

  // Create output directory
  ensureOutputDir();

  // Generate files
  let successCount = 0;
  let errorCount = 0;

  for (let i = 1; i <= quantity; i++) {
    if (generateMetadataFile(i, template)) {
      successCount++;
      if (i % 100 === 0) {
        console.log(`📝 Generated ${i}/${quantity} files...`);
      }
    } else {
      errorCount++;
    }
  }

  console.log('');
  console.log('🎉 Generation completed!');
  console.log(`✅ Files created successfully: ${successCount}`);
  if (errorCount > 0) {
    console.log(`❌ Files with errors: ${errorCount}`);
  }
  console.log(`📂 Files saved in: ${OUTPUT_DIR}`);
}

const quantity = parseInt(process.argv[2]);

if (isNaN(quantity) || quantity <= 0) {
  console.error('❌ Error: Quantity must be a positive number');
  process.exit(1);
}

// Execute generation
generateMetadata(quantity);
