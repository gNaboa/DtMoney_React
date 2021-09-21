import {Container} from './styles'
import Income from '../../assets/income.svg'
import Outcome from '../../assets/outcome.svg'
import Total from '../../assets/total.svg'
import {TransactionContext} from '../../TransactionContext'
import { useContext, useState } from 'react'

export function Summary(){
     
  const {transactions} = useContext(TransactionContext)

   const sumary= transactions.reduce((acc,transacition)=>{

       if(transacition.type=='Income'){
           acc.deposits+=transacition.value
           acc.total+=transacition.value;
       }
       else{
           acc.withdraws+=transacition.value
           acc.total-=transacition.value
       }

       return acc;
   },{
       deposits:0,
       withdraws:0,
       total:0
   })


    return(

   <Container>
    <div>
        <header>
            <p>Entrada</p>
            <img src={Income} alt="" />
        </header>
        <strong>R$ {sumary.deposits}</strong>
    </div>
    <div>
        <header>
            <p>Saida</p>
            <img src={Outcome} alt="" />
        </header>
        <strong>-R${sumary.withdraws}</strong>
    </div>
    <div>
        <header>
            <p>Total</p>
            <img src={Total} alt="" />
        </header>
        <strong>R$ {sumary.total}</strong>
    </div>

   </Container>
    
    )
}