import { QFileDialog, FileMode } from "@nodegui/nodegui";
import { Text, View, LineEdit, Button } from "@nodegui/react-nodegui";
import React from "react";
export function Browse(props: any) {
    const handleClick = () => {
        if (props.allowChange(props.id)) {
            const fileDialog = new QFileDialog();
            if (props.folder) {
                fileDialog.setFileMode(FileMode.Directory);
            } else {
                if (props.mustExist) {
                    if (props.multipleFiles) {
                        fileDialog.setFileMode(FileMode.ExistingFiles);
                    } else {
                        fileDialog.setFileMode(FileMode.ExistingFile);
                    }
                } else {
                    fileDialog.setFileMode(FileMode.AnyFile);
                }
                fileDialog.setNameFilter('Postman files (*.json)');
            } fileDialog.exec();
            const selectedFiles = fileDialog.selectedFiles();
            if (selectedFiles.length > 1) {
                const files = selectedFiles.join(",");
                props.setValue(files);
                props.update(props.id, files);
            } else {
                const file = selectedFiles[0];
                props.setValue(file);
                props.update(props.id, file);
            }
        }
    }
    const handleTextChanged = (textValue: string) => {
        if (props.allowChange(props.id)) {
            props.setValue(textValue);
            props.update(props.id, textValue);
        }
    };
    return (
        <View style={viewStyle}>
            <Text style={textStyle} id={props.id}>
                {props.caption}
            </Text>
            <LineEdit
                style={editStyle}
                placeholderText={props.caption}
                text={props.value}
                enabled={props.enabled}
                on={{ textChanged: handleTextChanged }}
            ></LineEdit>
            <Button
                enabled={props.enabled}
                on={{ clicked: handleClick }}
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
  width:120px;
  margin-bottom:10px;
`;

const editStyle = `
  width:250px;
`;