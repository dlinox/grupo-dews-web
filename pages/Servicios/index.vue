<template>
  <div class="page-servicios">
    <HeaderPages titulo="Servicios"></HeaderPages>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <SectionsTitulo titulo="Servicios" descripcion="Nuestros Servicios" />
        </div>
      </div>
      <div class="row mb-5 gy-3">

          <div class="col-4" v-for="item in 8" :key="item">
            <div
              class="card card-item bg-white w-100 border-white shadow"
              data-aos="fade-up"
            >
              <div class="card-body">
                <div class="icono-wrap">
                  <Icon
                    class="icono"
                    name="ic:twotone-business-center"
                    size="50px"
                  />
                </div>
                <h4 class="card-title w-100 text-center my-4">CORPORATIVO</h4>
                <p class="mb-0 text-center w-100 px-2 pb-2">
                  Contamos con una variedad de modelos de Camionetas 4x4, 4x2,
                  Vans, Minivans y Custers, con la implementación y equipamiento
                  requerido. Tarifas corporativas.
                </p>
              </div>
            </div>
          </div>

       
        </div>
    
    </div>
  </div>
</template>

<style lang="scss">
.page-servicios {
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
