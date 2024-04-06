
import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upper case!", "Success");
    }
    const handleLoClick = () =>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to Lower Case!", "Success");
    }

    const handleClear = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Text has been cleared", "Success");
    }

    const handleSpaces = () =>{
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert("Extra spaces have been cleared", "Success");
    }
    
    const handleOnchange = (event) =>{
        // console.log("on Change");
        setText(event.target.value);
    }
    const[text,setText] = useState("");

  return (
    <>
    <div className="container" style = {{color : props.mode ==='dark'?'white' :'black'}}>
    <h1>{props.heading} </h1>
    <div className="mb-3">
        <textarea className="form-control" value ={text} onChange = {handleOnchange} style = {{backgroundColor : props.mode ==='dark'?'grey' :'white', color :props.mode ==='dark'?'white' :'black' }} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to Upper Case
    </button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>
        Convert to Lower Case
    </button>
    <button className="btn btn-primary mx-2" onClick={handleClear}>
        Clear Text
    </button>
    <button className="btn btn-primary mx-2" onClick={handleSpaces}>
        Clear Extra Spaces
    </button>
    </div>
    <div className="container my-3" style = {{color : props.mode ==='dark'?'white' :'black'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} minutes read</p>
    <h3>Preview</h3>
    <p>{text}</p>
    </div>
    </>
  )
}
