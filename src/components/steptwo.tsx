import { View } from "@nodegui/react-nodegui";
import React, { useState } from "react";
import { Browse } from "./browse";
export function StepTwo(props: any) {
  const [sf, setSf] = useState('');
  const [sd, setSd] = useState('');
  const [of, setOf] = useState('');
  return (
    <View style={containerStyle}>
      <Browse isFolder="false" caption="Select source file" id="sf" value={sf} setValue={setSf} {...props}></Browse>
      <Browse isFolder="true" caption="Select source folder" id="sd" value={sd} setValue={setSd} {...props}></Browse>
      <Browse isFolder="false" caption="Select output file" id="of" value={of} setValue={setOf} {...props} ></Browse>
    </View>
  );
}

const containerStyle = `
  margin-horizontal: 20px;
  padding-horizontal: 10px;
  padding-vertical:20px;
`;
