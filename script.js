const productList = [];

function addProduct() {
    const productInput = document.getElementById("product");
    const lotInput = document.getElementById("lot");
    const quantityInput = document.getElementById("quantity");
    
    const productName = productInput.value.trim();
    const lot = lotInput.value.trim();
    const quantity = quantityInput.value.trim();

    if (productName !== "" && lot !== "" && quantity !== "") {
        const productInfo = {
            name: productName,
            lot: lot,
            quantity: quantity
        };

        productList.push(productInfo);
        productInput.value = "";
        lotInput.value = "";
        quantityInput.value = "";
        displayProducts();
    }
}

function displayProducts() {
    const productListElement = document.getElementById("productList");
    productListElement.innerHTML = "";

    productList.forEach((product, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. สินค้า: ${product.name}, ล็อต: ${product.lot}, จำนวน: ${product.quantity}`;
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "ลบ";
        deleteButton.onclick = () => deleteProduct(index); // เรียกใช้ฟังก์ชัน deleteProduct ด้วยตำแหน่ง index
        li.appendChild(deleteButton);
        
        productListElement.appendChild(li);
    });
}

function deleteProduct(index) {
    if (index >= 0 && index < productList.length) {
        productList.splice(index, 1); // ลบรายการที่ตำแหน่ง index
        displayProducts();
    }
}


// โหลดข้อมูลที่บันทึกเมื่อหน้าเว็บโหลด
window.onload = loadSavedData;

function saveData() {
    const textDataInput = document.getElementById("textData");
    const textData = textDataInput.value.trim();

    if (textData !== "") {
        // รับข้อมูลที่มีอยู่ใน Local Storage (หากมี)
        let savedData = JSON.parse(localStorage.getItem("savedData")) || [];

        // เพิ่มข้อมูลใหม่
        savedData.push(textData);

        // บันทึกข้อมูลใหม่ลงใน Local Storage
        localStorage.setItem("savedData", JSON.stringify(savedData));

        // แสดงข้อมูลที่บันทึก
        loadSavedData();

        // เคลียร์ค่าในช่องข้อมูล
        textDataInput.value = "";
    }
}

function loadSavedData() {
    const dataList = document.getElementById("dataList");
    dataList.innerHTML = "";

    // รับข้อมูลที่มีอยู่ใน Local Storage (หากมี)
    const savedData = JSON.parse(localStorage.getItem("savedData")) || [];

    // แสดงข้อมูลที่บันทึก
    savedData.forEach((data, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${data}`;
        dataList.appendChild(li);
    });
}
