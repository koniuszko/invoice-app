export function createStore() {
    return {
        theme: "",
        filters: {
            draft: true,
            pending: true,
            paid: true,
        },
        addModalOpen: false,
        editModalOpen: false,

        themeSwitch() {
            this.theme = localStorage.getItem("theme");
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
