import { Route, Routes } from "react-router-dom";
import MyHeader from '../Components/MyHeader';
import MyInput from '../Components/MyInput';
import MyBtn from '../Components/MyBtn';
import { BackLink } from "govuk-react";
import { Footer } from "govuk-react";
function Book() {
    return (
        <>
            <MyHeader />
            <BackLink></BackLink>
            <MyInput label="Enter Time " />
            <MyBtn label="Next" />
            <Footer></Footer>




        </>
    );
}
export default Book;
