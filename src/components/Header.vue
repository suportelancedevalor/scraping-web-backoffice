<template>
  <div class="header mt-md-5" :class="headerClass">
    <div class="header-body" :class="headerBodyClass">
      <div class="row align-items-center">
        <div class="col">
          <h1 class="header-title fw-bolder" :class="{ 'header-subtitle-custom': isSubHeader }">
            <span v-if="iconClass" :class="iconClass" class="me-3"></span>
            <span class="me-3">{{ title }}</span>
            <span v-if="totalCount !== null" class="badge bg-primary-soft"
              style="font-size: 0.8rem;">{{ totalCount }}</span>
          </h1>
          <p class="text-muted mt-2">{{ subtitle }}</p>
        </div>
        <div v-if="btnLabel" class="col-auto">
          <router-link  v-if="btnLink" :to="btnLink" class="btn btn-primary lift">
            <i v-if="btnIcon" :class="btnIcon" class="me-1"></i>
            {{ btnLabel }}
          </router-link>
          <button v-else @click="handleBtnAction()" class="btn btn-primary lift">
            <i v-if="btnIcon" :class="btnIcon" class="me-1"></i>
            {{ btnLabel }}
          </button>
        </div>
        <div class="col-auto">
          <slot name="button"></slot>
        </div>
      </div>
      <div class="row align-items-center" v-if="tabs">
        <div class="col">
          <ul class="nav nav-tabs nav-overflow header-tabs">
            <li class="nav-item" v-for="(item, index) of tabs" v-bind:key="index">
              <a href="#" @click.prevent="handleTabClicked(item.id)" class="nav-link" :class="{ active: item.active }">
                {{ item.value }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    title: String,
    subtitle: String,
    btnLabel: String,
    btnLink: String,
    btnAction: Function,
    tabClicked: Function,
    btnIcon: String,
    tabs: Array,
    iconClass: String,
    headerClass: String,
    headerBodyClass: String,
    subtitle: String,
    totalCount: Number,
    isSubHeader: {
      type: Boolean,
      default: true
    },
    col: {
      type: String,
      default: 'col-10'
    }
  },
  methods: {
    handleBtnAction () {
      this.$emit('btnAction')
    },
    handleTabClicked (id) {
      console.log(id)
      this.$emit('tabClicked', id)
    }
  }
}
</script>

<style>
.header-subtitle-custom {
  font-size: 1.4rem !important;
}
</style>
