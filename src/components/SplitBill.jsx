import React from 'react';
import dollar from '../../images/icon-dollar.svg';
import person from '../../images/icon-person.svg';

const SplitBill = ({ setBillAmount, setTipPercentage, setNumPeople, error, setError }) => {
  const handleBillChange = (e) => setBillAmount(parseFloat(e.target.value) || 0);
  const handleTipChange = (percentage) => setTipPercentage(percentage);
  const handlePeopleChange = (e) => {
    const value = parseInt(e.target.value);
    if (value <= 0) {
      setError("Can't be zero");
    } else {
      setError(null);
      setNumPeople(value);
    }
  };

  return (
    <form className='flex flex-col gap-4'>
      <div className='flex flex-col'>
        <label className='text-base font-bold text-neutral-dark-grayish-cyan' htmlFor="bill-amount">Bill</label>
        <div className="flex items-center bg-neutral-very-light-grayish-cyan  border border-neutral-grayish-cyan px-4 rounded">
          <span className="text-neutral-dark-grayish-cyan">
            <img className='w-4' src={dollar} alt="dollar" />
          </span>
          <input
            type="number"
            inputMode='decimal'
            className="w-full text-right text-neutral-very-dark-cyan bg-neutral-very-light-grayish-cyan font-sans font-bold text-form-input p-2 focus:outline-none"
            placeholder='0'
            onChange={handleBillChange}
          />
        </div>
      </div>
      <label className='text-base font-bold text-neutral-dark-grayish-cyan' htmlFor="tip-amount">Select Tip %</label>
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-2'>
        {[5, 10, 15, 25, 50].map((percentage) => (
          <button
            type="button"
            className='w-full bg-neutral-very-dark-cyan hover:bg-primary-cyan text-white hover:text-neutral-very-dark-cyan text-xl font-bold px-4 py-2 rounded-lg'
            onClick={() => handleTipChange(percentage)}
            key={percentage}
          >
            {percentage}%
          </button>
        ))}
        <input
          className='w-full bg-neutral-very-light-grayish-cyan text-form-input placeholder:text-center focus:outline-primary-cyan text-neutral-very-dark-cyan font-sans font-bold text-2xl cursor-text px-2 rounded-lg'
          type="text"
          inputMode='numeric'
          id="custom"
          name="custom"
          placeholder="Custom"
          onChange={(e) => handleTipChange(parseFloat(e.target.value) || 0)}
        />
      </div>
      <div className="flex flex-col">
        <div className='flex items-center justify-between '>
          <label className='text-base font-bold text-neutral-dark-grayish-cyan' htmlFor="num-people">Number of People</label>
          {error && (
            <div className=" text-red-500 text-base ">{error}</div>
          )}</div>
        <div className={`flex items-center bg-neutral-very-light-grayish-cyan border border-neutral-grayish-cyan px-4 rounded ${error ? 'border-2  border-red-500' : ''}`}>
          <span className="text-neutral-dark-grayish-cyan">
            <img className='w-4' src={person} alt="person" />
          </span>
          <input
            type="number"
            inputMode='numeric'
            className="w-full text-right text-neutral-very-dark-cyan bg-neutral-very-light-grayish-cyan font-sans font-bold text-form-input p-2 focus:outline-none"
            placeholder='1'
            onChange={handlePeopleChange}
          />
        </div>
      </div>
    </form>
  );
};

export default SplitBill;
