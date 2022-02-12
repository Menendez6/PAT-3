document.write(`
<footer class="bg-dark text-center text-white">
<!-- Grid container -->
<div class="container p-4">
  <!-- Section: Social media -->
  <section class="mb-4 ">

    <!-- Twitter -->
    <a class="btn btn-outline-light btn-floating m-1" href="https://twitter.com/cellnextelecom?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" role="button">
      <i class="fab fa-twitter"></i>
    </a>

    <!-- Google -->
    <a class="btn btn-outline-light btn-floating m-1" href="https://www.cellnextelecom.com/" role="button">
      <i class="fab fa-google"></i>
    </a>

    <!-- Linkedin -->
    <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/company/cellnextelecom/?originalSubdomain=es" role="button">
      <i class="fab fa-linkedin-in"></i>
    </a>

    <!-- Github -->
    <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/Menendez6" role="button">
      <i class="fab fa-github"></i>
    </a>
  </section>
  <!-- Section: Social media -->

  <!-- Section: Form -->
  <section class="">
    <form action="">
      <!--Grid row-->
      <div class="row d-flex justify-content-center">
        <!--Grid column-->
        <div class="col-auto">
          <p class="pt-2">
            <strong>Sign up for our newsletter</strong>
          </p>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-md-5 col-12">
          <!-- Email input -->
          <div class="form-outline form-white mb-4">
            <input type="email" id="form5Example21" class="form-control" />
            <label class="form-label" for="form5Example21">Email address</label>
          </div>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-auto">
          <!-- Submit button -->
          <div id="liveAlertPlaceholder"></div>
          <button type="button" class="btn btn-outline-light mb-4" id = "subsBtn">
            Subscribe
          </button>
        </div>
        <!--Grid column-->
      </div>
      <!--Grid row-->
    </form>
  </section>
  <!-- Section: Form -->
  <script>
    var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    var alertTrigger = document.getElementById('subsBtn')

  function alert(message, type) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    alertPlaceholder.append(wrapper)
  }

  if (alertTrigger) {
    alertTrigger.addEventListener('click', function () {
      alert('Perfecto, te hemos enviado un correo!', 'success')
    })
  }
  </script>

<!-- Copyright -->
<div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
   © 2022 Copyright:
  <a class="text-white" href="https://mdbootstrap.com/">Cellnex.com</a>
</div>
<!-- Copyright -->
</footer>
<!-- Footer -->`)