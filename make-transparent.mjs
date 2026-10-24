import { Jimp } from 'jimp';

async function processLogo() {
  const image = await Jimp.read('public/sodos-logo.jpg');
  const width = image.bitmap.width;
  const height = image.bitmap.height;

  // Clone image for transparent logo
  const transparentLogo = image.clone();

  // Any pixel close to the light background (#eceef2 or > 230 RGB) made transparent
  transparentLogo.scan(0, 0, width, height, (x, y, idx) => {
    const red = transparentLogo.bitmap.data[idx + 0];
    const green = transparentLogo.bitmap.data[idx + 1];
    const blue = transparentLogo.bitmap.data[idx + 2];

    // If light/white background
    if (red > 225 && green > 225 && blue > 225) {
      transparentLogo.bitmap.data[idx + 3] = 0; // Alpha 0
    } else if (red > 200 && green > 200 && blue > 200) {
      // Soft antialiasing transition
      const avg = (red + green + blue) / 3;
      const alpha = Math.max(0, Math.min(255, (255 - avg) * 3));
      transparentLogo.bitmap.data[idx + 3] = alpha;
    }
  });

  // Autocrop to remove excessive padding so logo can be bigger
  transparentLogo.autocrop();

  await transparentLogo.write('public/sodos-logo-transparent.png');
  console.log('Successfully generated public/sodos-logo-transparent.png');
}

processLogo().catch(console.error);
