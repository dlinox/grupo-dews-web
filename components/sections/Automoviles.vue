<script setup>
const data = [
  {
    icon: "~/assets/images/icons/001-car.png",
    text: "Camioneta",
  },

  {
    icon: "~/assets/images/icons/001-car.png",

    text: "Auto",
  },

  {
    icon: "~/assets/images/icons/001-car.png",

    text: "MiniVan",
  },

  {
    icon: "~/assets/images/icons/001-car.png",

    text: "Maquinaria pesada",
  },
];

const veiculos = [];
</script>
<template>
  <section class="section-automoviles mb-4">
    <div class="container">
      <SectionsTitulo
        titulo="Vehiculos"
        descripcion="Conoce nuestra variedad en alquiler de vehículos"
      />

      <div class="slide-automoviles">
        <div class="row">
          <div class="col-12 col-md-4 col-ul">
            <ul>
              <li
                v-for="(item, index) in data"
                :class="index == 1 ? 'shadow active' : 'shadow'"
              >
                <div class="icono">
                  <img src="~/assets/images/icons/001-car.png" alt="" />
                </div>

                <span class="text ms-4"> {{ item.text }} </span>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-8 col-slide">
            <div class="slide-wrap">
              <div class="slide-image">
                <img
                  src="~/assets/images/demos/vehiculos/digger-g014d6ec8c_640.jpg"
                  alt=""
                />
              </div>
              <div class="slide-card card shadow">
                <div class="card-body">
                  <div class="card-title">
                    <h3>Camionestas 4x4</h3>
                  </div>
                </div>
                <div class="card-footer bg-white border-0">
                  <a class="btn-style-six">
                    <span class="btn-wrap">
                      <span class="text-one">Ver mas</span>
                      <span class="text-two">Ver mas</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.section-automoviles {
  background-color: #fefefe;
  padding: 50px 0px;
  .slide-automoviles {
    .col-ul {
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
          margin-bottom: 20px;
          padding: 15px 20px;
          display: flex;
          align-items: center;
          border-radius: 4px;
          background-color: white;

          .icono {
            background-color: #0c7f403c;
            padding: 4px;
            border-radius: 50%;
            img {
              filter: invert(35%) sepia(35%) saturate(1762%) hue-rotate(107deg)
                brightness(91%) contrast(91%);
            }
          }
          span.text {
            font-size: 20px;
            font-weight: 600;
            color: #666;
          }

          &.active {
            background-color: #0c7f40dc;
            span.text {
              color: white;
            }

            .icono {
              background-color: white;
            }
          }
        }
      }
    }
    .col-slide {
      .slide-wrap {
        margin-bottom: 40px;
        position: relative;
        background-color: aqua;
        .slide-image {
          width: 100%;
          height: 360px;
          overflow: hidden;
          border-radius: 5px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
        }
        .slide-card {
          border: none;
          position: absolute;
          width: 40%;
          left: 20px;
          bottom: -40px;
        }
      }
    }
  }
}

.btn-style-six {
  position: relative;
  line-height: 30px;
  font-weight: 600;
  overflow: hidden;
  text-align: center;
  border-radius: 5px;
  display: inline-block;
  color: white;
  text-transform: capitalize;
  padding: 10px 20px 10px 30px;
  background: #000000;

  &:hover {
    color: #0c7f40;

    .btn-wrap {
      .text-one:first-child {
        -webkit-transform: translateY(-150%);
        -ms-transform: translateY(-150%);
        transform: translateY(-150%);
      }

      .text-two {
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        color: white;
        transform: translateY(-50%);
      }
    }
  }
  &::before {
    -webkit-transition-duration: 800ms;
    transition-duration: 800ms;
    position: absolute;
    width: 200%;
    height: 200%;
    content: "";
    top: -200%;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    border-radius: 50%;
    z-index: 1;
    background: #0c7f40;
  }
  &:hover::before {
    top: 0%;
  }

  .btn-wrap {
    position: relative;
    z-index: 1;
    float: left;
    overflow: hidden;
    display: inline-block;

    .text-one {
      position: relative;
      display: block;
      color: white;
      transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      -webkit-transition: all 0.3s ease;
    }

    .text-two {
      position: absolute;
      top: 100%;
      display: block;
      color: white;
      -webkit-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      transition: all 0.3s ease;
    }
  }
}
</style>
