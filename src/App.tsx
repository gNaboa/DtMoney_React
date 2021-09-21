import React, { useState } from 'react';
import Modal from 'react-modal'
import {GlobalStyles} from './styles/Global'
import {Header} from './components/header/index'
import {Dashboard} from './components/Dashboard/index'
import {ModalTransaction} from './components/modal/index'
import {TransactionContext} from './TransactionContext'
import {TransactionProvider} from './TransactionContext'
function App() {

  const[isModalOpen,setModalState] = useState(false);

  function handleOpemNewTransactionModal(){

      setModalState(true);

  }
  function handleCloseNewTransactionModal(){

      setModalState(false);

  }
  return (
     <TransactionProvider >

      <Header onOpenNewTransactionModal={handleOpemNewTransactionModal} />
      <Dashboard/>
      <ModalTransaction  isModalOpen={isModalOpen} handleCloseNewTransactionModal={handleCloseNewTransactionModal} />
      
      <GlobalStyles/>
      </TransactionProvider>
  );
}

export default App;
