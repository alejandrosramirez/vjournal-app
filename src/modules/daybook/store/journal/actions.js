import journalApi from "@/api/journalApi";

export const loadEntries = async ({ commit }) => {
	const { data } = await journalApi.get("/entries.json");

	const entries = [];

	if (data) {
		for (let id of Object.keys(data)) {
			entries.push({
				id,
				...data[id],
			});
		}
	}

	commit("setEntries", entries);
};

export const updateEntry = async ({ commit }, entry) => {
	const { date, id, picture, text } = entry;

	console.log({ picture });

	await journalApi.put(`/entries/${id}.json`, {
		date,
		picture,
		text,
	});

	commit("editEntry", { ...entry });
};

export const createEntry = async ({ commit }, entry) => {
	const { date, picture, text } = entry;

	const { data } = await journalApi.post("/entries.json", {
		date,
		picture,
		text,
	});

	commit("addEntry", { id: data.name, ...entry });

	return data.name;
};

export const deleteEntry = async ({ commit }, id) => {
	await journalApi.delete(`/entries/${id}.json`);

	commit("removeEntry", id);
};
