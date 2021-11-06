import React, { useState } from "react";
import Link from 'next/link'
import { Logo } from "components/_icons";
import Navigation from "components/general/navigation";
import styles from './styles.module.scss';

const Header = () => {
	let [humberger, handleHubberger] = useState(false);

	return (
		<header className={styles.site_header}>
			<div className={styles.container}>
				<div className={styles.brand_logo}>
					<Link href="/">
						<a>
							<Logo />
						</a>
					</Link>

					<button
						className={`humberger ${humberger ? "humberger-open" : ""}`}
						aria-label="Toggle navigation"
						onClick={() => handleHubberger((humberger = !humberger))}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>

				<div className={`${styles.header__nav}`}>
					<Navigation humberger={humberger} />
				</div>
			</div>
		</header>
	);
};

export default Header;
