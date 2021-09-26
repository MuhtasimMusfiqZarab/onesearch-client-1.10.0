import Link from "next/link";
import { FacebookIcon } from "components/_icons";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_widget}>
          <Link href="/">
            <a className={styles.footer_widget_logo}>
              <svg width="219" height="50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41.014 50H8.986C4.045 50 0 45.955 0 41.014V7.177C0 3.229 3.229 0 7.177 0h33.837C45.955 0 50 4.045 50 8.986v32.028C50 45.955 45.955 50 41.014 50Z" fill="#E6AF2E" /><path d="M16.257 39.916c-2.588-1.36-4.612-3.25-6.068-5.666-1.46-2.416-2.186-5.156-2.186-8.225 0-3.067.727-5.81 2.186-8.226 1.456-2.415 3.48-4.303 6.068-5.665 2.588-1.362 5.511-2.042 8.772-2.042 3.258 0 6.173.682 8.743 2.042 2.57 1.362 4.58 3.25 6.04 5.665 1.456 2.416 2.185 5.159 2.185 8.226 0 3.07-.73 5.81-2.186 8.225-1.459 2.416-3.472 4.306-6.04 5.666-2.57 1.362-5.485 2.042-8.742 2.042-3.26 0-6.184-.68-8.772-2.042Zm14.437-7.65c1.475-1.553 2.215-3.632 2.215-6.241 0-2.607-.74-4.688-2.215-6.241-1.477-1.553-3.364-2.33-5.665-2.33s-4.2.777-5.695 2.33-2.243 3.634-2.243 6.24c0 2.61.748 4.688 2.243 6.242 1.496 1.553 3.394 2.329 5.695 2.329 2.3 0 4.188-.776 5.665-2.33Z" fill="#03396C" /><path d="M36.365 17.282a4.228 4.228 0 1 0 0-8.456 4.228 4.228 0 0 0 0 8.456Z" fill="#fff" /><path d="M36.365 18.066a5.018 5.018 0 0 1-5.012-5.012 5.018 5.018 0 0 1 5.012-5.012 5.018 5.018 0 0 1 5.012 5.012 5.018 5.018 0 0 1-5.012 5.012Zm0-8.455a3.448 3.448 0 0 0-3.443 3.443 3.448 3.448 0 0 0 3.443 3.443 3.448 3.448 0 0 0 3.444-3.443 3.448 3.448 0 0 0-3.444-3.443Z" fill="#E6AF2E" /><path d="M67.232 35.28c-2.483 0-4.303-.597-5.46-1.792-1.157-1.213-1.736-2.921-1.736-5.124s.579-3.901 1.736-5.096c1.176-1.213 2.996-1.82 5.46-1.82 2.483 0 4.303.607 5.46 1.82 1.176 1.195 1.764 2.893 1.764 5.096 0 2.203-.579 3.91-1.736 5.124-1.157 1.195-2.987 1.792-5.488 1.792Zm0-3.22c1.213 0 2.081-.27 2.604-.812.523-.56.784-1.521.784-2.884s-.261-2.315-.784-2.856c-.523-.56-1.39-.84-2.604-.84-1.195 0-2.053.28-2.576.84-.523.541-.784 1.493-.784 2.856 0 1.363.261 2.324.784 2.884.523.541 1.381.812 2.576.812ZM77.084 35V21.728h3.5l.14 1.26c.542-.41 1.223-.765 2.044-1.064a7.386 7.386 0 0 1 2.632-.476c1.755 0 3.034.41 3.836 1.232.803.821 1.204 2.09 1.204 3.808V35h-3.78v-8.316c0-.896-.186-1.53-.56-1.904-.354-.373-1.026-.56-2.016-.56-.578 0-1.166.13-1.764.392a4.862 4.862 0 0 0-1.456.98V35h-3.78Zm22.912.28c-2.296 0-4.116-.57-5.46-1.708-1.344-1.157-2.016-2.903-2.016-5.236 0-2.11.56-3.78 1.68-5.012 1.139-1.25 2.828-1.876 5.068-1.876 2.054 0 3.622.541 4.704 1.624 1.102 1.064 1.652 2.464 1.652 4.2v2.408H96.02c.206 1.064.691 1.792 1.456 2.184.784.392 1.886.588 3.304.588.71 0 1.428-.065 2.156-.196.747-.13 1.382-.299 1.904-.504v2.688c-.616.28-1.334.485-2.156.616-.821.15-1.717.224-2.688.224Zm-3.976-7.924h6.3v-.728c0-.765-.224-1.363-.672-1.792-.448-.448-1.204-.672-2.268-.672-1.25 0-2.128.252-2.632.756-.485.504-.728 1.316-.728 2.436Zm16.775 7.924c-.989 0-1.932-.075-2.828-.224-.896-.13-1.614-.299-2.156-.504v-3.136c.654.261 1.391.467 2.212.616.822.13 1.578.196 2.268.196.934 0 1.587-.056 1.96-.168.392-.112.588-.364.588-.756 0-.448-.298-.775-.896-.98-.578-.205-1.446-.495-2.604-.868-1.213-.41-2.146-.905-2.8-1.484-.653-.579-.98-1.437-.98-2.576 0-1.27.458-2.24 1.372-2.912.934-.69 2.427-1.036 4.48-1.036.822 0 1.596.065 2.324.196.728.112 1.344.252 1.848.42v3.108a6.525 6.525 0 0 0-1.736-.532 9.313 9.313 0 0 0-1.82-.196c-.802 0-1.446.056-1.932.168-.466.112-.7.355-.7.728 0 .41.252.7.756.868.523.168 1.326.42 2.408.756 1.064.317 1.895.663 2.492 1.036.598.373 1.018.821 1.26 1.344.243.504.364 1.139.364 1.904 0 2.688-1.96 4.032-5.88 4.032Zm15.01 0c-2.296 0-4.116-.57-5.46-1.708-1.344-1.157-2.016-2.903-2.016-5.236 0-2.11.56-3.78 1.68-5.012 1.139-1.25 2.828-1.876 5.068-1.876 2.053 0 3.621.541 4.704 1.624 1.101 1.064 1.652 2.464 1.652 4.2v2.408h-9.604c.205 1.064.691 1.792 1.456 2.184.784.392 1.885.588 3.304.588.709 0 1.428-.065 2.156-.196.747-.13 1.381-.299 1.904-.504v2.688c-.616.28-1.335.485-2.156.616a15.05 15.05 0 0 1-2.688.224Zm-3.976-7.924h6.3v-.728c0-.765-.224-1.363-.672-1.792-.448-.448-1.204-.672-2.268-.672-1.251 0-2.128.252-2.632.756-.485.504-.728 1.316-.728 2.436Zm16.408 7.924c-.84 0-1.624-.15-2.352-.448a4.342 4.342 0 0 1-1.736-1.372c-.43-.616-.644-1.381-.644-2.296 0-1.307.457-2.352 1.372-3.136.933-.784 2.305-1.176 4.116-1.176h3.92v-.364c0-.821-.234-1.4-.7-1.736-.448-.336-1.363-.504-2.744-.504a13.72 13.72 0 0 0-4.368.7v-2.66c.616-.243 1.362-.439 2.24-.588a15.809 15.809 0 0 1 2.912-.252c1.997 0 3.537.41 4.62 1.232 1.101.803 1.652 2.1 1.652 3.892V35h-3.276l-.196-1.204c-.523.467-1.167.83-1.932 1.092-.766.261-1.727.392-2.884.392Zm1.036-2.492c.84 0 1.568-.14 2.184-.42.616-.28 1.101-.635 1.456-1.064v-2.1h-3.836c-1.475 0-2.212.607-2.212 1.82 0 1.176.802 1.764 2.408 1.764ZM151.569 35V21.728h3.5l.168 1.372c.597-.373 1.334-.71 2.212-1.008a12.868 12.868 0 0 1 2.632-.644v2.856a20.33 20.33 0 0 0-3.36.84 8.844 8.844 0 0 0-1.372.588V35h-3.78Zm16.674.28c-2.371 0-4.191-.588-5.46-1.764-1.251-1.176-1.876-2.893-1.876-5.152 0-2.333.672-4.07 2.016-5.208 1.363-1.139 3.173-1.708 5.432-1.708.933 0 1.736.065 2.408.196.672.13 1.325.345 1.96.644v2.716a7.216 7.216 0 0 0-1.624-.532 9.574 9.574 0 0 0-1.988-.196c-1.419 0-2.501.299-3.248.896-.747.579-1.12 1.643-1.12 3.192 0 1.419.336 2.455 1.008 3.108.691.653 1.801.98 3.332.98.653 0 1.288-.065 1.904-.196a7.528 7.528 0 0 0 1.764-.588v2.8c-1.251.541-2.753.812-4.508.812Zm6.896-.28V16.128h3.78v6.72c.541-.41 1.204-.747 1.988-1.008a8.01 8.01 0 0 1 2.548-.392c1.755 0 3.033.41 3.836 1.232.803.821 1.204 2.09 1.204 3.808V35h-3.78v-8.316c0-.896-.187-1.53-.56-1.904-.355-.373-1.027-.56-2.016-.56-.579 0-1.167.13-1.764.392a4.858 4.858 0 0 0-1.456.98V35h-3.78Zm15.874 0v-2.828h3.08V35h-3.08Zm6.624-15.708v-2.968h4.116v2.968h-4.116ZM197.945 35V24.528h-1.988l.336-2.8h5.432V35h-3.78Zm13.635.28c-2.483 0-4.303-.597-5.46-1.792-1.158-1.213-1.736-2.921-1.736-5.124s.578-3.901 1.736-5.096c1.176-1.213 2.996-1.82 5.46-1.82 2.482 0 4.302.607 5.46 1.82 1.176 1.195 1.764 2.893 1.764 5.096 0 2.203-.579 3.91-1.736 5.124-1.158 1.195-2.987 1.792-5.488 1.792Zm0-3.22c1.213 0 2.081-.27 2.604-.812.522-.56.784-1.521.784-2.884s-.262-2.315-.784-2.856c-.523-.56-1.391-.84-2.604-.84-1.195 0-2.054.28-2.576.84-.523.541-.784 1.493-.784 2.856 0 1.363.261 2.324.784 2.884.522.541 1.381.812 2.576.812Z" fill="#505050" /></svg>
            </a>
          </Link>

          <div className={styles.socials}>
            <ul>
              <li className={styles.link__facebook}><a href="#"><FacebookIcon /></a></li>
              <li className={styles.link__twitter}><a href="#"><FacebookIcon /></a></li>
              <li className={styles.link__linkedin}><a href="#"><FacebookIcon /></a></li>
            </ul>
          </div>
        </div>

        <div className={styles.footer_widget}>
          <h3>Support</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        <div className={`${styles.footer_widget} ${styles.footer_widget_subscription}`}>
          <h3>Subscribe us for updates and news</h3>
          <div className={styles.subscription_form}>
            <form action="">
              <input type="email" placeholder="Email" required />
              <button className="btn btn_fill_primary" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.footer_copy}>
        <p>{(new Date().getFullYear())} © OneSearch. All rights reserved</p>
      </div>
    </footer>
  );
}
