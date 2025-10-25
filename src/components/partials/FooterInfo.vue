<script setup lang="ts"></script>

<template>
  <div class="flex justify-around max-md:flex-col max-md:gap-y-4">
    <div class="flex flex-col">
      <h2 id="contact">Contact</h2>
      <p>Email : contact@fabcorp.ch</p>
      <p>Discord : notbrioche</p>
    </div>
    <div class="flex flex-col">
      <h2>Liens</h2>
      <a href="https://www.planetminecraft.com/member/notbrioche/">PlanetMinecraft</a>
      <!-- <a href="#">Discord</a> -->
      <a href="https://github.com/NotBrioche">GitHub</a>
    </div>
    <div class="flex flex-col">
      <h2>Informations</h2>
      <RouterLink to="/faq#participate">Comment participer?</RouterLink>
      <RouterLink to="/faq#contribute">Comment contribuer?</RouterLink>
      <RouterLink to="/faq#dev">Développement</RouterLink>
      <RouterLink to="/faq#build">Build</RouterLink>
      <RouterLink to="/faq">FAQ</RouterLink>
    </div>
  </div>
  <div class="mt-4 text-center md:mt-2">© 2025 - Fabcorp</div>
</template>
