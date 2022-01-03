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

    return (
        <div>
            <ExpenseFilter onYearFilterChange={handleYearFilterChange}/>
            <Card className="expenses">{filteredExpenses.map(
                expense => <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}/>
            )}</Card>
        </div>
    );
}

export default Expenses;
