import '../App.css';
import MyHeader from '../Components/MyHeader';
import { FormGroup } from "govuk-react";
import { H2 } from "govuk-react";
import { H3 } from "govuk-react";
import { BackLink } from "govuk-react";
import { Footer } from "govuk-react";
import { Table } from "govuk-react";
import MyBtn from '../Components/MyBtn';
function Book3() {
    return (
        <>
            <MyHeader />

            <BackLink></BackLink><br></br>
            <H2>Check Appointment Information</H2>


            <Table>

                <tr >
                    <th >Appointment Date</th>
                    <td >01/02/2003 </td>
                    <td> <a href="www.google.com">Change</a></td>
                    

                </tr>
                <tr >
                    <th >Staff ID </th>
                    <td >532  </td>
                    <td> <a href="www.google.com">Change</a></td>
                    
                </tr>
                <tr >
                    <th >Booking Reason </th>
                    <td >Cancer  </td>
                    <td> <a href="www.google.com">Change</a></td>
                </tr>
                

            </Table>
            <br>
            </br>
            <MyBtn label="Confirm" />
            <Footer></Footer>
        </>
    );
}
export default Book3;