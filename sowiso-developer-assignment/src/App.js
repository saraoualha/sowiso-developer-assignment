import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useToast } from "@chakra-ui/react";

const App = () => {
  const [response, setResponse] = useState(0);
  const [valid, setValid] = useState(false);
  const [num1, setnum1] = useState(Math.floor(Math.random() * 9 + 1));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 9 + 1));
  const [signs, setSigns] = useState(["+", "-", "*", "/"]);
  const [sign, setSign] = useState(signs[Math.floor(Math.random() * 4 )]);
  const toast = useToast();
  

  const verifyAnswer = (res) => {
    switch(sign){
      case '+':  
        if (num1 + num2 == res) {
          setValid(true);
        } else {
          setValid(false);
        }
        return;
      case '-':  
        if (num1 - num2 == res) {
          setValid(true);
        } else {
          setValid(false);
        }
        return;
      case '/':  
        if (num1 / num2 == res) {
          setValid(true);
        } else {
          setValid(false);
        }
        return;
      case '*':  
        if (num1 * num2 == res) {
          setValid(true);
        } else {
          setValid(false);
        }
        return;
    }
    
  };

  const setAlert = () => {
    if (valid) {
      toast({
        title: "You've got the right answer! Congrats",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
    });
    } else {
      toast({
        title: "You've got it wrong, give it another go!",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
    });
    }
  };

  return (
    <div class="app">
      <div class="container text-center">
        <div class="row">
          <div class="col align-self-start">
            Question: {num1} {sign} {num2} = ?
          </div>
          <div class="col align-self-center">
            <div class="input-group input-group-sm mb-3">
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Write your answer..."
                onChange={(e) => {
                  e.preventDefault();
                  setResponse(e.target.value);
                  verifyAnswer(e.target.value);
                }}
              />
            </div>
          </div>
          <div class="col align-self-end">
            <button
              type="button"
              class="btn btn-outline-dark btn-sm"
              onClick={() => {
                setAlert();
              }}
            >
              Submit answer
            </button>
            <button
              type="button"
              class="btn btn-outline-dark btn-sm"
              style={{'margin-left':'10px'}}
              onClick={() => {
                setValid(false)
                setnum1(Math.floor(Math.random() * 9 + 1));
                setNum2(Math.floor(Math.random() * 9 + 1));
                setSign(signs[Math.floor(Math.random() * 4)]);
              }}
            >
              Try another question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
