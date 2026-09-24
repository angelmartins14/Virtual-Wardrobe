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
   "Outing", "Corporate" (one or more). Change them to match how YOU wear it.
   CATEGORY: use Tops, Bottoms, Dresses, Corporate, Shoes or Accessories.

   Tips: JPG/PNG/WebP all work. Portrait photos (4:5) on a plain
   background look best. Keep each under about 300 KB.
   ========================================================================== */

const WARDROBE = [
  // ---------- TOPS: images/tops/ ----------
  { id: 1,  name: "Cream corporate top",        category: "Tops", color: "#f1e6d0", fav: true,  vibes: [ "Outing" , "Corporate"], image: "images/tops/top-01.jpeg" },
  { id: 6,  name: "Ash Round Neck",      category: "Tops", color: "#f4f4f6", vibes: ["Casual"], image: "images/tops/top-02.jpeg" },
  { id: 7,  name: "Brown basic top",     category: "Tops", color: "#2a2a33", vibes: ["Casual", "Outing"], image: "images/tops/top-03.jpeg" },
  { id: 8,  name: "Flowery top",    category: "Tops", color: "#9db4d8", vibes: ["Casual" , "Outing"], image: "images/tops/top-04.jpeg" },
  { id: 9,  name: "White top", category: "Tops", color: "#a3a6b3", vibes: ["Casual"], image: "images/tops/top-05.jpeg" },
  { id: 10, name: "Sky blue shirt",       category: "Tops", color: "#f0c4cc", vibes: ["Outing" , "Corporate"], image: "images/tops/top-06.jpeg" },
  { id: 11, name: "Black top",           category: "Tops", color: "#6f8fc9", vibes: ["Casual"], image: "images/tops/top-07.jpeg" },
  { id: 12, name: "Black jacket top",       category: "Tops", color: "#e6dcc6", vibes: [ "Casual", "Church"], image: "images/tops/top-08.jpeg" },
  { id: 13, name: "Blue blazer",      category: "Tops", color: "#b9a6d6", vibes: ["Corporate", "Outing"], image: "images/tops/top-09.jpeg" },
  { id: 14, name: "white basic top",      category: "Tops", color: "#c49a6c", vibes: ["Casual", "Church", "Outing"], image: "images/tops/top-10.jpeg" },
  { id: 15, name: "Brown cropped shirt",    category: "Tops", color: "#fbeee0", vibes: [ "Church", "Outing"], image: "images/tops/top-11.jpeg" },
  { id: 86, name: "White&black top",    category: "Tops", color: "#fbeee0", vibes: ["Casual"], image: "images/tops/top-12.jpeg" },
  { id: 89, name: "Peach shirt ",    category: "Tops", color: "#fbeee0", vibes: ["Corporate", "Church", "Outing"], image: "images/tops/top-13.jpeg" },
  { id: 80, name: "Blue v-neck cardigan top",    category: "Tops", color: "#fbeee0", vibes: ["Church", "Outing"], image: "images/tops/top-14.jpeg" },
  { id: 81, name: "White flared top",    category: "Tops", color: "#fbeee0", vibes: ["Casual"], image: "images/tops/top-15.jpeg" },
  { id: 82, name: "White&green round neck",    category: "Tops", color: "#fbeee0", vibes: ["Casual"], image: "images/tops/top-16.jpeg" },
  { id: 83, name: "White round neck",    category: "Tops", color: "#fbeee0", vibes: ["Corporate", "Church", "Outing"], image: "images/tops/top-17.jpeg" },
  { id: 84, name: "White shirt",    category: "Tops", color: "#fbeee0", vibes: ["Corporate", "Church", "Outing"], image: "images/tops/top-18.jpeg" },


  // ---------- BOTTOMS: images/bottoms/ ----------
  { id: 2,  name: "Flared skirt jeans",        category: "Bottoms", color: "#6f8fc9", vibes: ["Casual", "Outing"], image: "images/bottoms/bottom-01.jpeg" },
  { id: 16, name: "Blue baggy jeans",    category: "Bottoms", color: "#25252d", vibes: ["Casual", "Outing"], image: "images/bottoms/bottom-02.jpeg" },
  { id: 17, name: "Brown straight skirt",    category: "Bottoms", color: "#d9b8c4", vibes: ["Casual"], image: "images/bottoms/bottom-03.jpeg" },
  { id: 18, name: "Blue  pants",     category: "Bottoms", color: "#a89f74", vibes: ["Corporate", "Outing"], image: "images/bottoms/bottom-04.jpeg" },
  { id: 19, name: "Blue boyfriend jeans",  category: "Bottoms", color: "#f2efe8", vibes: [ "Church", "Outing"], image: "images/bottoms/bottom-05.jpeg" },
  { id: 20, name: "Ankara cargo  trouser",      category: "Bottoms", color: "#7c9bd0", vibes: ["Casual", "Outing"], image: "images/bottoms/bottom-06.jpeg" },
  { id: 21, name: "Brown jeans",          category: "Bottoms", color: "#9a9ca8", vibes: ["Casual" , "Outing"], image: "images/bottoms/bottom-07.jpeg" },
  { id: 22, name: "Black slik skirt ", category: "Bottoms", color: "#33323a", vibes: ["Outing", "church"], image: "images/bottoms/bottom-08.jpeg" },
  { id: 23, name: "Red plited skirt",     category: "Bottoms", color: "#3b3f55", vibes: ["Corporate", "Church"], image: "images/bottoms/bottom-09.jpeg" },
  { id: 24, name: "Black pants ",     category: "Bottoms", color: "#e59ab0", vibes: ["Corporate", "Outing"], image: "images/bottoms/bottom-10.jpeg" },
  { id: 95, name: "Black plited skirt",          category: "Bottoms", color: "#7d8760", vibes: ["Casual" , "Corporate"], image: "images/bottoms/bottom-11.jpeg" },
  { id: 96, name: "Ash pants",          category: "Bottoms", color: "#7d8760", vibes: ["Corporate", "outing"], image: "images/bottoms/bottom-12.jpeg" },
  { id: 97, name: "Ash skirt",          category: "Bottoms", color: "#7d8760", vibes: ["Casual"], image: "images/bottoms/bottom-13.jpeg" },
  { id: 98, name: "Blue jeans skirt",          category: "Bottoms", color: "#7d8760", vibes: ["Casual"], image: "images/bottoms/bottom-14.jpeg" },


  // ---------- DRESSES: images/dresses/ ----------
  { id: 3,  name: "Brown bodycone dress",      category: "Dresses", color: "#5f9c7a", fav: true, vibes: ["Church", "Outing"], image: "images/dresses/dress-01.jpeg" },
  { id: 26, name: "Red flared dress",    category: "Dresses", color: "#1f1f27", vibes: ["Corporate", "Outing" , "church"], image: "images/dresses/dress-02.jpeg" },
  { id: 27, name: "Blue corporate dress",        category: "Dresses", color: "#c93a4a", vibes: ["Outing" , "Corporate"], image: "images/dresses/dress-03.jpeg" },
  { id: 28, name: "Red sundress",       category: "Dresses", color: "#f2b8a2", vibes: ["Church", "Outing"], image: "images/dresses/dress-04.jpeg" },
  { id: 29, name: "Ankara green dress",      category: "Dresses", color: "#c9b48c", vibes: ["Casual" , "Church"], image: "images/dresses/dress-05.jpeg" },
  { id: 30, name: "Floral brown dress",     category: "Dresses", color: "#7a98cc", vibes: ["Casual"], image: "images/dresses/dress-06.jpeg" },
  { id: 31, name: "Brown maiyaki dress",     category: "Dresses", color: "#f6d36b", vibes: ["Outing" , "Corporate" , "Church"], image: "images/dresses/dress-07.jpeg" },
  { id: 32, name: "Ankara dress",       category: "Dresses", color: "#28345c", vibes: ["Outing", "Church" , ""], image: "images/dresses/dress-08.jpeg" },
  
  // ---------- CORPORATE: images/corporate/ ----------
  { id: 36, name: "outfit 1", category: "Corporate", color: "#26262e", vibes: ["Corporate", "Church", "Outing"], image: "images/corporate/corp-01.jpeg" },
  { id: 37, name: " outfit 2",     category: "Corporate", color: "#28345c", vibes: ["Corporate", "Church"], image: "images/corporate/corp-02.jpeg" },
  { id: 38, name: "outfit 3",    category: "Corporate", color: "#f6f6f8", vibes: ["Corporate", "Church", "Casual"], image: "images/corporate/corp-03.jpeg" },
  { id: 39, name: " outfit 4",category: "Corporate", color: "#8b8f9e", vibes: ["Corporate", "Church"], image: "images/corporate/corp-04.jpeg" },
  { id: 40, name: "outfit 5",       category: "Corporate", color: "#c49a6c", vibes: ["Corporate", "Outing", "Church"], image: "images/corporate/corp-05.jpeg" },
  { id: 41, name: "outfit 6", category: "Corporate", color: "#3d3f4b", vibes: ["Corporate", "Church", "Outing"], image: "images/corporate/corp-06.jpeg" },
  { id: 42, name: "outfit 7",     category: "Corporate", color: "#f1e6d0", vibes: ["Corporate", "Church"], image: "images/corporate/corp-07.jpeg" },
  { id: 43, name: "outfit 8",     category: "Corporate", color: "#22222a", vibes: ["Corporate", "Church", "Outing"], image: "images/corporate/corp-08.jpeg" },
  { id: 44, name: "outfit 9",  category: "Corporate", color: "#6b4a3a", vibes: ["Corporate", "Casual", "Outing"], image: "images/corporate/corp-09.jpeg" },
  { id: 45, name: "outfit 10",       category: "Corporate", color: "#7a2a3d", vibes: ["Corporate", "Outing"], image: "images/corporate/corp-10.jpeg" },
  { id: 46, name: "outfit 11",       category: "Corporate", color: "#7a2a3d", vibes: ["Corporate", "Outing"], image: "images/corporate/corp-11.jpeg" },


  // ---------- SHOES: images/shoes/ ----------
  { id: 4,  name: "Black heel",        category: "Shoes", color: "#e8e8ef", vibes: ["Outing"], image: "images/shoes/shoe-01.jpeg" },
  { id: 74,  name: "Black flat loafers",        category: "Shoes", color: "#e8e8ef", vibes: ["Corporate"], image: "images/shoes/shoe-02.jpeg" },
  { id: 75,  name: "Gold heel",        category: "Shoes", color: "#e8e8ef", vibes: ["Outing"], image: "images/shoes/shoe-03.jpeg" },
  { id: 76,  name: "Brown loafers",        category: "Shoes", color: "#e8e8ef", vibes: ["Corporate"], image: "images/shoes/shoe-04.jpeg" },
  { id: 77,  name: "black big loafers",        category: "Shoes", color: "#e8e8ef", vibes: ["Corporate"], image: "images/shoes/shoe-05.jpeg" },
  { id: 78,  name: "Black wedge heels",        category: "Shoes", color: "#e8e8ef", vibes: [ "Church", "outing"], image: "images/shoes/shoe-06.jpeg" },
  { id: 79,  name: "Brown jeans slippers",        category: "Shoes", color: "#e8e8ef", vibes: ["Casual"], image: "images/shoes/shoe-07.jpeg" },


  // ---------- ACCESSORIES: images/accessories/ ----------
  
  { id: 5,  name: "Beige bag",            category: "Accessories", color: "#d9a05b", vibes: ["Casual", "Outing"], image: "images/accessories/acc-01.jpeg" },
  { id: 56,  name: "Black small bag",            category: "Accessories", color: "#d9a05b", vibes: ["Casual", "Outing"], image: "images/accessories/acc-02.jpeg" },
  { id: 57,  name: "White pause",            category: "Accessories", color: "#d9a05b", vibes: ["Casual", ""], image: "images/accessories/acc-03.jpeg" },
  { id: 58,  name: "Black tote",            category: "Accessories", color: "#d9a05b", vibes: ["Casual", "Outing"], image: "images/accessories/acc-04.jpeg" },
  { id: 59,  name: "Orange tote",            category: "Accessories", color: "#d9a05b", vibes: ["Casual", "Outing"], image: "images/accessories/acc-05.jpeg" },
  { id: 50,  name: "brown tote",            category: "Accessories", color: "#d9a05b", vibes: ["Casual", "Outing"], image: "images/accessories/acc-06.jpeg" },


];