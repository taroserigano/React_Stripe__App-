// Coffee: price_1LnUTFDM1jwCEz8OGoOSXiSM
// Sunglasses: price_1LnUTxDM1jwCEz8OAqHYTwKQ
// Camera: price_1LnUUoDM1jwCEz8OvxIcJ7to

const productsArray = [
    {
        id: "price_1MXpDfJefP6ZR6q1732vyw88",
        title: "Coffee",
        price: 4.99
    },
    {
        id: "price_1MXpGMJefP6ZR6q1kAV2ve5j",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "price_1MXpGlJefP6ZR6q1Xf4046Xu",
        title: "Camera",
        price: 39.99
    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };