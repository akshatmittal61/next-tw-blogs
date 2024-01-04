import React from "react";
import blogs from "@/data/blogs";
import { IBlog } from "@/types/blogs";
import Link from "next/link";

interface BlogsPageProps {
	blogs: IBlog[];
}

const BlogsPage: React.FC<BlogsPageProps> = ({ blogs }) => {
	return (
		<main className="blogs grid grid-flow-row grid-cols-3 gap-6">
			{blogs.map((blog) => {
				return (
					<Link
						key={blog.id}
						href={`/blogs/${blog.slug}`}
						className="blogs-card p-4 flex flex-col justify-start items-start gap-2 border-2 rounded-md transition-all duration-200 ease-in-out hover:bg-slate-200"
					>
						<h3 className="blog-title text-xl font-bold">
							{blog.title}
						</h3>
						<span className="blog-date text-sm text-gray-400">
							{blog.date}
						</span>
					</Link>
				);
			})}
		</main>
	);
};

export default BlogsPage;

export const getServerSideProps = async () => {
	return {
		props: {
			blogs,
		},
	};
};
