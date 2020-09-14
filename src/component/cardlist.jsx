import React from 'react';


import './card.css';

 
export const Cardlist = props =>{
    return(
        <div className='cardlist'> 
        
        {props.monster.map(monster =>(
            <h1 key={monster.id}>{monster.name}</h1>
          ))}</div>
    
    )
}