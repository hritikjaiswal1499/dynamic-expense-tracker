const form = document.getElementById('expense-form');
const tableBody = document.querySelector('#expense-table tbody');
const totalExpenses = document.getElementById('total-expenses');
const categorySummary = document.getElementById('category-summary');
let expenses = [];
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const description = document.getElementById('description').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const category = document.getElementById('category').value;
  const date = new Date().toLocaleDateString();

  const expense = { description, amount, category, date };
  expenses.push(expense);
  updateUI();
  form.reset();
});
function updateUI() {
  tableBody.innerHTML = '';
  categorySummary.innerHTML = '';

  expenses.forEach((expense, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${expense.description}</td>
      <td>${expense.amount.toFixed(2)}</td>
      <td>${expense.category}</td>
      <td>${expense.date}</td>
      <td>
        <button onclick="deleteExpense(${index})">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  totalExpenses.textContent = total.toFixed(2);

  const categoryTotals = {};
  expenses.forEach((exp) => {
    categoryTotals[exp.category] = (categoryTotals[exp.category] || 0) + exp.amount;
  });
  for (const [category, total] of Object.entries(categoryTotals)) {
    const li = document.createElement('li');
    li.textContent = `${category}: ${total.toFixed(2)}`;
    categorySummary.appendChild(li);
  }
}
function deleteExpense(index) {
  expenses.splice(index, 1);
  updateUI();
}
function toggleInstructions() {
    var panel = document.getElementById("instruction-panel");
    panel.style.display = (panel.style.display === "flex") ? "none" : "flex";
}
