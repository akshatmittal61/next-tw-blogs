import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
	return (
		<header className="w-screen px-8 py-4 flex justify-between items-center border-b-2 border-stone-400">
			<Link href="/">
				<Image
					src="https://akshatmittal61.vercel.app/favicon-512.png"
					alt="logo"
					width={36}
					height={36}
					className="rounded-full cursor-pointer"
				/>
			</Link>
			<ul className="header-list flex gap-8 list-none">
				{[
					{
						name: "Blogs",
						link: "/blogs",
					},
					{
						name: "About",
						link: "/about",
					},
					{
						name: "Contact Us",
						link: "/contact",
					},
				].map((item, index) => (
					<li
						key={index}
						className="text-xl hover:underline hover:text-sky-800"
					>
						<Link href={item.link}>{item.name}</Link>
					</li>
				))}
			</ul>
		</header>
	);
};

export default Header;
