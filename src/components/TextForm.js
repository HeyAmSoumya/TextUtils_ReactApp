import React, { useState } from 'react';


// it wil return only one component so we gonna use " <> "
export default function TextForm(props) {

  const handleUpClick = () => {
    console.log("The button is clicked:  " + text);
    let resText = text.toUpperCase();
    setText(resText)
    props.showAlert("Converted to UpperCase: ", "success")
  }

  const handleLoClick = () => {
    console.log("The button is clicked:  " + text);
    let resText = text.toLowerCase();
    setText(resText)
    props.showAlert("Converted to LowerCase: ", "success")
  }

  const ClearText = () => {
    let resText = "";
    setText(resText)
    props.showAlert("Text is now cleaerd: ", "success")
  }

  const HandelExtraSpace = () => {
    // === this the concept of js- "rejects" =========  //
    // if in a given text , present one space or more than that 
    // it will split the given text make an array..
    let newtext = text.split(/[ ]+/)

    // here the split text are inside the newtext and , we join the split one with one space ( " " ) ..
    setText(newtext.join(" "))
    props.showAlert("Extra space is removed: ", "success")
  }



  const handleOnChange = (event) => {
    // =====  onChange ={}   === //
    // this is the way to change any thing in the target container...
    console.log("On Change!!")
    // this is help to to change value in the taget conatiner...
    setText(event.target.value)

  }
  const [text, setText] = useState("Enter the text here"); // it's a default value..
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
        <h1 >{props.heading}</h1>
        <div className="mb-3">

          <label htmlFor="textForm" className="form-label" >Text Area</label>
          <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} id="textForm" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={ClearText}>Clear Text</button>
        <button className="btn btn-primary" onClick={HandelExtraSpace}>Remove Extra Space</button>


      </div >

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
        <h2 >Your Text Summery</h2>
        <p >
          {text.split(" ").length} Words {text.length} Charecters
        </p>
        <p >
          {0.008 * text.split(" ").length}  Minutes to read.
        </p>

        <h3 >Preview</h3>
        <p>
          {text.length > 0 ? text : "Enter text in the box to preview here!"}
        </p >


      </div>


    </>
  )
}
