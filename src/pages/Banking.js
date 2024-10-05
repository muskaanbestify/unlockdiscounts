import React from 'react';
import BankingCategoryLayout from './BankingCategoryLayout';

function Banking() {
  const categories = [
    {
      title: 'Credit card',
    },
    {
      title: 'Zero Savings Account',
    },
    {
      title: 'Saving Application',
    },
  ];

  return (
    <div>
      <BankingCategoryLayout categories={categories} />
    </div>
  );
}

export default Banking;
