// รายการสินค้า
const productList = [];

function addProduct() {
    const productInput = document.getElementById("product");
    const productName = productInput.value.trim();

    if (productName !== "") {
        productList.push(productName);
        productInput.value = "";
        displayProducts();
    }
}

function displayProducts() {
    const productListElement = document.getElementById("productList");
    productListElement.innerHTML = "";

    productList.forEach((product, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${product}`;
        productListElement.appendChild(li);
    });
}
