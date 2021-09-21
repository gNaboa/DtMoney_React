import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model} from 'miragejs'
import App from './App';


createServer({

  models:{
    transaction:Model
  },

  seeds(server){
     server.db.loadData({
       transactions:[
         {
           id:1,
           title:'Freelance de website',
           type:'Outcome',
           category:'dev',
           value:'1200',
           createAt:new Date('2021-02-18 09:00:00')
         }
       ]
     })
  },
  routes(){
    this.namespace = 'api';
    this.get('/transactions',()=>{
      return this.schema.all('transaction')
      
    })

    this.post('/transactions',(schema,request)=>{

       const data = JSON.parse(request.requestBody)
        return schema.create('transaction',data)
    })
  }
})

ReactDOM.render(

    <App />
 ,
  document.getElementById('root')
);



