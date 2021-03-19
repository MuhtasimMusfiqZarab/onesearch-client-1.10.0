import Head from 'next/head';
import styles from '../styles/Home.module.css';

import BaseLayout from '../components/layouts/BaseLayout';
import Home from './home';

import { Button, Container } from 'reactstrap';
import Login from '../components/general/forms/login';

export default function Index() {
  return (
    <>
      <Login />
    </>
  );
}
