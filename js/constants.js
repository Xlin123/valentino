// Image mappings
const IMAGES = {
    // Time images
    'all-day': 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=400',
    'noon-to-evening': 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=400',
    'lunch': 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=400',
    'evening-only': 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=400',
    // Attire images
    'casual': 'https://images.unsplash.com/photo-1596529840515-60d86f99a3f7?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'smart-casual': 'https://images.unsplash.com/photo-1617724757497-79b54c5444d2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'formal': 'https://images.unsplash.com/photo-1619814319463-7534cfcdf870?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // Cuisine images
    'japanese': 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400',
    'italian': 'https://images.unsplash.com/photo-1571167366136-b57e07761625?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'indian': 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400',
    'vietnamese': 'https://images.unsplash.com/photo-1511910849309-0dffb8785146?w=400',
    'chinese': 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400',
    'bar-food': 'https://images.unsplash.com/photo-1594179047519-f347310d3322?w=400',
    // Dessert images
    'chocolate-cake': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400',
    'ice-cream': 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400',
    'tiramisu': 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400',
    'fruit-tart': 'https://images.unsplash.com/photo-1620878439728-a8f735a95e3f?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'cheesecake': 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400',
    'creme-brulee': 'https://images.unsplash.com/photo-1563046937-9824d5725660?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
};

// Category names
const CATEGORIES = {
    'time': 'Time',
    'attire': 'Attire',
    'cuisine': 'Cuisine',
    'dessert': 'Dessert'
};

// Category display order
const CATEGORY_ORDER = ['time', 'attire', 'cuisine', 'dessert'];

// Time displays
const TIME_DISPLAYS = {
    'all-day': { time: '24/7', subtext: 'All Day' },
    'noon-to-evening': { time: '12:00 - 21:00', subtext: 'Noon to Evening' },
    'lunch': { time: '11:30 - 14:00', subtext: 'Lunch Time' },
    'evening-only': { time: '17:00 - 23:00', subtext: 'Evening Only' }
};

// Descriptions for each category
const DESCRIPTIONS = {
    'cuisine': {
        'japanese': 'Japanese Cuisine - Sushi and Ramen',
        'italian': 'Italian Cuisine - Pasta and Pizza',
        'indian': 'Indian Cuisine - Curry and Naan',
        'vietnamese': 'Vietnamese Cuisine - Pho and Spring Rolls',
        'chinese': 'Chinese Cuisine - Dumpings!!',
        'bar-food': 'Bar Food - Wings and Burgers'
    },
    'attire': {
        'casual': 'Jeans and Sweater',
        'smart-casual': 'Dress Shirt / Nice Top',
        'formal': 'Suit and Dress'
    },
    'dessert': {
        'chocolate-cake': 'Choccy Cake',
        'ice-cream': ' Mmm Ice cream so good!',
        'tiramisu': 'Tearymasu',
        'fruit-tart': 'Mango! Mango! Mango!',
        'cheesecake': 'CHEESE C A K E',
        'creme-brulee': 'Creme Brulee'
    }
}; 