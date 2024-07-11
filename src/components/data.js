const categoriesArray = [
    {
        name: 'All',
        image: require('../../assets/food/bonfire.png')
    },
    {
        name: 'Burger',
        image: require('../../assets/food/burger.png')
    },
    {
        name: 'Pizza',
        image: require('../../assets/food/pizza.png')
    },
    {
        name: 'Pasta',
        image: require('../../assets/food/pasta.png')
    },
    {
        name: 'Taco',
        image: require('../../assets/food/taco.png')
    },
    {
        name: 'Sushi',
        image: require('../../assets/food/sushi.png')
    },
]



const restaurants = [
    {
        name: "Rose Garden Restaurant",
        tags: ["Chinese", "Vegetarian"],
        rating: "4.5",
        deliveryFee: "2.99",
        deliveryTime: "40 mins",
        image: require('../../assets/restaurants/1.png'),
        description: "A delightful spot for authentic Chinese cuisine with a variety of vegetarian options. Enjoy the serene ambiance and freshly prepared dishes.",
        menu: [
            {
                category: "Appetizers",
                items: [
                    { item: "Vegetable Spring Rolls", price: "5.99", },
                    { item: "Edamame", price: "4.99" },
                    { item: "Vegetable Dumplings", price: "6.99" },
                    { item: "Scallion Pancakes", price: "5.99" }
                ]
            },
            {
                category: "Main Courses",
                items: [
                    { item: "Kung Pao Tofu", price: "9.99" },
                    { item: "General Tso's Tofu", price: "10.99" },
                    { item: "Vegetable Lo Mein", price: "8.99" },
                    { item: "Vegetable Fried Rice", price: "8.99" }
                ]
            },
            {
                category: "Soups",
                items: [
                    { item: "Hot and Sour Soup", price: "4.99" },
                    { item: "Miso Soup", price: "3.99" },
                    { item: "Vegetable Wonton Soup", price: "5.99" },
                    { item: "Tom Yum Soup", price: "6.99" }
                ]
            },
            {
                category: "Desserts",
                items: [
                    { item: "Mango Pudding", price: "4.99" },
                    { item: "Fried Ice Cream", price: "5.99" },
                    { item: "Fortune Cookies", price: "3.99" },
                    { item: "Red Bean Paste Buns", price: "4.99" }
                ]
            },
            {
                category: "Beverages",
                items: [
                    { item: "Green Tea", price: "2.99" },
                    { item: "Jasmine Tea", price: "2.99" },
                    { item: "Soy Milk", price: "3.49" },
                    { item: "Lemonade", price: "2.99" }
                ]
            }
        ]
    },
    {
        name: "Sunshine Cafe",
        tags: ["Cafe", "Breakfast"],
        rating: "4.0",
        deliveryFee: "Free",
        deliveryTime: "30 mins",
        image: require('../../assets/restaurants/2.png'),
        description: "A cozy cafe offering delicious breakfast and brunch options, perfect for a sunny morning. Try our famous pancakes and freshly brewed coffee.",
        menu: [
            {
                category: "Breakfast Specials",
                items: [
                    { item: "Pancake Stack", price: "7.99" },
                    { item: "Avocado Toast", price: "6.99" },
                    { item: "Eggs Benedict", price: "8.99" },
                    { item: "French Toast", price: "7.99" }
                ]
            },
            {
                category: "Sandwiches",
                items: [
                    { item: "BLT Sandwich", price: "6.99" },
                    { item: "Club Sandwich", price: "8.99" },
                    { item: "Grilled Cheese", price: "5.99" },
                    { item: "Chicken Salad Sandwich", price: "7.99" }
                ]
            },
            {
                category: "Salads",
                items: [
                    { item: "Caesar Salad", price: "6.99" },
                    { item: "Greek Salad", price: "7.99" },
                    { item: "Cobb Salad", price: "8.99" },
                    { item: "House Salad", price: "5.99" }
                ]
            },
            {
                category: "Pastries",
                items: [
                    { item: "Croissant", price: "2.99" },
                    { item: "Muffin", price: "2.49" },
                    { item: "Scone", price: "2.99" },
                    { item: "Danish", price: "3.49" }
                ]
            },
            {
                category: "Beverages",
                items: [
                    { item: "Coffee", price: "2.99" },
                    { item: "Tea", price: "2.49" },
                    { item: "Smoothie", price: "4.99" },
                    { item: "Orange Juice", price: "3.99" }
                ]
            }
        ]
    },
    {
        name: "Taco Fiesta",
        tags: ["Mexican", "Fast Food", "Tacos"],
        rating: "4.2",
        deliveryFee: "2.49",
        deliveryTime: "35 mins",
        image: require('../../assets/restaurants/3.png'),
        description: "Experience the vibrant flavors of Mexico with our wide range of tacos and fast food options. A fiesta of flavors in every bite.",
        menu: [
            {
                category: "Tacos",
                items: [
                    { item: "Beef Tacos", price: "8.99" },
                    { item: "Chicken Tacos", price: "7.99" },
                    { item: "Fish Tacos", price: "9.99" },
                    { item: "Vegetarian Tacos", price: "7.49" }
                ]
            },
            {
                category: "Quesadillas",
                items: [
                    { item: "Chicken Quesadilla", price: "7.99" },
                    { item: "Beef Quesadilla", price: "8.99" },
                    { item: "Cheese Quesadilla", price: "6.99" },
                    { item: "Vegetable Quesadilla", price: "7.49" }
                ]
            },
            {
                category: "Burritos",
                items: [
                    { item: "Beef Burrito", price: "8.99" },
                    { item: "Chicken Burrito", price: "7.99" },
                    { item: "Vegetarian Burrito", price: "7.49" },
                    { item: "Shrimp Burrito", price: "9.99" }
                ]
            },
            {
                category: "Sides",
                items: [
                    { item: "Chips and Salsa", price: "3.99" },
                    { item: "Guacamole", price: "4.99" },
                    { item: "Rice and Beans", price: "3.49" },
                    { item: "Elote (Grilled Corn)", price: "3.99" }
                ]
            },
            {
                category: "Desserts",
                items: [
                    { item: "Churros", price: "4.99" },
                    { item: "Flan", price: "5.99" },
                    { item: "Tres Leches Cake", price: "6.99" },
                    { item: "Fried Ice Cream", price: "5.99" }
                ]
            }
        ]
    },
    {
        name: "Pasta Palace",
        tags: ["Italian", "Pasta"],
        rating: "4.8",
        deliveryFee: "3.50",
        deliveryTime: "45 mins",
        image: require('../../assets/restaurants/4.png'),
        description: "Indulge in our exquisite Italian pasta dishes, made with the freshest ingredients. Perfect for a romantic dinner or a family feast.",
        menu: [
            {
                category: "Appetizers",
                items: [
                    { item: "Bruschetta", price: "5.99" },
                    { item: "Garlic Bread", price: "4.99" },
                    { item: "Caprese Salad", price: "6.99" },
                    { item: "Stuffed Mushrooms", price: "7.99" }
                ]
            },
            {
                category: "Pasta",
                items: [
                    { item: "Spaghetti Carbonara", price: "12.99" },
                    { item: "Fettuccine Alfredo", price: "11.99" },
                    { item: "Penne Arrabbiata", price: "10.99" },
                    { item: "Lasagna", price: "13.99" }
                ]
            },
            {
                category: "Entrees",
                items: [
                    { item: "Chicken Parmesan", price: "14.99" },
                    { item: "Eggplant Parmesan", price: "12.99" },
                    { item: "Veal Piccata", price: "16.99" },
                    { item: "Seafood Risotto", price: "18.99" }
                ]
            },
            {
                category: "Desserts",
                items: [
                    { item: "Tiramisu", price: "6.99" },
                    { item: "Cannoli", price: "5.99" },
                    { item: "Gelato", price: "4.99" },
                    { item: "Panna Cotta", price: "6.49" }
                ]
            },
            {
                category: "Beverages",
                items: [
                    { item: "Italian Soda", price: "3.99" },
                    { item: "Espresso", price: "2.99" },
                    { item: "Cappuccino", price: "3.99" },
                    { item: "House Wine", price: "6.99" }
                ]
            }
        ]
    },
    {
        name: "Burger Town",
        tags: ["American", "Burgers"],
        rating: "4.3",
        deliveryFee: "2.00",
        deliveryTime: "25 mins",
        image: require('../../assets/restaurants/5.png'),
        description: "Home of the juiciest burgers in town. Enjoy a classic American meal with a modern twist. Quick delivery and unbeatable taste.",
        menu: [
            {
                category: "Burgers",
                items: [
                    { item: "Cheeseburger", price: "9.99" },
                    { item: "Bacon Burger", price: "10.99" },
                    { item: "Veggie Burger", price: "8.99" },
                    { item: "Double Cheeseburger", price: "11.99" }
                ]
            },
            {
                category: "Sides",
                items: [
                    { item: "Fries", price: "3.99" },
                    { item: "Onion Rings", price: "4.99" },
                    { item: "Mozzarella Sticks", price: "5.99" },
                    { item: "Sweet Potato Fries", price: "4.49" }
                ]
            },
            {
                category: "Salads",
                items: [
                    { item: "Caesar Salad", price: "6.99" },
                    { item: "House Salad", price: "5.99" },
                    { item: "Chicken Salad", price: "8.99" },
                    { item: "Greek Salad", price: "7.99" }
                ]
            },
            {
                category: "Desserts",
                items: [
                    { item: "Chocolate Cake", price: "4.99" },
                    { item: "Apple Pie", price: "5.99" },
                    { item: "Milkshake", price: "3.99" },
                    { item: "Brownie Sundae", price: "6.49" }
                ]
            },
            {
                category: "Beverages",
                items: [
                    { item: "Soda", price: "1.99" },
                    { item: "Lemonade", price: "2.49" },
                    { item: "Iced Tea", price: "2.49" },
                    { item: "Bottled Water", price: "1.49" }
                ]
            }
        ]
    },
    {
        name: "Sushi World",
        tags: ["Japanese", "Sushi"],
        rating: "4.7",
        deliveryFee: "3.00",
        deliveryTime: "40 mins",
        image: require('../../assets/restaurants/6.png'),
        description: "Discover the art of sushi at Sushi World. Fresh, high-quality ingredients and expertly crafted rolls. A taste of Japan at your doorstep.",
        menu: [
            {
                category: "Sushi Rolls",
                items: [
                    { item: "California Roll", price: "7.99" },
                    { item: "Spicy Tuna Roll", price: "8.99" },
                    { item: "Dragon Roll", price: "10.99" },
                    { item: "Vegetable Roll", price: "6.99" }
                ]
            },
            {
                category: "Nigiri",
                items: [
                    { item: "Salmon Nigiri", price: "5.99" },
                    { item: "Tuna Nigiri", price: "6.99" },
                    { item: "Eel Nigiri", price: "7.49" },
                    { item: "Shrimp Nigiri", price: "5.49" }
                ]
            },
            {
                category: "Sashimi",
                items: [
                    { item: "Salmon Sashimi", price: "8.99" },
                    { item: "Tuna Sashimi", price: "9.99" },
                    { item: "Yellowtail Sashimi", price: "10.99" },
                    { item: "Octopus Sashimi", price: "9.49" }
                ]
            },
            {
                category: "Appetizers",
                items: [
                    { item: "Miso Soup", price: "2.99" },
                    { item: "Seaweed Salad", price: "4.99" },
                    { item: "Edamame", price: "3.99" },
                    { item: "Gyoza", price: "5.99" }
                ]
            },
            {
                category: "Desserts",
                items: [
                    { item: "Mochi Ice Cream", price: "4.99" },
                    { item: "Green Tea Ice Cream", price: "3.99" },
                    { item: "Red Bean Paste Buns", price: "4.99" },
                    { item: "Dorayaki", price: "5.49" }
                ]
            }
        ]
    },
    {
        name: "Pizza Paradise",
        tags: ["Italian", "Pizza"],
        rating: "4.4",
        deliveryFee: "Free",
        deliveryTime: "30 mins",
        image: require('../../assets/restaurants/7.png'),
        description: "Your go-to place for authentic Italian pizza. Enjoy a variety of toppings and crispy crusts. Free delivery and fast service.",
        menu: [
            {
                category: "Classic Pizzas",
                items: [
                    { item: "Margherita Pizza", price: "9.99" },
                    { item: "Pepperoni Pizza", price: "10.99" },
                    { item: "Four Cheese Pizza", price: "11.99" },
                    { item: "Vegetarian Pizza", price: "9.99" }
                ]
            },
            {
                category: "Specialty Pizzas",
                items: [
                    { item: "BBQ Chicken Pizza", price: "12.99" },
                    { item: "Hawaiian Pizza", price: "11.99" },
                    { item: "Meat Lover's Pizza", price: "13.99" },
                    { item: "Pesto Pizza", price: "12.49" }
                ]
            },
            {
                category: "Calzones",
                items: [
                    { item: "Cheese Calzone", price: "8.99" },
                    { item: "Pepperoni Calzone", price: "9.99" },
                    { item: "Vegetarian Calzone", price: "8.49" },
                    { item: "Meatball Calzone", price: "10.99" }
                ]
            },
            {
                category: "Sides",
                items: [
                    { item: "Garlic Knots", price: "4.99" },
                    { item: "Mozzarella Sticks", price: "5.99" },
                    { item: "Caesar Salad", price: "6.99" },
                    { item: "Wings", price: "7.99" }
                ]
            },
            {
                category: "Desserts",
                items: [
                    { item: "Cannoli", price: "5.99" },
                    { item: "Tiramisu", price: "6.99" },
                    { item: "Gelato", price: "4.99" },
                    { item: "Chocolate Cake", price: "5.49" }
                ]
            }
        ]
    },
    {
        name: "Curry House",
        tags: ["Indian", "Curry"],
        rating: "4.6",
        deliveryFee: "3.25",
        deliveryTime: "45 mins",
        image: require('../../assets/restaurants/8.png'),
        description: "Dive into the rich and spicy flavors of India at Curry House. Our curries are made with traditional recipes and fresh spices.",
        menu: [
            {
                category: "Appetizers",
                items: [
                    { item: "Samosas", price: "4.99" },
                    { item: "Pakoras", price: "5.99" },
                    { item: "Paneer Tikka", price: "7.99" },
                    { item: "Chicken 65", price: "8.99" }
                ]
            },
            {
                category: "Curries",
                items: [
                    { item: "Butter Chicken", price: "13.99" },
                    { item: "Lamb Vindaloo", price: "14.99" },
                    { item: "Palak Paneer", price: "12.99" },
                    { item: "Chana Masala", price: "11.99" }
                ]
            },
            {
                category: "Biryani",
                items: [
                    { item: "Chicken Biryani", price: "13.99" },
                    { item: "Lamb Biryani", price: "14.99" },
                    { item: "Vegetable Biryani", price: "11.99" },
                    { item: "Shrimp Biryani", price: "15.99" }
                ]
            },
            {
                category: "Breads",
                items: [
                    { item: "Naan", price: "2.99" },
                    { item: "Garlic Naan", price: "3.49" },
                    { item: "Roti", price: "2.49" },
                    { item: "Paratha", price: "3.99" }
                ]
            },
            {
                category: "Desserts",
                items: [
                    { item: "Gulab Jamun", price: "3.99" },
                    { item: "Rasmalai", price: "4.99" },
                    { item: "Kheer", price: "3.99" },
                    { item: "Jalebi", price: "4.49" }
                ]
            }
        ]
    }
];

const restaurantsList = restaurants.map((eachrestaurant, index) => ({
    ...eachrestaurant,
    originalIndex: index
}));

const menuImages = [
    require('../../assets/menu/1.png'),
    require('../../assets/menu/2.png'),
    require('../../assets/menu/3.png'),
    require('../../assets/menu/4.png'),
    require('../../assets/menu/5.png'),
    require('../../assets/menu/6.png'),
    require('../../assets/menu/7.png'),
    require('../../assets/menu/8.png'),
    require('../../assets/menu/9.png'),
    require('../../assets/menu/10.png'),
    require('../../assets/menu/11.png'),    
]




export {categoriesArray, restaurantsList, menuImages}