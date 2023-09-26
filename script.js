// ดึงองค์ประกอบ HTML ที่เราจะใช้
const incomeList = document.getElementById("income-list");
const expensesList = document.getElementById("expenses-list");
const totalIncome = document.getElementById("total-income");
const totalExpenses = document.getElementById("total-expenses");
const balanceAmount = document.getElementById("balance-amount");

// รายการรายรับและรายจ่ายเริ่มต้น
let income = [];
let expenses = [];

// ฟังก์ชันสำหรับคำนวณรวมและอัปเดตยอดคงเหลือ
function updateBalance() {
    const incomeTotal = income.reduce((acc, item) => acc + item.amount, 0);
    const expensesTotal = expenses.reduce((acc, item) => acc + item.amount, 0);
    const balance = incomeTotal - expensesTotal;

    totalIncome.textContent = `รวมรายรับ: ${incomeTotal}`;
    totalExpenses.textContent = `รวมรายจ่าย: ${expensesTotal}`;
    balanceAmount.textContent = balance >= 0 ? `ยอดคงเหลือ: ${balance}` : `ยอดคงเหลือ: ${balance} (ขาดดุล)`;
}

// ฟังก์ชันสำหรับเพิ่มรายการรายรับ
function addIncome() {
    const description = prompt("รายละเอียดรายรับ:");
    const amount = parseFloat(prompt("จำนวนเงิน:"));

    if (description && !isNaN(amount)) {
        income.push({ description, amount });
        const listItem = document.createElement("li");
        listItem.textContent = `${description}: ${amount}`;
        incomeList.appendChild(listItem);
        updateBalance();
    }
}

// ฟังก์ชันสำหรับเพิ่มรายการรายจ่าย
function addExpense() {
    const description = prompt("รายละเอียดรายจ่าย:");
    const amount = parseFloat(prompt("จำนวนเงิน:"));

    if (description && !isNaN(amount)) {
        expenses.push({ description, amount });
        const listItem = document.createElement("li");
        listItem.textContent = `${description}: ${amount}`;
        expensesList.appendChild(listItem);
        updateBalance();
    }
}

// เชื่อมต่อฟังก์ชันกับปุ่ม
document.getElementById("add-income").addEventListener("click", addIncome);
document.getElementById("add-expense").addEventListener("click", addExpense);

// เรียกใช้งานฟังก์ชันเพื่อแสดงค่าเริ่มต้น
updateBalance();
