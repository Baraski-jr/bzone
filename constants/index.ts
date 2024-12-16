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
        'label': 'Collection',
        'url': '/collection/shoes',
    },
    {
        'label': 'About',
        'url': '/about',
    },
];

export const shoeSlides = [
    {
        'id':0,       
        'name': 'React Infinity',
        'image': '/hero/shoes-white.png',
        'color': 'gray',
        'price': {
            'originalPrice': 1200,
            'discountPrice': 999,
        },
    },
    {
        'id':1,       
        'name': 'Airmax Racing',
        'image': '/hero/shoes-blue.png',
        'color': 'blue-500',
        'price': {
            'originalPrice': 1000,
            'discountPrice': 799,
        },    
    },
    {
        'id':2,       
        'name': 'Running Airmax',
        'image': '/hero/shoes-orange.png',
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
        
    },
    {
        'id': 1,
        'title': 'Adidas Ultraboost 21',
        'price': 180.00,
        'images': [
            '/products/b1.png',
            '/products/b2.png',
            '/products/c1.png',
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
    },
    {
        'id': 2,
        'title': 'Puma RSX',
        'price': 110.00,
        'images': [
            '/products/c1.png',
            '/products/c2.png',
            '/products/f1.png',
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
    },
    {
        'id': 3,
        'title': 'Jordan 1 Retro High',
        'price': 170.00,
        'images': [
            '/products/d1.png',
            '/products/d2.png',
            '/products/c1.png',
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
    },
    {
        'id': 4,
        'title': 'Nike Air Max 270',
        'price': 150.00,
        'images': [
            '/products/e1.png',
            '/products/e2.png',
            '/products/c1.png',
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
    },
    {
        'id': 5,
        'title': 'New Balance 990v5',
        'price': 175.00,
        'images': [
            '/products/f1.png',
            '/products/f2.png',
            '/products/c1.png',
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

    },
    {
        'id': 6,
        'title': 'Converse Chuck Taylor All Star',
        'price': 55.00,
        'images': [
            '/products/g1.png',
            '/products/g2.png',
            '/products/c1.png',
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
    },
    {
        'id': 8,
        'title': 'Reebok Club C 85',
        'price': 70.00,
        'images': [
            '/products/e1.png',
            '/products/e2.png',
            '/products/c1.png',
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
    },
    {
        'id': 9,
        'title': 'Asics Gel-Kayano 27',
        'price': 160.00,
        'images': [
            '/products/j1.png',
            '/products/j2.png',
            '/products/c1.png',
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
    },
    {
        'id': 10,
        'title': 'Saucony Shadow 6000',
        'price': 100.00,
        'images': [
            '/products/k1.png',
            '/products/k2.png',
            '/products/c1.png',
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
    },
];
