import React, { useEffect, useRef } from "react";
import { Crepe } from "@milkdown/crepe";
import "@milkdown/crepe/theme/common/style.css";
import "@milkdown/crepe/theme/frame.css";

export default function Notes() {
	const editorRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!editorRef.current) return;

		const crepe = new Crepe({
			root: editorRef.current,
			defaultValue: "Hello, Milkdown!",
		});
		crepe.create().then(() => {
			console.log("Editor created");
		});
		return () => {
			crepe.destroy();
		};
	}, []);

	return (
		<div className="min-h-screen p-8 bg-gray-50">
			{/* Editor container */}
			<div className="bg-white p-4 rounded shadow">
				<div id="app" ref={editorRef} />
			</div>

			{/* "Revise with AI" button at the bottom */}
			<div className="flex justify-center mt-8">
				<button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded border border-gray-300 text-gray-700">
					Revise with AI
				</button>
			</div>
		</div>
	);
}
