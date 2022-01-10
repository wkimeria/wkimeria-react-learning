import React, { useState } from 'react';

import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpensesFilter"
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';
import './Expenses.css'
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
    const [yearEntered, setYearEntered] = useState(null);
    const handleYearFilterChange = (yearEntered) => {
        setYearEntered(yearEntered);
    }

    const filteredExpenses = (yearEntered, expenses) => {
        return (yearEntered === null || yearEntered === '') ? expenses : expenses.filter(expense => {
             return expense.date.getFullYear().toString() === yearEntered;
        });
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter onYearFilterChange={handleYearFilterChange}/>
                <ExpensesChart expenses = {filteredExpenses(yearEntered, props.expenses)} />?
                <ExpensesList items = {filteredExpenses(yearEntered, props.expenses)} />
            </Card>
        </div>
    );
}

export default Expenses;
