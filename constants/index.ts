// export const prodcs = [
//     {
//         _id: 1,
//         name: 'Nike Air Force 1',
//         'description': '',
//         price: 80.00,
//         imageURl: '/products/a1.png',
//         catergory: '',
//         subCatergory: '',
//         sizes: ['S', 'M', 'L',],
//         date: '',
//         colors: ['red', 'red'],
//         bestseller: true,
//     },
// ]
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
        'id': 4,
        'title': 'Nike Air Max 270',
        'price': 150.00,
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
        'category': 'kid',
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
        'price': 55.00,
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
        'category': 'kid',
        'isNew': false,
        'isFeatured': true,
        'isBestSeller': true
    },
    {
        'id': 9,
        'title': 'Asics Gel-Kayano 27',
        'price': 160.00,
        'images': [
            '/products/j1.png',
            '/products/j2.png',
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
        'category': 'kid',
        'isNew': false,
        'isFeatured': true,
        'isBestSeller': true
    },
    {
        'id': 10,
        'title': 'Saucony Shadow 6000',
        'price': 100.00,
        'images': [
            '/products/k1.png',
            '/products/k2.png',
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
        'category': 'kid',
        'isNew': false,
        'isFeatured': true,
        'isBestSeller': true
    },
    {
        'id': 11,
        'title': 'Yeezy Boost 350 V2',
        'price': 220.00,
        'images': [
            '/products/f1.png',
            '/products/f2.png',
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

        'inventory': 7,
        'category': 'kid',
        'isNew': false,
        'isFeatured': true,
        'isBestSeller': true
    },
    {
        'id': 12,
        'title': 'Nike Dunk Low',
        'price': 100.00,
        'images': [
            '/products/j1.png',
            '/products/j2.png',
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
        'category': 'kid',
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
            '/products/h1.png',
            '/products/h2.png',
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
        'category': 'kid',
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
        'category': 'kid',
        'isNew': false,
        'isFeatured': false,
        'isBestSeller': true
    },
    {
        'id': 19,
        'title': 'Nike ZoomX Vaporfly Next% 3',
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
        'id': 20,
        'title': 'On Cloudmonster',
        'price': 170.00,
        'images': [
            '/products/f1.png',
            '/products/f2.png',
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
];

