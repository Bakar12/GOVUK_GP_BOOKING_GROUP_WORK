import React from 'react';
import { TopNav } from "govuk-react";
import { H1 } from "govuk-react";
import { Link } from "govuk-react";
function MyHeader() {
    return (
        <>
            <TopNav className="navbar">
                <div className="links">
                    <Link href="/book" style={{
                        color: "white"
                    }}>Book Appointment</Link>
                    <Link href="/available" style={{
                        color: "white"
                    }}>View Available Appointments</Link>
                    <Link href="/pc" style={{
                        color: "white"
                    }}>Cancel Appointments</Link>
                </div>

            </TopNav>
            <br />
        </>
    );
}
export default MyHeader;