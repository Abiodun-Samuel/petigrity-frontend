<template>
  <Icon
    :icon="icon"
    :style="{ height: `${height}px`, width: `${width}px` }"
    :inline="false"
  />
</template>
<script>
import { Icon } from "@iconify/vue";
export default {
  props: {
    icon: {
      type: String,
      required: true,
      default: "",
    },
    height: {
      type: Number,
      required: false,
      default: 20,
    },
    width: {
      type: Number,
      required: false,
      default: 20,
    },
  },
  components: {
    Icon,
  },
};
</script>