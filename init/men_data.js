const samplelisting = [
    {
        title: "L.L. Bean Wicked Good Slippers",
        description: "Soft and comfortable footwear for indoor use, often made of fabric or cushioned materials for relaxation. Shoes with a raised heel, typically worn for fashion or formal occasions. They can range from low to very high heels.",
        image: {
            filename: "listingimage",
            url: "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/WEEKENDER_22G_1246_WHITE_NAVY_01.webp?v=1727160627"
        },
        price: 2000,
        Rprice: 4000,
    },
    {
        title: "Red Wing Iron Ranger",
        description: "Specially designed for running, offering cushioning and stability for forward motion. They have shock-absorbing soles.",
        image: {
            filename: "listingimage",
            url: "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/OG-33_BLK-D.GRY_1.jpg?v=1724935762"
        },
        price: 1700,
        Rprice: 3400,
    },
    {
        title: "Valentino Rockstud Heels",
        description: "Built with high ankle support and cushioned soles to handle quick movements and jumps in the game.",
        image: {
            filename: "listingimage",
            url: "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/OG-31_OG-31_WHT_1.jpg?v=1723016906"
        },
        price: 2200,
        Rprice: 4400,
    },
    {
        title: "OG-27 White Men's Sneakers",
        description: "Designed for sports and physical activities, including running shoes, basketball shoes, and tennis shoes. They usually feature cushioned soles and breathable materials for comfort and support.",
        image: {
            filename: "listingimage",
            url: "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/OG-27_OG-27_WHT_1.jpg?v=1723016551"
        },
        price: 1200,
        Rprice: 2400,
    },
    {
        title: "Converse Chuck Taylor All-Star",
        description: "These include sneakers, loafers, and sandals that are comfortable for everyday use. They're versatile and come in various styles for informal settings.",
        image: {
            filename: "listingimage",
            url: "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/STAR_DUST_NAVY_REDG8_1.webp?v=1727167455"
        },
        price: 1400,
        Rprice: 2800,
    },
    {
        title: "Asics Gel-Kayano",
        description: "Formal shoes like oxfords, loafers, and pumps that are typically made of leather or synthetic materials, designed for professional or special occasions.",
        image: {
            filename: "listingimage",
            url: "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/VITALITY_22G-1227_OFF.WHT_D.GRN_2_2_11zon.jpg?v=1725603388"
        },
        price: 1000,
        Rprice: 2000,
    },
    {
        title: "Merrell Moab 2 (Hiking Shoes)",
        description: "Sturdy shoes that cover the ankle or higher, often used for rugged outdoor activities or colder weather. Examples include hiking boots, work boots, and fashion boots.",
        image: {
            filename: "listingimage",
            url: "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/OG-30_22G-1249_BLK_1.webp?v=1727167101"
        },
        price: 1200,
        Rprice: 2400,
    },
    {
        title: "Adidas Ultraboost 21 (Running Shoes)",
        description: "Experience ultimate comfort with these lightweight running shoes featuring responsive cushioning and a supportive fit, perfect for long runs.",
        image: {
            filename: "listingimage",
            url: "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/STARDUST_STARDUST_WHT-SKY_01.webp?v=1728536959"
        },
        price: 1500,
        Rprice: 2800
    },
    {
        title: "Nike Air Max 270 (Casual Sneakers)",
        description: "Stylish and comfortable sneakers with a large Air unit in the heel for cushioning and a sleek design that pairs well with any outfit.",
        image: {
            filename: "listingimage",
            url: "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/VESPER_VESPER_L.GRY-M.BLU_01.webp?v=1728533133"
        },
        price: 3000,
        Rprice: 4500
    },
    {
        title: "Puma RS-X (Retro Sneakers)",
        description: "Revive the '80s with these bold retro sneakers featuring a chunky silhouette and vibrant colors, designed for both style and comfort.",
        image: {
            filename: "listingimage",
            url: "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/COVE_COVE_D.NAVY-BLK_01.webp?v=1728536795"
        },
        price: 2500,
        Rprice: 3800
    },
    {
        title: "New Balance 990v5 (Lifestyle Shoes)",
        description: "Classic sneakers that blend heritage style with modern technology, offering unparalleled cushioning and stability for everyday wear.",
        image: {
            filename: "listingimage",
            url: "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/PREXTON_PREXTON_OLIVE-L.BEIGE_01.webp?v=1728533747"
        },
        price: 3200,
        Rprice: 4800
    },
    {
        title: "ASICS Gel-Kayano 27 (Stability Running Shoes)",
        description: "Designed for overpronators, these shoes provide excellent support and cushioning for a smooth and comfortable ride on any terrain.",
        image: {
            filename: "listingimage",
            url: "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/PREXTON_PREXTON_R.SLATE-V.ORG_01.webp?v=1728533649"
        },
        price: 2000,
        Rprice: 3600
    },
    {
        title: "Saucony Triumph 18 (Running Shoes)",
        description: "Maximum cushioning and a plush fit make these shoes ideal for long-distance runs, providing comfort and support every step of the way.",
        image: {
            filename: "listingimage",
            url: "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/PREXTON_PREXTON_NAVY-L.SKY_01.webp?v=1728533695"
        },
        price: 1700,
        Rprice: 3200
    },
    {
        title: "Reebok Classic Leather (Lifestyle Sneakers)",
        description: "Timeless style meets comfort in these classic leather sneakers, perfect for casual outings or everyday wear.",
        image: {
            filename: "listingimage",
            url: "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GREG_GREG_WHT-BLK_01.webp?v=1728533540"
        },
        price: 2200,
        Rprice: 3800
    },
    {
        title: "Hoka One One Bondi 7 (Maximum Cushioning Shoes)",
        description: "These shoes are designed for maximum comfort and support, making them perfect for long runs or all-day wear without sacrificing style.",
        image: {
            filename: "listingimage",
            url: "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/VESPER_VESPER_WHT-MILKYBLU_01.webp?v=1728533257"
        },
        price: 2500,
        Rprice: 4000
    },
    {
        title: "Pisco Kick One Bondi 8 (the baran of kickcove)",
        description: "These shoes are designed for maximum comfort and support, making them perfect for long runs or all-day wear without sacrificing style.",
        image: {
            filename: "listingimage",
            url: "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/OGL-09_OGL-09_WHT_L.PURPLE_3.jpg?v=1722667793"
        },
        price: 3500,
        Rprice: 4500
    },
    {
        title: "Classic Woolen House Sandal",
        description: "Stay warm with these classic woolen sandals, providing excellent insulation and a snug fit for chilly evenings.",
        image: {
            filename: "listingimage",
            url: "https://cdn.shopify.com/s/files/1/0607/6678/1671/products/GC-22106_GC-22106_BLK-SIL_2.jpg?v=1706522040"
        },
        price: 900,
        Rprice: 1500
    },
    {
        title: "Memory Foam Slide Sandals",
        description: "Enjoy luxurious comfort with memory foam cushioning that conforms to your feet, perfect for lounging around the house.",
        image: {
            filename: "listingimage",
            url: "https://cdn.shopify.com/s/files/1/0607/6678/1671/products/2GC-01-NAVY-MSTD_2.jpg?v=1697116377"  // URL is emptied
        },
        price: 1000,
        Rprice: 1600
    },
    {
        title: "Fluffy Faux Fur Sandals",
        description: "Step into comfort with these fluffy faux fur sandals that offer a stylish look and cozy feel for every season.",
        image: {
            filename: "listingimage",
            url: "https://cdn.shopify.com/s/files/1/0607/6678/1671/products/2GC-18_2GC-18_NAVY-ORG_2.jpg?v=1670326061"  // URL is emptied
        },
        price: 1200,
        Rprice: 1800
    },
    {
        title: "Waterproof Outdoor Sandals",
        description: "Perfect for both indoors and outdoors, these waterproof sandals feature a sturdy sole and quick-dry materials for all-day wear.",
        image: {
            filename: "listingimage",
            url: "https://cdn.shopify.com/s/files/1/0607/6678/1671/products/2GC-03-BEIGE-BRN_2.jpg?v=1670326176"  // URL is emptied
        },
        price: 1100,
        Rprice: 1700
    }
];

module.exports = { data: samplelisting };
