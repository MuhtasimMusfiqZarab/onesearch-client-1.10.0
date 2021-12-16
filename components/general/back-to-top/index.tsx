import React, { useEffect, useRef, useState } from 'react';
import MessengerChat from '../custom-chat';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';

export default function BackToTop() {
  const router = useRouter();
  const [currentRoute, setCurrentRoute] = useState<string>(router.pathname);

  let [isShowBtn, setShowBtn] = useState(false);
  const backToTop = useRef(null);
  const chatBtn = useRef(null);

  useEffect(() => {
    if (backToTop.current !== null) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
          setShowBtn(() => (isShowBtn = true));
        } else {
          setShowBtn(() => (isShowBtn = false));
        }
      });

      backToTop.current.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo(0, 0);
      });
    }
  }, []);

  return (
    <div className={styles.page_meta}>
      <a
        href="#"
        ref={backToTop}
        className={`${styles.backToTop} ${isShowBtn ? styles.backToTopShow : ''}`}>
        <svg
          width="21"
          height="13"
          viewBox="0 0 21 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M1 11.5L10.5 2L20 11.5" stroke="#49789B" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </a>

      {/* <a href="#" ref={chatBtn} className={styles.chatBtn}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 0.734375C6.729 0.734375 0 6.24567 0 13.02C0 17.0119 2.31996 20.6956 6.24517 23.0016C5.70058 25.5475 4.48012 27.3341 4.46676 27.3533L3.1325 29.2646L5.44668 28.968C5.71326 28.9337 11.9218 28.1108 16.3469 25.2563C19.9809 24.9918 23.356 23.6586 25.8777 21.4865C28.536 19.1964 30 16.1897 30 13.0201C30 6.24567 23.271 0.734375 15 0.734375ZM15.948 23.2114L15.6657 23.2276L15.4309 23.3853C12.8576 25.114 9.41266 26.073 7.24548 26.5419C7.7001 25.5256 8.17787 24.1746 8.41634 22.6148L8.5278 21.8857L7.87465 21.5434C4.23779 19.6375 2.06648 16.4514 2.06648 13.02C2.06648 7.38526 7.86845 2.80085 15 2.80085C22.1315 2.80085 27.9335 7.38512 27.9335 13.02C27.9335 18.349 22.6688 22.8256 15.948 23.2114Z"
            fill="#49789B"
          />
        </svg>
      </a> */}
      {currentRoute === '/' && <MessengerChat />}
    </div>
  );
}
