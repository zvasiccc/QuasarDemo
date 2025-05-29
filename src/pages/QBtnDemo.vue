<template>
    <div class="q-ma-md q-gutter-md column items-center">
        <q-btn label="Osnovno dugme" color="primary" @click="pokaziPoruku('Kliknuto osnovno dugme')" />

        <q-btn label="Dodaj" icon-right="add" color="positive" @click="pokaziPoruku('Dodat novi unos')" />

        <q-btn label="Kontura" color="warning" outline @click="pokaziPoruku('Kliknuta kontura')" />

        <q-btn label="Okruglo" round color="warning" outline @click="pokaziPoruku('Kliknuto okruglo dugme')" />

        <q-btn label="Nedostupno" color="negative" disabled />

        <q-btn label="Loading dugme" color="secondary" :loading="dugmeUCekanju" @click="pokreniLoading" />

        <q-btn label="Veliko dugme" size="32px" color="secondary" outline
            @click="pokaziPoruku('Kliknuto veliko dugme')" />
        <q-btn label="Izolovano" class="q-ma-xl" color="primary" @click="pokaziPoruku('Kliknuto izolovano dugme')" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const dugmeUCekanju = ref(false)

function pokaziPoruku(poruka) {
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
