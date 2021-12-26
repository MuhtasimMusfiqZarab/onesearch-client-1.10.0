import React, { useEffect, useRef, useState } from 'react';
import { MessengerChat } from '../custom-chat';
import styles from './styles.module.scss';

interface Props {
  support: boolean;
}

export default function BackToTop({ support }: Props) {
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

      <MessengerChat chatSupport={support} />
    </div>
  );
}
