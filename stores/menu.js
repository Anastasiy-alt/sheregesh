export const menuStore = defineStore('menuStore', {
    state: () => ({
        isOpen: false
    }),
    actions: {
        toggle() {
            this.isOpen = !this.isOpen
        },
    }
})
