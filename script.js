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

function deleteProduct(index) {
    if (index >= 0 && index < productList.length) {
        productList.splice(index, 1); // ลบรายการที่ตำแหน่ง index
        displayProducts();
    }
}
function displayProducts() {
    const productListElement = document.getElementById("productList");
    productListElement.innerHTML = "";

    productList.forEach((product, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${product}`;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "ลบ";
        deleteButton.onclick = () => deleteProduct(index); // เรียกใช้ฟังก์ชัน deleteProduct ด้วยตำแหน่ง index
        li.appendChild(deleteButton);

        productListElement.appendChild(li);
    });
}
