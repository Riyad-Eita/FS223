import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
	return (
		<main className="min-h-screen w-screen">
			<div id="container" className="h-full w-full">
				<ModeToggle />
				Home
			</div>
		</main>
	);
}
