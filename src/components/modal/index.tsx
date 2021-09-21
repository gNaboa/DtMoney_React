
import Modal from 'react-modal'
import closeSvg from '../../assets/close.svg'
import Outcome from '../../assets/outcome.svg'
import Income from '../../assets/income.svg'
import {Container,TransactionButtons} from './styles'
import { FormEvent, useContext, useState } from 'react'
import { api } from '../../services/api'
import { TransactionContext } from '../../TransactionContext'

type modalProps = {
    isModalOpen:boolean,
    handleCloseNewTransactionModal:()=>void
}
export function ModalTransaction(props:modalProps){


    const {createTransaction} = useContext(TransactionContext)
    const[type,setType] = useState('')
    const[title,setTitle] = useState('');
    const[value, setValue] = useState(0);
    const[category,setCategory]=useState('');

    async function handleFormSubmit(event:FormEvent){

           event.preventDefault();
         
      
           
         await createTransaction({
               title,
               type,
               value,
              category
          })
        setType('');
        setTitle('');
        setValue(0);
        setCategory('');
       props.handleCloseNewTransactionModal();
         
     } 

    return(
        <Modal 
         isOpen={props.isModalOpen} 
         onRequestClose={props.handleCloseNewTransactionModal}
         overlayClassName="react-overlay-modal"
         className="react-modal-content"
         >
            <Container onSubmit={handleFormSubmit}>

                <button  onClick={props.handleCloseNewTransactionModal} className="button-close-modal">
                    <img src={closeSvg} alt="Fechar modal" />
                </button>

              <h2>Transaction Modal</h2>

                <input type="text"
                   placeholder="Título"
                   value={title}
                   onChange={(e)=>setTitle(e.target.value)}
                />
                 <input type="text"
                   placeholder="Valor"
                   value={value}
                   onChange={(e)=>setValue(Number(e.target.value))}
                    />

                <TransactionButtons>
                    
                  <button type="button" className={type=='Outcome'?type:''} onClick={()=>setType('Outcome')} >
                      <img src={Outcome} alt="" />
                      <span>Outcome</span>
                  </button>
                  <button type="button" className={type=='Income'?type:''} onClick={()=>setType('Income')}>
                      <img src={Income} alt="" />
                      <span>Income</span>
                  </button>
                     
                </TransactionButtons>
                 <input type="text"
                   placeholder="Categoria"
                   value={category}
                   onChange={(e)=>setCategory(e.target.value)}
                
                />

                <button type="submit">
                    Cadastrar
                </button>
                 
            </Container>
            
         </Modal>
    )

}


