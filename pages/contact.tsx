import React from "react";

const ContactUsPage: React.FC = () => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Form submitted");
	};

	return (
		<>
			<div className="container relative px-16">
				<h1 className="title absolute top-0 left-0 font-extrabold text-7xl z-10">
					Get in Touch
				</h1>
				<div className="box translate-x-10 translate-y-10 bg-lime-300 p-8 rounded-3xl">
					<form
						className="form w-full py-4 flex flex-col gap-8"
						onSubmit={handleSubmit}
					>
						<div className="input-group w-6/12 flex flex-col gap-2 justify-center items-start">
							<label htmlFor="name" className="text-2xl">
								Your name
							</label>
							<input
								type="text"
								placeholder="John Doe"
								className="input w-full outline-none bg-transparent text-2xl border-b-2 border-gray-400 focus:border-gray-800"
							/>
						</div>
						<div className="input-group w-6/12 flex flex-col gap-2 justify-center items-start">
							<label htmlFor="email" className="text-2xl">
								Your email
							</label>
							<input
								type="email"
								placeholder="name@example.com"
								className="input w-full outline-none bg-transparent text-2xl border-b-2 border-gray-400 focus:border-gray-800"
							/>
						</div>
						<div className="input-group w-6/12 flex flex-col gap-2 justify-center items-start">
							<label htmlFor="email" className="text-2xl">
								Your Message
							</label>
							<textarea
								placeholder="Your message here..."
								rows={5}
								className="input w-full outline-none bg-transparent text-2xl border-b-2 border-gray-400 focus:border-gray-800"
							/>
						</div>
						<button
							type="submit"
							className="btn rounded-full w-fit px-10 py-4 bg-black text-white transition-all duration-200 hover:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-950"
						>
							Send us a Message
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default ContactUsPage;
