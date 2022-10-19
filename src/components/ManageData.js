import { useState } from "react";

const ManageData = () => {
    let someData = 10;

    console.log(someData);

    const [number, setNumber] = useState ();

    console.log(number);

    return (
        <div>
            <div>
                <p>Valor: {someData}</p>
                <button onClick={() => (someData = 15)}>Mudar Variável</button>
            </div>

            <dvi>
                <p>Valor: {number}</p>
                <button onClick={() => setNumber(30)}>Mudar state</button>
            </dvi>

        </div>
    );
};

export default ManageData;