import './ExpenseForm.css';
import React, { useState } from 'react';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [submitted, setSubmitted] =  useState(false)

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

    const submitHandler = (event) => {

        event.preventDefault();

        switch(document.activeElement.name) {
            case 'addNewExpenses':
                setSubmitted(false);
                break;
            case 'addExpense':
                const expenseData = {
                    title: enteredTitle,
                    amount: enteredAmount,
                    date: new Date(enteredDate)
                }
                props.onSaveExpenseData(expenseData);

                setEnteredTitle('');
                setEnteredAmount('');
                setEnteredDate('');

                setSubmitted(true);
            default:
                setSubmitted(true);
        }
    };

    let inputElements = <div>
        <div className="new-expense__actions__add">
            <button type="submit" name="addNewExpenses">Add New Expense</button>
        </div>
    </div>
    if (submitted == false){
        inputElements =  <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="text" type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
            </div>
            <div className="new-expense__actions">
                <button type="submit" name="cancel">Cancel</button>
                <button type="submit" name="addExpense">Add Expense</button>
            </div>
        </div>;
    }


    return (<form onSubmit={submitHandler}>
        {inputElements}
    </form>);
};
export default ExpenseForm;
