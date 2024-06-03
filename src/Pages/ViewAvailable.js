import { Route, Routes } from "react-router-dom";
import MyHeader from '../Components/MyHeader';
import MyInput from '../Components/MyInput';
import MyBtn from '../Components/MyBtn';
import { BackLink } from "govuk-react";
import { Footer } from "govuk-react";
import { HintText } from "govuk-react";
import { H2 } from "govuk-react";
function ViewAvailable() {
    return (
        <>
            <MyHeader />
            <BackLink></BackLink>
            <H2>View Available Appointments</H2>
            <MyInput label="Enter End Time Period" />
            <HintText>The Start time will start from today. So, you will see the available appointments until the end time </HintText>
            <MyBtn label="Next" />
            <Footer></Footer>




        </>
    );
}
export default ViewAvailable;