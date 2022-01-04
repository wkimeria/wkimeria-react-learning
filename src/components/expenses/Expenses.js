import React, { useState } from 'react';

import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpensesFilter"
import Card from '../UI/Card';
import './Expenses.css'
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
    const [yearEntered, setYearEntered] = useState(null);
    const handleYearFilterChange = (yearEntered) => {
        setYearEntered(yearEntered);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter onYearFilterChange={handleYearFilterChange}/>
                <ExpensesList items = {
                    yearEntered === null || yearEntered === '' ? props.expenses : props.expenses.filter( expense => { return expense.date.getFullYear().toString() === yearEntered;})
                }/>
            </Card>
        </div>
    );
}

export default Expenses;
