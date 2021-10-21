import React, { Fragment, useEffect, useMemo, useState } from "react";
import Head from "next/head";
import DashboardLayout from "components/layouts/dashboard";
import { useRouter } from "next/router";
import { Copy, External, ArrowLeft, ArrowRight, Save, Lock, DownloadsIcon } from "components/_icons";
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
          <div className={styles.user_infos_header}>
            <h1>Luzysonido hollander</h1>

            <div className={styles.controller_list}>
              <a href="#" className={styles.wishlist}>
                <Save color={'#8F8F8F'} />
                <span>Save in Wishlist</span>
              </a>
              <a href="#" className={styles.unlock}>
                <Lock color={'#8F8F8F'} />
                <span>Unlock</span>
              </a>
              <a href="#" className={styles.download}>
                <DownloadsIcon color={'#8F8F8F'} />
                <span>Download</span>
              </a>
            </div>
          </div>
          <Channel.BasicInfo />
          <Channel.AnvancedInfo />

          <div className={styles.update}>
            <span className={styles.update__last}>Last Updated on 24th January, 2021</span>
            <a href="#" className="btn">Request for Update</a>
          </div>

          <div className={styles.paginations}>
            <a href="#" className="btn btn_fill_primary"><ArrowLeft /> Previous</a>
            <a href="#" className="btn btn_fill_primary">Next <ArrowRight /></a>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
}

Channel.BasicInfo = ({ }) => {
  return (
    <>
      <div className={styles.basic__info}>
        <h3>Basic information</h3>
        <ul>
          <li>
            <span className={styles.info__title}>Channel name:</span>
            luzysonido hollander
          </li>
          <li>
            <span className={styles.info__title}>Subscribers:</span>
            213,568
          </li>
          <li>
            <span className={styles.info__title}>Category:</span>
            Technology
          </li>
          <li>
            <span className={styles.info__title}>Views:</span>
            1,520,301
          </li>
          <li>
            <span className={styles.info__title}>Location:</span>
            California, USA
          </li>
          <li>
            <span className={styles.info__title}>Joining Date:</span>
            03/09/2015
          </li>
          <li>
            <span className={styles.info__title}>Description:</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in turpis tempor, bibendum erat vel, dignissim eros. In blandit, arcu in rutrum commodo, mi justo vulputate nulla, vel fringilla augue nulla a lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec ut libero quis mi tincidunt tempus.
          </li>
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
        <li>
          <span className={styles.info__title}>Channel link <span>:</span></span>
          <div className={styles.info__description}>
            <div className={styles.info__item}>
              <a href="#">www.youtube.com/luizhollander</a>
              <span className={styles.copy__link}><Copy /></span>
              <a href="" className={styles.external__link}><External /></a>
            </div>
          </div>
        </li>

        <li>
          <span className={styles.info__title}>Email address <span>:</span></span>
          <div className={styles.info__description}>
            <div className={styles.info__item}>
              <a href="#">luizhollander@gmail.com</a>
              <span className={styles.copy__link}><Copy /></span>
              <a href="" className={styles.external__link}><External /></a>
            </div>

            <div className={styles.info__item}>
              <a href="#">luizhollander@gmail.com</a>
              <span className={styles.copy__link}><Copy /></span>
              <a href="" className={styles.external__link}><External /></a>
            </div>

            <div className={styles.info__item}>
              <a href="#">luizhollander@gmail.com</a>
              <span className={styles.copy__link}><Copy /></span>
              <a href="" className={styles.external__link}><External /></a>
            </div>
          </div>
        </li>
        <li>
          <span className={styles.info__title}>Facebook link <span>:</span></span>
          <div className={styles.info__description}>
            <div className={styles.info__item}>
              <a href="#">www.youtube.com/luizhollander</a>
              <span className={styles.copy__link}><Copy /></span>
              <a href="" className={styles.external__link}><External /></a>
            </div>
          </div>
        </li>
        <li>
          <span className={styles.info__title}>Tiktok link <span>:</span></span>
          <div className={styles.info__description}>
            <div className={styles.info__item}>
              <a href="#">www.youtube.com/luizhollander</a>
              <span className={styles.copy__link}><Copy /></span>
              <a href="" className={styles.external__link}><External /></a>
            </div>
          </div>
        </li>
        <li>
          <span className={styles.info__title}>Instagram link <span>:</span></span>
          <div className={styles.info__description}>
            <div className={styles.info__item}>
              <a href="#">www.youtube.com/luizhollander</a>
              <span className={styles.copy__link}><Copy /></span>
              <a href="" className={styles.external__link}><External /></a>
            </div>
          </div>
        </li>
        <li>
          <span className={styles.info__title}>Pinterest link <span>:</span></span>
          <div className={styles.info__description}>
            <div className={styles.info__item}>
              <a href="#">www.youtube.com/luizhollander</a>
              <span className={styles.copy__link}><Copy /></span>
              <a href="" className={styles.external__link}><External /></a>
            </div>
          </div>
        </li>
        <li>
          <span className={styles.info__title}>Twitter link <span>:</span></span>
          <div className={styles.info__description}>
            <div className={styles.info__item}>
              <a href="#">www.youtube.com/luizhollander</a>
              <span className={styles.copy__link}><Copy /></span>
              <a href="" className={styles.external__link}><External /></a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
