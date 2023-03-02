<script setup>
import { ref } from "vue";
import ServiciosSection from "~/components/sections/ServiciosSection.vue";

const datos = ref('');

const funcion = async () => {

  datos.value = await apiFetch("hola");

  console.log(JSON.parse(JSON.stringify(datos.value)));

  console.log(datos.value);


};

funcion();

const lino = await apiFetch("hola");
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

    <SectionsClientes></SectionsClientes>

    <pre>{{ lino.data }}</pre>

  </main>
</template>

<style lang="scss"></style>
