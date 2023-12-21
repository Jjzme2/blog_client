<template>
  <ComponentView>
    <!-- Display all the properties within the empty Data -->
    <div v-for="(value, key) in emptyData" :key="key">
      <simpleInput
        v-if="
          typeof value === 'string' ||
          typeof value === 'number' ||
          typeof value === 'boolean'
        "
        :currentValue="value"
        :label="key"
      />
      <div v-else>
        {{ key }} is not a valid type. Please check the data type of {{ key }}.
        {{ value }}
      </div>
    </div>
  </ComponentView>
</template>

<script>
import ComponentView from "/src/views/_common/ComponentView.vue";
import simpleInput from "/src/components/app/mainElements/forms/SimpleInput.vue";

export default {
  name: "EmptyObjectForm",
  components: {
    ComponentView,
    simpleInput,
  },
  mounted() {
    this.$store.dispatch(`${this.dataCollection}/getEmpty`);
  },
  computed: {
    emptyData() {
      return this.$store.getters[`${this.dataCollection}/getEmpty`];
    },
    dataCollection() {
      const pathSegments = this.$route.path.split("/");
      const collection = pathSegments[1];
      return collection;
    },
  },
};
</script>
