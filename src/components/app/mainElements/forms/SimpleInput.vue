<template>
  <div class="input-form">
    <div v-if="includeLabel">
      <label>{{ readableLabel }}</label>
    </div>
    <!-- If the type is a string, allow for a input. -->
    <input
      v-if="
        typeof currentValue === 'string' &&
        currentValue !== 'true' &&
        currentValue !== 'false'
      "
      type="text"
      class="form-control"
      :id="label"
      :value="currentValue"
      @input="updateValue($event.target.value)"
    />
    <!-- If the type is a number, allow for a input. -->
    <input
      v-else-if="typeof currentValue === 'number'"
      type="number"
      class="form-control"
      :id="label"
      :value="currentValue"
      @input="updateValue($event.target.value)"
    />
    <!-- If the type is a boolean, or bit, allow for a checkbox -->
    <input
      v-else-if="
        typeof currentValue == 'boolean' ||
        typeof currentValue == 'bit' ||
        currentValue == 'true' ||
        currentValue == 'false'
      "
      type="checkbox"
      class="form-check-input"
      :id="label"
      :value="currentValue"
      @input="updateValue($event.target.checked)"
    />
  </div>
</template>

<script>
export default {
  name: "simpleInput",
  data() {
    return {
      value: "",
    };
  },
  props: {
    includeLabel: {
      type: Boolean,
      default: true,
    },
    currentValue: {
      type: [String, Number, Boolean, Date],
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
    readableLabel() {
      return this.$stringUtils.convertStringToCase(this.label, "title");
    },
  },
  methods: {
    updateValue(newValue) {
      console.log("Updated value: " + newValue);

      this.$emit("change", { key: this.label, value: newValue });
    },
  },
};
</script>
