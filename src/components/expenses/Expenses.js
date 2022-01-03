import React, { useState } from 'react';

import ExpensesList from "./ExpensesList";
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
            <Card className="expenses">
                <ExpenseFilter onYearFilterChange={handleYearFilterChange}/>
                <ExpensesList items ={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;
