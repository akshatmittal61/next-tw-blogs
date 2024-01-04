import React from "react";
import blogs from "@/data/blogs";
import { IBlog } from "@/types/blogs";

interface BlogPageProps {
	blog: IBlog | null;
}

const BlogPage: React.FC<BlogPageProps> = ({ blog }) => {
	if (!blog) {
		return (
			<div className="w-full h-full flex items-center justify-center text-2xl font-bold">
				Oops! Blog not found.
			</div>
		);
	}
	return (
		<main className="">
			<h1 className="text-4xl font-bold">{blog.title}</h1>
			<p className="text-sm text-gray-400">{blog.date}</p>
			<div
				className="blog-content mt-4"
				dangerouslySetInnerHTML={{ __html: blog.content }}
			></div>
		</main>
	);
};

export default BlogPage;

export const getServerSideProps = async (context: any) => {
    const { slug } = context.params;
    
	const blog = blogs.find((blog) => blog.slug === slug);

	if (!blog) {
		return {
			props: {
				blog: null,
			},
		};
	}

	return {
		props: {
			blog,
		},
	};
};
