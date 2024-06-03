import React from "react";
import { DateField } from "govuk-react";
import { Label } from "govuk-react";
function MyInput(props) {
    return (
        <>
            <Label align="right"> {props.label}</Label>
            <br />
            <DateField />
            <br />
            <br />
        </>
    );
};
export default MyInput;