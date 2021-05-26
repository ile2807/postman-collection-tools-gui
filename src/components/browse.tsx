import { QFileDialog, FileMode, QPushButtonSignals } from "@nodegui/nodegui";
import { Text, View, LineEdit, Button, useEventHandler } from "@nodegui/react-nodegui";
import React from "react";
export function Browse(props: any) {
    const btnHandler = useEventHandler<QPushButtonSignals>(
        {
            clicked: () => {
                const fileDialog = new QFileDialog();
                if (props.isFolder === 'true') {
                    fileDialog.setFileMode(FileMode.Directory);
                } else {
                    if (props.mustExist) {
                        fileDialog.setFileMode(FileMode.ExistingFile);
                    } else {
                        fileDialog.setFileMode(FileMode.AnyFile);
                    }
                    fileDialog.setNameFilter('Postman files (*.json)');
                } fileDialog.exec();
                const selectedFiles = fileDialog.selectedFiles();
                props.setValue(selectedFiles[0]);
                props.update(props.id, selectedFiles[0]);
            }
        },
        []
    );
    return (
        <View style={viewStyle}>
            <Text style={textStyle} id={props.id}>
                {props.caption}
            </Text>
            <LineEdit style={editStyle} placeholderText={props.caption} text={props.value}>
            </LineEdit>
            <Button
                on={btnHandler}
                text={`Browse`}
            ></Button>
        </View>
    );
}

const viewStyle = `
    flex:1;
    flex-direction: 'row';
`;

const textStyle = `
  margin-top: 10px;
  width:110px;
  margin-bottom:10px;
`;

const editStyle = `
  width:250px;
`;