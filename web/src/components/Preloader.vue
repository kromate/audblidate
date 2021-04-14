<template>
  <div class="preloader">
    <div class="preloader__inner">
      <Logo class="logo" />
      <p>Audblidate</p>
    </div>
  </div>
</template>

<script>
import Logo from "../components/Logo";

export default {
  name: "Preloader",
  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
.logo {
  animation: glow 2s forwards infinite;
}
@keyframes glow {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1.2);
  }
  100% {
    transform: scale(1, 1);
  }
}

.preloader {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #272b34;
}

.preloader__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  svg {
    position: absolute;
    bottom: -7rem;
    transform: scale(0.15);
  }
}
</style>
