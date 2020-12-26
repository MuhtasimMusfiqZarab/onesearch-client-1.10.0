import Head from 'next/head';
import styles from '../styles/Home.module.css';

import BaseLayout from '../components/layouts/BaseLayout';

import { Button, Container } from 'reactstrap';

export default function Home() {
  return (
    <BaseLayout>
      <Container>
        <h1>I am Home page</h1>
        <Button color="danger">Danger!</Button>
      </Container>
    </BaseLayout>
  );
}
