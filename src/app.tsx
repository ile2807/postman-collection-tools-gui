import { Text, Window, hot, View } from "@nodegui/react-nodegui";
import React, { useState } from "react";
import { QIcon, QMessageBox, ButtonRole, QPushButton } from "@nodegui/nodegui";
import { StepOne } from "./components/stepone";
import { StepTwo } from "./components/steptwo";
import { Buttons } from "./components/buttons";
import nodeguiIcon from "../assets/jackal.png";
const dogImg = require("./components/icon");
const jackal = require("jackal-postman");

const minSize = { width: 500, height: 480 };
const winIcon = new QIcon(nodeguiIcon);
type resources = { [key: string]: any, sf: string, sd: string, of: string, command: string }

const App = () => {
  let values: resources = { sf: "", sd: "", of: "", command: "mv" };
  const update = (key: string, value: string) => {
    values[key] = value;
  }
  const showMessage = (text: string) => {
    const messageBox = new QMessageBox();
    messageBox.setWindowIcon(winIcon);
    messageBox.setWindowTitle("Info");
    messageBox.setText(text);
    const accept = new QPushButton();
    accept.setText('OK');
    messageBox.addButton(accept, ButtonRole.AcceptRole);
    messageBox.exec();
  }
  const runCommand = async () => {
    const executionResult = await jackal.run(values.command, values.sf, values.sd, values.of);
    let message = "";
    if (executionResult instanceof Set) {
      executionResult.forEach(e => message += e + ", ")
    } else {
      message = executionResult;
    }
    showMessage("Execution: " + message);
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
        <StepOne update={update} />
        <Text id="step-2">2. Select files and folder</Text>
        <StepTwo update={update} />
        <Buttons execute={runCommand} />
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
