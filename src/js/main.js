import Alpine from "alpinejs";

window.Alpine = Alpine;

document.addEventListener("alpine:init", () => {
  
  Alpine.data("dropdown", () => ({
    open: false,
    toggle() {
      if (this.open) {
        return this.close();
      }
      this.$refs.button.focus();

      this.open = true;
    },
    close(focusAfter) {
      if (!this.open) return;

      this.open = false;

      focusAfter && focusAfter.focus();
    },
  }));
});

Alpine.start();
