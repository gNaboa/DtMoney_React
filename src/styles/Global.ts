import {createGlobalStyle} from 'styled-components'



export const GlobalStyles = createGlobalStyle`

   :root{
       --background:#f8f2f5;
       --red:#E52E40;
       --blue:#5429CC;
       --blue-light:#6933FF;
       --text-title:#363F5F;
       --text-body:#969CB3;
       --shape:#FFFFFF;
       --green:#33CC95;
   }
  
  *{
      margin:0;
      padding:0;
      box-sizing:border-box;

  }

  // font size:16px (desktop)

  html{
      @media(max-width:1080px){
          font-size:93.75%; //15px
      }
      @media(max-width:720px){
          font-size:87.5%; //14px
      }
  }
  body{
      background:var(---background);
      
  }

  body,input,textarea,button{
      font-family:'Poppins',sans-serif
  }

  button{
      cursor:pointer;
  }

  [disabled]{
     opacity:0.6;
     cursor:not-allowed;
  }

  .react-overlay-modal{
        background:rgba(0,0,0,0.5);
        position:fixed;
        bottom:0;
        top:0;
        left:0;
        right:0;
        display:flex;
        align-items:center;
        justify-content:center;
  }
  .react-modal-content{
    width:100%;
    max-width:576px;
    background:#f8f2f5;
    padding:3rem;
    position:relative;
    border-radius:0.25rem;
  }
  .button-close-modal{
     
     position:absolute;
     right:1.5rem;
     top:1.5rem;
     border:0;
     background:transparent;
     transition: filter 0.2s;
     :hover{
         filter:brightness(0.9);

     }
  }
`;

