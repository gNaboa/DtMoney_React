import styled from 'styled-components'



export const Container = styled.div`

     display:grid;
     grid-template-columns:repeat(3,1fr);
     gap:2rem;
     margin-top:-10rem;

     div{

       background:var(--shape);
       padding:1.5rem 2rem;
        border-radius:0.25rem;
        color:var(--text-title);
       border-bottom:1px solid gray;


         header{
            display:flex;
            justify-content:space-between;
            align-items:center;
             
         }

         strong{
             display:block;
              font-size:2.5rem;
              margin-top:1rem;
         }

         &:last-child{
             background:#33CC95;
             color:white;
         }
     }

`;