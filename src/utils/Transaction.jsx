import React, { useState, useEffect } from "react";
import Header from "./Header";

const Transaction = () => {
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [type, setType] = useState("EXPENSE");

  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenditure, setTotalExpenditure] = useState(0);

  // Load transactions from localStorage when the component mounts
  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem("transactions"));
    if (storedTransactions) {
      setTransactions(storedTransactions);

      // Calculate and set totals
      const income = storedTransactions
        .filter((t) => t.type === "INCOME")
        .reduce((acc, curr) => acc + curr.amount, 0);
      const expenditure = storedTransactions
        .filter((t) => t.type === "EXPENSE")
        .reduce((acc, curr) => acc + curr.amount, 0);

      setTotalIncome(income);
      setTotalExpenditure(expenditure);
    }
  }, []);

  const addTransaction = (e) => {
    e.preventDefault();

    if (amount && desc) {
      const newTransaction = {
        id: transactions.length + 1,
        desc,
        amount: parseFloat(amount),
        type,
      };

      const updatedTransactions = [...transactions, newTransaction];
      setTransactions(updatedTransactions);

      // Update totals based on the type of transaction
      if (type === "INCOME") {
        setTotalIncome(totalIncome + newTransaction.amount);
      } else {
        setTotalExpenditure(totalExpenditure + newTransaction.amount);
      }

      // Save updated transactions to localStorage
      localStorage.setItem("transactions", JSON.stringify(updatedTransactions));

      // Clear input fields
      setAmount("");
      setDesc("");
    }
  };

  const totalBalance = totalIncome - totalExpenditure;

  return (
    <div>
      <div className="grid grid-cols-9">
        <div className="col-span-2 h-[100vh] border border-1 bg-5">
          <Header />
        </div>

        <div className="col-span-7 h-[100vh] bg-1">
          <h1 className="text-5xl text-6 font-bold text-center m-3">
            Hey there!{" "}
          </h1>
          <h2 className="text-xl text-4 font-bold text-center m-2">
            Let's track your money
          </h2>
          <div className="summary flex m-5 ml-10 justify-between">
            <div className="">
              <h2 className="p-5 pl-0 text-5 text-3xl font-bold">
                Your balance
              </h2>
              <h4 className="text-2xl mt-3 text-black font-mono ">
                ${totalBalance.toFixed(2)}
              </h4>
            </div>

            <div className="income ">
              <p className="p-5 pl-0 text-green-600 text-3xl font-bold">
                Income
              </p>
              <h4 className="text-2xl mt-3 text-black font-mono ">
                ${totalIncome.toFixed(2)}
              </h4>
            </div>
            <div className="expenditure ">
              <p className="p-5 pl-0 text-red-600 text-3xl font-bold">
                Expenditure
              </p>
              <h4 className="text-2xl mt-3 text-black font-mono ">
                ${totalExpenditure.toFixed(2)}
              </h4>
            </div>
          </div>

          <div>
            <form className="add">
              <div>
                <input
                  type="text"
                  placeholder="Description"
                  className="text-black border border-6 h-10 w-80 m-10"
                  required
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Amount"
                  className="text-black border border-6 h-10 w-80 m-10"
                  required
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <input
                  type="radio"
                  id="expense"
                  value="EXPENSE"
                  className="text-black border text-2xl border-6 m-2 ml-0"
                  checked={type === "EXPENSE"}
                  onChange={(e) => setType(e.target.value)}
                />
                <label htmlFor="expense" className="text-xl text-5 m-2">
                  Expense
                </label>
                <input
                  type="radio"
                  id="income"
                  value="INCOME"
                  className="text-black border border-6 m-2 ml-0"
                  checked={type === "INCOME"}
                  onChange={(e) => setType(e.target.value)}
                />
                <label htmlFor="income" className="text-xl text-5 m-2">
                  Income
                </label>
              </div>
              <button
                type="submit"
                onClick={addTransaction}
                className="p-2 bg-2 text-6 ml-10"
              >
                Add transaction
              </button>
            </form>
          </div>

          <div className="transaction">
            <h3 className="text-4xl text-5 font-bold text-center">
              Transactions
            </h3>
          </div>

          <div className="box flex">
            <ul className="felx ml-10 ">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex justify-end">
                  <li className=" text-6 p-5 font-bold pr-4">
                    <span className="text-xl font-medium text-white ">
                      Amount :
                    </span>
                    {transaction.amount}
                  </li>
                  <li className=" text-6 p-5 font-bold pr-4">
                    <span className="text-xl font-medium text-white">
                      Description :
                    </span>
                    {transaction.desc}
                  </li>
                  <li className=" text-6 p-5 font-bold pr-4">
                    <span className="text-xl font-medium text-white">
                      Type :
                    </span>
                    {transaction.type}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
