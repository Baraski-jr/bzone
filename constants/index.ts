export const navLinks = [
    {
        'label': 'home',
        'url': '/',
    },
    {
        'label': 'Products',
        'url': '/products/shoes',
    },
];

export const shoeSlides = [
    {
        'id':0,       
        'name': 'React Infinity',
        'image': '/hero/slider-img2.webp',
        'color': 'gray',
        'price': {
            'originalPrice': 1200,
            'discountPrice': 999,
        },
    },
    {
        'id':1,       
        'name': 'Airmax Racing',
        'image': '/hero/slider-img3.webp',
        'color': 'blue-500',
        'price': {
            'originalPrice': 1000,
            'discountPrice': 799,
        },    
    },
    {
        'id':2,       
        'name': 'Running Airmax',
        'image': '/hero/slider-img1.webp',
        'color': 'orange-500',

        'price': {
            'originalPrice': 1100,
            'discountPrice': 899,
        },
    },

];

export const products = [
    {
        'id': 0,
        'title': 'Nike Air Force 1',
        'price': 90.00,
        'images': [
            '/products/a1.png',
            '/products/a2.png',
        ],
        'sizes': [
            {'name': 'm', 'items': 3}, 
            {'name': 'l', 'items': 2},            
        ],
        'colours': [ 
            {'name': 'green', 'items': 3},
            {'name': 'gray', 'items': 0}, 
            {'name': 'red', 'items': 3}
        ],
        'description': 'Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual day out or a relaxing evening in, this hoodie is a versatile addition to any wardrobe.',
        'inventory': 7,
        'category': 'men',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': true
        
    },
    {
        'id': 1,
        'title': 'Adidas Ultraboost 21',
        'price': 180.00,
        'images': [
            '/products/b1.png',
            '/products/b2.png',
        ],
        'sizes': [ 
           
            {'name': 's', 'items': 4},
            {'name': 'm', 'items': 3}, 
            {'name': 'l', 'items': 2},            
        ],
        'colours': [ 
            {'name': 'red', 'items': 3},
            {'name': 'gray', 'items': 0}, 
            {'name': 'green', 'items': 3}
        ],
        'description': 'Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual day out or a relaxing evening in, this hoodie is a versatile addition to any wardrobe.',
        'inventory': 5,
        'category': 'men',
        'isNew': false,
        'isFeatured': true,
        'isBestSeller': true
    },
    {
        'id': 2,
        'title': 'Puma RSX',
        'price': 110.00,
        'images': [
            '/products/c1.png',
            '/products/c2.png',
        ],
        'description': 'Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual day out or a relaxing evening in, this hoodie is a versatile addition to any wardrobe.',
        'sizes': [ 
           
            {'name': 's', 'items': 4},
            {'name': 'm', 'items': 3}, 
            {'name': 'l', 'items': 2},            
        ],
        'colours': [ 
            {'name': 'red', 'items': 3},
            {'name': 'gray', 'items': 0}, 
            {'name': 'green', 'items': 3}
        ],
        'inventory': 5,
        'category': 'men',
        'isNew': false,
        'isFeatured': true,
        'isBestSeller': true
    },
    {
        'id': 3,
        'title': 'Jordan 1 Retro High',
        'price': 170.00,
        'images': [
            '/products/d1.png',
            '/products/d2.png',
        ],
        'description': 'Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual day out or a relaxing evening in, this hoodie is a versatile addition to any wardrobe.',
        'sizes': [ 
           
            {'name': 's', 'items': 4},
            {'name': 'm', 'items': 3}, 
            {'name': 'l', 'items': 2},            
        ],
        'colours': [ 
            {'name': 'red', 'items': 3},
            {'name': 'gray', 'items': 0}, 
            {'name': 'green', 'items': 3}
        ],
        'inventory': 7,
        'category': 'men',
        'isNew': false,
        'isFeatured': true,
        'isBestSeller': true
    },
    {
        'id': 5,
        'title': 'New Balance 990v5',
        'price': 175.00,
        'images': [
            '/products/f1.png',
            '/products/f2.png',
        ],
        'description': 'Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual day out or a relaxing evening in, this hoodie is a versatile addition to any wardrobe.',
        'sizes': [ 
           
            {'name': 's', 'items': 4},
            {'name': 'm', 'items': 3}, 
            {'name': 'l', 'items': 2},            
        ],
        'colours': [ 
            {'name': 'red', 'items': 3},
            {'name': 'gray', 'items': 0}, 
            {'name': 'green', 'items': 3}
        ],

        'inventory': 7,
        'category': 'women',
        'isNew': false,
        'isFeatured': true,
        'isBestSeller': true

    },
    {
        'id': 6,
        'title': 'Converse Chuck Taylor All Star',
        'price': 0.00,
        'images': [
            '/products/g1.png',
            '/products/g2.png',
        ],
        'description': 'Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual day out or a relaxing evening in, this hoodie is a versatile addition to any wardrobe.',
        'sizes': [ 
           
            {'name': 's', 'items': 4},
            {'name': 'm', 'items': 3}, 
            {'name': 'l', 'items': 2},            
        ],
        'colours': [ 
            {'name': 'red', 'items': 3},
            {'name': 'gray', 'items': 0}, 
            {'name': 'green', 'items': 3}
        ],

        'inventory': 0,
        'category': 'women',
        'isNew': false,
        'isFeatured': true,
        'isBestSeller': true

    },
    {
        'id': 7,
        'title': 'Vans Old Skool',
        'price': 60.00,

        'images': [
            '/products/h1.png',
            '/products/h2.png',
        ],
        'description': 'Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual day out or a relaxing evening in, this hoodie is a versatile addition to any wardrobe.',
        'sizes': [ 
           
            {'name': 's', 'items': 4},
            {'name': 'm', 'items': 3}, 
            {'name': 'l', 'items': 2},            
        ],
        'colours': [ 
            {'name': 'red', 'items': 3},
            {'name': 'gray', 'items': 0}, 
            {'name': 'green', 'items': 3}
        ],

        'inventory': 5,
        'category': 'women',
        'isNew': false,
        'isFeatured': true,
        'isBestSeller': true
    },
    {
        'id': 8,
        'title': 'Reebok Club C 85',
        'price': 70.00,
        'images': [
            '/products/e1.png',
            '/products/e2.png',
        ],
        'description': 'Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual day out or a relaxing evening in, this hoodie is a versatile addition to any wardrobe.',
        'sizes': [ 
           
            {'name': 's', 'items': 4},
            {'name': 'm', 'items': 3}, 
            {'name': 'l', 'items': 2},            
        ],
        'colours': [ 
            {'name': 'red', 'items': 3},
            {'name': 'gray', 'items': 0}, 
            {'name': 'green', 'items': 3}
        ],

        'inventory': 0,
        'category': 'men',
        'isNew': false,
        'isFeatured': true,
        'isBestSeller': true
    },
    {
        'id': 9,
        'title': 'Asics Gel-Kayano 27',
        'price': 160.00,
        'images': [
            '/products/j2.png',
            '/products/j1.png',
        ],
        'description': 'Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual day out or a relaxing evening in, this hoodie is a versatile addition to any wardrobe.',
        'sizes': [ 
           
            {'name': 's', 'items': 4},
            {'name': 'm', 'items': 3}, 
            {'name': 'l', 'items': 2},            
        ],
        'colours': [ 
            {'name': 'red', 'items': 3},
            {'name': 'gray', 'items': 0}, 
            {'name': 'green', 'items': 3}
        ],

        'inventory': 7,
        'category': 'men',
        'isNew': false,
        'isFeatured': true,
        'isBestSeller': true
    },
    {
        'id': 10,
        'title': 'Saucony Shadow 6000',
        'price': 100.00,
        'images': [
            '/products/k2.png',
            '/products/k1.png',
        ],
        'description': 'Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual day out or a relaxing evening in, this hoodie is a versatile addition to any wardrobe.',
        'sizes': [ 
           
            {'name': 's', 'items': 4},
            {'name': 'm', 'items': 3}, 
            {'name': 'l', 'items': 2},            
        ],
        'colours': [ 
            {'name': 'red', 'items': 3},
            {'name': 'gray', 'items': 0}, 
            {'name': 'green', 'items': 3} 
        ],

        'inventory': 5,
        'category': 'men',
        'isNew': false,
        'isFeatured': true,
        'isBestSeller': true
    },
    {
        'id': 11,
        'title': 'Air Jordn 5 Retro',
        'price': 999.99,
        'images': [
            '/products/racer-tr23-shoes__1_-removebg-preview.png',
            '/products/racer-tr23-shoes-removebg-preview.png',
        ],
        'description': 'Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual day out or a relaxing evening in, this hoodie is a versatile addition to any wardrobe.',
        'sizes': [ 
           
            {'name': 'm', 'items': 3}, 
        ],
        'colours': [ 
            {'name': 'black', 'items': 3},
        ],

        'inventory': 7,
        'category': 'men',
        'isNew': false,
        'isFeatured': true,
        'isBestSeller': true
    },
    {
        'id': 13,
        'title': 'Adidas NMD R1',
        'price': 140.00,
        'images': [
            '/products/i1.png',
            '/products/i2.png',
            '/products/e1.png',
        ],
        'description': 'Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual day out or a relaxing evening in, this hoodie is a versatile addition to any wardrobe.',
        'sizes': [ 
           
            {'name': 's', 'items': 4},
            {'name': 'm', 'items': 3}, 
            {'name': 'l', 'items': 2},            
        ],
        'colours': [ 
            {'name': 'red', 'items': 3},
            {'name': 'gray', 'items': 0}, 
            {'name': 'green', 'items': 3}
        ],

        'inventory': 5,
        'category': 'men',
        'isNew': false,
        'isFeatured': true,
        'isBestSeller': true
    },
    {
        'id': 14,
        'title': 'Under Armour HOVR Phantom 2',
        'price': 140.00,
        'images': [
            '/products/handball-spezial-shoes-kids (1).jpg',
            '/products/handball-spezial-shoes-kids.jpg',
        ],
        'description': 'Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual day out or a relaxing evening in, this hoodie is a versatile addition to any wardrobe.',
        'sizes': [ 
           
            {'name': 's', 'items': 4},
            {'name': 'm', 'items': 3}, 
            {'name': 'l', 'items': 2},            
        ],
        'colours': [ 
            {'name': 'red', 'items': 3},
            {'name': 'gray', 'items': 0}, 
            {'name': 'green', 'items': 3}
        ],

        'inventory': 0,
        'category': 'men',
        'isNew': false,
        'isFeatured': true,
        'isBestSeller': true
    },
    
    {
        'id': 15,
        'title': 'Hoka One One Clifton 8',
        'price': 130.00,
        'images': [
            '/products/a1.png',
            '/products/a2.png',
        ],
        'description': 'Experience plush cushioning and smooth rides with the Hoka Clifton 8, perfect for running and all-day wear. Designed for ultimate comfort and performance.',
        'sizes': [ 
            {'name': 's', 'items': 2},
            {'name': 'm', 'items': 5}, 
            {'name': 'l', 'items': 4},            
        ],
        'colours': [ 
            {'name': 'blue', 'items': 3},
            {'name': 'black', 'items': 2}, 
            {'name': 'white', 'items': 4}
        ],
        'inventory': 6,
        'category': 'men',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 16,
        'title': 'Brooks Ghost 14',
        'price': 140.00,
        'images': [
            '/products/d1.png',
            '/products/d2.png',
        ],
        'description': 'Smooth, balanced, and reliable, the Brooks Ghost 14 is the ultimate go-to running shoe for neutral runners seeking cushioning and flexibility.',
        'sizes': [ 
            {'name': 'm', 'items': 6}, 
            {'name': 'l', 'items': 5},            
        ],
        'colours': [ 
            {'name': 'gray', 'items': 3},
            {'name': 'black', 'items': 4}, 
            {'name': 'green', 'items': 2}
        ],
        'inventory': 10,
        'category': 'women',
        'isNew': false,
        'isFeatured': true,
        'isBestSeller': true
    },
    {
        'id': 17,
        'title': 'Mizuno Wave Rider 26',
        'price': 140.00,
        'images': [
            '/products/c1.png',
            '/products/c2.png',
        ],
        'description': 'The Mizuno Wave Rider 26 offers a responsive and dynamic ride, ideal for daily training or long-distance runs. Durable and sleek design.',
        'sizes': [ 
            {'name': 's', 'items': 3},
            {'name': 'm', 'items': 5}, 
            {'name': 'l', 'items': 4},            
        ],
        'colours': [ 
            {'name': 'navy', 'items': 3},
            {'name': 'gray', 'items': 2}, 
            {'name': 'red', 'items': 3}
        ],
        'inventory': 8,
        'category': 'women',
        'isNew': true,
        'isFeatured': true,
        'isBestSeller': false
    },
    {
        'id': 18,
        'title': 'Skechers Go Walk 6',
        'price': 75.00,
        'images': [
            '/products/f1.png',
            '/products/f2.png',
        ],
        'description': 'The ultimate walking shoe for comfort and support, the Skechers Go Walk 6 is lightweight and versatile, designed for active lifestyles.',
        'sizes': [ 
            {'name': 'm', 'items': 3}, 
            {'name': 'l', 'items': 6},            
        ],
        'colours': [ 
            {'name': 'black', 'items': 5},
            {'name': 'white', 'items': 4}, 
        ],
        'inventory': 9,
        'category': 'men',
        'isNew': false,
        'isFeatured': false,
        'isBestSeller': true
    },
    {
        'id': 19,
        'title': 'Nike ZoomX Vaporfly Next 3',
        'price': 250.00,
        'images': [
            '/products/e1.png',
            '/products/e2.png',
        ],
        'description': 'Elevate your race-day performance with the Nike Vaporfly Next% 3, featuring cutting-edge technology for maximum speed and energy return.',
        'sizes': [ 
            {'name': 's', 'items': 2},
            {'name': 'm', 'items': 4}, 
            {'name': 'l', 'items': 2},            
        ],
        'colours': [ 
            {'name': 'neon green', 'items': 2},
            {'name': 'white', 'items': 3}, 
        ],
        'inventory': 5,
        'category': 'men',
        'isNew': true,
        'isFeatured': true,
        'isBestSeller': true
    },
    {
        'id': 34,
        'title': 'cadiant fyw',
        'price': 250.00,
        'images': [
            '/products/cadiant-fyw-shoes__1_-removebg-preview.png',
            '/products/cadiant-fyw-shoes-removebg-preview.png',
        ],
        'description': 'Elevate your race-day performance with the Nike Vaporfly Next% 3, featuring cutting-edge technology for maximum speed and energy return.',
        'sizes': [ 
            {'name': 'm', 'items': 4}, 
        ],
        'colours': [ 
            {'name': 'white', 'items': 3}, 
        ],
        'inventory': 5,
        'category': 'kid',
        'isNew': true,
        'isFeatured': true,
        'isBestSeller': true
    },
    // added
    {
        'id': 20,
        'title': 'adidas x disney mickey',
        'price': 170.00,
        'images': [
            '/products/adidas-x-disney-mickey-and-friends-grand-court-mid-shoes-Kids (1).jpg',
            '/products/adidas-x-disney-mickey-and-friends-grand-court-mid-shoes-kids.jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},
            {'name': 'm', 'items': 4}, 
        ],
        'colours': [ 
            {'name': 'white', 'items': 3}, 
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 21,
        'title': 'On Cloudmonster',
        'price': 170.00,
        'images': [
            '/products/adidas-x-disney-sulley-grand-court-2.0-shoes-kids (1).jpg',
            '/products/adidas-x-disney-sulley-grand-court-2.0-shoes-kids.jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},
            {'name': 'm', 'items': 4}, 
            {'name': 'l', 'items': 3},            
        ],
        'colours': [ 
            {'name': 'black', 'items': 2},
            {'name': 'white', 'items': 3}, 
            {'name': 'blue', 'items': 3}
        ],
        'inventory': 8,
        'category': 'men',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 22,
        'title': 'On Cloudmonster',
        'price': 170.00,
        'images': [
            '/products/adidas-x-marvels-spider-man-grand-court-shoes-kids (1).jpg',
            '/products/adidas-x-marvels-spider-man-grand-court-shoes-kids.jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},
            {'name': 'm', 'items': 4}, 
            {'name': 'l', 'items': 3},            
        ],
        'colours': [ 
            {'name': 'black', 'items': 2},
            {'name': 'white', 'items': 3}, 
            {'name': 'blue', 'items': 3}
        ],
        'inventory': 3,
        'category': 'men',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 23,
        'title': 'adilette aqua slides',
        'price': 170.00,
        'images': [
            '/products/adilette-aqua-slides (3).jpg',
            '/products/adilette-aqua-slides (2).jpg',
        ],
        'description': 'The adilette-aqua-slides combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},
            {'name': 'm', 'items': 4}, 
            {'name': 'l', 'items': 3},            
        ],
        'colours': [ 
            {'name': 'black', 'items': 2},
            {'name': 'white', 'items': 3}, 
            {'name': 'blue', 'items': 3}
        ],
        'inventory': 8,
        'category': 'women',
        'isNew': true,
        'isFeatured': true,
        'isBestSeller': false
    },
    {
        'id': 24,
        'title': 'On Cloudmonster',
        'price': 170.00,
        'images': [
            '/products/adidas-x-star-wars-grand-court-2.0-shoes (1).jpg',
            '/products/adidas-x-star-wars-grand-court-2.0-shoes (2).jpg',
            '/products/adidas-x-star-wars-grand-court-2.0-shoes.jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},
            {'name': 'm', 'items': 4}, 
            {'name': 'l', 'items': 3},            
        ],
        'colours': [ 
            {'name': 'black', 'items': 2},
            {'name': 'white', 'items': 3}, 
            {'name': 'blue', 'items': 3}
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 25,
        'title': 'On Cloudmonster',
        'price': 170.00,
        'images': [
            '/products/adifom-70s-comfort-closure-elastic-laces-shoes-kids.jpg',
            '/products/adifom-70s-comfort-closure-elastic-laces-shoes-kids (1).jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},
            {'name': 'm', 'items': 4}, 
            {'name': 'l', 'items': 3},            
        ],
        'colours': [ 
            {'name': 'black', 'items': 2},
            {'name': 'white', 'items': 3}, 
            {'name': 'blue', 'items': 3}
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 26,
        'title': 'adifom-gazelle-360-shoes-kids',
        'price': 170.00,
        'images': [
            '/products/adifom-gazelle-360-shoes-kids (1).jpg',
            '/products/adifom-gazelle-360-shoes-kids.jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},
            {'name': 'm', 'items': 4}, 
            {'name': 'l', 'items': 3},            
        ],
        'colours': [ 
            {'name': 'black', 'items': 2},
            {'name': 'white', 'items': 3}, 
            {'name': 'blue', 'items': 3}
        ],
        'inventory': 0,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 27,
        'title': 'Adilette Comfort',
        'price': 170.00,
        'images': [
            '/products/adilette-comfort-slides (1).jpg',
            '/products/adilette-comfort-slides.jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},
            {'name': 'm', 'items': 4}, 
            {'name': 'l', 'items': 3},            
        ],
        'colours': [ 
            {'name': 'black', 'items': 2},
            {'name': 'white', 'items': 3}, 
            {'name': 'blue', 'items': 3}
        ],
        'inventory': 8,
        'category': 'men',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 28,
        'title': 'On Cloudmonster',
        'price': 170.00,
        'images': [
            '/products/adilette-22-slides (1).jpg',
            '/products/adilette-22-slides.jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},
            {'name': 'm', 'items': 4}, 
            {'name': 'l', 'items': 3},            
        ],
        'colours': [ 
            {'name': 'black', 'items': 2},
            {'name': 'white', 'items': 3}, 
            {'name': 'blue', 'items': 3}
        ],
        'inventory': 8,
        'category': 'men',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 29,
        'title': 'Adilette',
        'price': 170.00,
        'images': [
            '/products/adilette-22-slides (3).jpg',
            '/products/adilette-22-slides (2).jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},
            {'name': 'm', 'items': 4}, 
            {'name': 'l', 'items': 3},            
        ],
        'colours': [ 
            {'name': 'black', 'items': 2},
            {'name': 'white', 'items': 3}, 
            {'name': 'blue', 'items': 3}
        ],
        'inventory': 8,
        'category': 'women',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 30,
        'title': 'Anthony Edward',
        'price': 170.00,
        'images': [
            '/products/anthony-edwards-1-low-iron-metallic-basketball-shoes-kids (1).jpg',
            '/products/anthony-edwards-1-low-iron-metallic-basketball-shoes-kids.jpg',
            '/products/anthony-edwards-1-low-iron-metallic-basketball-shoes-kids (1).jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},
            {'name': 'm', 'items': 4}, 
            {'name': 'l', 'items': 3},            
        ],
        'colours': [ 
            {'name': 'black', 'items': 2},
            {'name': 'white', 'items': 3}, 
            {'name': 'blue', 'items': 3}
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 31,
        'title': 'On Cloudmonster',
        'price': 170.00,
        'images': [
            '/products/anthony-edwards-1-low-nicks-gift-shoes-kids (1).jpg',
            '/products/anthony-edwards-1-low-nicks-gift-shoes-kids.jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},
            {'name': 'm', 'items': 4}, 
            {'name': 'l', 'items': 3},            
        ],
        'colours': [ 
            {'name': 'black', 'items': 2},
            {'name': 'white', 'items': 3}, 
            {'name': 'blue', 'items': 3}
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 32,
        'title': 'On Cloudmonster',
        'price': 170.00,
        'images': [
            '/products/anthony-edwards-1-low-shoes-kids (2).jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},
            {'name': 'm', 'items': 4}, 
            {'name': 'l', 'items': 3},
        ],
        'colours': [ 
            {'name': 'black', 'items': 2},
            {'name': 'white', 'items': 3}, 
            {'name': 'blue', 'items': 3}
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 33,
        'title': 'Busenitz Pro',
        'price': 170.00,
        'images': [
            '/products/busenitz-pro-shoes.jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},
            {'name': 'm', 'items': 4}, 
            {'name': 'l', 'items': 3},            
        ],
        'colours': [ 
            {'name': 'black', 'items': 2},
            {'name': 'white', 'items': 3}, 
            {'name': 'blue', 'items': 3}
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 35,
        'title': 'Campus 00s',
        'price': 170.00,
        'images': [
            '/products/campus-00s-comfort-closure-elastic-lace-shoes-kids.jpg',
            '/products/campus-00s-comfort-closure-elastic-lace-shoes-kids (1).jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},
            {'name': 'm', 'items': 4},         
        ],
        'colours': [ 
            {'name': 'gray', 'items': 3}, 
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 36,
        'title': 'campus 00s elastic lace',
        'price': 190.00,
        'images': [
            '/products/campus-00s-elastic-lace-shoes-kids (2).jpg',
            '/products/campus-00s-elastic-lace-shoes-kids (1).jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 'm', 'items': 4}, 
            {'name': 'l', 'items': 3},            
        ],
        'colours': [ 
            {'name': 'green', 'items': 3}, 
        ],
        'inventory': 0,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 362,
        'title': 'campus 00s elastic lace',
        'price': 190.00,
        'images': [
            '/products/campus-00s-shoes (1).jpg',
            '/products/campus-00s-shoes.jpg',
            '/products/campus-00s-elastic-lace-shoes-kids (4).jpg',
            '/products/campus-00s-elastic-lace-shoes-kids (3).jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 'm', 'items': 4}, 
            {'name': 'l', 'items': 3},            
        ],
        'colours': [ 
            {'name': 'green', 'items': 3},
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 364,
        'title': 'campus 00s elastic lace',
        'price': 190.00,
        'images': [
            '/products/campus-00s-elastic-lace-shoes-kids (6).jpg',
            '/products/campus-00s-elastic-lace-shoes-kids (5).jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 'm', 'items': 4}, 
            {'name': 'l', 'items': 3},            
        ],
        'colours': [ 
            {'name': 'green', 'items': 3}, 
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 37,
        'title': 'Copa pure elite',
        'price': 170.00,
        'images': [
            '/products/copa-pure-2-elite-firm-ground-soccer-cleats (1).jpg',
            '/products/copa-pure-2-elite-firm-ground-soccer-cleats.jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 'm', 'items': 4}, 
        ],
        'colours': [ 
            {'name': 'white', 'items': 3}, 
        ],
        'inventory': 1,
        'category': 'men',
        'isNew': true,
        'isFeatured': true,
        'isBestSeller': false
    },
    {
        'id': 38,
        'title': 'Courtblock',
        'price': 170.00,
        'images': [
            '/products/courtblock-shoes (1).jpg',
            '/products/courtblock-shoes.jpg',
            '/products/courtblock-shoes (2).jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},
            {'name': 'm', 'items': 4}, 
            {'name': 'l', 'items': 3},            
        ],
        'colours': [ 
            {'name': 'black', 'items': 2}
        ],
        'inventory': 2,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 39,
        'title': 'crazy 8 low',
        'price': 170.00,
        'images': [
            '/products/crazy-8-low-shoes (2).jpg',
            '/products/crazy-8-low-shoes.jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},
            {'name': 'l', 'items': 3},            
        ],
        'colours': [ 
            {'name': 'white', 'items': 2}, 
        ],
        'inventory': 2,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 40,
        'title': 'crazy infinity',
        'price': 170.00,
        'images': [
            '/products/crazy-iiinfinity-shoes (2).jpg',
            '/products/crazy-iiinfinity-shoes.jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 'm', 'items': 4}, 
            {'name': 'l', 'items': 3},            
        ],
        'colours': [ 
            {'name': 'white', 'items': 3}, 
        ],
        'inventory': 3,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 41,
        'title': 'Dame 9 low',
        'price': 170.00,
        'images': [
            '/products/dame-9-low-shoes (1).jpg',
            '/products/dame-9-low-shoes.jpg',

        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},
            {'name': 'm', 'items': 4}, 
            {'name': 'l', 'items': 3},            
        ],
        'colours': [ 
            {'name': 'black', 'items': 2},
            {'name': 'purple', 'items': 3}, 
            {'name': 'red', 'items': 3}
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': true,
    },
    {
        'id': 42,
        'title': 'Gazelle Green',
        'price': 170.00,
        'images': [
            '/products/gazelle-shoes (3).jpg',
            '/products/gazelle-shoes (1).jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},          
        ],
        'colours': [ 
            {'name': 'green', 'items': 2},
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 43,
        'title': 'gazelle',
        'price': 170.00,
        'images': [
            '/products/gazelle-shoes (2).jpg',
            '/products/gazelle-shoes.jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},
            {'name': 'm', 'items': 4}, 
            {'name': 'l', 'items': 3},            
        ],
        'colours': [ 
            {'name': 'black', 'items': 2},
            {'name': 'white', 'items': 3}, 
            {'name': 'blue', 'items': 3}
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 44,
        'title': 'ozweego shoes kids',
        'price': 170.00,
        'images': [
            '/products/ozweego-shoes-kids (5).jpg',
            '/products/ozweego-shoes-kids.jpg',
            '/products/ozweego-shoes-kids (4).jpg',
            '/products/ozweego-shoes-kids (2).jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},
            {'name': 'm', 'items': 4}, 
            {'name': 'l', 'items': 3},            
        ],
        'colours': [ 
            {'name': 'black', 'items': 2},
            {'name': 'white', 'items': 3}, 
            {'name': 'blue', 'items': 3}
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 45,
        'title': 'predator league firm ground',
        'price': 170.00,
        'images': [
            '/products/predator-league-firm-ground-cleats-kids (1).jpg',
            '/products/predator-league-firm-ground-cleats-kids.jpg',
            '/products/predator-league-laceless-turf-soccer-shoes-kids (1).jpg',
            '/products/predator-league-laceless-turf-soccer-shoes-kids.jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 'm', 'items': 4}, 
            {'name': 'l', 'items': 3},            
        ],
        'colours': [ 
            {'name': 'black', 'items': 2},
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 46,
        'title': 'Racer tr20',
        'price': 170.00,
        'images': [
            '/products/racer-tr23-shoes (1).jpg',
            '/products/pureboost-light-shoes.jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},           
        ],
        'colours': [ 
            {'name': 'black', 'items': 2},
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 47,
        'title': 'lite racer adapt',
        'price': 170.00,
        'images': [
            '/products/lite-racer-adapt-7.0-shoes-kids (8).jpg',
            '/products/lite-racer-adapt-7.0-shoes-kids (9).jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},          
        ],
        'colours': [
            {'name': 'blue', 'items': 3}
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 48,
        'title': 'mundial-team-turf-soccer',
        'price': 170.00,
        'images': [
            '/products/mundial-team-turf-soccer-shoes.jpg',
            '/products/mundial-team-turf-soccer-shoes (2).jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 'm', 'items': 4}, 
        ],
        'colours': [ 
            {'name': 'white', 'items': 3}, 
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 49,
        'title': 'nizza platform',
        'price': 170.00,
        'images': [
            '/products/nizza-platform-shoes (1).jpg',
            '/products/nizza-platform-shoes.jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 'm', 'items': 4}, 
        ],
        'colours': [ 
            {'name': 'white', 'items': 3}, 
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 50,
        'title': 'nlg25',
        'price': 170.00,
        'images': [
            '/products/nlg25 (1).jpg',
            '/products/nlg25.jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},           
        ],
        'colours': [ 
            {'name': 'black', 'items': 2},
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 51,
        'title': 'nova infinity shoes',
        'price': 170.00,
        'images': [
            '/products/nova-iiinfinity-shoes (2).jpg',
            '/products/nova-iiinfinity-shoes (4).jpg',
            '/products/nova-iiinfinity-shoes (5).jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},           
        ],
        'colours': [ 
            {'name': 'black', 'items': 2},
            {'name': 'white', 'items': 3}, 
            {'name': 'blue', 'items': 3}
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 52,
        'title': 'ozmillen elastic lace shoes',
        'price': 170.00,
        'images': [
            '/products/ozmillen-elastic-lace-shoes-kids (1).jpg',
            '/products/ozmillen-elastic-lace-shoes-kids.jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},        
        ],
        'colours': [ 
            {'name': 'black', 'items': 2},
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 53,
        'title': 'ozmillen elastic laces',
        'price': 170.00,
        'images': [
            '/products/ozmillen-elastic-laces-shoes-kids (1).jpg',
            '/products/ozmillen-elastic-laces-shoes-kids.jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},          
        ],
        'colours': [ 
            {'name': 'black', 'items': 2},
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 54,
        'title': 'predator freestyle indoor soccer shoes',
        'price': 270.00,
        'images': [
            '/products/predator-freestyle-indoor-soccer-shoes (1).jpg',
            '/products/predator-freestyle-indoor-soccer-shoes.jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 'm', 'items': 4}, 
            {'name': 'l', 'items': 3},            
        ],
        'colours': [ 
            {'name': 'white', 'items': 3}, 
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 55,
        'title': 'lite-racer-adapt-7.0',
        'price': 170.00,
        'images': [
            '/products/lite-racer-adapt-7.0-shoes-kids (1).jpg',
            '/products/lite-racer-adapt-7.0-shoes-kids (3).jpg',
            '/products/',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},
            {'name': 'm', 'items': 4}, 
            {'name': 'l', 'items': 3},            
        ],
        'colours': [ 
            {'name': 'black', 'items': 2},
            {'name': 'white', 'items': 3}, 
            {'name': 'blue', 'items': 3}
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 57,
        'title': 'lite racer adapt 7.0',
        'price': 170.00,
        'images': [
            '/products/lite-racer-adapt-7.0-shoes-kids (7).jpg',
            '/products/lite-racer-adapt-7.0-shoes-kids (2).jpg',
            '/products/',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},          
        ],
        'colours': [ 
            {'name': 'black', 'items': 2},
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 58,
        'title': 'lite racer adapt 7.0',
        'price': 170.00,
        'images': [
            '/products/lite-racer-adapt-7.0-shoes-kids (6).jpg',
            '/products/lite-racer-adapt-7.0-shoes-kids (5).jpg',
            '/products/',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 'm', 'items': 4}, 
        ],
        'colours': [ 
            {'name': 'black', 'items': 2},
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 59,
        'title': 'handball-spezial-shoes-kids',
        'price': 170.00,
        'images': [
            '/products/handball-spezial-shoes-kids (7).jpg',
            '/products/handball-spezial-shoes-kids (3).jpg',
            '/products/',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 'm', 'items': 4}, 
        ],
        'colours': [ 
            {'name': 'white', 'items': 3}, 
            {'name': 'blue', 'items': 3}
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 60,
        'title': 'gamecourt 2.0 tennis',
        'price': 170.00,
        'images': [
            '/products/gamecourt-2.0-tennis-shoes (1).jpg',
            '/products/gamecourt-2.0-tennis-shoes.jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},
            {'name': 'm', 'items': 4}, 
            {'name': 'l', 'items': 3},            
        ],
        'colours': [ 
            {'name': 'black', 'items': 2},
            {'name': 'white', 'items': 3}, 
            {'name': 'blue', 'items': 3}
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 61,
        'title': 'grand-court-lace-up-shoes',
        'price': 170.00,
        'images': [
            '/products/grand-court-lace-up-shoes (1).jpg',
            '/products/grand-court-lifestyle-tennis-lace-up-shoes (1).jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},          
        ],
        'colours': [ 
            {'name': 'white', 'items': 3}, 
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 62,
        'title': 'grand-court-lace-up-shoes',
        'price': 170.00,
        'images': [
            '/products/grand-court-lace-up-shoes (1).jpg',
            '/products/grand-court-lace-up-shoes.jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},          
        ],
        'colours': [ 
            {'name': 'white', 'items': 3}, 
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 63,
        'title': 'grambling-state-university-centennial-rm-shoes',
        'price': 370.00,
        'images': [
            '/products/grambling-state-university-centennial-rm-shoes.jpg',
            '/products/grambling-state-university-centennial-rm-shoes (1).jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},          
        ],
        'colours': [ 
            {'name': 'yellow', 'items': 3}, 
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 64,
        'title': 'gazelle-comfort-closure-elastic-laces-shoes',
        'price': 170.00,
        'images': [
            '/products/gazelle-comfort-closure-elastic-laces-shoes-kids (2).jpg',
            '/products/gazelle-comfort-closure-elastic-laces-shoes-kids (3).jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},          
        ],
        'colours': [ 
            {'name': 'pink', 'items': 3}, 
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 65,
        'title': 'everyset versatile training shoes',
        'price': 170.00,
        'images': [
            '/products/everyset-versatile-training-shoes.jpg',
            '/products/everyset-versatile-training-shoes (1).jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},          
        ],
        'colours': [ 
            {'name': 'white', 'items': 3}, 
        ],
        'inventory': 8,
        'category': 'men',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 66,
        'title': 'five-ten-trailcross-xt-shoes',
        'price': 170.00,
        'images': [
            '/products/five-ten-trailcross-xt-shoes (3).jpg',
            '/products/five-ten-trailcross-xt-shoes (2).jpg',
            '/products/five-ten-trailcross-xt-shoes (1).jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},          
        ],
        'colours': [ 
            {'name': 'white', 'items': 3}, 
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 67,
        'title': 'forum low cl',
        'price': 170.00,
        'images': [
            '/products/forum-low-cl-shoes-kids.jpg',
            '/products/forum-low-cl-shoes-kids (1).jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},          
        ],
        'colours': [ 
            {'name': 'white', 'items': 3}, 
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 68,
        'title': 'dame certified 3 low shoes',
        'price': 170.00,
        'images': [
            '/products/dame-certified-3-low-shoes (1).jpg',
            '/products/dame-certified-3-low-shoes.jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},          
        ],
        'colours': [ 
            {'name': 'orange', 'items': 3}, 
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 69,
        'title': 'dame 9 low shoes black',
        'price': 170.00,
        'images': [
            
            '/products/dame-9-low-shoes (3).jpg',
            '/products/dame-9-low-shoes (2).jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},          
        ],
        'colours': [ 
            {'name': 'black', 'items': 3}, 
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 70,
        'title': 'Done issue 6 panama basketball shoes kids',
        'price': 270.00,
        'images': [
            '/products/don-issue-6-panama-basketball-shoes-kids.jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},          
        ],
        'colours': [ 
            {'name': 'black', 'items': 3}, 
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 71,
        'title': '',
        'price': 270.00,
        'images': [
            '/products/ultraboost-5x-shoes (3).jpg',
            '/products/ultraboost-5x-shoes (4).jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},          
        ],
        'colours': [ 
            {'name': 'black', 'items': 3}, 
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 72,
        'title': 'university of miami centennial rm',
        'price': 270.00,
        'images': [
            '/products/university-of-miami-centennial-rm-shoes.jpg',
            '/products/university-of-miami-centennial-rm-shoes (1).jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 'm', 'items': 3},          
        ],
        'colours': [ 
            {'name': 'green', 'items': 3}, 
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
    {
        'id': 73,
        'title': 'University of louisville centennial rm shoes',
        'price': 270.00,
        'images': [
            '/products/university-of-louisville-centennial-rm-shoes (1).jpg',
        ],
        'description': 'The On Cloudmonster combines a unique design with extreme cushioning for an effortless run or all-day comfort.',
        'sizes': [ 
            {'name': 's', 'items': 3},          
        ],
        'colours': [ 
            {'name': 'black', 'items': 3}, 
        ],
        'inventory': 8,
        'category': 'kid',
        'isNew': true,
        'isFeatured': false,
        'isBestSeller': false
    },
];

