import React, {useState} from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
];
const App =() =>{

    const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
    const addExpenseHandler = (expense) => {
        setExpenses(prevExpenses => {
            return[expense, ...prevExpenses];
        })
    }
  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
