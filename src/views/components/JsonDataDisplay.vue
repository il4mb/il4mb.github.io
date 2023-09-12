<template>
    <!-- Display a JSON object as a table -->
    <table class="json" v-if="typeof data === 'object' && !isArray(data)">
        <tr v-for="(value, key) in data" :key="key">
            <td class="text-blue-700 dark:text-blue-400">{{ key }}</td>
            <td class="text-gold-800" :class="{ 'array': isArray(value), 'hover:text-orange-400': !isArray(value) && typeof value !== 'object' }">

                <!-- Check if value is an object (JSON) -->
                <template v-if="typeof value === 'object'">
                    <JsonDataDisplay :data="value" />
                </template>
                <!-- Otherwise, render the value directly -->
                <template v-else>
                    {{ value }}
                </template>
            </td>
        </tr>
    </table>

    <template v-else-if="isArray(data)" v-for="value, x in data" :key="x">
        <template v-if="typeof value === 'object'">
            <JsonDataDisplay :data="value" />
        </template>
        <template v-else>
            <span class="px-3 inline-block"><span class="hover:text-orange-400">{{ value }}</span><span v-if="x < data.length - 1">, </span></span>
        </template>
    </template>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        data: {
            type: [String, Array, Object],
            required: true,
        }
    },

    methods: {
        isArray(value) {
            return Array.isArray(value);
        }
    }
});
</script>