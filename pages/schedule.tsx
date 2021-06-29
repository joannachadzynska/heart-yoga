import { Layout, ScheduleContainer } from "components";
import Head from "next/head";
import React from "react";

const Schedule = () => {
    return (
        <Layout>
            <Head>
                <title>Grafik</title>
                <meta name='Rytm Serca' />
            </Head>

            <ScheduleContainer />
        </Layout>
    );
};

export default Schedule;
