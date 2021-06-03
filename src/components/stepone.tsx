import { Text, View, ComboBox } from "@nodegui/react-nodegui";
import React from "react";

export function StepOne(props: any) {

  const commands =
    [
      { text: "Merge variables to output collection file", command: "mv", disabled: "x", optional: "s" },
      { text: "Merge variables in output environment file", command: "mev", disabled: "x", optional: "s" },
      { text: "Merge requests to output collection file", command: "mr", disabled: "x", optional: "s" },
      { text: "Merge all collections into output collection file", command: "mc", disabled: "x", optional: "s" },
      { text: "Append smart tests to output collection file", command: "ts", disabled: "sd,sc", optional: "" },
      { text: "Append HTTP:200 tests to output collection file", command: "t200", disabled: "sd,sc", optional: "" },
      { text: "Remove duplicate requests to output collection file", command: "clr", disabled: "sd,sc", optional: "" },
      { text: "Append missing collection variables to output collection file", command: "amcv", disabled: "sd,sc", optional: "" }
    ];
  const changeHandler = (index: number) => {
      props.update("command", commands[index].command);
      props.update("disabled", commands[index].disabled);
  }

  return (
    <View style={containerStyle}>
      <Text wordWrap={true}>
        Select one of the listed operation below
      </Text>
      <ComboBox style="height:30px;font-size:14px" on={{ currentIndexChanged: changeHandler }}
        items={commands}></ComboBox>
    </View>
  );
}

const containerStyle = `
    margin-horizontal: 20px;
    padding-horizontal: 10px;
`;
