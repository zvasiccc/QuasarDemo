<template>
    <div class="q-pa-md q-gutter-md column" style="max-width: 400px; margin: auto">

        <q-input filled v-model="ime" label="Unesi ime" @blur="prikaziPoruku('Uneseno ime je: ' + ime)" />

        <q-input filled v-model="email" label="Email" type="email"
            :rules="[val => val.includes('@') || 'Email mora sadržati @']" />

        <q-input filled v-model="lozinka" label="Lozinka" :type="vidiLozinku ? 'text' : 'password'">
            <q-icon :name="vidiLozinku ? 'visibility_off' : 'visibility'" @click="vidiLozinku = !vidiLozinku" />
        </q-input>

        <q-input filled v-model="tekst" outlined label="Opis" clearable />

        <q-input filled v-model.number="godine" type="number" label="Godine"
            :rules="[val => val >= 0 || 'Godine ne mogu biti negativne']" />

    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const ime = ref('')
const email = ref('')
const lozinka = ref('')
const vidiLozinku = ref(false)
const tekst = ref('')
const godine = ref(null)

function prikaziPoruku(poruka) {
    $q.notify({
        type: 'info',
        message: poruka
    })
}
</script>
