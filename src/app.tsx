import { Text, Window, hot, View } from "@nodegui/react-nodegui";
import React, { useState } from "react";
import { QIcon } from "@nodegui/nodegui";
import { StepOne } from "./components/stepone";
import { StepTwo } from "./components/steptwo";
import { Buttons } from "./components/buttons";
import nodeguiIcon from "../assets/jackal.png";
const dogImg = require("./components/icon");

const minSize = { width: 500, height: 480 };
const winIcon = new QIcon(nodeguiIcon);
type resources = { [key: string]: any, sf: string, sd: string, of: string, command:number }

const App = () => {
  let values: resources = { sf: "", sd: "", of: "", command:0 };
  const update = (key: string, value: string) => {
    values[key] = value;
  }
  const execute = () => {
    console.log(values)
  }
  return (
    <Window
      windowIcon={winIcon}
      windowTitle="Jackal Postman tools"
      minSize={minSize}
      styleSheet={styleSheet}
    >
      <View style={containerStyle}>
        <Text id="welcome-text">Welcome to Jackal</Text>
        <Text>
          {`
          <p style="color: rgb(255,72,38);"> 
            <center>
              <img src="${dogImg}" alt="doggy" width="100" />  
            </center>
          </p>
          <hr />
        `}
        </Text>
        <Text id="step-1">1. Select command you want to perform</Text>
        <StepOne update={update}/>
        <Text id="step-2">2. Select files and folder</Text>
        <StepTwo update={update} />
        <Buttons execute={execute} />
      </View>
    </Window>
  );
}

const containerStyle = `
  flex: 1; 
`;

const styleSheet = `
  #welcome-text {
    font-size: 24px;
    padding-top: 20px;
    qproperty-alignment: 'AlignHCenter';
    font-family: 'sans-serif';
  }

  #step-1, #step-2 {
    font-size: 18px;
    padding-top: 10px;
    padding-horizontal: 20px;
  }
`;

export default hot(App);
