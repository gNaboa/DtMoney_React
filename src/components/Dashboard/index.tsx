
import {Container} from './styles'
import {Summary}from '../Summary/index'
import {Transaction} from '../TransactionTable/index'
export function Dashboard(){
    return(
        <Container>
           <Summary/>
           <Transaction/>
        </Container>
    )
}