import React, {useState} from 'react';
import './Form.css';

function Form(props) {

    const [textbtn, setTextBtn] = useState('h1');
    const [textsubmit , setTextSubmit] = useState(props.initValue);

    const changeSubmit = () => {
        setTextSubmit((prevSubmit) => {
            return prevSubmit + textsubmit;
        })
    }
       
    return (
        <div className="color-main">
            <h1 className="text" onChange={textbtn}></h1>

            <form onSubmit={setTextBtn}>
                Imię : <br />
                <input type="text" /> <br />

                Nazwisko : <br />
                <input type="text" /> <br /><br />

                
                <button type="submit" onClick={changeSubmit}>Wyświetl Dane</button> 
            </form>
        </div>
    )
}

export default Form;
