export function createStore() {
  return {
    theme: "dark",
    filters: {
      draft: true,
      pending: true,
      paid: true,
    },

    themeSwitch() {
      this.theme === "dark" ? (this.theme = "light") : (this.theme = "dark");
    },

    filtersChange(filter) {
      this.filters[filter] = !this.filters[filter];
    },
  };
}
