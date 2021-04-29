import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [inputImie, setInputImie] = useState("");
  const [inputNazwisko, setInputNazwisko] = useState("");
  const [textToShow, setTextToShow] = useState("");
  const [showError, setShowError] = useState("");

  const handleInputImieChange = (event) => {
    setInputImie(event.target.value);
  };

  const handleInputNazwiskoChange = (event) => {
    setInputNazwisko(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setShowError("");

    if (inputImie && inputNazwisko) {
      setTextToShow(`${inputImie} ${inputNazwisko}`);
    } else if (!inputImie && !inputNazwisko) {
      setShowError("Uzupełnij imię i nazwisko");
    } else if (!inputImie) {
      setShowError("Uzupełnij imię");
    } else {
      setShowError("Uzupełnij nazwisko");
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
        <br />
        <button type="submit">Wyświetl Dane</button>
      </form>
      {showError}
    </div>
  );
}

export default Form;