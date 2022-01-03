import React, { useState } from 'react';

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter"
import Card from '../UI/Card';
import './Expenses.css'

const Expenses = (props) => {

    const [expenses, _] = useState(props.expenses);
    const [filteredExpenses, setExpenses] = useState(props.expenses);

    const handleYearFilterChange = (yearEntered) => {
        setExpenses(_ => {
            return expenses.filter( expense => { return expense.date.getFullYear().toString() === yearEntered;});
        })
    }

    let expensesContent = <p>No expenses found</p>
    if(filteredExpenses.length > 0){
        expensesContent = filteredExpenses.map(
            expense => <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}/>
        );
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter onYearFilterChange={handleYearFilterChange}/>
                {expensesContent}
            </Card>
        </div>
    );
}

export default Expenses;
