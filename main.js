var app = new Vue ({
    el: '#app',
    data: {
        product: 'Socks',
        image: './assets/vmSocks-green-onWhite.jpg',
        inStock: true,
        inventory: 100,
        details: ["80% cotton","20% ployester", "Gender-netraul"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: './assets/vmSocks-green-onWhite.jpg'
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: './assets/vmSocks-green-onWhite.jpg'
            }
        ],
        cart: 0, 
    },
    methods: {
        addToCart() {
            this.cart += 1
        },

        updateProduct(variantImage) {
            this.image = variantImage

        }
    }
})