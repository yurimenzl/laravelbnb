<template>
  <div>
    <div class="text-center success">
      <i class="far fa-thumbs-up"></i>
      <h1 class="mt-4">Success!</h1>
      <h2>
        <slot></slot>
      </h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.success {
  color: #999999;
  font-size: 10rem;
}
</style>