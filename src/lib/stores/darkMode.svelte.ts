const initiateDarkMode = () => {
	let dm = $state(false);

	const updatedBasedOnLocalStorage = () => {
		const storedPreference = localStorage.getItem('dark_mode');

		if (storedPreference !== null) {
			dm = JSON.parse(storedPreference);
		} else if (typeof window !== 'undefined' && window.matchMedia) {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				dm = true;
				setDmInLocalStorage();
			}
		}
		setDarkClass();
	};

	const setDmInLocalStorage = () => {
		localStorage.setItem('dark_mode', JSON.stringify(dm));
	};

	const setDarkClass = () => {
		const htmlElement = document.documentElement;
		if (dm) {
			htmlElement.classList.add('dark');
		} else if (!dm) {
			htmlElement.classList.remove('dark');
		}
	};

	const toggle = () => {
		dm = !dm;
		setDmInLocalStorage();
		setDarkClass();
	};

	return {
		get dm() {
			return dm;
		},
		updatedBasedOnLocalStorage,
		toggle,
		setDmInLocalStorage,
		setDarkClass
	};
};

export const dm = initiateDarkMode();
