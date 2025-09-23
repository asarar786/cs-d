const expemses = [];

function addExpense() {
  const name = document.getElementById("expensename").value.trim();
  const amount = parseFloat(document.getElementById("expenseamount").value);
  const discription = document
    .getElementById("expensediscription")
    .value.trim();
  const date = document.getElementById("expensedate").value;
        
  if (!name) {
    alert("please enter valid name");
  } else if (isNaN(amount)) {
    alert("please enter valid amount");
  } else if (amount <= 0) {
    alert("Amount must be greater then 0");
  } else if (!date) {
    alert("please enter valid date");
  }
  return;
}
expemses.push({ name, amount, description, date });

