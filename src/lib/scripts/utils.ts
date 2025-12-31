export const arrayFromNumber = (number: number): Array<number> => {
	return Array.from({ length: number }, (_, i) => i + 1);
};
