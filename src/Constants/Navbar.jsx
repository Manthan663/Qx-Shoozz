import img1 from "../assets/col-4.webp";
import img2 from "../assets/col-5 (1).webp";
import img3 from "../assets/Boots.webp";
import img4 from "../assets/filler1.webp";


export const navbarItems = [
  {
    id: 1,
    label: "Home",
  },
  {
    id: 2,
    label: "Shop",
    submenu: [
      {
        id:0,
        title: "Layout",
        items: [
          "Filter Sidebar",
          "Filter Top",
          "Filter Drawer",
          "Without Filter",
          "5.Collection-2 columns",
          "6.Collection-3 columns",
          "7.Collection-4 columns",
        ],
      },
      {
        id:1,
        title: "Features", 
        items: [
          "Banner Image",
          "Banner No Image",
          "Banner Split",
          "Collection List",
          "Sub Collection",
          "Pagination",
          "Infinity",
          "Load More",
        ],
      },
      {
        id:2,
        title: "Hover Style",
        items: [
          "Hover Style 1",
          "Hover Style 2",
          "Hover Style 3",
          "Hover Style 4",
          "Hover Style 5",
          "Hover Style 6",
          "Hover Style 7",
          "Hover Style 8",
        ],
      },
    ],
    images: [
      {
        image: img1,
        Name: "Athletic Footwear",
        Products: "8 Products",
      },
      {
        image: img2,
        Name: "Boots for New Ocassion",
        Products: "8 Products",
      },
    ],
  },
  {
    id: 3,
    label: "Product",
    submenu: [
      {
        title: "Product Layouts",
        items: [
          "1.Thumbnails-Bottom",
          "2.Thumbnails-Left",
          "3.Thumbnails-Right",
          "4.Without-Thumbnails",
          "5.List-Stacked",
          "6.List-grid",
          "7.Collage-style1",
          "8.Collage-style2",
        ],
      },
      {
        title: "Product Type",
        items: [
          "Simple Product",
          "Variable Product",
          "With Video",
          "Sold Out-Coming",
        ],
      },
      {
        title: "List Featured 1",
        items: [
          "Sticky ATC",
          "Frequently Bought Together",
          "Count Down",
          "Cross Selling",
          "Upsell Popup",
          "Low Stock Alert",
          "Pickup Store",
        ],
      },
      {
        title: "List Featured 2",
        items: [
          "Dropdown Variant",
          "Swatch Variant Color",
          "Swatch Variant Image",
          "Variant Image Square",
          "Size Guide",
          "Description Accordion",
          "Description Tab Center",
        ],
      },
    ],
    images: [
      {
        image: img3,
        price: "$25.00",
        name: "WaterProof Hiking Boots",
        Type: "TrailGear",
      },
    ],
  },
  {
    id: 4,
    label: "Blog",
    submenu:[
      {
        title:"List Layout",
        items:["List Left Sidebar","List Right Sidebar","List Item Basic","List Item Overlay","List Item Box","List Item Classic","List Item classicbox"]
      },
      {
        title:"Grid Layout",
        items:["Grid Left Sidebar","Grid Right Sidebar","Grid Item Basic","Grid Item Overlay","Grid Item Box","Grid item classic"]
      },
      {
        title:"Article",
        items:["Tile in image","Tile after Image","Title before image","Left Sidebar","Right Sidebar","Title Center","Article Video"]
      }

    ],
    images: [
      {
        image: img4,
        price: "Enjoy a 50% Price Slash",
        name: "Revamp Your Wardrobe at Jaw-Dropping Prices.",
      },
    ],
    
  },
  
  {
    id: 5,
    label: "Pages",
    submenu:[
      {
        items:["About Us 1","About Us 2","About Us 3","Contact","Faqs","Lookbook","sizeguide","Wishlist"]
      }
    ]
  },
  {
    id: 6,
    label: "Buy Now",
    badge: "Sale",
  },
];
