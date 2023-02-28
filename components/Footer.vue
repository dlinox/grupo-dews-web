<template>
  <footer class="footer">
    <div class="container py-5">
      <div class="row">
        <div class="col d-flex justify-content-center align-items-center">
          <img width="150px" src="~/assets/images/logo.png" alt="" />
        </div>
        <div class="col">
          <h6 class="text-white">Menu</h6>
          <ul class="list-style-none">
            <li>
              <NuxtLink to="/">
                <Icon
                  class="text-color1"
                  name="ic:twotone-arrow-drop-down-circle"
                />
                Inicio
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/automoviles"
                ><Icon
                  class="text-color1"
                  name="ic:twotone-arrow-drop-down-circle"
                />
                Automoviles</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/servicios">
                <Icon
                  class="text-color1"
                  name="ic:twotone-arrow-drop-down-circle"
                />
                Servicios</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/nosotros">
                <Icon class="text-color1" name="ic:twotone-arrow-drop-down-circle" />
                Nosotros</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/contacto">
                <Icon
                  class="text-color1"
                  name="ic:twotone-arrow-drop-down-circle"
                />
                Contacto</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="col">
          <h6 class="text-white">Servicios</h6>
          <ul>
            <li><NuxtLink to="/">            <Icon class="text-color1" name="ic:twotone-arrow-drop-down-circle" /> Corporativo </NuxtLink></li>
            <li><NuxtLink to="/automoviles"> <Icon class="text-color1" name="ic:twotone-arrow-drop-down-circle" /> Particular</NuxtLink></li>
            <li><NuxtLink to="/servicios">   <Icon class="text-color1" name="ic:twotone-arrow-drop-down-circle" /> Serv. Aeropuerto</NuxtLink></li>
            <li><NuxtLink to="/nosotros">    <Icon class="text-color1" name="ic:twotone-arrow-drop-down-circle" /> Por ubicaion</NuxtLink></li>
            <li><NuxtLink to="/contacto">    <Icon class="text-color1" name="ic:twotone-arrow-drop-down-circle" /> Servicio de chofer</NuxtLink></li>
          </ul>
        </div>
        <div class="col">
          <h6 class="text-white">Automoviles</h6>
          <ul>
            <li><NuxtLink to="/">            <Icon class="text-color1" name="ic:twotone-arrow-drop-down-circle" /> Camionetas </NuxtLink></li>
            <li><NuxtLink to="/automoviles"> <Icon class="text-color1" name="ic:twotone-arrow-drop-down-circle" /> Autos</NuxtLink></li>
            <li><NuxtLink to="/servicios">   <Icon class="text-color1" name="ic:twotone-arrow-drop-down-circle" /> Minivan </NuxtLink></li>
            <li><NuxtLink to="/nosotros">    <Icon class="text-color1" name="ic:twotone-arrow-drop-down-circle" /> Maquinaria pesada</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copy w-100 bg-white">
      <div class="container text-center py-3 text-muted">
        <small
          >© Copyright <span class="text-color1 fw-bold">GrupoDrews</span> . All Rights
          Reserved</small
        >
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  background-color: rgb(20, 20, 20);
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    color: #aaa;

    svg {
      rotate: -90deg;
      margin-right: 8px;
      transition: transform 0.3s ease-in;
    }
    &:hover {
      svg {
        transform: translateY(5px);
      }
    }
  }
  ul {
    list-style: none;
    padding: 0;
  }
}
</style>
