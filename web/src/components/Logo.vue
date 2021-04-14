<template>
  <router-link to="/">
    <div class="logo">
      <div :class="`logo__wrap ${gender}`">
        <!-- <i class="fab fa-earlybirds logo__icon"></i> -->
        <img src="@/assets/logo.svg" alt="logo" class="logo__icon" />
        <!-- <i class="fas fa-question-circle logo__icon"></i> -->
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
  flex-direction: column;
  text-align: center;

  .logo__wrap:hover {
  }

  .logo__wrap::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: 5px;
    box-shadow: 0 5px 7px #e2dadc;
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .logo__wrap {
    position: relative;
    font-size: 2.5rem;
    width: 4rem;
    height: 4rem;
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: center;
    background-color: #272b34;
    border-radius: 5px;
    box-shadow: 1.5px 1.5px 1px #e2dadc, -1.5px -1.5px 1px #e2dadc;
    // box-shadow: 0 1px 2px #e2dadcd7;
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    margin-bottom: 10px;

    &.Male {
      background-color: #557ade;
    }

    &.Female {
      background-color: #f2507b;
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
