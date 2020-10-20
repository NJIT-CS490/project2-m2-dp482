    
import * as React from 'react';


import { Button } from './Button';
import { Socket } from './Socket';

export function Content() {
    const [addresses, setAddresses] = React.useState([]);
    const [ UsersNumber, setUsersNumber] = React.useState([]);
    
    function getNewAddresses() {
        React.useEffect(() => {
            Socket.on('addresses received', (data) => {
                 console.log("Received addresses from server: " + data['allAddresses']);
                 setAddresses(data['allAddresses']);
            })
        });
    }
    getNewAddresses();
    
    function getUsersNumberC() {
        React.useEffect(() => {
            Socket.on('connected', (data) => {
                 console.log("Received addresses from server: " + data['test']);
                 setUsersNumber(data['test']);
            })
        });
    }
    getUsersNumberC();
    
    
     function getUsersNumberD() {
        React.useEffect(() => {
            Socket.on('disconnected', (data) => {
                console.log("Received addresses from server for disconnect: " + data['test']);
                setUsersNumber(data['test']);
            })
        });
    }
    getUsersNumberD();

    return (
        <div>
            <h1>Welcome To Text+</h1>
            <h2><b> Total users: {UsersNumber}  </b></h2>
            <p1>Attention! To explore chatbot (Username= Hari, Message = e.g !! about)</p1>
                <ol>
                    {
                    addresses.map(
                        (address, index)=> 
                        <div key={index}>{address} </div>
                        )
                    }
                </ol>
            <Button />
        </div>
    );
}
