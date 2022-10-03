<template>
  <div class="sub__header text-center py-2">
    <h1>
      Our <span>{{ sub__header }}</span>
    </h1>
  </div>
</template>

<script setup>
defineProps({
  sub__header: {
    type: String,
    required: true,
    default: "",
  },
});
</script>

<style lang="css">
.sub__header h1 span {
  font-weight: bold;
  color: var(--yellow-1);
  text-decoration: underline;
}
</style>