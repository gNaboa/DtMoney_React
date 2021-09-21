import {createContext, ReactNode, useEffect, useState} from 'react'
import { api } from './services/api';

interface Transaction {
    id:number,
    title:string,
    type:string,
    value:number,
    category:string,
    createAt:string

}

interface TransactionProps{
    children:ReactNode
}

interface TransactionInputs{
    title:string,
    type:string,
    value:number,
    category:string,
}

type TransactionContextData = {
    createTransaction:(transaction:TransactionInputs)=>Promise<void>,
    transactions:Transaction[]
}

export const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData);


export function TransactionProvider(props:TransactionProps){


    
    const [transactions,setTransactions] = useState<Transaction[]>([])
 
    useEffect(()=>{
      api.get("transactions")
       .then(response=>setTransactions(response.data.transactions))
    },[])
     

  async function createTransaction(transactionInput:TransactionInputs){
       
      const response= await api.post('/transactions',{...transactionInput,createAt:new Date()});

      const {transaction} = response.data
      setTransactions([...transactions,transaction])
        
   }

    return(

          <TransactionContext.Provider value={{transactions,createTransaction}}>
             {props.children}

          </TransactionContext.Provider>

    )
}