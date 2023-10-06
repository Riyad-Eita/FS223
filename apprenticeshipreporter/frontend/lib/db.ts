declare global {
	var mysql:
		| {
				profile: {
					userId: string;
				};
		  }
		| undefined;
}

export const db = globalThis.mysql || {
	profile: {
		userId: "1",
	},
};

if (process.env.NODE_ENV !== "production") globalThis.mysql = db;
