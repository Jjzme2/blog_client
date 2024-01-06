<template>
  <div :style="{ color: customColor }">
    {{ includeSeparator ? "( " + content + " )" : content }}
  </div>
</template>

<script>
export default {
  name: "NotableText",
  props: {
    includeSeparator: {
      type: Boolean,
      default: false,
    },
    content: {
      type: String,
      required: true,
    },
    customColor: {
      type: String,
      required: false,
      default: "yellow",
    },
  },
};
</script>
