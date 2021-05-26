import { Button, useEventHandler, View } from "@nodegui/react-nodegui";
import { QPushButtonSignals } from "@nodegui/nodegui";
import React from "react";
import open from "open";

export function Buttons(props:any) {
    const aboutHandler = useEventHandler<QPushButtonSignals>(
        {
            clicked: () => open("https://www.npmjs.com/package/jackal-postman-tools").catch(console.log)
        },
        []
    );
    const executeHandler = useEventHandler<QPushButtonSignals>(
        {
            clicked: () => {
                props.execute();
            }
        },
        []
    );
    return (
        <View style={viewStyle}>
            <Button
                style={btnStyle}
                on={aboutHandler}
                text={`About`}
            ></Button>
            <Button
                style={btnRightStyle}
                on={executeHandler}
                text={`Execute`}
            ></Button>
        </View>
    );
}

const viewStyle = `
    flex:1;
    flex-direction: 'row';
    margin-left:28px;
    margin-bottom: 30px;
`

const btnStyle = `
  height: 40px;
  width: 50px;
`;
const btnRightStyle = `
  height: 40px;
  width: 50px;
  left: 340px;
`;
