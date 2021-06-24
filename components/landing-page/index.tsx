import TopNav from '../shared/topnav/version2';
import styles from './styles.module.scss';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <nav className={styles.navBar}>
        <TopNav />
      </nav>
      <main className={styles.main}>Main</main>
      <div className={styles.sideBar}>Sidebar</div>
      <div className={styles.content1}>Pricing1</div>
      <div className={styles.content2}>Pricing2</div>
      <div className={styles.content3}>Pricing3</div>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}
