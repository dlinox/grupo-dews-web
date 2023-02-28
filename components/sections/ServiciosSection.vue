<script setup></script>
<template>
  <section class="servicios-section">
    <div class="container">
      <div class="row g-4">
        <div class="col-12 col-md-4 py-2">
          <div
            class="card bg-color1 border-color1 shadow text-white"
            data-aos="fade-up"
            data-aos-anchor=".hero"
          >
            <div class="card-body p-4">
              <h1 class="card-title mb-3">Grupo DREWS</h1>
              <p class="mb-0">
                Grupo Drews forma parte de un grupo empresarial conformado por
                Servicios Múltiples Drews S.A.C. - (Drews Rent A Car), Servicios
                Generales Drews Perú S.A.C., Esbril S.A.C., Intermotors S.A.C. y
                Tamawi S.A.C. con amplia experiencia en el sector Automotriz.
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-8">
          <div class="h-100">
            <Swiper
              :modules="[SwiperAutoplay]"
              :slides-per-view="2"
              :loop="true"
              :spaceBetween="20"
              :autoplay="{
                delay: 5000,
                disableOnInteraction: true,
              }"
            >
              <SwiperSlide v-for="item in 4" :key="item">
                <div
                  class="card card-item bg-white w-100 border-white shadow-sm"
                  data-aos="fade-up"
                  data-aos-anchor=".hero"
                >
                  <div class="card-body">
                    <div class="icono-wrap">
                      <Icon
                        class="icono"
                        name="ic:twotone-business-center"
                        size="50px"
                      />
                    </div>
                    <h4 class="card-title w-100 text-center my-4">
                      CORPORATIVO
                    </h4>
                    <p class="mb-0 text-center w-100 px-2 pb-2">
                      Contamos con una variedad de modelos de Camionetas 4x4,
                      4x2, Vans, Minivans y Custers, con la implementación y
                      equipamiento requerido. Tarifas corporativas.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  background-color: transparent !important;
  display: flex;
  align-items: flex-start;
  padding: 0.8em;
}

.servicios-section {
  margin-top: -150px;
  //transform: translateY(-150px);
  .card.card-item .card-body {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .icono-wrap {
      position: relative;
      padding: 5px;

      .icono {
        z-index: 5;
        position: relative;
        color: #0c7f40;
      }

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 10px;
        clip-path: circle(50% at 50% 50%);
        background-color: #eee;
        z-index: 0;

        transition: ease-in-out width 0.5s, height 0.5s;
      }

      &:hover {
        &::after {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
}
</style>
