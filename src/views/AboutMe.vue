<template>
    <div class="scrollable">
        <section class="max-w-[1200px] w-full mx-auto p-5 py-10">
            <h2 class="text-2xl font-bold font-ops">About Me</h2>
            <!-- Display a JSON object as a table -->
            <JsonDataDisplay :data="data"></JsonDataDisplay>
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