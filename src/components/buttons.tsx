import { Button, useEventHandler, View } from "@nodegui/react-nodegui";
import { QPushButtonSignals} from "@nodegui/nodegui";
import React from "react";
import open from "open";

export function Buttons() {
    const btnHandler = useEventHandler <QPushButtonSignals> (
        {
            clicked: () => open("https://www.npmjs.com/package/jackal-postman-tools").catch(console.log)
        },
        []
    );
    return (
        <View style={viewStyle}>
            <Button
                style={btnStyle}
                on={btnHandler}
                text={`About`}
            ></Button>
            <Button
                style={btnRightStyle}
                text={`Execute`}
            ></Button>
        </View>
    );
}

const viewStyle=`
    flex:1;
    flex-direction: 'row';
    margin-left:30px;
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
