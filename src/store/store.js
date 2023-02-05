export function createStore() {
  return {
    theme: "dark",
    adress: {
      street: "19 Union Terrace",
      city: "London",
      postcode: "E1 3EZ",
      country: "United Kingdom",
    },
    newInvoice: {
      client_name: "Alexis Grim",
      client_email: "alexgrim@mail.com",
      client_street: "19 Union Terrace",
      client_city: "London",
      client_postcode: "E1 3EZ",
      client_country: "United Kingdom",
      invoice_date: new Date(),
      payment_date: new Date(),
    },
    invoices: [],

    invoicesCount() {
      let counter = this.invoices.length;
      return counter;
    },

    themeSwitch() {
      this.theme === "dark" ? (this.theme = "light") : (this.theme = "dark");
    },

    dateSetHandler(data) {
      this.newInvoice.invoice_date = data;
    },
  };
}
