import './ExpenseForm.css';
import React, { useState } from 'react';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = (event) => {
        console.log("title: " + event.target.value);
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        console.log("amount: " + event.target.value);
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        console.log("date: " + event.target.value);
        setEnteredDate(event.target.value);
    }

    return (<form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="text" type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
            </div>
            <div className="new-expense__actions">
                <button type="submit"></button>
            </div>
        </div>
    </form>);
};
export default ExpenseForm;
