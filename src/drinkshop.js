/**
 * A product
 * @typedef {Object} product
 * @property {number} id - an unique id number for the product
 * @property {string} title - the name of a product
 * @property {number} price - the price of a product in AUD to two decimal places
 */

/**
 * A customer
 * @typedef {Object} customer
 * @property {string} firstName - the first given name of the customer
 * @property {string} lastName - the surname of the customer
 * @property {address} address - the customer's {@link address} for billing and delivery purposes
 * @property {order[]} orders - an array of {@link order}s the customer has made
 * @property {string} customerNotes - a string containing any notes about the customer
*/

/**
 * An address
 * @typedef {Object} address
 * @property {number} streetNumber - the alphanumeric indicator for a property
 * @property {string} streetName - the name of the street on which the customer's property is
 * @property {string} city - the city in which the customer's property is
 * @property {number} postcode - the government postal code for the area in which the customer's property resides
 */

/**
 * An order
 * @typedef {Object} order
 * @property {number} id - a unique id number for the order
 * @property {string} status - an indicator of the status of the delivery such as delivered, processing, cancelled
 * @property {item[]} items - an array of {@link item}s
 * @property {string} notes - an arbitrary note from the customer regarding delivery of the order
 */

/**
 * An item which is part of an order
 * @typedef {Object} item
 * @property {number} productId - a unique numeric id for a product
 * @property {number} quantity - a number representing the quantity of the product for the order
 */
const shopData = {} // Add JSON to this variable

/**
 * Returns the title of the shop
 * @return {string} - the title of the shop
 */
function shopTitle() {
    // Return the shop title (you have access to the shop object from here)
}

/**
 * Coverts a string to uppercase
 *  @param {string} inputString - a string to be converted to uppercase
 */
function upperCase(inputString) {
    // Return an uppercase version of string
}

/**
 * Returns the shop title in uppercase.
 * @return {string} an uppercase string
 */
function upperCaseShopTitle() {
    // Return an uppercase shop title.
    // Don't repeat yourself. Use the two functions you just built!
}

/**
 * takes a `productId` and returns the product corresponding to that id.
 * @param {number} productId - an id for a product
 * @return {Object} - returns a product object
 */
function productById(productId) {
    // Return a specific product object
}

/**
 * takes a `productId` and returns the price of the product corresponding to that id.
 * @param {number} productId - an id for a product
 * @return {number} - returns a cost in AUD to two decimal places
 */
function productCost(productId) {
    // given a product id, return its cost. DRY ;)
}

/**
 * returns an customer address in a format appropriate for putting on an envelope
 * @param {string} customerEmail - a customer email which is the key for a customer record
 * @return {address} returns a {@link address} in a format appropriate for putting on an envelope
 *
 */
function formatAddress(customerEmail) {
    // return(drinkShop.customers.'jane@doe.com'.address.(streetNumber, street, city, postcode))
    // Given a user's email, return their address in the format:
    // streetNumber street, city, postcode
    // E.g. 10 Amelia St, Sydney, 2000
    // Hint: some destructuring might save you a few lines.
}

/**
 * returns the total cost of an order which is the sum of all products contained in an order
 * @param {string} customerEmail - a customer email which is the key for a customer record
 * @param {number} orderId - an id number corresponding to an order
 * @return {number} the total cost of the order in AUD to two decimal places
 */
function totalCost(customerEmail, orderId) {
    // Return the total cost of an order.
}

/**
 * adds a product to the products object
 * @param {number} id - a unique numeric id for a product
 * @param {string} title - the title of the product
 * @param {number} price - the price of the product in AUD to two decimal places
 */
function addProduct(id, title, price) {
    // Add a product to the shop.
}

/**
 * updates the price of a product in the products object
 * @param {number} id - the id for a product in the products object
 * @param {number} newPrice - the new price for a product in AUD to two decimal places
 */
function updateProductPrice(id, newPrice) {
    // Update the price of a specific product
}


module.exports = {
    shopTitle: shopTitle(),
    upperCase: upperCase(),
    upperCaseShopTitle: upperCaseShopTitle(),
    productById: productById(),
    productCost: productCost(),
    formatAddress: formatAddress(),
    totalCost: totalCost(),
    addProduct: addProduct(),
    updateProductPrice: updateProductPrice()
}

