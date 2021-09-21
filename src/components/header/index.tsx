import logoImg from '../../assets/logo.svg'
import {Container,Content} from './styles'
import Modal from 'react-modal'
import { useState } from 'react'

type headerProps = {
    onOpenNewTransactionModal:()=>void;
}

export function Header(props:headerProps){

  

    return(
         <Container>
             <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={props.onOpenNewTransactionModal}>
                    Nova transacao
                </button>
               
            </Content>
            </Container>
    )
}