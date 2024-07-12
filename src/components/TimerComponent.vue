<template>
  <p
    class="h2"
    :class="{
      'blink text-danger':
        !timeout && remainingTime <= alertTimeInSeconds * 1000,
      'text-danger': timeout,
    }"
  >
    {{ formattedTime }}
  </p>
</template>

<script>
import { defineComponent } from "vue";

let interval = 0;
export default defineComponent({
  props: {
    startTimeInSeconds: {
      type: Number,
      default: 0,
    },
    //quando o tempo restante estiver abaixo do limite passado, o timer começa a piscar
    alertTimeInSeconds: {
      required: false,
      type: Number,
      default: 0,
    },
  },
  computed: {
    formattedTime() {
      return new Date(this.remainingTime).toISOString().substr(11, 8);
    },
  },
  mounted() {
    if (this.startTimeInSeconds > 0) {
      this.remainingTime = this.startTimeInSeconds * 1000;
      interval = setInterval(() => {
        this.remainingTime = this.remainingTime - 1000;
        if (this.remainingTime <= 0) {
          this.timeout = true;
          this.$emit("onTimeout");
          clearInterval(interval);
        }
      }, 1000);
    }
  },
  unmounted() {
    clearInterval(interval);
  },
  data() {
    return {
      remainingTime: 0,
      timeout: false,
    };
  },
});
</script>

<style>
.blink {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
