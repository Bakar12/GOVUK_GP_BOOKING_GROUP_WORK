import '../App.css';
import MyHeader from '../Components/MyHeader';
import { BackLink } from "govuk-react";
import { Panel } from "govuk-react";
import MyBtn from '../Components/MyBtn';
import { Footer } from "govuk-react";
function Book4() {
    return (
        <>
            <MyHeader />
            <BackLink></BackLink>
            <Panel>Booking Complete</Panel>
            <Footer></Footer>

        </>
    );
}
export default Book4;