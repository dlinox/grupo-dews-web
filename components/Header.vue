<template>
  <header class="header">
    <div class="header-logo-container container">
      <div class="header-logo">
        <img width="140" src="~/assets/images/logo.png" alt="Discover Nuxt 3" />
      </div>
    </div>

    <div class="header-top">
      <div class="container">
        <ul>
          <li>
            <a class="text-muted text-decoration-none" href="#"> <Icon name="ic:twotone-email" /> finan@mail.com </a>
          </li>
          <li>
            <a class="text-muted text-decoration-none" href="#"> <Icon name="ic:twotone-phone" /> +1 401 572 4423 </a>
          </li>

          <li>
            <a class="text-muted text-decoration-none" href="#">
              <Icon name="ic:twotone-location-on" /> av los angesfs 654a
            </a>
          </li>
        </ul>

        <ul>
          <li>
            <a class="text-muted text-decoration-none" href="#">
              <Icon name="uil:facebook" />
            </a>
          </li>
          <li>
            <a class="text-muted text-decoration-none" href="#">
              <Icon name="uil:instagram" />
            </a>
          </li>
          <li>
            <a class="text-muted text-decoration-none" href="#">
              <Icon name="uil:twitter" />
            </a>
          </li>
          <li>
            <a class="text-muted text-decoration-none" href="#">
              <Icon name="uil:youtube" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="header-bottom">
      <div class="container">
        <ul class="menu-ul">
          <li class="menu-li"><NuxtLink  class="menu-item" to="/">Inicio</NuxtLink ></li>
          <li class="menu-li"><NuxtLink  class="menu-item" to="/automoviles">Automoviles</NuxtLink ></li>
          <li class="menu-li"><NuxtLink  class="menu-item" to="/servicios">Servicios</NuxtLink ></li>
          <li class="menu-li"><NuxtLink  class="menu-item" to="/nosotros">Nosotros</NuxtLink ></li>
          <li class="menu-li"><NuxtLink  class="menu-item" to="/contacto">Contactanos</NuxtLink ></li>
        </ul>
      </div>
    </div>
  </header>
</template>
