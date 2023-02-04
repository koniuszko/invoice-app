import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;700&display=swap");

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;}

  body {
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  font-family: "League Spartan", sans-serif;
}

h1 {
  font-weight: bold;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: -1px;
}

h2 {
  font-weight: bold;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: -0.63px;
}

h3 {
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.8px;
}

h4 {
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
}

.text {
  font-weight: medium;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
}

.text_small {
  font-weight: medium;
  font-size: 11px;
  line-height: 18px;
  letter-spacing: -0.23px;
}
button {
  border: none;
  background-color: transparent;
}
`;
