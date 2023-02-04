export function createStore() {
  return {
    theme: "dark",
    invoices: [],

    invoicesCount() {
      let counter = this.invoices.length;
      return counter;
    },

    themeSwitch() {
      this.theme === "dark" ? (this.theme = "light") : (this.theme = "dark");
      console.log(this.counter);
    },
  };
}
