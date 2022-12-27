import React from "react";
import Card from './card';



const CardList = ({robots}) => {
    const cardComponent = robots.map((users, i) => {
        return (
        <Card 
        key={i} 
        id={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].email}
        phone={robots[i].phone}
       

        />
        );
    })
    return (
      <div>

          {cardComponent}
          

      </div>  
    );
}

export default CardList;