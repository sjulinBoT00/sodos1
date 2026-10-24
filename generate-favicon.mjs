import { Jimp } from 'jimp';

async function generateFavicon() {
  const logo = await Jimp.read('public/sodos-yellow-transparent.png');
  logo.autocrop();

  const size = 64;
  const favicon = new Jimp({ width: size, height: size, color: 0xedb102ff });

  logo.resize({ w: 58, h: Math.round((logo.bitmap.height / logo.bitmap.width) * 58) });

  const xOffset = Math.round((size - logo.bitmap.width) / 2);
  const yOffset = Math.round((size - logo.bitmap.height) / 2);

  favicon.composite(logo, xOffset, yOffset);

  await favicon.write('public/favicon.png');
  console.log('Successfully generated public/favicon.png');
}

generateFavicon().catch(console.error);
