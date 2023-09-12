<template>
    <div class="scrollable">
        <section class="w-full">
            <header class="mb-6">
                <h2 class="text-3xl font-ops">Portfolio Highlights</h2>
            </header>

            <div class="px-3">
                <article class="mb-6">
                    <p>Explore some of my recent projects to get a taste of what I can create:</p>
                </article>

                <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 p-4 pe-8">

                    <div v-for="item in data" class="col-span-1 md:col-span-1">

                        <div class="slice-layer px-5 py-3">

                            <div class="w-12 h-12 rounded-lg mb-3 overflow-hidden" v-if="item.img">
                                <img class="w-full h-full object-cover" :src="item.img" alt="Project Picture">
                            </div>

                            <h4 class="font-ops text-lg" v-html="item.title"></h4>
                            <p class="text-sm mb-2 ps-3">{{ item.description }}</p>


                            <h5 class="font-ops">Technologies</h5>
                            <p class="text-sm ps-3 mb-3">
                                <template v-for="tech, x in item.technologies">
                                    <span>{{ tech }}</span>
                                    <template v-if="x < item.technologies.length - 1">, </template>
                                </template>
                            </p>
                            <template v-if="(item.url)">
                                <a class="font-ops hover:scale-105 hover:text-blue-500" :href="item.url" target="_blank">Visit Project</a>
                            </template>
                        </div>
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
            return `col-${random}`;
        }
    }
})
</script>