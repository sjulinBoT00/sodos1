import { Jimp } from 'jimp';

async function cropCategories() {
  // 1. First image has 4 tiles (2x2 grid)
  const img1 = await Jimp.read('public/cat-grid-1.jpg');
  const w1 = img1.bitmap.width;
  const h1 = img1.bitmap.height;

  // Tile 1: Top-left -> Men's Shirts (roughly y: 0.01 to 0.42, x: 0.04 to 0.48)
  const shirts = img1.clone().crop({
    x: Math.round(w1 * 0.04),
    y: Math.round(h1 * 0.01),
    w: Math.round(w1 * 0.44),
    h: Math.round(h1 * 0.40)
  });
  await shirts.write('public/cat-mens-shirts.jpg');

  // Tile 2: Top-right -> T-Shirts
  const tshirts = img1.clone().crop({
    x: Math.round(w1 * 0.52),
    y: Math.round(h1 * 0.01),
    w: Math.round(w1 * 0.44),
    h: Math.round(h1 * 0.40)
  });
  await tshirts.write('public/cat-tshirts.jpg');

  // Tile 3: Bottom-left -> Pants & Trousers
  const pants = img1.clone().crop({
    x: Math.round(w1 * 0.04),
    y: Math.round(h1 * 0.50),
    w: Math.round(w1 * 0.44),
    h: Math.round(h1 * 0.40)
  });
  await pants.write('public/cat-pants.jpg');

  // Tile 4: Bottom-right -> New Arrivals
  const newArrivals = img1.clone().crop({
    x: Math.round(w1 * 0.52),
    y: Math.round(h1 * 0.50),
    w: Math.round(w1 * 0.44),
    h: Math.round(h1 * 0.40)
  });
  await newArrivals.write('public/cat-new-arrivals.jpg');

  // 2. Second image has 2 tiles (1x2 grid)
  const img2 = await Jimp.read('public/cat-grid-2.jpg');
  const w2 = img2.bitmap.width;
  const h2 = img2.bitmap.height;

  // Boxers (Left tile)
  const boxers = img2.clone().crop({
    x: Math.round(w2 * 0.04),
    y: Math.round(h2 * 0.04),
    w: Math.round(w2 * 0.44),
    h: Math.round(h2 * 0.72)
  });
  await boxers.write('public/cat-boxers.jpg');

  // Trunks (Right tile)
  const trunks = img2.clone().crop({
    x: Math.round(w2 * 0.52),
    y: Math.round(h2 * 0.04),
    w: Math.round(w2 * 0.44),
    h: Math.round(h2 * 0.72)
  });
  await trunks.write('public/cat-trunks.jpg');

  console.log('Successfully cropped all 6 categories!');
}

cropCategories().catch(console.error);
