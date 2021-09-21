import { useContext, useEffect, useState } from 'react'
import {Container} from './styles'
import {api} from '../../services/api'
import {TransactionContext} from '../../TransactionContext'
export function Transaction(){
     
      const {transactions} = useContext(TransactionContext)

    return(
        <Container>
              <table>
                  <thead>
                       <tr>
                           <th>Titulo</th>
                           <th>Valor</th>
                           <th>Categoria</th>
                           <th>Data</th>
                       </tr>
                  </thead>
                  <tbody>
                   
                       {transactions.map(transaction=>{
                           return( 
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {Intl.NumberFormat('pt-BR',{
                                    style:'currency',
                                    currency:'BRL'
                                }).format(transaction.value)})
                            </td>
                            <td>{transaction.category}</td>
                             <td>{Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createAt))}</td>
                        </tr>
                      )
                       })}
                  </tbody>
              </table>
        </Container>
    )
}