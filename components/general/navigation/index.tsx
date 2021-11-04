import Link from "next/link";

const menus = [
	{ name: "Home", href: "/" },
	{ name: "Dashboard", href: "/dashboard/search/youtube" },
	{ name: "Pricing", href: "/" },
];

const Navigation = ({ humberger }) => {
	return (
		<nav className={`primary__navigation ${humberger ? "nav-open" : ""}`}>
			<ul>
				{menus.map((menu) => (
					<li key={menu.name}>
						<Link href={menu.href}>
							<a>{menu.name}</a>
						</Link>
					</li>
				))}
				<li>
					<Link href={'/login'}>
						<a className="btn">
							Login
						</a>
					</Link>
				</li>

				<li>
					<Link href={'/'}>
						<a className="btn btn_fill_primary">
							Free Trial
						</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
