import Head from "next/head";
import styles from "@/styles/Program.module.css";
import React, { useState } from "react";
import { Newsletter } from "@/components/Newsletter";
import { Tabs } from "antd";
import { ProgramSection } from "@/components/ProgramSection";
import DaySchedule from "@/components/DaySchedule";
const { TabPane } = Tabs;

function Program({ venues }) {
  const [activeTab, setActiveTab] = useState("mon"); // Set the initial active tab to 'mon'

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.Main}>
        <ProgramSection />
        <h1 className={styles.programTitle}>
          <span className={styles.written}>Festival's</span> Program
        </h1>
        <div className={styles.Schedule}>
          <div>
            <Tabs activeKey={activeTab} onChange={handleTabChange}>
              <TabPane tab="Monday" key="mon">
                <DaySchedule day="mon" venues={venues} />
              </TabPane>
              <TabPane tab="Tuesday" key="tue">
                <DaySchedule day="tue" venues={venues} />
              </TabPane>
              <TabPane tab="Wednesday" key="wed">
                <DaySchedule day="wed" venues={venues} />
              </TabPane>
              <TabPane tab="Thursday" key="thu">
                <DaySchedule day="thu" venues={venues} />
              </TabPane>
              <TabPane tab="Friday" key="fri">
                <DaySchedule day="fri" venues={venues} />
              </TabPane>
              <TabPane tab="Saturday" key="sat">
                <DaySchedule day="sat" venues={venues} />
              </TabPane>
              <TabPane tab="Sunday" key="sun">
                <DaySchedule day="sun" venues={venues} />
              </TabPane>
            </Tabs>
          </div>
        </div>
        <Newsletter />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://tan-chipped-baboon.glitch.me/schedule");
  const data = await response.json();

  const venues = Object.entries(data).map(([venue, schedule]) => ({
    venue: venue,
    schedule: schedule,
  }));

  return {
    props: {
      venues,
    },
  };
}

export default Program;
