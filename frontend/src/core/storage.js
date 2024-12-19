export const saveNoteToStorage = async (note) => {
	const notes = JSON.parse(localStorage.getItem("notes") || "[]");
	notes.push({
		id: Date.now(),
		content: note,
		createdAt: new Date().toISOString(),
	});
	localStorage.setItem("notes", JSON.stringify(notes));
};

export const loadNotesFromStorage = async () => {
	return JSON.parse(localStorage.getItem("notes") || "[]");
};
