document.write(
    `
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <!--La organización y color de fondo de la barra de navegación-->
    <div class="container-fluid">
      <a class = "navbar-brand" href="index.html">
        <!--Clase navbar-brand útil para hacer una navegación de empresa-->
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Cellnex_Telecom_logo.svg/2560px-Cellnex_Telecom_logo.svg.png" width="150" height="40">
      </a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <!--collapse para agrupar diferentes componentes-->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="jobs1.html">Puestos de trabajo</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="productos.html">Productos y servicios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="accion.html">Accionistas e inversores</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="https://www.cellnextelecom.com/">Pagina oficial</a>
            </li>
        </ul>
        <!--Metemos un buscador que no hace nada la verdad-->
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

`
)