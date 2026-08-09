import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.resolve(__dirname, '../public/assets');

const RESIZE_RULES = {
  'hero_laptop.png': 800,
  'internship_folder.png': 700,
  'curs.png': 800,
  'staj.png': 700,
  'cont.png': 800,
  'grad_cap.png': 700,
  'building_photo.png': 800
};

async function optimizeImages() {
  const files = fs.readdirSync(ASSETS_DIR);
  const images = files.filter(f => f.match(/\.(png|jpe?g)$/i));
  
  console.log('File | Original | WebP | Savings');
  console.log('---|---|---|---');
  
  for (const file of images) {
    const filePath = path.join(ASSETS_DIR, file);
    const parsed = path.parse(file);
    const outPath = path.join(ASSETS_DIR, `${parsed.name}.webp`);
    
    const maxSize = RESIZE_RULES[file];
    
    let pipeline = sharp(filePath);
    
    if (maxSize) {
      pipeline = pipeline.resize({ width: maxSize, height: maxSize, fit: 'inside', withoutEnlargement: true });
    }
    
    const metadataBefore = await sharp(filePath).metadata();
    const sizeBefore = fs.statSync(filePath).size;
    
    await pipeline
      .webp({ quality: 80, alphaQuality: 100 })
      .toFile(outPath);
      
    const sizeAfter = fs.statSync(outPath).size;
    const metadataAfter = await sharp(outPath).metadata();
    
    const kbBefore = (sizeBefore / 1024).toFixed(1);
    const kbAfter = (sizeAfter / 1024).toFixed(1);
    const savings = (((sizeBefore - sizeAfter) / sizeBefore) * 100).toFixed(1);
    
    console.log(`${file} | ${kbBefore} KB (${metadataBefore.width}x${metadataBefore.height}) | ${kbAfter} KB (${metadataAfter.width}x${metadataAfter.height}) | ${savings}%`);
  }
}

optimizeImages().catch(err => {
  console.error(err);
  process.exit(1);
});
