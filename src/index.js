import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import './index.css';
import Header from './Header';
let curDate = new Date();
  curDate= curDate.getHours();
  let greeting='';
  if(curDate>=1 && curDate<12)
  {
      greeting='Good Morning';
  }
  else if(curDate>=12 && curDate<19)
 {
     greeting ='Good Afternoon';
 }
 else{
     greeting='Good Night';
 }
ReactDOM.render(
  <>
     <Header><h4>Hello Sir/mam {greeting}</h4></Header>
     <h1 style={{color:'#ff5608',fontFamily:'pacifico',marginTop:'5em'}} className="text-center">Devices..</h1>
    <Cards imgsrc="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    cname="Gaming" />
    <Cards imgsrc="https://images.unsplash.com/photo-1574717024239-25253f4ef40a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    cname="Editing" />
    <Cards imgsrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    cname="Rendering" />
    <div className='bg1'>
    
    </div>
  </>,
  document.getElementById('root')
);
