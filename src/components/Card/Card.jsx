// import React from 'react';

import './Card.css'

export default function Card(props){
   //console.log(props.item.nome);
   
    
    return(
        <div className='card'>
            <h1>{props.nome}</h1> 
            <img src={props.imagem} width="200px"/>
            {props.evoluiPara == null || props.evoluiPara === undefined ? (<h2>Esse item não evolui</h2>):(<h2>Esse item evolui para: {props.evoluiPara}</h2>)}
            
        </div>
    )
}

