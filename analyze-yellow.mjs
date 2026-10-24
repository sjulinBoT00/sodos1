import { Jimp } from 'jimp';

async function processYellowTheme() {
  const image = await Jimp.read('public/sodos-yellow-theme.jpg');
  const width = image.bitmap.width;
  const height = image.bitmap.height;

  // 1. Sample background color around top left corner
  let rSum = 0, gSum = 0, bSum = 0, count = 0;
  for (let x = 10; x < 50; x++) {
    for (let y = 10; y < 50; y++) {
      const idx = (y * width + x) * 4;
      rSum += image.bitmap.data[idx];
      gSum += image.bitmap.data[idx + 1];
      bSum += image.bitmap.data[idx + 2];
      count++;
    }
  }
  const avgR = Math.round(rSum / count);
  const avgG = Math.round(gSum / count);
  const avgB = Math.round(bSum / count);
  console.log(`Yellow background RGB: rgb(${avgR}, ${avgG}, ${avgB}), hex: #${avgR.toString(16)}${avgG.toString(16)}${avgB.toString(16)}`);

  // 2. Extract transparent logo from this high quality yellow image
  const transparent = image.clone();
  transparent.scan(0, 0, width, height, (x, y, idx) => {
    const r = transparent.bitmap.data[idx + 0];
    const g = transparent.bitmap.data[idx + 1];
    const b = transparent.bitmap.data[idx + 2];

    // Check if yellow background (High R, moderate/high G, low B)
    if (r > 180 && g > 130 && b < 80) {
      transparent.bitmap.data[idx + 3] = 0; // Alpha 0
    }
  });

  transparent.autocrop();
  await transparent.write('public/sodos-yellow-transparent.png');
  console.log('Saved transparent logo: public/sodos-yellow-transparent.png');
}

processYellowTheme().catch(console.error);
