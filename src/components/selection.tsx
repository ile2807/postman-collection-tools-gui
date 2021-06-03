import { View, Text } from "@nodegui/react-nodegui";
import React, { useState } from "react";
import { StepOne } from "./stepone";
import { StepTwo } from "./steptwo"
export function Selection(props: any) {
    return (
        <View>
            <Text id="step-1">1. Select command you want to perform</Text>
            <StepOne {...props}/>
            <Text id="step-2">2. Select files and folder</Text>
            <StepTwo {...props}/>
        </View>
    );
}

