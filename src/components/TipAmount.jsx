import React from 'react';

const TipAmount = ({ tipAmountPerPerson, totalAmountPerPerson, reset }) => {
  return (
    <div className={'flex flex-col justify-between gap-2 bg-neutral-very-dark-cyan p-6 rounded-xl'}>
      <div className='flex flex-col pt-4  gap-4'>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col text-sm text-neutral-white'>
            <h2 className='font-bold'>Tip Amount</h2>
            <p className='font-light text-neutral-grayish-cyan'>/ person</p>
          </div>
          <h1 className='text-4xl text-primary-cyan font-extrabold'>${tipAmountPerPerson.toFixed(2)}</h1>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col text-sm text-neutral-white'>
            <h2 className='font-bold'>Total</h2>
            <p className='font-light text-neutral-grayish-cyan'>/ person</p>
          </div>
          <h1 className='text-4xl text-primary-cyan font-extrabold'>${totalAmountPerPerson.toFixed(2)}</h1>
        </div>
      </div>
      <button
        className='w-full bg-primary-cyan hover:bg-primary-dark-cyan text-neutral-very-dark-cyan text-form-input font-bold px-4 py-2 rounded-lg'
        onClick={reset}
      >
        RESET
      </button>
    </div>
  );
};

export default TipAmount;
