import React from 'react';

const Home = ({ totalEntradas, totalSaidas, saldoAtual }) => {
  return (
    <div className='homeCard'>
      <h1 className='homeTitle'>Home</h1>
      <p>Saldo Atual: {saldoAtual}</p>
      <p>Total Receitas: {totalEntradas}</p>
      <p>Total Despesas: {totalSaidas}</p>
      
    </div>
  );
};

export default Home;
