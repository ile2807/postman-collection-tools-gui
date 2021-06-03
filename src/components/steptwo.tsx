import { View, useEventHandler, Text } from "@nodegui/react-nodegui";
import { QLabelSignals, QMouseEvent, WidgetEventTypes } from "@nodegui/nodegui";
import React, { useState } from "react";
import { Browse } from "./browse";
export function StepTwo(props: any) {
  const [sf, setSf] = useState('');
  const [sd, setSd] = useState('');
  const [of, setOf] = useState('');
  const [sc, setSc] = useState('');
  const [refresh, setRefresh] = useState('Pece');

  const textHandler = useEventHandler<QLabelSignals>(
    {
      MouseMove: (nativeEvt: any) => {
        const mouseEvt = new QMouseEvent(nativeEvt);
        setRefresh("mouseMoved at: " + mouseEvt.x() + ":" + mouseEvt.y());
      }
    },
    []
  );
  return (
    <View style={containerStyle}>
      <Text mouseTracking={true} on={textHandler} style={flatLabelStyle}/>
      <Browse mustExist caption="Select source file" id="sf" value={sf} setValue={setSf} {...props} enabled></Browse>
      <Text mouseTracking={true} on={textHandler} style={flatLabelStyle}/>
      <Browse folder caption="Select source folder" id="sd" value={sd} setValue={setSd} {...props} enabled={sc === '' && props.allowChange("sd")}></Browse>
      <Text mouseTracking={true} on={textHandler} style={flatLabelStyle}/>
      <Browse mustExist multipleFiles caption="Select source collections" id="sc" value={sc} setValue={setSc} {...props} enabled={sd === '' && props.allowChange("sc")}></Browse>
      <Text mouseTracking={true} on={textHandler} style={flatLabelStyle}/>
      <Browse caption="Select output file" id="of" value={of} setValue={setOf} {...props} enabled></Browse>
      <Text mouseTracking={true} on={textHandler} style={flatLabelStyle}/>
    </View>
  );
}

const containerStyle = `
  margin-horizontal: 20px;
  padding-horizontal: 10px;
  padding-vertical:20px;
`;

const flatLabelStyle = `
  height:10px;
`;
