import React from 'react';
import './card.styles.css';

export const Card=(props)=>{
    return(
        <div className="card-container">
            <img src={`https://robohash.org/ ${props.monster.id} ?set=set2&size=150x220`} alt="monster"/>
            <h2 key={props.id}> {props.monster.name} </h2>
            <p> {props.monster.email} </p>
        </div>
    )
    }