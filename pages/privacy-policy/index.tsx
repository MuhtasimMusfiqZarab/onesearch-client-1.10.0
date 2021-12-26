import Head from 'next/head';
import Header from 'components/shared/header';
import Footer from 'components/shared/footer';
import styles from './styles.module.scss';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta property="og:search" content="Search" key="search" />
        <link rel="shortcut icon" href="/search.svg" />
      </Head>
      <Header />

      <div className={styles.privacy_policy}>
        <div className={styles.privacy_policy__content}>
          <h1>Privacy Policy</h1>
          <p>
            This Privacy Policy governs how we collect, use, maintain and disclose information
            collected from users. Please read our privacy policy carefully to get a clear
            understanding. This privacy policy applies to the Site and all products and services
            offered by us.
          </p>

          <h3>What personal information do we collect?</h3>
          <p>
            When registering on our site, you may be asked to provide your name and email address or
            other information to help you with your experience.
          </p>

          <h3>How do we use your personal information?</h3>
          <p>We may use your personal information in the following ways-</p>
          <p>
            -To improve customer service
            <br />
            -To personalize user experience
            <br />
            -To process payments
            <br />
            -To improve our site
            <br />
            -To run survey, promotion, etc
            <br />
            -To send periodic emails
            <br />
            -To ask for feedback
          </p>

          <h3>How do we protect your information?</h3>
          <p>
            We adopt appropriate data collection, storage, and processing practices and security
            measures to protect against unauthorized access, alteration, disclosure, or destruction
            of your personal information and data stored on our Site.
          </p>

          <p>
            We implement a variety of security measures when a user places an order enters, submits,
            or accesses their information to maintain the safety of your personal information. All
            transactions are processed through a gateway provider and are not stored or processed on
            our servers.
          </p>

          <h3>Changes to the privacy policy</h3>
          <p>
            We have the discretion to update this privacy policy at any time. When we do, we will
            revise the updated date at the bottom of this page. We encourage users to frequently
            check this page for any changes to stay informed about how we are helping to protect the
            personal information we collect. You acknowledge and agree that it is your
            responsibility to review this privacy policy periodically and become aware of
            modifications.
          </p>

          <h3>Acceptance of these terms</h3>
          <p>
            By using this Site, you signify your acceptance of this policy and terms of service. If
            you do not agree to this policy, please do not use our Site. Your continued use of the
            Site following the posting of changes to this policy will be deemed your acceptance of
            those changes.
          </p>

          <h3>Contact</h3>
          <p>
            If you have any queries regarding the Privacy policy or any other dealings with this
            site, please feel free to contact us at{' '}
            <a href="mailto:onesearchteam@gmail.com">onesearchteam@gmail.com</a>.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
