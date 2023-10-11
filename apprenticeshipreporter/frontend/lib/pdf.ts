import { UserProfileType } from "@/types";
import { PDFDocument, StandardFonts, degrees, rgb } from "pdf-lib";

export const createPdf = async (user: UserProfileType) => {
	const formUrl = "https://pdf-lib.js.org/assets/dod_character.pdf";
	const formPdfBytes = await fetch(formUrl).then((res) => res.arrayBuffer());

	const marioUrl = "https://pdf-lib.js.org/assets/small_mario.png";
	const marioImageBytes = await fetch(marioUrl).then((res) =>
		res.arrayBuffer()
	);

	const emblemUrl = "https://pdf-lib.js.org/assets/mario_emblem.png";
	const emblemImageBytes = await fetch(emblemUrl).then((res) =>
		res.arrayBuffer()
	);

	const pdfDoc = await PDFDocument.load(formPdfBytes);

	const marioImage = await pdfDoc.embedPng(marioImageBytes);
	const emblemImage = await pdfDoc.embedPng(emblemImageBytes);

	const form = pdfDoc.getForm();

	const nameField = form.getTextField("CharacterName 2");
	const ageField = form.getTextField("Age");
	const heightField = form.getTextField("Height");
	const weightField = form.getTextField("Weight");
	const eyesField = form.getTextField("Eyes");
	const skinField = form.getTextField("Skin");
	const hairField = form.getTextField("Hair");

	const alliesField = form.getTextField("Allies");
	const factionField = form.getTextField("FactionName");
	const backstoryField = form.getTextField("Backstory");
	const traitsField = form.getTextField("Feat+Traits");
	const treasureField = form.getTextField("Treasure");

	const characterImageField = form.getButton("CHARACTER IMAGE");
	const factionImageField = form.getButton("Faction Symbol Image");

	nameField.setText(user?.userName || "Mario");
	ageField.setText("24 years");
	heightField.setText(`5' 1"`);
	weightField.setText("196 lbs");
	eyesField.setText(user?.userEmail || "blue");
	skinField.setText("white");
	hairField.setText("brown");

	characterImageField.setImage(marioImage);

	alliesField.setText(
		[
			`Allies:`,
			`  • Princess Daisy`,
			`  • Princess Peach`,
			`  • Rosalina`,
			`  • Geno`,
			`  • Luigi`,
			`  • Donkey Kong`,
			`  • Yoshi`,
			`  • Diddy Kong`,
			``,
			`Organizations:`,
			`  • Italian Plumbers Association`,
		].join("\n")
	);

	factionField.setText(`Mario's Emblem`);

	factionImageField.setImage(emblemImage);

	backstoryField.setText(
		[
			`Mario is a fictional character in the Mario video game franchise, `,
			`owned by Nintendo and created by Japanese video game designer Shigeru `,
			`Miyamoto. Serving as the company's mascot and the eponymous `,
			`protagonist of the series, Mario has appeared in over 200 video games `,
			`since his creation. Depicted as a short, pudgy, Italian plumber who `,
			`resides in the Mushroom Kingdom, his adventures generally center `,
			`upon rescuing Princess Peach from the Koopa villain Bowser. His `,
			`younger brother and sidekick is Luigi.`,
		].join("\n")
	);

	traitsField.setText(
		[
			`Mario can use three basic three power-ups:`,
			`  • the Super Mushroom, which causes Mario to grow larger`,
			`  • the Fire Flower, which allows Mario to throw fireballs`,
			`  • the Starman, which gives Mario temporary invincibility`,
		].join("\n")
	);

	treasureField.setText(["• Gold coins", "• Treasure chests"].join("\n"));

	const pdfBytes = await pdfDoc.save();

	return pdfBytes;
};
