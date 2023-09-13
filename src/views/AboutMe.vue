<template>
    <div class="scrollable">
        <div class="max-w-[1200px] w-full mx-auto p-5 py-10">
            <section class="mb-12">
                <header class="mb-8">
                    <h2 class="text-3xl font-bold font-ops">About Me</h2>
                </header>
                <article class="bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-200 p-5 rounded-lg overflow-x-auto w-full">
                    <JsonDataDisplay :data="data"></JsonDataDisplay>
                </article>
            </section>

            <section>
                <header class="mb-6">
                    <h2 class="text-3xl font-bold font-ops">Licenses & certifications</h2>
                </header>

                <div class="">
                    <template v-for="cert in certificate">
                        <div class="mb-5 ps-3">

                            <div class="flex items-start">
                                <div class="bg-slate-300 aspect-square w-full h-full max-w-[50px] max-h-[50px] p-2 rounded-sm dark:bg-slate-200">
                                    <img class="object-contain w-full h-full mix-blend-multiply opacity-100"
                                        :src="cert.organization.logo" :alt="cert.organization.name">
                                </div>
                                <table class="ms-3 word-break">
                                    <tr>
                                        <td>
                                            <h3 class="text-xl font-ops">{{ cert.name }}</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{{ cert.organization.name }}</td>
                                    </tr>
                                    <tr>
                                        <td>Issuing {{ cert.issuingdate }}</td>
                                    </tr>
                                    <tr v-if="cert.expirationdate">
                                        <td>Expiration {{ cert.expirationdate }}</td>
                                    </tr>
                                    <tr v-if="cert.credential">
                                        <td>Credential {{ cert.credential }}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </template>
                </div>
            </section>
        </div>
    </div>
</template>
  
<script>
import JsonDataDisplay from './components/JsonDataDisplay.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({

    props: {
        data: {
            type: [Object, Array, String],
            required: true
        },
        certificate: {
            type: [Array, Object],
            required: true
        }
    },

    data() {
        return {

            document: "../assets/pdf/sertifikat-0.pdf"
        }
    },


    methods: {
        isArray(value) {
            return Array.isArray(value);
        },
    },


    components: {
        JsonDataDisplay
    }

});
</script>