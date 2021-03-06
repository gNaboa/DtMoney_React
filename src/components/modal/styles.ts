import styled from 'styled-components'

export const Container = styled.form`

  display:flex;
  flex-direction:column;

  h2{
      color:var(--text-title);
      font-size:1.5rem;
      margin-bottom:2rem;
  }
  input{
     width:100%; 
     height:4rem;
     padding:0 1.5rem;

     border-radius:0.25rem;
     background:#e9e9ee;
     border:1px solid #d7d7d7;
     font-weight:400;
     font-size:1rem;

     & + input{
         margin-top:1rem;
     }

  }

  button[type="submit"]{
      width:100%;
      padding:0 1.5rem;
      height:4rem;
      margin-top:1.5rem;
      border:0;
      border-radius:0.25rem;
      color:white;
      background:var(--green);
      font-weight:600;
      transition:filter 0.2s;
      &:hover{
          filter:brightness(0.9);
      }
    
  }

`;

export const TransactionButtons = styled.div`

   margin:1.5rem 0;
  display:grid;
  grid-template-columns: 1fr 1fr;
gap:2rem;

  button{
      align-items:center;
      border:0;
      background:#e9e9ee;
      height:4rem;
      border-radius:0.25rem;
      display:flex;
      border:1px solid #d7d7d7;
      justify-content:center;
      align-items:center;
    transition: border-color 0.2s;
      :hover{
         border-color:#aaa;

      }

      img{
      width:20px;
      height:20px ;

  }

  span{
      margin-left:1rem;
      display: inline-block;
      font-size:1rem;
  }
}

 .Outcome{
   background:var(--red);
   filter:opacity(0.7);
 }
 .Income{
   background:var(--green);
   filter:opacity(0.7);
 } 

`;
