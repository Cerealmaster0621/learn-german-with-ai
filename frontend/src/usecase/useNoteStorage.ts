export const useNoteStorage = () => {
	const saveNote = (content: string): void => {
		// Implementation here
	};

	const loadNotes = (): string[] => {
		// Implementation here
		return [];
	};

	return { saveNote, loadNotes };
};
