import MyHeader from '../Components/MyHeader';
import { TextArea } from "govuk-react";
import { H2 } from "govuk-react";
import { BackLink } from "govuk-react";
import MyBtn from '../Components/MyBtn';
import { Footer } from "govuk-react";
function Book2() {
    return (
        <>
            <MyHeader />

            <BackLink></BackLink>
            <H2>What is the reason for your <br></br>appointment?</H2>
            <TextArea></TextArea><br></br>
            <MyBtn label="Next" />
            <Footer></Footer>
        </>
    );
}
export default Book2;