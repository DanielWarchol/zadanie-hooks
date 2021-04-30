import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [inputImie, setInputImie] = useState("");
  const [inputNazwisko, setInputNazwisko] = useState("");
  const [inputWaga, setInputWaga] = useState("");
  const [inputKolorwlosow, setInputKolorwlosow] = useState("");
  const [inputPlec1, setInputPlec1] = useState("");
  const [inputPlec2, setInputPlec2] = useState("");
  const [textToShow, setTextToShow] = useState("");
  const [showError, setShowError] = useState("");

  const handleInputImieChange = (event) => {
    setInputImie(event.target.value);
  };

  const handleInputNazwiskoChange = (event) => {
    setInputNazwisko(event.target.value);
  };

  const handleInputWagaChange = (event) => {
    setInputWaga(event.target.value);
  };

  const handleInputKolorwlosowChange = (event) => {
    setInputKolorwlosow(event.target.value);
  };

  const handleInputPlec1Change = (event) => {
    setInputPlec1(event.target.value);
  };

  const handleInputPlec2Change = (event) => {
    setInputPlec2(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setShowError("");

    if (inputImie && inputNazwisko , inputWaga) {
      setTextToShow(`${inputImie} ${inputNazwisko} ${inputWaga} ${inputKolorwlosow} ${inputPlec1} ${inputPlec2}`);
    } else if (!inputImie && !inputNazwisko) {
      setShowError("Uzupełnij imię i nazwisko");
    } else if (!inputImie) {
      setShowError("Uzupełnij imię");
    } else if(!inputNazwisko) {
      setShowError("Uzupełnij nazwisko");
    } else if (!inputWaga && !inputKolorwlosow){
      setShowError("Uzupełnij wagę i kolor włosów");
    } else if(!inputWaga){
      setShowError("Uzupełnij wagę");
    } else if(!inputKolorwlosow){
      setShowError("Uzupełnij Kolor Włosów");
    } else if(!inputPlec1 && !inputPlec2){
      setShowError("Uzupełnij Płęć");
    } else if(!inputPlec1){
      setShowError("Uzupełnij Płęć 1");
    } else if(!inputPlec2){
      setShowError("Uzupełnij Płęć 2");
    }

  };

  return (
    <div className="color-main">
      <h1 className="text">{textToShow}</h1>
      <form onSubmit={onSubmit}>
        Imię : <br />
        <input type="text" value={inputImie} onChange={handleInputImieChange} />
        <br />
        Nazwisko : <br />
        <input
          type="text"
          value={inputNazwisko}
          onChange={handleInputNazwiskoChange}
        />
         <br />
         Waga:<br />
        <input
          type="text"
          value={inputWaga}
          onChange={handleInputWagaChange}
        /> 
        <br /><br />
        Kolor włosów :
        <br />
        <select onChange={handleInputKolorwlosowChange}>
          <option></option>
          <option>brunet</option>
          <option>blond</option>
          <option>czarny</option>
          <option>jasny brąz</option>
        </select>

        <br />
        Płeć :
        <br />
        <input type="radio"  value={inputPlec1} onChange={handleInputPlec1Change}/>Mężczyzna
        <input type="radio"  value={inputPlec2} onChange={handleInputPlec2Change}/>Kobieta
        <br />
        <br />
        <button type="submit">Wyświetl Dane</button>
      </form>
      {showError}
    </div>
  );
}

export default Form;