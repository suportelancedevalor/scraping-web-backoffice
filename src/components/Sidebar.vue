<template>
  <nav
    class="navbar navbar-vertical fixed-start navbar-expand-md navbar-dark"
    id="sidebar"
  >
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarCollapse"
        aria-controls="sidebarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <router-link
        :to="$paths.home"
        class="navbar-brand text-start d-flex align-items-center"
      >
        <img
          class="navbar-brand-img rounded"
          src="@/assets/logo.png"
          alt="LDV-logo"
        />
      </router-link>

      <div class="navbar-user d-md-none">
        <div class="dropdown cursor-pointer align-items-center d-flex">
          <a
            href="#"
            id="sidebarIcon"
            class="dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div
              class="avatar avatar-sm d-flex align-items-center justify-content-end"
            >
              <i class="fas fa-user-circle display-4 text-primary-soft"></i>
            </div>
          </a>
          <div
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="sidebarIcon"
          >
            <router-link :to="$paths.myAccount" class="dropdown-item">
              Minha conta
            </router-link>
            <hr />
            <span @click="logout" class="dropdown-item text-danger">Sair</span>
          </div>
        </div>
      </div>

      <div class="collapse navbar-collapse" id="sidebarCollapse">
        <ul class="navbar-nav">
          <router-link :to="$paths.home" active-class="router-link-active">
            <li class="text-paragraph nav-item">
              <a class="nav-link">
                <i class="fa-solid fa-chart-simple sidebar-icon"></i>
                Home
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    userSession() {
      return this.$store.state.session;
    },
  },
  methods: {
    async logout() {
      this.$router.push(this.$paths.login);
    },
  },
};
</script>

<style scoped>
.sidebar-icon {
  width: 25px;
  margin-bottom: 2px;
}
</style>
