import { Text, View, ComboBox, useEventHandler } from "@nodegui/react-nodegui";
import { QComboBoxSignals } from "@nodegui/nodegui";
import React from "react";

const commands =
  [
    { text: "Merge all collections variables to one output collection file", command: "mv", disabled: "", optional: "s" },
    { text: "Merge all collections variables in one output environment file", command: "mev", disabled: "", optional: "s" },
    { text: "Merge all collections requests to one output collection file", command: "mr", disabled: "", optional: "s" },
    { text: "Merge all collections in collection folders into one output collection file", command: "mc", disabled: "", optional: "s" },
    { text: "Append smart test assertions into output collection file", command: "ts", disabled: "f", optional: "" },
    { text: "Append HTTP:200 test assertions into output collection file", command: "t200", disabled: "f", optional: "" },
    { text: "Remove duplicate requests and save to output collection file", command: "crl", disabled: "f", optional: "" },
    { text: "Append missing collection variables to output collection file", command: "amcv", disabled: "f", optional: "" }
  ];

export function StepOne(props: any) {
  const changeHandler = useEventHandler<QComboBoxSignals>(
    {
      currentIndexChanged: (index) => {
        props.update("command", commands[index].command);
      }
    },
    []
  );
  return (
    <View style={containerStyle}>
      <Text wordWrap={true}>
        Select one of the listed operation below
      </Text>
      <ComboBox style="height:30px;font-size:14px" on={changeHandler}
        items={commands}></ComboBox>
    </View>
  );
}

const containerStyle = `
    margin-horizontal: 20px;
    padding-horizontal: 10px;
`;
