import { createGlobalStyle } from "styled-components";
import variables from "./themes.scss";

export const lightTheme = {
	pColor: variables.lightPriamry,
	sColor: variables.lightSecondary,

	tbPColor_active: variables.lightModeTB_active_primary,
	tbSColor_active: variables.lightModeTB_active_secondary,

	tbPColor_inactive: variables.lightModeTB_inactive_primary,
	tbSColor_inactive: variables.lightModeTB_inactive_secondary,

    selectedGrad: variables.selectedLightGrad,
	//global: "#051"
};

export const darkTheme = {
	pColor: variables.darkPrimary,
	sColor: variables.darkSecondary,

	tbPColor_active: variables.darkModeTB_active_primary,
	tbSColor_active: variables.darkModeTB_active_secondary,

	tbPColor_inactive: variables.darkModeTB_inactive_primary,
	tbSColor_inactive: variables.darkModeTB_inactive_secondary,

    selectedGrad: variables.selectedDarkGrad,
	//global: "#938"
};

export const GlobalStyles = createGlobalStyle`
	:root {
        --pColor: ${(props) => props.theme.pColor};
        --sColor: ${(props) => props.theme.sColor};
        --tbPColor_active: ${(props) => props.theme.tbPColor_active};
        --tbSColor_active: ${(props) => props.theme.tbSColor_active};
        --tbPColor_inactive: ${(props) => props.theme.tbPColor_inactive};
        --tbSColor_inactive: ${(props) => props.theme.tbSColor_inactive};
        --selectedGrad: ${(props) => props.theme.selectedGrad};
	}
`;

//background-color: ${(props) => props.theme.body};
//color: ${(props) => props.theme.fontColor};
// --global-test-color: ${(props) => props.theme.global};
