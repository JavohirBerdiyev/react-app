import React, { useState } from "react";
import Header from "./components/Header/Header";
import Books from './components/Header/Book/Books';
import Persons from "./components/Persons/Persons";
import Select from "./components/Select/Select";

// icons
import 'boxicons';

// imgs
import { ReactComponent as Star } from './assets/img/star.svg';
import Calendar from './assets/img/calendar.svg';


function App() {
  const [selectValue, setSelectValue] = useState('Salom');

  const hanglerChange = (evt) => {
    setSelectValue(evt.target.value);
    console.log(selectValue);
  }

  // intput matn kiritiladi 
  // 30 dan oshib ketsa 'No'
  // 30 dan oshib ketsa 'Okey' 

  return (
    <div className="App">
      <Header />
      <Books />
      <Persons />
      <Select className="form-select" aria-label="Default select example">
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Select>

      <select onChange={hanglerChange} className="form-select" aria-label="Default select example">
        <option value="One">One</option>
        <option value="Two">Two</option>
        <option value="Three">Three</option>
      </select>
      <p>{selectValue}</p>

      <p>
        salom hamma
        {/* <img src={Star} alt="star" width="25" height="25" /> */}
        <Star width="25" height="25" fill="red" />
        <img src={Calendar} alt="star" width="25" height="25" />
        <box-icon name='home'></box-icon>
      </p>
    </div>
  );
}

export default App;
