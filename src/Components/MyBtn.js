import { Button } from "govuk-react";
function MyBtn(props) {
    return (
        <>
            <Button > {props.label}</Button>
            <br />

        </>
    );
};
export default MyBtn;