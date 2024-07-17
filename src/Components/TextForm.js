import React, { useState } from 'react'

export default function TextForm(props) {
  console.log(props, 'props')

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleClearClick = () => {
    let newText = '';
    setText(newText)
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const [text, setText] = useState('');


  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

        <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}Enter your Text</h1>
        <div className="mb-3" >
          <label htmlFor="myBox"> </label>
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '' : 'white' }} id="myBox" rows="15"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
      </div>

      <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((Element) => { return Element.length !== 0 }).length} words and {text.length} characters</p>
        <p>{0.008 * text.split("").filter((Element) => { return Element.length !== 0 }).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>

    </>
  )
}
