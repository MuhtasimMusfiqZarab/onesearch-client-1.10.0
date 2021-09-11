import React, { FC } from "react";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  subtitle?: string;
  content: string;
  isButton: boolean;
  buttonText?: any;
  buttonUrl?: string;
}

export const Text: FC<Props> = ({
  title,
  subtitle,
  content,
  isButton,
  buttonText,
  buttonUrl,
}: Props): JSX.Element => {
  return (
    <div className={styles.text_box}>
      <h2 className={styles.text_box__title}>{title}</h2>
      {subtitle && <h3 className={styles.text_box__subtitle}>{subtitle}</h3>}
      <p className={styles.text_box__desc} dangerouslySetInnerHTML={{ __html: content }}></p>
      {isButton && <a href={buttonUrl && '#'} className="btn btn_fill_primary">{buttonText}</a>}
    </div>
  );
}
