import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Item() {
    
    const [items, setItems] = useState();

    
    return (
        <div>
            <h1>Item</h1>
        </div>
    );
}

export default Item;


/*
{
    address: {street: "Kulas Light", suite: "Apt. 556", city: "Gwenborough", zipcode: "92998-3874", geo: {…}}
    company: {name: "Romaguera-Crona", catchPhrase: "Multi-layered client-server neural-net", bs: "harness real-time e-markets"}
    email: "Sincere@april.biz"
    id: 1
    name: "Leanne Graham"
    phone: "1-770-736-8031 x56442"
    username: "Bret"
    website: "hildegard.org"
}
 */