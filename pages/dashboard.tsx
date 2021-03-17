import React from 'react';
import Link from 'next/link';
import BaseLayout from '../components/layouts/BaseLayout';
import Table from '../components/widgets/table';
import SideBar from '../components/shared/SideBar';
import axios from 'axios';

import Table1 from '../components/general/table';

const Dashboard = ({ posts }) => {
  return (
    <BaseLayout>
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <h1>I am dashboard page</h1>
          <ul>{renderPosts(posts)}</ul>
          <Table posts={posts} />
          <Table1 />
        </div>
      </div>
    </BaseLayout>
  );
};

//this renders the posts
const renderPosts = (posts) => {
  return posts.map((post) => (
    <li key={post.id}>
      <Link href={`/leads/${post.id}`}>
        <a>{post.title}</a>
      </Link>
    </li>
  ));
};

//this gets called at build time on server-side
//it wont be called on the client side
//can do direct database quiries
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
