import React, { useEffect, useState } from 'react';

const Event = ({ event }) => {

    const deleteEvent = (id) => {
        console.log(event);
        fetch(`https://murmuring-caverns-54438.herokuapp.com/${id}`,{
            method:'DELETE'
        } )
        .then(res=>res.json())
        .then(result=>{
            if(result){
             event.style.display='none';

            }
        })
        
    }

    //     const uri = `http://localhost:5055/deleteEvent/${id}`;
    //     fetch(uri, {
    //         method: 'DELETE',
    //         headers: { 'Content-Type': 'application/json' }
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result);
    //             // if (result) {
    //             //     console.log(result);
    //             // }
    //         })

    // }
    return (
        <div className="col-md-6">
            <img style={{ height: '300px' }} src={event.imageURL} alt="" />
            <h3>{event.name} </h3>
            <button onClick={() => deleteEvent(event._id)}>Delete</button>
        </div>
    );
};

export default Event;