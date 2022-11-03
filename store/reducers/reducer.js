import { OPEN_MODAL, CLOSE_MODAL, TOOGLE_THEME } from "../actions/actions";
import { setCookie } from "cookies-next";

export const reducer = (state, action) => {
	switch (action.type) {
		case OPEN_MODAL:
			return {
				...state,
				isModalOpen: true,
			};

		case CLOSE_MODAL:
			return {
				...state,
				isModalOpen: false,
			};

		case TOOGLE_THEME:
			setCookie("isDark", !state.isDark, { sameSite: true });

			return {
				...state,
				isDark: !state.isDark,
			};

		default:
			return state;
	}
};
