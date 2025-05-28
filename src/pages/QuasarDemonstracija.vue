<template>
  <q-banner class="q-mb-md bg-primary text-white">
    <div class="text-h5">Demonstracija Quasara</div>
  </q-banner>

  <!-- QBtn -->
  <q-card class="q-mb-md">
    <q-card-section>
      <div class="text-h6">1. Dugme (QBtn)</div>
      <q-btn color="primary" label="Klikni me" @click="prikaziNotifikaciju" />
    </q-card-section>
  </q-card>

  <!-- QInput -->
  <q-card class="q-mb-md">
    <q-card-section>
      <div class="text-h6">2. Forma sa validacijom (QInput)</div>
      <q-input
        filled
        v-model="ime"
        label="Unesi ime"
        :rules="[(val) => !!val || 'Obavezno polje']"
      />
      <q-input filled v-model="lozinka" label="Unesi lozinku" type="password" class="q-mt-sm" />
      <q-btn label="Prijavi se" color="positive" class="q-mt-md" @click="posaljiFormu" />
    </q-card-section>
  </q-card>

  <!-- QTable -->

  <!-- QDialog -->
  <q-card class="q-mb-md">
    <q-card-section>
      <div class="text-h6">4. Dijalog (QDialog)</div>
      <q-btn label="Prikaži dijalog" color="secondary" @click="pokaziDijalog = true" />
      <q-dialog v-model="pokaziDijalog">
        <q-card>
          <q-card-section>
            <div class="text-h6">Ovo je dijalog!</div>
            <p>Brzo napravljen bez dodatnih biblioteka.</p>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Zatvori" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
console.log($q)

const ime = ref('');
const lozinka = ref('');
const pokaziDijalog = ref(false);

const prikaziNotifikaciju = () => {
  $q.notify({
    type: 'positive',
    message: 'Kliknuto dugme!',
  });
};

const posaljiFormu = () => {
  if (ime.value && lozinka.value) {
    $q.notify({ type: 'positive', message: 'Uspešno ste se prijavili!' });
  } else {
    $q.notify({ type: 'negative', message: 'Popunite sva polja.' });
  }
};

const korisnici = [
  { ime: 'Ana', uloga: 'Admin' },
  { ime: 'Marko', uloga: 'Korisnik' },
  { ime: 'Jelena', uloga: 'Moderator' },
];
</script>

<style scoped>
.q-card {
  max-width: 500px;
  margin: auto;
}
</style>
