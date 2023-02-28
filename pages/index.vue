<script setup>
import ServiciosSection from "~/components/sections/ServiciosSection.vue";
</script>

<template>
  <main>
    <section class="hero" data-aos="fade-up">
      <video
        style="width: 100%; height: 87vh; object-fit: cover"
        src="../assets/videos/main-video.mp4"
        autoplay
        muted
        loop
      ></video>
    </section>

    <ServiciosSection />

    <SectionsAutomoviles></SectionsAutomoviles>

    <SectionsClientes ></SectionsClientes>
  </main>
</template>

<style lang="scss"></style>
