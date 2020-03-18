import React from 'react';
import {Card} from './../card/card.component';
import './card-list.styles.css';
export const CardList=(props)=>(
  
        <div className="cardList">
            {console.log(props)}
            {props.monsters.map(
                    monster=>(               
                        <Card key={monster.id} monster={monster}/>
                        )
                    )}
        </div>

)