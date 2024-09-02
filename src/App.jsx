import React, { useState, useEffect } from 'react';
import './App.css';
import SplitBill from './components/SplitBill';
import TipAmount from './components/TipAmount';

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numPeople, setNumPeople] = useState(1);
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0);
  const [totalAmountPerPerson, setTotalAmountPerPerson] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (numPeople > 0) {
      const tipAmount = (billAmount * (tipPercentage / 100)) / numPeople;
      const totalAmount = (billAmount / numPeople) + tipAmount;
      setTipAmountPerPerson(tipAmount);
      setTotalAmountPerPerson(totalAmount);
    }
  }, [billAmount, tipPercentage, numPeople]);

  const reset = () => {
    setBillAmount(0);
    setTipPercentage(0);
    setNumPeople(1);
    setTipAmountPerPerson(0);
    setTotalAmountPerPerson(0);
  };

  return (
    <div className="w-full min-h-screen   sm:max-w-screen-md mx-auto flex flex-col justify-center items-center sm:p-6">
      <h1 className='text-4xl font-sans text-neutral-very-dark-cyan font-extrabold tracking-[1rem] text-center  mb-6'>
        SPLI<br />TTER
        </h1>
      <div className="w-full grid  sm:grid-cols-2 bg-neutral-white p-6 rounded-2xl gap-6">
        <SplitBill setBillAmount={setBillAmount} setTipPercentage={setTipPercentage} setNumPeople={setNumPeople} error={error} setError={setError} />
        <TipAmount
          tipAmountPerPerson={tipAmountPerPerson}
          totalAmountPerPerson={totalAmountPerPerson}
          reset={reset}
        />
      </div>
    </div>
  );
}

export default App;
