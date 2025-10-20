<script setup lang="ts">
import RawIcon from "./components/atoms/VIcon.vue";
import { EInputType } from "./components/atoms/VInput/types";
import VInput from "./components/atoms/VInput/VInput.vue";
import { useBreakpoint } from "./composables";

const breakpoint = useBreakpoint();
</script>

<template>
  <main class="main">
    <section v-if="!breakpoint.isMobile" class="logo-section">
      <img src="./assets/vue.svg" alt="vue_logo" class="logo-section__image" />
      <p class="logo-section__text">Sunt sit nulla deserunt commodo esse dolore consequat. Deserunt in duis consectetur consectetur non irure excepteur laborum. Quis enim esse Lorem cillum do ipsum.</p>
    </section>
    <section :class="['auth-section', { 'mobile': breakpoint.isMobile }]">
      <form class="auth-section__form">
        <span class="auth-section__title">Welcome back!</span>
        <span class="auth-section__sub-title">Mollit ex duis consectetur elit fugiat elit dolor.</span>
        <VInput :type="EInputType.EMAIL" class="auth-section__email" placeholder="you@example.com"></VInput>
        <VInput :type="EInputType.PASSWORD" class="auth-section__password" placeholder="At least 8 characters"></VInput>
        <a class="auth-section__forgot-pass"></a>
        <button class="auth-section__login-btn">Login</button>
        <hr class="auth-section__divider"></hr>
        <section class="auth-section__social-login">
          <button>Google</button>
          <button>Yandex</button>
        </section>
        <span class="auth-section__sign-up"><a></a></span>
      </form>
      <footer class="footer"></footer>
    </section>
  </main>
</template>

<style scoped>
</style>
