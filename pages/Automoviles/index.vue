<template>
  <div class="page-vehiculos">
    <HeaderPages titulo="Vehiculos"></HeaderPages>
    <section class="container">
      <div class="row">
        <div class="col-12">
          <div class="car-tipos">
            <ul>
              <li class="active">Todos</li>
              <li>Autos</li>
              <li>Camionestas</li>
              <li>MiniVan</li>
            </ul>
          </div>
        </div>
        <div class="col-12 my-3">
          <div class="row">
            <div class="col-1">
              <div class="mb-3">
                <label for="pasajeros" class="form-label">Pasajeros</label>
                <input
                  type="number"
                  class="form-control"
                  id="pasajeros"
                  placeholder="4"
                />
              </div>
            </div>
            <div class="col-3">
              <div class="mb-3">
                <label for="transmision" class="form-label">Transmisión</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  id="transmision"
                >
                  <option selected>-- Transmisión --</option>
                  <option value="1">Manual</option>
                  <option value="2">Automática</option>
                </select>
              </div>
            </div>

            <div class="col-3 ms-auto">
              <div class="mb-3">
                <label for="buscar" class="form-label">Buscar</label>
                <input
                  type="text"
                  class="form-control"
                  id="buscar"
                  placeholder="Buscar"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="row gy-4">
            <div v-for="item in 10" :key="item" class="col-4">
              <div class="card rounded-0 shadow border-0">
                <img
                  src="~/assets/images/demos/vehiculos/car-geacb943e7_640.jpg"
                  class="card-img-top rounded-0"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">ETIOS</h5>
                  <p class="card-text">Mucho más de lo que esperabas</p>
                </div>
                <div class="card-footer bg-white">
                  <span class="text-muted me-3">
                    <Icon class="" name="ic:twotone-person-outline"></Icon>
                    <small> 5</small>
                  </span>

                  <span class="text-muted me-3">
                    <Icon class="" name="ic:outline-format-overline"></Icon>
                    <small> Automático</small>
                  </span>

                  <hr />

                  <a class="btn-style-six w-100 text-center">
                    <span class="btn-wrap">
                      <span class="text-one">Ver mas</span>
                      <span class="text-two">Ver mas</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-4"></div>
            <div class="col-4"></div>
            <div class="col-4"></div>
            <div class="col-4"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.page-vehiculos {
  min-height: 80vh;
  .container {
    padding: 50px 0px;
    .car-tipos {
      border-bottom: 1px solid #eee;
      ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
        li {
          padding: 10px 20px;
          border-bottom: 4px solid white;
          &.active {
            border-bottom: 4px solid #0c7f40;
            color: #0c7f40;
          }
        }
      }
    }
  }
}
</style>
