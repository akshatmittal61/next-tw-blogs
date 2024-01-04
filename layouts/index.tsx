import React from "react";
import Header from "@/components/Header";

const Layout = ({ children }: any) => {
	return (
		<main className="h-screen flex items-center justify-start flex-col gap-4">
			<Header />
			{children}
		</main>
	);
};

export default Layout;
