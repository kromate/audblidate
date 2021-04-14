<template>
  <router-link to="/">
    <div class="logo">
      <div :class="`logo__wrap ${gender}`">
        <!-- <i class="fab fa-earlybirds logo__icon"></i> -->
        <i class="fas fa-question-circle logo__icon"></i>
        <!-- <span class="logo__fake-eye"></span> -->
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    gender: String,
  },
};
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  width: fit-content;

  .logo__wrap:hover {
    transform: scale(1.2, 1.2);
  }

  /* Fade in the pseudo-element with the bigger shadow */
  .logo__wrap:hover::after {
    opacity: 1;
  }

  .logo__wrap::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .logo__wrap {
    position: relative;
    font-size: 2.5rem;
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #272b34;
    border-radius: 5px;
    // box-shadow: 3px 3px 1px #e2dadc, -3px -3px 1px #e2dadc;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    margin-bottom: 10px;

    &.Male {
      background-color: rgb(55, 55, 167);
    }

    &.Female {
      background-color: #df174d;
    }

    &.Non {
      background-color: #5b2394;
    }
  }

  .logo__icon {
    z-index: 5;
    color: #d1c5f7;
  }

  .logo__fake-eye {
    width: 1.6rem;
    height: 0.9rem;
    background-color: #fff;
    opacity: 0.8;
    position: absolute;
    margin-bottom: 0.6rem;
  }
}
</style>
