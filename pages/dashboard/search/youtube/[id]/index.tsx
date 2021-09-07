import React, { Fragment, useEffect, useMemo, useState } from "react";
import Head from "next/head";
import DashboardLayout from "components/layouts/dashboard";
import { useRouter } from "next/router";

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
        <Channel.BasicInfo />
        <p>This is the id {channelId}</p>
        <Channel.AnvancedInfo />
      </DashboardLayout>
    </div>
  );
}

Channel.BasicInfo = ({}) => {
  return <div>Basic Information</div>;
};

Channel.AnvancedInfo = ({}) => {
  return <div>Advanced Information</div>;
};
