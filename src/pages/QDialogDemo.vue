<template>
    <div class="q-pa-md">
        <q-btn label="Prikazi dijalog1" color="primary" @click="otvoriDijalog = true" />
        <q-btn label="Prikaži dijalog2" color="primary" @click="prikaziDijalogFunkcija" />
        <q-dialog v-model="otvoriDijalog">
            <q-card>
                <q-card-section>
                    <div class="text-h6">Potvrda</div>
                </q-card-section>

                <q-card-section>
                    Da li ste sigurni da zelite da nastavite?
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn flat label="Otkazi" color="negative" v-close-popup />
                    <q-btn flat label="Potvrdi" color="primary" @click="potvrdiAkciju" />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const otvoriDijalog = ref(false)

function potvrdiAkciju() {
    otvoriDijalog.value = false
    $q.notify({
        type: 'positive',
        message: 'Izvrsavam odredjenu akciju'
    })
}

const prikaziDijalogFunkcija = () => {
    $q.dialog({
        title: 'Potvrda',
        message: 'Da li ste sigurni da zelite da nastavite?',
        cancel: true,
        persistent: true
    }).onOk(() => {
        $q.notify({ type: 'positive', message: 'Kliknuto OK' })
    }).onCancel(() => {
        $q.notify({ type: 'negative', message: 'Kliknuto otkazi' })
    }).onDismiss(() => {
        console.log('greska u dijalogu')
    })
}
</script>
