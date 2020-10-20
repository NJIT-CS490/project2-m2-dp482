import * as React from 'react';
import { Socket } from './Socket';

function handleSubmit(event) {
    let newMessage = document.getElementById("message_input");
    let newUsername = document.getElementById("user_input");
    Socket.emit('new address input', {
       'address': newUsername.value + ':' +newMessage.value+'',
    });
    newMessage.value
    
    console.log('Sent the address ' + newMessage.value + ' to server!');
    newMessage.value = ''
    
    event.preventDefault();
}

export function Button() {
    return (
        <form onSubmit={handleSubmit}>
            <p><b>Username: </b><input id="user_input" placeholder="Username"></input></p>
            <input id="message_input" placeholder="Enter a message"></input>
            <button> Send! </button>
        </form>
    );
}
