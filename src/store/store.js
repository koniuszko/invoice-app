export function createStore() {
    return {
        theme: "dark",
        filters: {
            draft: true,
            pending: true,
            paid: true,
        },
        addModalOpen: false,
        editModalOpen: false,

        themeSwitch() {
            this.theme === "dark" ? (this.theme = "light") : (this.theme = "dark");
        },

        filtersChange(filter) {
            this.filters[filter] = !this.filters[filter];
        },

        setAddModalOpen(s) {
            this.addModalOpen = s;
        },

        setEditModalOpen(s) {
            this.editModalOpen = s;
        }
    };
}
