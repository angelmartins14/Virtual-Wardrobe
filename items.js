/* ==========================================================================
   YOUR WARDROBE DATA
   ==========================================================================
   >>> WHERE TO INSERT YOUR IMAGES <<<

   1. Put your photos in the matching folder:
        images/tops/       images/bottoms/     images/dresses/
        images/corporate/  images/shoes/      images/accessories/
   2. Name each photo exactly like the `image` path on its line below
      (e.g. images/tops/top-01.jpg). Or edit the path to match your file.
   3. Refresh the page. Until a photo exists, the card shows a dashed
      blue outline with the exact file path it is waiting for.

   VIBES: every piece has a `vibes` list. Use any of "Casual", "Church",
   "Outing" (one, two or all three). Change them to match how YOU wear it.
   CATEGORY: use Tops, Bottoms, Dresses, Corporate, Shoes or Accessories.

   Tips: JPG/PNG/WebP all work. Portrait photos (4:5) on a plain
   background look best. Keep each under about 300 KB.
   ========================================================================== */

const WARDROBE = [
  // ---------- TOPS: images/tops/ ----------
  { id: 1,  name: "Cream knit top",        category: "Tops", color: "#f1e6d0", fav: true,  vibes: ["Casual", "Outing"], image: "images/tops/top-01.jpg" },
  { id: 6,  name: "White cotton tee",      category: "Tops", color: "#f4f4f6", vibes: ["Casual"], image: "images/tops/top-02.jpg" },
  { id: 7,  name: "Black ribbed tank",     category: "Tops", color: "#2a2a33", vibes: ["Casual", "Outing"], image: "images/tops/top-03.jpg" },
  { id: 8,  name: "Striped Breton top",    category: "Tops", color: "#9db4d8", vibes: ["Casual"], image: "images/tops/top-04.jpg" },
  { id: 9,  name: "Oversized grey hoodie", category: "Tops", color: "#a3a6b3", vibes: ["Casual"], image: "images/tops/top-05.jpg" },
  { id: 10, name: "Blush silk cami",       category: "Tops", color: "#f0c4cc", vibes: ["Outing"], image: "images/tops/top-06.jpg" },
  { id: 11, name: "Denim shirt",           category: "Tops", color: "#6f8fc9", vibes: ["Casual", "Outing"], image: "images/tops/top-07.jpg" },
  { id: 12, name: "Linen button-up",       category: "Tops", color: "#e6dcc6", vibes: ["Casual", "Church"], image: "images/tops/top-08.jpg" },
  { id: 13, name: "Cropped cardigan",      category: "Tops", color: "#b9a6d6", vibes: ["Casual", "Outing"], image: "images/tops/top-09.jpg" },
  { id: 14, name: "Camel turtleneck",      category: "Tops", color: "#c49a6c", vibes: ["Church", "Outing"], image: "images/tops/top-10.jpg" },
  { id: 15, name: "Puff-sleeve blouse",    category: "Tops", color: "#fbeee0", vibes: ["Church", "Outing"], image: "images/tops/top-11.jpg" },

  // ---------- BOTTOMS: images/bottoms/ ----------
  { id: 2,  name: "Wide-leg jeans",        category: "Bottoms", color: "#6f8fc9", vibes: ["Casual", "Outing"], image: "images/bottoms/bottom-01.jpg" },
  { id: 16, name: "Black skinny jeans",    category: "Bottoms", color: "#25252d", vibes: ["Casual", "Outing"], image: "images/bottoms/bottom-02.jpg" },
  { id: 17, name: "Pleated midi skirt",    category: "Bottoms", color: "#d9b8c4", vibes: ["Church", "Outing"], image: "images/bottoms/bottom-03.jpg" },
  { id: 18, name: "Khaki cargo pants",     category: "Bottoms", color: "#a89f74", vibes: ["Casual"], image: "images/bottoms/bottom-04.jpg" },
  { id: 19, name: "White linen trousers",  category: "Bottoms", color: "#f2efe8", vibes: ["Church", "Outing"], image: "images/bottoms/bottom-05.jpg" },
  { id: 20, name: "Denim mini skirt",      category: "Bottoms", color: "#7c9bd0", vibes: ["Casual", "Outing"], image: "images/bottoms/bottom-06.jpg" },
  { id: 21, name: "Grey joggers",          category: "Bottoms", color: "#9a9ca8", vibes: ["Casual"], image: "images/bottoms/bottom-07.jpg" },
  { id: 22, name: "Faux-leather leggings", category: "Bottoms", color: "#33323a", vibes: ["Outing"], image: "images/bottoms/bottom-08.jpg" },
  { id: 23, name: "Tailored trousers",     category: "Bottoms", color: "#3b3f55", vibes: ["Church", "Outing"], image: "images/bottoms/bottom-09.jpg" },
  { id: 24, name: "Floral maxi skirt",     category: "Bottoms", color: "#e59ab0", vibes: ["Church", "Outing"], image: "images/bottoms/bottom-10.jpg" },
  { id: 25, name: "Olive shorts",          category: "Bottoms", color: "#7d8760", vibes: ["Casual"], image: "images/bottoms/bottom-11.jpg" },

  // ---------- DRESSES: images/dresses/ ----------
  { id: 3,  name: "Green midi dress",      category: "Dresses", color: "#5f9c7a", fav: true, vibes: ["Church", "Outing"], image: "images/dresses/dress-01.jpg" },
  { id: 26, name: "Little black dress",    category: "Dresses", color: "#1f1f27", vibes: ["Outing"], image: "images/dresses/dress-02.jpg" },
  { id: 27, name: "Red wrap dress",        category: "Dresses", color: "#c93a4a", vibes: ["Outing"], image: "images/dresses/dress-03.jpg" },
  { id: 28, name: "Floral sundress",       category: "Dresses", color: "#f2b8a2", vibes: ["Casual", "Outing"], image: "images/dresses/dress-04.jpg" },
  { id: 29, name: "Satin slip dress",      category: "Dresses", color: "#c9b48c", vibes: ["Outing"], image: "images/dresses/dress-05.jpg" },
  { id: 30, name: "Denim shirt dress",     category: "Dresses", color: "#7a98cc", vibes: ["Casual"], image: "images/dresses/dress-06.jpg" },
  { id: 31, name: "Ruffle mini dress",     category: "Dresses", color: "#f6d36b", vibes: ["Outing"], image: "images/dresses/dress-07.jpg" },
  { id: 32, name: "Navy midi dress",       category: "Dresses", color: "#28345c", vibes: ["Church"], image: "images/dresses/dress-08.jpg" },
  { id: 33, name: "Knit sweater dress",    category: "Dresses", color: "#b8a99a", vibes: ["Casual", "Church"], image: "images/dresses/dress-09.jpg" },
  { id: 34, name: "Yellow maxi dress",     category: "Dresses", color: "#f0c531", vibes: ["Church", "Outing"], image: "images/dresses/dress-10.jpg" },
  { id: 35, name: "Ankara print dress",    category: "Dresses", color: "#e0703a", vibes: ["Church", "Outing"], image: "images/dresses/dress-11.jpg" },

  // ---------- CORPORATE: images/corporate/ ----------
  { id: 36, name: "Black tailored blazer", category: "Corporate", color: "#26262e", vibes: ["Church", "Outing"], image: "images/corporate/corp-01.jpg" },
  { id: 37, name: "Navy pencil skirt",     category: "Corporate", color: "#28345c", vibes: ["Church"], image: "images/corporate/corp-02.jpg" },
  { id: 38, name: "White poplin shirt",    category: "Corporate", color: "#f6f6f8", vibes: ["Church", "Casual"], image: "images/corporate/corp-03.jpg" },
  { id: 39, name: "Grey wide-leg trousers",category: "Corporate", color: "#8b8f9e", vibes: ["Church"], image: "images/corporate/corp-04.jpg" },
  { id: 40, name: "Camel long coat",       category: "Corporate", color: "#c49a6c", vibes: ["Outing", "Church"], image: "images/corporate/corp-05.jpg" },
  { id: 41, name: "Charcoal sheath dress", category: "Corporate", color: "#3d3f4b", vibes: ["Church", "Outing"], image: "images/corporate/corp-06.jpg" },
  { id: 42, name: "Cream silk blouse",     category: "Corporate", color: "#f1e6d0", vibes: ["Church"], image: "images/corporate/corp-07.jpg" },
  { id: 43, name: "Black block heels",     category: "Corporate", color: "#22222a", vibes: ["Church", "Outing"], image: "images/corporate/corp-08.jpg" },
  { id: 44, name: "Structured work tote",  category: "Corporate", color: "#6b4a3a", vibes: ["Casual", "Outing"], image: "images/corporate/corp-09.jpg" },
  { id: 45, name: "Burgundy blazer",       category: "Corporate", color: "#7a2a3d", vibes: ["Outing"], image: "images/corporate/corp-10.jpg" },

  // ---------- SHOES: images/shoes/ ----------
  { id: 4,  name: "White sneakers",        category: "Shoes", color: "#e8e8ef", vibes: ["Casual"], image: "images/shoes/shoe-01.jpg" },

  // ---------- ACCESSORIES: images/accessories/ ----------
  { id: 5,  name: "Woven tote",            category: "Accessories", color: "#d9a05b", vibes: ["Casual", "Outing"], image: "images/accessories/acc-01.jpg" },
];
