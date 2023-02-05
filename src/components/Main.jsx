import { useState } from "react";


export default function Main() {
    //const [message, setMessage] = useState('Welcome to Contact List')
    const [customers, setCustomers] = useState()
    //setMessage(`Loading...`)
    const getCustomers = () => {
    fetch(`https://expr-api-mongo-fs-deployed.web.app/getall`)
        .then(res => res.json())
        .then(setCustomers)
        .catch(alert)
    }
    return (
        <article>
            <div>
                <button onClick={() => getCustomers()}>Get Data</button>
            </div>
            {!customers
                ? <h2>hello</h2> 
                : <ul> {customers.map( customer => ( 
                    <li>{customer.first_name}</li>
                        ))
                    }
                </ul>
            }
        </article>
    )
}
