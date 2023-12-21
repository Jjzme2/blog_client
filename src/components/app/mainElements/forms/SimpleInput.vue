<template>
  <div class="form-group">
    <label>{{ label }}</label>

    <!-- If the type is a string, allow for a input. -->
    <input
      v-if="typeof currentValue === 'string'"
      type="text"
      class="form-control"
      :id="key"
      v-model="value"
    />
    <!-- If the type is a number, allow for a input. -->
    <input
      v-else-if="typeof currentValue === 'number'"
      type="number"
      class="form-control"
      :id="key"
      v-model="value"
    />
    <!-- If the type is a boolean, or bit, allow for a checkbox -->
    <input
      v-else-if="typeof currentValue === 'boolean'"
      type="checkbox"
      class="form-check-input"
      :id="key"
      v-model="value"
    />
  </div>
</template>

<script>
export default {
  name: "simpleInput",
  data() {
    return {
      value: {},
    };
  },
  props: {
    currentValue: {
      type: [String, Number, Boolean],
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  watch: {
    currentValue: {
      immediate: true,
      handler() {
        this.value = this.currentValue;
      },
    },
    value: {
      immediate: true,
      handler() {
        this.$emit("input", this.value);
      },
    },
  },
  mounted() {
    this.$store.dispatch(`${this.dataCollection}/getEmpty`);
  },
  computed: {
    dataCollection() {
      const pathSegments = this.$route.path.split("/");
      const collection = pathSegments[1];
      return collection;
    },
  },
};
</script>
