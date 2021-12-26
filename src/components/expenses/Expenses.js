import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter"
import Card from '../UI/Card';
import './Expenses.css'

const Expenses = (props) => {
    const expenses = props.expenses;

    const handleYearFilterChange = (yearEntered) => {
        // TODO: Do something with data
        console.log("Called " + yearEntered);
    }

    return (
        <div>
            <ExpenseFilter onYearFilterChange={handleYearFilterChange}/>
            <Card className="expenses">{expenses.map(
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
