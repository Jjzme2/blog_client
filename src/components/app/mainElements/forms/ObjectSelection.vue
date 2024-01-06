<template>
  <div class="form-group">
    <div v-if="includeLabel">
      <label>{{ readableLabel }}</label>
    </div>

    <!-- If the type is an object, create a select dropdown -->
    <select
      v-if="typeof currentValue === 'object'"
      class="form-control"
      :id="key"
      @change="updateValue($event.target.value)"
    >
      <option v-for="option in options" :key="option.id" :value="option.id">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "ObjectSelection",
  data() {
    return {
      selectedOption: null,
    };
  },
  props: {
    includeLabel: {
      type: Boolean,
      default: true,
    },
    currentValue: {
      type: Object,
      required: true,
      validator: (value) => {
        return value.id && value.name;
      },
    },
    label: {
      type: String,
      required: true,
      validator: (value) => {
        return value.length > 0;
      },
    },
    getterString: {
      type: String,
      required: true,
    },
    logReturnedData: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getOptionName(id) {
      const option = this.options.find((opt) => opt.id === id);
      return option ? option.name : "";
    },
    updateValue(id) {
      this.$emit("change", {
        key: this.key,
        value: {
          id: id,
          name: this.getOptionName(id),
        },
      });
    },
  },
  computed: {
    key() {
      return this.label.toLowerCase();
    },
    readableLabel() {
      return this.$stringUtils.convertStringToCase(this.label, "title");
    },
    options() {
      const dispatchString = this.getterString.split("/")[0] + "/fetchAll";

      let dataArray = this.$store.getters[this.getterString];
      if (!dataArray || dataArray.length == 0) {
        // If the options are not in the store, dispatch the action to fetch them
        this.$store.dispatch(dispatchString);
      }

      // Return the options from the store
      let data = this.$store.getters[this.getterString];
      if (this.logReturnedData) {
        console.log(data);
      }

      return this.$store.getters[this.getterString];
    },
  },
};
</script>
