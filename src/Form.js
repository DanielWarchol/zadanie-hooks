import React, {useState} from 'react';
import './Form.css';

function Form(props) {

    const [inputImie, setInputImie] = useState('h1');
    const [textsubmit , setTextSubmit] = useState(props.initValue);
    const [inputImie , setInputImie] = useState('');

    const handleInputImieChange = (event) => {
        setInputImie(event.target.value)
    }
       
    const formSubmit = (event) => {
        event.preventDefault();
    }

    const changeSubmit = () => {
        setTextSubmit((prevSubmit)=> {
            return prevSubmit + textsubmit;
        });
    }
    return (
        <div className="color-main">
            <h1 className="text" value={setInputImie}></h1>

            <form onSubmit={setTextSubmit}>
                Imię : <br />
                <input type="text" value={inputImie} onChange={handleInputImieChange} /> <br />

                Nazwisko : <br />
                <input type="text" /> <br /><br />

                
                <button type="submit" onSubmit={textsubmit}>Wyświetl Dane</button> 
            </form>
        </div>
    )
}

export default Form;
