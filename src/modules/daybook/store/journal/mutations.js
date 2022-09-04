export const setEntries = (state, entries) => {
	state.isLoading = false;
	state.entries = [...state.entries, ...entries];
};

export const editEntry = (state, entry) => {
	const idx = state.entries.map((e) => e.id).indexOf(entry.id);
	state.entries[idx] = entry;
};

export const addEntry = (state, entry) => {
	state.entries = [entry, ...state.entries];
};

export const removeEntry = (state, id) => {
	state.entries = state.entries.filter((e) => e.id !== id);
};
