import * as React from "react";
import ComingSoon from "../ComingSoon";

export interface Schedule {}

const Schedule: React.SFC<Schedule> = () => {
    return (
        <section className='container' id='schedule'>
            <ComingSoon />
        </section>
    );
};

export default Schedule;
