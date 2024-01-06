<template>
  <ComponentView>
    <!-- Display all the properties within the empty Data -->
    <!-- <input type="date" value="2024-01-03" /> -->

    <div v-for="(value, key) in emptyData" :key="key">
      <div v-if="!readOnlyKeys.includes(key)">
        <simpleInput
          v-if="
            typeof value === 'string' ||
            typeof value === 'number' ||
            typeof value === 'boolean'
          "
          :currentValue="emptyData[key]"
          :label="key"
          @change="updateValue"
        />

        <div v-else-if="typeof value === 'object'">
          <objectSelection
            :currentValue="value"
            :label="key"
            :getterString="categoryGetterString"
            @change="updateValue"
          />
        </div>
        <!-- <div v-else>
          {{ key }} is not a valid type. Please check the data type of
          {{ key }}.
          {{ value }}
        </div> -->
      </div>
      <div v-else class="input-form">
        <label
          >{{ this.$stringUtils.convertStringToCase(key, "title") }}:</label
        >
        <input :value="value" :readonly="true" />
      </div>
    </div>

    <button class="btn btn-primary" @click="submit()">
      Add to {{ dataCollection }}
    </button>
  </ComponentView>
</template>

<script>
import ComponentView from "/src/views/_common/ComponentView.vue";

import simpleInput from "/src/components/app/mainElements/forms/SimpleInput.vue";
import objectSelection from "/src/components/app/mainElements/forms/ObjectSelection.vue";

export default {
  name: "EmptyObjectForm",
  components: {
    ComponentView,
    simpleInput,
    objectSelection,
  },
  mounted() {
    this.$store.dispatch(`${this.dataCollection}/getEmpty`);
  },
  data() {
    return {
      //   categoryGetterString: "posts/getAll",
      categoryGetterString: "postCategories/getAll",
    };
  },
  props: {
    readOnlyKeys: {
      type: Array,
      required: false,
      default: () => {
        return ["createdOn", "modifiedOn", "id"];
      },
    },
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
  methods: {
    submit() {
      this.$store.dispatch(`${this.dataCollection}/saveObject`, this.emptyData);
    },
    updateValue(data) {
      //   console.log(data);
      this.emptyData[data.key] = data.value;
    },
  },
};
</script>
