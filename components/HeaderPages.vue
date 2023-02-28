<script setup>
const props = defineProps({
  titulo: String,
});
</script>
<template>
  <div class="header-page">
    <div class="container">
      <div class="header-bread-crumb mb-3">
        <ul class="bread-crumb-ul">
          <li class="text-color1 fw-bold">
            Inicio
            <Icon
              class="mb-1"
              name="ic:baseline-arrow-forward-ios"
              :size="12"
            />
          </li>
          <li class="ms-2 text-white">{{ titulo }}</li>
        </ul>
      </div>
      <div class="header-page-title">
        <h1 class="text-white mb-0">
          {{ titulo }}
        </h1>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.header-page {
  background-image: url(~/assets/images/demos/bg/bg-header-page.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  padding: 50px 0px;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    background-color: rgba(0, 0, 0, 0.4);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .container {
    position: relative;
    z-index: 2;
    .header-bread-crumb {
      .bread-crumb-ul {
        list-style: none;
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
      }
    }
  }
}
</style>
