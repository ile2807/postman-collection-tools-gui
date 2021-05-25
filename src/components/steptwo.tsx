import { Text, View, LineEdit } from "@nodegui/react-nodegui";
import React from "react";
export function StepTwo() {
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>
        Select source file
      </Text>
      <LineEdit>
      </LineEdit>
      <Text style={textStyle}>
        Select source folder
      </Text>
      <LineEdit>
      </LineEdit>
      <Text style={textStyle}>
        Select output file
      </Text>
      <LineEdit>
      </LineEdit>
    </View>
  );
}

const containerStyle = `
  margin-horizontal: 20px;
  padding-horizontal: 10px;
  padding-vertical:20px;
`;

const textStyle = `
  margin-top: 10px;
  padding-right: 20px;
`;
