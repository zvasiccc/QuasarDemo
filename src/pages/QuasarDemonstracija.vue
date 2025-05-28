<template>
  <q-banner class="q-mb-md bg-primary text-white">
    <div class="text-h5">Demonstracija Quasara</div>
  </q-banner>

  <q-btn color="primary" label="Prikazi notifikaciju" @click="prikaziNotifikaciju" />
  <q-btn class="q-ml-xl q-mr-xl" label="Prikaži dijalog" color="secondary" @click="pokaziDijalog = true" />
  <q-btn label="Prikazi loader" color="primary" icon="hourglass_top" @click="prikaziLoader" />

  <!-- QInput -->
  <q-card>
    <q-card-section class="q-mt-xl">
      <div class="text-h6">2. Forma sa validacijom (QInput)</div>
      <q-input filled v-model="ime" label="Unesi ime" :rules="[(val) => !!val || 'Obavezno polje']" />
      <q-input filled v-model="lozinka" label="Unesi lozinku" type="password" class="q-mt-sm" />
      <q-btn label="Prijavi se" color="positive" class="q-mt-md" @click="posaljiFormu" />
    </q-card-section>
  </q-card>


  <q-dialog v-model="pokaziDijalog">
    <q-card>
      <q-card-section>
        <div class="text-h6">Ovo je moj dijalog</div>
        <p>Dodatne informacije o dijalogu</p>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Zatvori" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

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

const prikaziLoader = () => {
  $q.loading.show({
    message: 'Učitavanje...',
    spinnerColor: 'white',
    spinnerSize: 140
  })
  setTimeout(() => {
    $q.loading.hide()
  }, 2000)
}
</script>

<style scoped>
.q-card {
  max-width: 500px;
  margin: auto;
}
</style>
