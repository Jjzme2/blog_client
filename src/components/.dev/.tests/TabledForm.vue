<template>
  <div class="tabled-form">
    <table class="table table-bordered table-striped">
      <tbody>
        <tr v-for="(value, key) in dataCollection" :key="key">
			<td>{{ key }}</td>
			<td>
				<simpleInput
					v-if="
						typeof value === 'string' ||
						typeof value === 'number' ||
						typeof value === 'boolean'
					"
					:includeLabel="false"
					:currentValue="value"
					:label="key"
					@change="updateValue"
				/>
				<div v-else-if="typeof value === 'object'">
					<objectSelection
						:includeLabel="false"
						:currentValue="value"
						:label="key"
						getterString="postCategories/getAll"
						@change="updateValue"
					/>
				</div>
				<div v-else>
					{{ key }} is not a valid type. Please check the data type of
					{{ key }}.
					{{ value }}
				</div>
			</td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import simpleInput from "@/components/app/mainElements/forms/SimpleInput.vue";
import objectSelection from "@/components/app/mainElements/forms/ObjectSelection.vue";

export default {
  name: "tabledForm",
  components: {
	simpleInput,
	objectSelection,
  },
  props: {
    headers: {
      type: Array,
      required: true,
    },
    dataCollection: {
      type: Array,
      required: true,
    },
  },
};
</script>
