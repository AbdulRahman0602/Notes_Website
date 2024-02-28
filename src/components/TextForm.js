import React, { useState } from 'react'           // Short cut to create react component is 'rfc'

export default function TextForm(props) {
    const handleUpCase = () => {
        console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success")
    }
    const handleLowerCase = () => {
        let newText2 = text.toLowerCase();
        setText(newText2)
        props.showAlert("Converted to Lower Case","success")
    }
    const handleClear = () => {
        setText("")
    }
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter your text here");
    return (
        <>
            <div className="container"style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.disp}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0}className="btn btn-primary mx-1  my-1 btn-lg" onClick={handleUpCase}>Convert to upper case</button>   {/* Short cut to create a button is button.btn.btn-primary */}
                <button disabled={text.length===0}className="btn btn-primary mx-1  my-1 btn-lg" onClick={handleLowerCase}>Convert to upper case</button>   {/* Short cut to create a button is button.btn.btn-primary */}
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 btn-lg" onClick={handleClear}>Clear</button>

            </div>
            <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!== 0 }).length} words and {text.length}characters</p>
                <p>{0.08 * text.split(" ").filter((element)=>{return element.length!== 0 }).length}Minutes taken to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter the text above to preview it"}</p>

            </div>
        </>
    )
}

