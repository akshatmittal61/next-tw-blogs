import React from "react";
import blogs from "@/data/blogs";
import { IBlog } from "@/types/blogs";
import Link from "next/link";
import Image from "next/image";

interface BlogsPageProps {
	blogs: IBlog[];
}

const BlogsPage: React.FC<BlogsPageProps> = ({ blogs }) => {
	return (
		<main className="blogs grid grid-flow-row grid-cols-3 gap-6 px-4">
			{blogs.map((blog) => {
				return (
					<Link
						key={blog.id}
						href={`/blogs/${blog.slug}`}
						className="blogs-card p-4 flex flex-col justify-start items-start gap-2 border-2 rounded-md transition-all duration-200 ease-in-out hover:bg-slate-200"
					>
						<Image
							src={blog.coverImage}
							alt={blog.title}
							width={1920}
							height={1080}
							className="rounded-md w-full aspect-auto h-auto object-cover mb-2"
						/>
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
