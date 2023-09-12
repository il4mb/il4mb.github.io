<template>
    <div class="scrollable">
        <section class="w-full">
            <header>
                <h2 class="text-3xl font-ops">Portfolio Highlights</h2>
            </header>
            <article>
                <p>Explore some of my recent projects to get a taste of what I can create:</p>
            </article>

            <div class="grid grid-cols-8 gap-5">

                <div v-for="item in data" :class="getRandomSpan()" class="rounded-lg overflow-hidden bg-slate-200">

                    <h4 v-html="item.title"></h4>

                    <div class="rounded-lg overflow-hidden bg-slate-400">
                        <img :src="item.img" alt="Project Picture">
                    </div>
                </div>

            </div>

        </section>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
    props: {
        data: {
            type: [String, Array, Object],
            required: true
        }
    },

    methods: {
        randomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        getRandomSpan() {
            const random = this.randomNumber(3, 4);
            return `col-${random} `;
        }
    }
})
</script>