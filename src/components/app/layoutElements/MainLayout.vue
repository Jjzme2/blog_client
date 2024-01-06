<template>
  <div class="main-layout">
    <header class="header" v-if="$slots.header">
      <slot name="header">
        <NavbarElement customClass="large dark centered horizontal" />
      </slot>
    </header>

    <main class="body">
      <slot></slot>
    </main>

    <footer class="footer" v-if="$slots.footer">
      <footer>
        <p>&copy; {{ yearTag }}</p>
      </footer>
    </footer>
  </div>
</template>
<script>
import NavbarElement from "@/components/app/base/NavbarElement.vue";

export default {
  name: "MainLayout",
  components: { NavbarElement },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      startYear: 2023,
    };
  },
  computed: {
    yearTag() {
      return this.currentYear > this.startYear
        ? `${this.startYear} - ${this.currentYear}`
        : this.startYear;
    },
  },
};
</script>
