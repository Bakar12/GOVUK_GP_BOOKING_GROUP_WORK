import '../App.css';
import MyHeader from '../Components/MyHeader';
import { FormGroup } from "govuk-react";
import { H2 } from "govuk-react";
import { H3 } from "govuk-react";
import { BackLink } from "govuk-react";
import { Footer } from "govuk-react";
import { Table } from "govuk-react";
import MyBtn from '../Components/MyBtn';
function ViewAvailable02() {
    return (
        <>
            <MyHeader />

            <BackLink></BackLink><br></br>
            <H2>Available Appointments</H2>


            <Table>

                <tr >
                    <th >Appointment Date</th>
                    <td >01/02/2003</td>


                </tr>
                <tr >
                    <th >Staff ID </th>
                    <td >532</td>
                </tr>



            </Table>
            <br>
            </br>
            <Footer></Footer>
        </>
    );
}
export default ViewAvailable02;