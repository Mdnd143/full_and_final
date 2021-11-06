import React, { useState } from "react";

export default function Document() {
  const [myBtn, setMyBtn] = useState("enable dark mode");
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white"
  });
  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black"
      });
      setMyBtn("dark mode on");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white"
      });
    }
  };
  const [text, setText] = useState("");
  const textInside = (event) => {
    setText(event.target.value);
  };
  const clickToUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const clickToClear = () => {
    setText("");
  };
  const clickToLow = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clickToCopy = () => {
    const texi = document.querySelector("#myBox");
    texi.select();
    texi.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(texi.value);
  };
  return (
    <div>
      <div class="form-check form-switch">
        <input
          style={myStyle}
          class="form-check-input"
          type="checkbox"
          onClick={toggleStyle}
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label
          class="form-check-label"
          style={myStyle}
          for="flexSwitchCheckDefault"
        >
          {myBtn}
        </label>
      </div>
      <div className="container" style={myStyle}>
        <h1 class="my-4">your will be shown here</h1>
        <textarea
          style={myStyle}
          value={text}
          onChange={textInside}
          type="text"
          id="myBox"
          className="form-control my-3"
          rows="5"
        />
        <button onClick={clickToUp} type="button" class="btn btn-primary">
          change to upper case
        </button>
        <button onClick={clickToClear} type="button" class="btn btn-danger">
          clear all
        </button>
        <button type="button" onClick={clickToLow} class="btn btn-success">
          change to lower case
        </button>
        <button type="button" onClick={clickToCopy} class="btn btn-warning">
          copy text
        </button>
        <div> {text} </div>
        <div> you have typed {text.length} letters </div>
        <div> you have typed {text.split(" ").length - 1} words </div>
        <div> current word is in progress.</div>
      </div>
    </div>
  );
}
