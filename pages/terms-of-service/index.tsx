import Head from "next/head";
import Header from "components/shared/header";
import Footer from "components/shared/footer";
import styles from "./styles.module.scss"

const TermsOfService = () => {
  return (
    <>
      <Head>
        <title>Terms of Service</title>
        <meta property="og:search" content="Search" key="search" />
        <link rel="shortcut icon" href="/search.svg" />
      </Head>
      <Header />

      <div className={styles.terms_of_service}>
        <div className={styles.terms_of_service__content}>
          <h1>Terms of Service</h1>
          <h3>Terms</h3>
          <p>By visiting our site and/ or purchasing something from us, you engage in our service and agree to be bound by the following terms of service. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content. If you do not agree with any of these terms, you are prohibited from using or accessing this site. It is your responsibility to review these Terms of Service, as it creates a binding legal agreement between you and onesearch.io. If you use the website after we have changed any of the Terms of Use, you are agreeing to all of the changes.</p>


          <h3>Use License</h3>
          <p>We reserve the right to refuse service to anyone for any reason at any time. This is the grant of a license, not a transfer of title, and under this license, you may not:</p>

          <p>
            i. Modify or copy the materials;<br />
            ii. Remove any copyright or other proprietary notations from the materials; or
            transfer the materials to another person or "mirror" the materials on any other server.<br />
            iii. This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time.
          </p>


          <h3>Disclaimer</h3>
          <p>We are not responsible for any kind of representation concerning the accuracy, completeness, or reliability of the information and links provided. We make no warranties and hereby disclaims and negates all warranties.</p>


          <h3>Pricing of Services</h3>
          <p>We reserve the right to change the price of our service at any time without any notice. It is your responsibility to check our pricing before subscribing to our predefined services.</p>


          <h3>Links</h3>
          <p>We have not reviewed any of the links provided. The user can use the links at their own risk. We will not be responsible for any kind of problem you face with these links.</p>


          <h3>Refund Policy</h3>
          <p>Once you have subscribed to our service, there will be no full or partial refunds.</p>


          <h3>Modification of Terms of Service</h3>
          <p>We hold the right to change the Terms of Service of this website without any prior notice. Only the current version of the Terms of Service will be applicable and all other previous versions will not be taken into account. By agreeing to our Terms of Service, you are bound to follow the current version.</p>


          <h3>Privacy</h3>
          <p>Any kind of personal information that you provide to us will be governed by our Privacy Policy. Check it out to learn more.</p>


          <h3>User Feedback and Reviews</h3>
          <p>If any user provides any feedback or review to us, we have the right to add them or use them on our website without any restrictions. We shall however not be under any obligation to pay compensation or respond to any comment.</p>


          <h3>Termination</h3>
          <p>The obligations and liabilities of the parties incurred before the termination date shall survive the termination of this agreement for all purposes. You may terminate these Terms of Services at any time by notifying us or when you stop using our site. If you fail to comply with any Terms of Services, we will have the sole judgment to terminate this agreement.</p>


          <h3>Governing Law</h3>
          <p>These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed by the laws of Dhaka, Bangladesh.</p>


          <h3>Contact</h3>
          <p>If you have any kind of queries regarding the Terms of Services, please contact us at onesearchteam@gmail.com.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfService;
