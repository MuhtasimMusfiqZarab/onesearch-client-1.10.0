import React from 'react';
import Link from 'next/link';
import BaseLayout from '../components/layouts/BaseLayout';
import Table from '../components/widgets/table';
import axios from 'axios';

import { useSelector } from 'react-redux';

import Table1 from '../components/general/table';

// @ts-ignore
import GET_CHANNELS from './api/youtube.query.graphql';

import { useQuery } from '@apollo/client';

const Dashboard = ({ posts }) => {
  const channels = useSelector((state) => state.channels);
  return (
    <BaseLayout>
      <div className="container-fluid">
        <div className="row">
          <Table posts={channels} />
          <Table1 />
        </div>
      </div>
    </BaseLayout>
  );
};

export async function getStaticProps() {
  let posts = [];
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    posts = await res.data;
  } catch (e) {
    console.error(e);
  }

  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: posts.slice(0, 10),
    },
    // re-generate the page in every second if updates occurs
    revalidate: 1, // In seconds
  };
}

export default Dashboard;
