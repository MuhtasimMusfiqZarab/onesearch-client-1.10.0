import React, { FC } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  subtitle?: string;
  content: string;
  isDark?: boolean;
  isButton: boolean;
  buttonText?: any;
  buttonUrl?: string;
  buttonClasses?: string;
}

export const Text: FC<Props> = ({
  title,
  subtitle,
  content,
  isDark,
  isButton,
  buttonText,
  buttonUrl,
  buttonClasses
}: Props): JSX.Element => {
  return (
    <div className={`${styles.text} ${isDark ? styles.text__dark : ''}`}>
      <h2 className={styles.text__title} dangerouslySetInnerHTML={{ __html: title }}></h2>
      {subtitle && <h3 className={styles.text__subtitle} dangerouslySetInnerHTML={{ __html: subtitle }}></h3>}
      <p
        className={styles.text__desc}
        dangerouslySetInnerHTML={{ __html: content }}
      ></p>
      {isButton && (
        <Link href={buttonUrl ? buttonUrl : "/"}>
          <a className={buttonClasses ? buttonClasses : 'btn btn_fill_primary'}>{buttonText}</a>
        </Link>
      )}
    </div>
  );
};
