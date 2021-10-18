import React, { Fragment, useEffect, useMemo, useState } from "react";
import Head from "next/head";
import DashboardLayout from "components/layouts/dashboard";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

export default function Channel() {
  const router = useRouter();
  const channelId: string = router.query["id"] as string;

  return (
    <div>
      <Head>
        <title>{channelId}</title>
        <meta property="og:channelId" content="channelId" key="channelId" />
        <link rel="shortcut icon" href="/search.svg" />
      </Head>
      <DashboardLayout>
        <div className={styles.user_infos}>
          {/* <p>This is the id {channelId}</p> */}
          <h1 className="mb-30">Luzysonido hollander</h1>
          <Channel.BasicInfo />
          <Channel.AnvancedInfo />
        </div>
      </DashboardLayout>
    </div>
  );
}

Channel.BasicInfo = ({ }) => {
  return (
    <>
      <div className={styles.basic__info}>
        {/* <div className={styles.basic__info_heading}> */}
        <h3>Basic information</h3>
        {/* <a href="" className="brn">Download</a>
        </div> */}
        <ul>
          <li><span>Channel name:</span> luzysonido hollander </li>
          <li><span>Subscribers:</span> 213,568</li>
          <li><span>Category:</span> Technology </li>
          <li><span>Views:</span> 1,520,301</li>
          <li><span>Location:</span> California, USA </li>
          <li><span>Joining Date:</span> 03/09/2015</li>
          <li><span>Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in turpis tempor, bibendum erat vel, dignissim eros. In blandit, arcu in rutrum commodo, mi justo vulputate nulla, vel fringilla augue nulla a lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec ut libero quis mi tincidunt tempus.  </li>
        </ul>
      </div>
    </>
  );
};

Channel.AnvancedInfo = ({ }) => {
  return (
    <div className={styles.advanced__info}>
      <h3>Advanced information</h3>
      <ul>
        <li><span>Channel link:</span> luzysonido hollander </li>
        <li><span>Email address:</span> </li>
        <li><span>Facebook link:</span> Technology </li>
        <li><span>Instagram link:</span> www.instagram.com/luizhollander </li>
        <li><span>Location:</span> California, USA </li>
        <li><span>Joining Date:</span> 03/09/2015</li>
        <li><span>Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in turpis tempor, bibendum erat vel, dignissim eros. In blandit, arcu in rutrum commodo, mi justo vulputate nulla, vel fringilla augue nulla a lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec ut libero quis mi tincidunt tempus.  </li>
      </ul>
    </div>
  );
};
