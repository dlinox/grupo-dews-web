<template>
  <section class="section-clientes">
    <div class="container">
      <SectionsTitulo titulo="Clientes" descripcion="Nuestros clientes" />

      <div class="clientes-slide">
        <Swiper
          :modules="[SwiperAutoplay, SwiperNavigation]"
          :slides-per-view="5"
          :loop="true"
          :spaceBetween="20"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
          }"
          :pagination="true"
        >
          <SwiperSlide v-for="item in 10" :key="item">
            <div class="card card-item w-100" data-aos="fade-up">
              <div class="card-body p-1">
                <img
                  src="~/assets/images/demos/clientes/BEAR-CREEK.png"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>

  <section class="section-cotizar">
    <div class="container">
      <div class="row">
        <div class="col-10">
          <h3>Obtiene una cotización</h3>
        </div>
        <div class="col-2">
          <a class="btn-style-six">
            <span class="btn-wrap">
              <span class="text-one">COTIZACIÓN</span>
              <span class="text-two">COTIZACIÓN</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.section-clientes {
  background-color: #fefefe;
  background-image: radial-gradient(#0a880a2b 1px, transparent 1px);
  background-size: 10px 10px;
  padding: 50px 0px;
  .clientes-slide {
    .card-item {
      border: none;
      background-color: transparent;
      img {
        width: 100%;
        filter: grayscale(100%);
        transition: all 0.5s ease-in;
      }
      &:hover {
        img {
          filter: grayscale(0%);
        }
      }
    }
  }
}
.section-cotizar {
  background-image: url("/assets/bg/bg-cotizacion.jpg");
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 60px 0px;

  h3 {
    font-weight: 700;
    font-size: 2.2rem;
    text-align: start;
    color: white;
    position: relative;
    z-index: 1;
  }
  a{
    position: relative;
    z-index: 1;
  }

  &::after {
    position: absolute;
    content: "";
    background-color: rgba(12, 127, 64, 0.497);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
