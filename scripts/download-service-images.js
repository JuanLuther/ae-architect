const https = require('https');
const fs = require('fs');
const path = require('path');

const serviceImages = {
  'service1.jpg': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', // Modern architectural design
  'service2.jpg': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6', // Interior design
  'service3.jpg': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e', // Project management
  'service4.jpg': 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf'  // Renovation
};

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(__dirname, '..', 'public', filename);
    console.log(`Downloading ${filename}...`);
    
    https.get(`${url}?w=1200&q=80`, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download ${filename}: ${res.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      res.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Successfully downloaded ${filename}`);
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => reject(err));
      });
    }).on('error', reject);
  });
};

async function downloadAllImages() {
  for (const [filename, url] of Object.entries(serviceImages)) {
    try {
      await downloadImage(url, filename);
    } catch (err) {
      console.error(`Error downloading ${filename}:`, err);
    }
  }
}

downloadAllImages().then(() => {
  console.log('All service images downloaded successfully!');
}).catch(console.error);
