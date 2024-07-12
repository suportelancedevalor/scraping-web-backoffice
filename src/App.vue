<template>
  <ConfirmationAlert />
  <NotificationToast />
  <router-view />
</template>

<script>
import NotificationToast from "@/components/NotificationToast";
import { defineComponent } from "vue";

export default defineComponent({
  mounted() {
    console.log("Versão:", process.env.VUE_APP_VERSION_STRING);
  },
  created() {
    document.title = "LDV | BACKOFFICE";
  },
  components: {
    NotificationToast,
  },
});
</script>
