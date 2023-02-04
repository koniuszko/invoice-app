export function createStore() {
  return {
    theme: "dark",

    themeSwitch() {
      this.theme === "dark" ? (this.theme = "light") : (this.theme = "dark");
    },
  };
}
