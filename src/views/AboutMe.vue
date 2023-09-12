<template>
    <div class="scrollable">
        <section class="max-w-[1200px] w-full mx-auto p-5 py-10">
            <header class="mb-8">
                <h2 class="text-3xl font-bold font-ops">About Me</h2>
            </header>
            <article class="bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-200 p-5 rounded-lg">
                <JsonDataDisplay :data="data"></JsonDataDisplay>
            </article>
        </section>
    </div>
</template>
  
<script>
import JsonDataDisplay from './components/JsonDataDisplay.vue';
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        data: {
            type: [String, Array, Object],
            required: true,
        },
    },

    methods: {
        isArray(value) {
            return Array.isArray(value);
        }
    },
    components: {
        JsonDataDisplay,
    }

});
</script>