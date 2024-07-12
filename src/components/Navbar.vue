<template>
  <nav
    class="navbar navbar-expand navbar-light d-none d-md-flex px-6"
    id="topbar"
  >
    <div class="container-fluid">
      <nav aria-label="breadcrumb" class="me-auto ms-4">
        <ol class="breadcrumb fw-bold">
          <router-link v-slot="{ navigate }" custom v-if="link" :to="link">
            <li
              @click="navigate"
              class="breadcrumb-item d-flex align-items-center"
            >
              <a>
                {{ linkName }}
              </a>
            </li>
          </router-link>
          <router-link
            v-slot="{ navigate }"
            custom
            v-if="sublink"
            :to="sublink"
          >
            <li
              @click="navigate"
              class="breadcrumb-item d-flex align-items-center"
            >
              <a>{{ sublinkName }}</a>
            </li>
          </router-link>
          <li
            class="breadcrumb-item active d-flex align-items-center"
            aria-current="page"
          >
            {{ current }}
          </li>
        </ol>
      </nav>

      <div class="navbar-user ms-4">
        <div
          class="dropdown cursor-pointer align-items-center d-flex"
          @mouseover="avatarOver"
          @mouseleave="avatarLeave"
        >
          <span class="me-2 text-subtitle">{{
            userSession?.name || "Username"
          }}</span>
          <i class="fa-solid fa-user-circle display-4 text-secondary"></i>
          <div class="dropdown-menu dropdown-menu-end cursor-pointer">
            <router-link :to="$paths.myAccount" class="dropdown-item">
              Minha conta
            </router-link>
            <hr />
            <span @click="logout" class="dropdown-item text-danger">Sair</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { store } from "@/store";
import * as $ from "@/assets/theme/js/jquery.min.js";
export default {
  name: "Navbar",
  props: {
    link: String,
    linkName: String,
    sublink: String,
    sublinkName: String,
    current: String,
  },
  computed: {
    userSession() {
      return store.state.session;
    },
  },
  methods: {
    async logout() {
      this.$router.push(this.$paths.login);
    },
    avatarOver() {
      $(".dropdown-menu").addClass("show");
      $(".dropdown-menu").attr("data-bs-popper", true);
    },
    avatarLeave() {
      $(".dropdown-menu").removeClass("show");
      $(".dropdown-menu").removeAttr("data-bs-popper");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  padding-left: 250px !important;
}
</style>
