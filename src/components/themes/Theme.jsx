import { createGlobalStyle } from "styled-components";
import variables from "./themes.scss";

export const lightTheme = {
	pColor: variables.lightPrimary,
	sColor: variables.lightSecondary,

	tbPColor_active: variables.lightModeTB_active_primary,
	tbSColor_active: variables.lightModeTB_active_secondary,

	tbPColor_inactive: variables.lightModeTB_inactive_primary,
	tbSColor_inactive: variables.lightModeTB_inactive_secondary,

    selectedGrad: variables.selectedLightGrad,
	selectedColor: variables.selectedColorLight,
	//global: "#051"

	level0: variables.level0light,
	level1: variables.level1light,
	level2: variables.level2light,
	level3: variables.level3light,
	level4: variables.level4light,
};

export const darkTheme = {
	pColor: variables.darkPrimary,
	sColor: variables.darkSecondary,

	tbPColor_active: variables.darkModeTB_active_primary,
	tbSColor_active: variables.darkModeTB_active_secondary,

	tbPColor_inactive: variables.darkModeTB_inactive_primary,
	tbSColor_inactive: variables.darkModeTB_inactive_secondary,

    selectedGrad: variables.selectedDarkGrad,
	selectedColor: variables.selectedColorDark,
	//global: "#938"

	level0: variables.level0dark,
	level1: variables.level1dark,
	level2: variables.level2dark,
	level3: variables.level3dark,
	level4: variables.level4dark,
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
		--selectedColor: ${(props) => props.theme.selectedColor};

		--level0: ${(props) => props.theme.level0};
		--level1:  ${(props) => props.theme.level1};
		--level2:  ${(props) => props.theme.level2};
		--level3:  ${(props) => props.theme.level3};
		--level4:  ${(props) => props.theme.level4};
	}
`;

//background-color: ${(props) => props.theme.body};
//color: ${(props) => props.theme.fontColor};
// --global-test-color: ${(props) => props.theme.global};
