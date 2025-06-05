<template>
    <div class="q-pa-md q-gutter-md column" style="max-width: 400px; margin: auto">

        <q-input filled v-model="ime" label="Unesi ime" @blur="prikaziPoruku('Uneseno ime je: ' + ime)" />

        <q-input filled v-model="email1" label="Email1" type="email"
            :rules="[val => val.includes('@') || 'Email mora sadržati @']" />

        <q-input filled prepend-icon="email" v-model="email2" label="Email2" hint="Unesite validnu email adresu"
            :error="imaGresku" error-message="Email mora sadržati znak @" clearable />

        <q-input filled v-model.number="godine" type="number" label="Godine"
            :rules="[val => val >= 0 || 'Godine ne mogu biti negativne']" />

        <q-input filled v-model="lozinka" label="Lozinka" :type="vidiLozinku ? 'text' : 'password'">
            <q-icon :name="vidiLozinku ? 'visibility_off' : 'visibility'" @click="vidiLozinku = !vidiLozinku" />
        </q-input>

        <q-input v-model="brojTelefona" mask="###-###" hint="Molimo Vas unesite broj u formatu 000-000" />
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const ime = ref<string>('')
const email1 = ref<string>('')
const email2 = ref<string>()
const lozinka = ref<string>('')
const vidiLozinku = ref<boolean>(false)
const godine = ref<number>()
const brojTelefona = ref<number>()

const imaGresku = computed<boolean>(() => email2.value != '' && email2.value != undefined && !email2.value.includes('@'))


const prikaziPoruku = (poruka: string) => {
    $q.notify({
        type: 'info',
        message: poruka
    })
}
</script>
