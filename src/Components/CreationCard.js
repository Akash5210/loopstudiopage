import React from 'react';

function CreationCard(props) {
    return (
        <div className="creationCard">
            <img src={props.item.imgLink} alt="..."/>
            <a href="#"><h4 className="text-light">{props.item.title}</h4></a>
        </div>
    );
}

export default CreationCard;