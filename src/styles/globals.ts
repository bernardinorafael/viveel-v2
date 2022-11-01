import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	:focus {
		box-shadow: 0 0 0 3px ${(props) => props.theme.color.viveel.violet300};
		outline: none;
	}

	@media (max-width: 992px) {
		html {
			font-size: 93.75%;
		}
	}

@media (max-width: 768px) {
  html {
    font-size: 87.5%;
  }
}

body {
	background: ${(props) => props.theme.color.gray[900]};
	color: ${(props) => props.theme.color.gray[100]};
}

body, input, select, textarea, button {
	font-family: ${(props) => props.theme.fontFamily.default};
	font-size: ${(props) => props.theme.fontSize.md};
	font-weight: ${(props) => props.theme.fontWeight.regular};
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
}
`
export { GlobalStyles }
