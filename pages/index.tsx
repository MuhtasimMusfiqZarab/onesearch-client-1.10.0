import Head from 'next/head';
import styles from '../styles/Home.module.css';

import BaseLayout from '../components/layouts/BaseLayout';
import Home from './home';

import { Button, Container } from 'reactstrap';

export default function Index() {
  return (
    <BaseLayout>
      <Container>
        <Home />
      </Container>
    </BaseLayout>
  );
}
