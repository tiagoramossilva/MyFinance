import React from 'react';

const Transactions = ({ lista }) => {
  return (
    <div>
      <h1 className='tituloTransaction'>Transações</h1>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Descrição</th>
            <th>Entrada</th>
            <th>Saída</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((item) => (
            <tr key={item.codigo}>
              <td>{item.codigo}</td>
              <td>{item.descricao}</td>
              <td>{item.entrada}</td>
              <td>{item.saida}</td>
              <td>{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ); 
};

export default Transactions;
