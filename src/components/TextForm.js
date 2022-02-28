import React, { useState } from 'react';

export default function TextForm(props) {
  const handlerUpClick = () => {
    // console.log('Uppercase Was Clicked !!' + text);
    let newText=text.toUpperCase();
    setText(newText);
  };

  const handlerOnChange = (event) => {
    // console.log('On Change');
    setText(event.target.value);

  };
  const [text, setText] = useState('Enter text here');
    // setText('anjali');
  return (
    <div>
      <h3>{props.heading}</h3>
      <div className='mb-3'>
        <textarea
          className='form-control'
          id='exampleFormControlTextarea1'
          rows='8'
          value={text}
          onChange={handlerOnChange}
        ></textarea>
      </div>
      <button className='btn btn-primary' onClick={handlerUpClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}
