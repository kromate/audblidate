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
    box-shadow: 3px 3px 3px #e2dadc, -3px -3px 3px #e2dadc;
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
