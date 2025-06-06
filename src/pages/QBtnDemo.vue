<template>
    <div class="q-ma-md q-gutter-md column items-center">
        <q-btn label="Osnovno dugme" color="primary" @click="pokaziPoruku('Kliknuto osnovno dugme')" />

        <q-btn label="Dodaj" icon-right="add" color="positive" @click="pokaziPoruku('Dodat novi unos')" />

        <q-btn label="Kontura" unelevated color="warning" @click="pokaziPoruku('Kliknuta kontura')" />

        <q-btn label="Okruglo" round color="warning" @click="pokaziPoruku('Kliknuto okruglo dugme')" />

        <q-btn label="Nedostupno" color="negative" :disabled="isDisabled" />

        <q-btn label="Loading dugme" color="secondary" :loading="dugmeUCekanju" @click="pokreniLoading" />

        <q-btn label="Preuzimanje" icon="cloud_download" :percentage="progress" :loading="preuzimanjeUToku"
            color="primary" @click="pokreniPreuzimanje" />

        <q-btn label="Veliko dugme" size="32px" color="secondary" outline
            @click="pokaziPoruku('Kliknuto veliko dugme')" />

        <q-btn label="Settings" icon-right="build" outline color="purple" text-color="red" rounded unelevated ripple
            size="lg" @click="handleClick()" />

    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const dugmeUCekanju = ref(false)
const preuzimanjeUToku = ref(false);
const isDisabled = ref(true);
const progress = ref(0);
const pokreniPreuzimanje = () => {

    preuzimanjeUToku.value = true;

    const interval = setInterval(() => {
        if (progress.value < 100) {
            progress.value += 5;
        } else {
            clearInterval(interval);
            preuzimanjeUToku.value = false;
        }
    }, 500);
}

const pokaziPoruku = (poruka) => {
    $q.notify({
        type: 'info',
        message: poruka
    })
}

function pokreniLoading() {
    dugmeUCekanju.value = true
    setTimeout(() => {
        dugmeUCekanju.value = false
        pokaziPoruku('Zavrseno učitavanje')
    }, 2000)
}
</script>

<style scoped>
h4 {
    margin-bottom: 20px;
}
</style>
