import { Text, View,ComboBox } from "@nodegui/react-nodegui";
import React from "react";


export function StepOne() {
  return (
    <View style={containerStyle}>
      <Text wordWrap={true}>
      Select one of the listed operation below
      </Text>
      <ComboBox style="height:30px;font-size:14px"
      items={[
        { text: "Merge all collections variables to one output collection file"},
        { text: "Merge all collections variables in one output environment file"},
        { text: "Merge all collections requests to one output collection file"},
        { text: "Merge all collections in collection folders into one output collection file"},
        { text: "Append smart test assertions into output collection file"},
        { text: "Append HTTP:200 test assertions into output collection file"},
        { text: "Remove duplicate requests and save to output collection file"},
        { text: "Append missing collection variables to output collection file"}
      ]}></ComboBox>
    </View>
  );
}

const containerStyle = `
    margin-horizontal: 20px;
    padding-horizontal: 10px;
`;
