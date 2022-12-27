import React from 'react';

const Card = (props) => {
    return (
        <div className=' tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://i.pravatar.cc/200?${props.id}`} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
                <p>{props.phone}</p>
            </div>
        </div>
    )
}

export default Card;

// 

// "https://randomuser.me/api/portraits/women/63.jpg

// https://xsgames.co/randomusers/avatar.php?g=male

// https://robohash.org/${props.id}?set=set5