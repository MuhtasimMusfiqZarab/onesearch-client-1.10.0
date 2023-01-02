import React from 'components/uicontainers/404/node_modules/react';
import { IconProps } from '../utils/interfaces';

export const Logo = ({ width, height, color }: IconProps): JSX.Element => {
  return (
    <svg
      width={width ? width : '219'}
      height={height ? height : '50'}
      viewBox="0 0 219 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M41.0139 50H8.98609C4.04466 50 0 45.9553 0 41.0139V7.17685C0 3.22893 3.22893 0 7.17685 0H41.0139C45.9553 0 50 4.04466 50 8.98609V41.0139C50 45.9553 45.9553 50 41.0139 50Z"
        fill="#E6AF2E"
      />
      <path
        d="M16.257 39.9156C13.6686 38.556 11.6449 36.6657 10.1887 34.2499C8.72977 31.8341 8.00293 29.0941 8.00293 26.0247C8.00293 22.9578 8.72977 20.2152 10.1887 17.7994C11.6449 15.3836 13.6686 13.4959 16.257 12.1337C18.8453 10.7716 21.7684 10.0918 25.0287 10.0918C28.2863 10.0918 31.2015 10.7742 33.7716 12.1337C36.3417 13.4959 38.3522 15.3836 39.8111 17.7994C41.2674 20.2152 41.9969 22.9578 41.9969 26.0247C41.9969 29.0941 41.2674 31.8341 39.8111 34.2499C38.3522 36.6657 36.339 38.556 33.7716 39.9156C31.2015 41.2777 28.2863 41.9575 25.0287 41.9575C21.7684 41.9575 18.8453 41.2777 16.257 39.9156ZM30.6943 32.2655C32.1689 30.7125 32.9088 28.6339 32.9088 26.0247C32.9088 23.418 32.1689 21.3368 30.6943 19.7838C29.2171 18.2308 27.3294 17.4543 25.0287 17.4543C22.7279 17.4543 20.8297 18.2308 19.3342 19.7838C17.8387 21.3368 17.091 23.418 17.091 26.0247C17.091 28.6339 17.8387 30.7125 19.3342 32.2655C20.8297 33.8185 22.7279 34.595 25.0287 34.595C27.3294 34.595 29.2171 33.8185 30.6943 32.2655Z"
        fill="#03396C"
      />
      <path
        d="M36.3654 17.2815C38.7002 17.2815 40.593 15.3887 40.593 13.0538C40.593 10.719 38.7002 8.82617 36.3654 8.82617C34.0305 8.82617 32.1377 10.719 32.1377 13.0538C32.1377 15.3887 34.0305 17.2815 36.3654 17.2815Z"
        fill="white"
      />
      <path
        d="M36.3655 18.066C33.602 18.066 31.3535 15.8176 31.3535 13.054C31.3535 10.2905 33.602 8.04199 36.3655 8.04199C39.1291 8.04199 41.3776 10.2905 41.3776 13.054C41.3776 15.8176 39.1291 18.066 36.3655 18.066ZM36.3655 9.6107C34.4674 9.6107 32.9222 11.1559 32.9222 13.054C32.9222 14.9522 34.4674 16.4973 36.3655 16.4973C38.2637 16.4973 39.8089 14.9522 39.8089 13.054C39.8089 11.1559 38.2637 9.6107 36.3655 9.6107Z"
        fill="#E6AF2E"
      />
      <path
        d="M66.232 35.28C63.7493 35.28 61.9293 34.6827 60.772 33.488C59.6147 32.2747 59.036 30.5667 59.036 28.364C59.036 26.1613 59.6147 24.4627 60.772 23.268C61.948 22.0547 63.768 21.448 66.232 21.448C68.7147 21.448 70.5347 22.0547 71.692 23.268C72.868 24.4627 73.456 26.1613 73.456 28.364C73.456 30.5667 72.8773 32.2747 71.72 33.488C70.5627 34.6827 68.7333 35.28 66.232 35.28ZM66.232 32.06C67.4453 32.06 68.3133 31.7893 68.836 31.248C69.3587 30.688 69.62 29.7267 69.62 28.364C69.62 27.0013 69.3587 26.0493 68.836 25.508C68.3133 24.948 67.4453 24.668 66.232 24.668C65.0373 24.668 64.1787 24.948 63.656 25.508C63.1333 26.0493 62.872 27.0013 62.872 28.364C62.872 29.7267 63.1333 30.688 63.656 31.248C64.1787 31.7893 65.0373 32.06 66.232 32.06ZM76.0843 35V21.728H79.5843L79.7243 22.988C80.2656 22.5773 80.9469 22.2227 81.7683 21.924C82.6083 21.6067 83.4856 21.448 84.4003 21.448C86.1549 21.448 87.4336 21.8587 88.2363 22.68C89.0389 23.5013 89.4403 24.7707 89.4403 26.488V35H85.6603V26.684C85.6603 25.788 85.4736 25.1533 85.1003 24.78C84.7456 24.4067 84.0736 24.22 83.0843 24.22C82.5056 24.22 81.9176 24.3507 81.3203 24.612C80.7416 24.8733 80.2563 25.2 79.8643 25.592V35H76.0843ZM98.9964 35.28C96.7004 35.28 94.8804 34.7107 93.5364 33.572C92.1924 32.4147 91.5204 30.6693 91.5204 28.336C91.5204 26.2267 92.0804 24.556 93.2004 23.324C94.339 22.0733 96.0284 21.448 98.2684 21.448C100.322 21.448 101.89 21.9893 102.972 23.072C104.074 24.136 104.624 25.536 104.624 27.272V29.68H95.0204C95.2257 30.744 95.711 31.472 96.4764 31.864C97.2604 32.256 98.3617 32.452 99.7804 32.452C100.49 32.452 101.208 32.3867 101.936 32.256C102.683 32.1253 103.318 31.9573 103.84 31.752V34.44C103.224 34.72 102.506 34.9253 101.684 35.056C100.863 35.2053 99.967 35.28 98.9964 35.28ZM95.0204 27.356H101.32V26.628C101.32 25.8627 101.096 25.2653 100.648 24.836C100.2 24.388 99.4444 24.164 98.3804 24.164C97.1297 24.164 96.2524 24.416 95.7484 24.92C95.263 25.424 95.0204 26.236 95.0204 27.356ZM111.795 35.28C110.806 35.28 109.863 35.2053 108.967 35.056C108.071 34.9253 107.353 34.7573 106.811 34.552V31.416C107.465 31.6773 108.202 31.8827 109.023 32.032C109.845 32.1627 110.601 32.228 111.291 32.228C112.225 32.228 112.878 32.172 113.251 32.06C113.643 31.948 113.839 31.696 113.839 31.304C113.839 30.856 113.541 30.5293 112.943 30.324C112.365 30.1187 111.497 29.8293 110.339 29.456C109.126 29.0453 108.193 28.5507 107.539 27.972C106.886 27.3933 106.559 26.5347 106.559 25.396C106.559 24.1267 107.017 23.156 107.931 22.484C108.865 21.7933 110.358 21.448 112.411 21.448C113.233 21.448 114.007 21.5133 114.735 21.644C115.463 21.756 116.079 21.896 116.583 22.064V25.172C116.079 24.9293 115.501 24.752 114.847 24.64C114.194 24.5093 113.587 24.444 113.027 24.444C112.225 24.444 111.581 24.5 111.095 24.612C110.629 24.724 110.395 24.9667 110.395 25.34C110.395 25.7507 110.647 26.04 111.151 26.208C111.674 26.376 112.477 26.628 113.559 26.964C114.623 27.2813 115.454 27.6267 116.051 28C116.649 28.3733 117.069 28.8213 117.311 29.344C117.554 29.848 117.675 30.4827 117.675 31.248C117.675 33.936 115.715 35.28 111.795 35.28ZM126.805 35.28C124.509 35.28 122.689 34.7107 121.345 33.572C120.001 32.4147 119.329 30.6693 119.329 28.336C119.329 26.2267 119.889 24.556 121.009 23.324C122.148 22.0733 123.837 21.448 126.077 21.448C128.13 21.448 129.698 21.9893 130.781 23.072C131.882 24.136 132.433 25.536 132.433 27.272V29.68H122.829C123.034 30.744 123.52 31.472 124.285 31.864C125.069 32.256 126.17 32.452 127.589 32.452C128.298 32.452 129.017 32.3867 129.745 32.256C130.492 32.1253 131.126 31.9573 131.649 31.752V34.44C131.033 34.72 130.314 34.9253 129.493 35.056C128.672 35.2053 127.776 35.28 126.805 35.28ZM122.829 27.356H129.129V26.628C129.129 25.8627 128.905 25.2653 128.457 24.836C128.009 24.388 127.253 24.164 126.189 24.164C124.938 24.164 124.061 24.416 123.557 24.92C123.072 25.424 122.829 26.236 122.829 27.356ZM139.237 35.28C138.397 35.28 137.613 35.1307 136.885 34.832C136.175 34.5147 135.597 34.0573 135.149 33.46C134.719 32.844 134.505 32.0787 134.505 31.164C134.505 29.8573 134.962 28.812 135.877 28.028C136.81 27.244 138.182 26.852 139.993 26.852H143.913V26.488C143.913 25.6667 143.679 25.088 143.213 24.752C142.765 24.416 141.85 24.248 140.469 24.248C138.957 24.248 137.501 24.4813 136.101 24.948V22.288C136.717 22.0453 137.463 21.8493 138.341 21.7C139.237 21.532 140.207 21.448 141.253 21.448C143.25 21.448 144.79 21.8587 145.873 22.68C146.974 23.4827 147.525 24.78 147.525 26.572V35H144.249L144.053 33.796C143.53 34.2627 142.886 34.6267 142.121 34.888C141.355 35.1493 140.394 35.28 139.237 35.28ZM140.273 32.788C141.113 32.788 141.841 32.648 142.457 32.368C143.073 32.088 143.558 31.7333 143.913 31.304V29.204H140.077C138.602 29.204 137.865 29.8107 137.865 31.024C137.865 32.2 138.667 32.788 140.273 32.788ZM150.569 35V21.728H154.069L154.237 23.1C154.834 22.7267 155.571 22.3907 156.449 22.092C157.345 21.7747 158.222 21.56 159.081 21.448V24.304C158.577 24.3787 158.026 24.4907 157.429 24.64C156.831 24.7893 156.262 24.9573 155.721 25.144C155.179 25.3307 154.722 25.5267 154.349 25.732V35H150.569ZM167.243 35.28C164.872 35.28 163.052 34.692 161.783 33.516C160.532 32.34 159.907 30.6227 159.907 28.364C159.907 26.0307 160.579 24.2947 161.923 23.156C163.286 22.0173 165.096 21.448 167.355 21.448C168.288 21.448 169.091 21.5133 169.763 21.644C170.435 21.7747 171.088 21.9893 171.723 22.288V25.004C171.256 24.78 170.715 24.6027 170.099 24.472C169.483 24.3413 168.82 24.276 168.111 24.276C166.692 24.276 165.61 24.5747 164.863 25.172C164.116 25.7507 163.743 26.8147 163.743 28.364C163.743 29.7827 164.079 30.8187 164.751 31.472C165.442 32.1253 166.552 32.452 168.083 32.452C168.736 32.452 169.371 32.3867 169.987 32.256C170.622 32.1253 171.21 31.9293 171.751 31.668V34.468C170.5 35.0093 168.998 35.28 167.243 35.28ZM174.139 35V16.128H177.919V22.848C178.46 22.4373 179.123 22.1013 179.907 21.84C180.691 21.5787 181.54 21.448 182.455 21.448C184.21 21.448 185.488 21.8587 186.291 22.68C187.094 23.5013 187.495 24.7707 187.495 26.488V35H183.715V26.684C183.715 25.788 183.528 25.1533 183.155 24.78C182.8 24.4067 182.128 24.22 181.139 24.22C180.56 24.22 179.972 24.3507 179.375 24.612C178.796 24.8733 178.311 25.2 177.919 25.592V35H174.139ZM190.013 35V32.172H193.093V35H190.013ZM196.637 19.292V16.324H200.753V19.292H196.637ZM196.945 35V24.528H194.957L195.293 21.728H200.725V35H196.945ZM210.58 35.28C208.097 35.28 206.277 34.6827 205.12 33.488C203.962 32.2747 203.384 30.5667 203.384 28.364C203.384 26.1613 203.962 24.4627 205.12 23.268C206.296 22.0547 208.116 21.448 210.58 21.448C213.062 21.448 214.882 22.0547 216.04 23.268C217.216 24.4627 217.804 26.1613 217.804 28.364C217.804 30.5667 217.225 32.2747 216.068 33.488C214.91 34.6827 213.081 35.28 210.58 35.28ZM210.58 32.06C211.793 32.06 212.661 31.7893 213.184 31.248C213.706 30.688 213.968 29.7267 213.968 28.364C213.968 27.0013 213.706 26.0493 213.184 25.508C212.661 24.948 211.793 24.668 210.58 24.668C209.385 24.668 208.526 24.948 208.004 25.508C207.481 26.0493 207.22 27.0013 207.22 28.364C207.22 29.7267 207.481 30.688 208.004 31.248C208.526 31.7893 209.385 32.06 210.58 32.06Z"
        fill={color ? color : '#505050'}
      />
    </svg>
  );
};
