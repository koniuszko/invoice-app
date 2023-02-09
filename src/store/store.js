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
      project_description: "",
      item_list: [
        {
          id: 1,
          item_name: "Banner Design",
          quantity: 2,
          price: 156,
          total: 0,
        },
      ],
    },
    invoices: [],

    invoicesCount() {
      let counter = this.invoices.length;
      return counter;
    },

    totalPriceCounter() {
      this.newInvoice.item_list.map((item) => {
        let totalPrice = item.quantity * item.price;
        item.total = totalPrice;
      });
    },

    themeSwitch() {
      this.theme === "dark" ? (this.theme = "light") : (this.theme = "dark");
    },

    dateSetHandler(data) {
      this.newInvoice.invoice_date = data;
    },

    formChangeHandler(id, value) {
      this.newInvoice[id] = value;
    },

    addingNewItem(item) {
      this.newInvoice.item_list.push(item);
    },

    itemListChangeHandler(id, value) {
      this.newInvoice.item_list[id] = value;
    },
  };
}
