import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Shop() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        // const data = await fetch(`https://robohash.org/${props.monster.id}?set=set2&size=180x180`);
        const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const items = await data.json();
        setItems(items);
    }

    return (
        <div>
            <h1>Shop Page</h1>
             {items.map(item => (
                <h1 key={item.id}>
                    <Link to={`/shop/${item.id}`}>
                        {item.name}
                    </Link>
                </h1>
            ))}
        </div>
    );
}

export default Shop;


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