import { Text, View, ComboBox, useEventHandler } from "@nodegui/react-nodegui";
import { QComboBoxSignals } from "@nodegui/nodegui";
import React from "react";


export function StepOne(props: any) {
  const changeHandler = useEventHandler<QComboBoxSignals>(
    {
      currentIndexChanged: (index) => {
        props.update("command", index);
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
        items={[
          { text: "Merge all collections variables to one output collection file" },
          { text: "Merge all collections variables in one output environment file" },
          { text: "Merge all collections requests to one output collection file" },
          { text: "Merge all collections in collection folders into one output collection file" },
          { text: "Append smart test assertions into output collection file" },
          { text: "Append HTTP:200 test assertions into output collection file" },
          { text: "Remove duplicate requests and save to output collection file" },
          { text: "Append missing collection variables to output collection file" }
        ]}></ComboBox>
    </View>
  );
}

const containerStyle = `
    margin-horizontal: 20px;
    padding-horizontal: 10px;
`;
