<template>
    <div class="fullscreen flex flex-center">
        <div class="column q-pa-lg q-gutter-md" style="width: 300px; max-width: 90vw;">

            <q-input v-model="korisnik.ime" label="Ime (reactive)" />
            <q-input v-model="korisnik.prezime" label="Prezime (reactive)" />
            <q-input v-model="korisnik.email" label="Email (reactive)" />

            <div style="white-space: pre-line">
                Svi podaci korisnika (computed):
                <b>{{ podaciKorisnika }}</b>
            </div>

            <div>
                Poslednja unesena vrednost: <b>{{ poslednjaIzmena }}</b>
            </div>
            <q-separate />
            <q-input v-model="napomena" label="Napomena (ref)" />
            <q-btn label="Prikaži napomenu" @click="prikaziNapomenu" color="primary" />
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref, reactive, watch, computed } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const poslednjaIzmena = ref<string>('')
const napomena = ref<string>('')

interface KorisnikDTO {
    ime: string;
    prezime: string;
    email: string
}
const korisnik = reactive<KorisnikDTO>({
    ime: '',
    prezime: '',
    email: ''
})

const podaciKorisnika = computed(() => {
    return (
        "ime: " + korisnik.ime + '\n' +
        "prezime: " + korisnik.prezime + '\n' +
        "email: " + korisnik.email
    );
});


watch(() => korisnik.ime, (newVal) => {
    poslednjaIzmena.value = newVal
})

watch(() => korisnik.prezime, (newVal) => {
    poslednjaIzmena.value = newVal
})

watch(() => korisnik.email, (newVal) => {
    poslednjaIzmena.value = newVal
})

const prikaziNapomenu = () => {
    $q.notify({
        message: `Napomena je: ${napomena.value}`,
        type: 'info'
    })
}
</script>
