import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const CreateLinkForm = dynamic(() => import("../components/create-link"), {
	ssr: false,
});

const Home: NextPage = () => {
	return (
		<div className="flex flex-col justify-center items-center h-screen bg-cyan-bg text-gray-600">
			<Suspense>
				<CreateLinkForm />
			</Suspense>
		</div>
	);
};

export default Home;
