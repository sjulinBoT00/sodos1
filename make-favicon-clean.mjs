import { Jimp } from 'jimp';

async function makeFaviconNoTagline() {
  const image = await Jimp.read('public/sodos-raw-logo.jpg');
  const w = image.bitmap.width;
  const h = image.bitmap.height;

  // 1. Crop only the "SODOS" letters, excluding the bottom tagline completely
  // The tagline is at the bottom ~20%
  const sodosLetters = image.clone().crop({
    x: Math.round(w * 0.20),
    y: Math.round(h * 0.15),
    w: Math.round(w * 0.60),
    h: Math.round(h * 0.60)
  });

  // 2. Make the light background transparent
  const lw = sodosLetters.bitmap.width;
  const lh = sodosLetters.bitmap.height;

  sodosLetters.scan(0, 0, lw, lh, (x, y, idx) => {
    const r = sodosLetters.bitmap.data[idx];
    const g = sodosLetters.bitmap.data[idx + 1];
    const b = sodosLetters.bitmap.data[idx + 2];

    // If light grey/white background
    if (r > 220 && g > 220 && b > 220) {
      sodosLetters.bitmap.data[idx + 3] = 0;
    } else if (r > 195 && g > 195 && b > 195) {
      const avg = (r + g + b) / 3;
      sodosLetters.bitmap.data[idx + 3] = Math.max(0, Math.min(255, (255 - avg) * 4));
    }
  });

  // Autocrop tightly to only the black & white SODOS letters
  sodosLetters.autocrop();

  // 3. Create crisp 64x64 favicon canvas
  const size = 64;
  const canvas = new Jimp({ width: size, height: size, color: 0x00000000 }); // Transparent background

  // Scale logo to fit 62x62 so it fills the tab icon space completely
  const targetW = 62;
  const targetH = Math.round((sodosLetters.bitmap.height / sodosLetters.bitmap.width) * targetW);
  sodosLetters.resize({ w: targetW, h: targetH });

  const xOffset = Math.round((size - sodosLetters.bitmap.width) / 2);
  const yOffset = Math.round((size - sodosLetters.bitmap.height) / 2);

  canvas.composite(sodosLetters, xOffset, yOffset);

  await canvas.write('public/favicon.png');
  console.log('Successfully generated public/favicon.png without tagline!');
}

makeFaviconNoTagline().catch(console.error);
