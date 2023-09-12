<template>
    <div class="scrollable">
        <div class="max-w-[1200px] w-full mx-auto p-5 py-10">
            <section class="mb-12">
                <header class="mb-8">
                    <h2 class="text-3xl font-bold font-ops">About Me</h2>
                </header>
                <article class="bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-200 p-5 rounded-lg">
                    <JsonDataDisplay :data="data"></JsonDataDisplay>
                </article>
            </section>

            <section>
                <header class="mb-6">
                    <h2 class="text-3xl font-bold font-ops">My Gallery</h2>
                </header>

                <div class="flex overflow-hidden items-end justify-center">

                    <TransitionGroup v-for="item, x in gallery">
                        <figure :key="x" class="w-full overflow-hidden transition-all duration-[1s]"
                            :class="{ 'max-w-full': x === activeItem, 'max-w-0': x !== activeItem }">
                            <div class="aspect-square w-full max-w-[400px] mx-auto">
                                <img class="rounded-lg shadow-md object-cover aspect-square w-full h-full" :src="item.file"
                                    alt="Image Gallery">
                                <figcaption class="min-w-max">{{ item.caption }}</figcaption>
                            </div>
                        </figure>
                    </TransitionGroup>
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
        gallery: {
            type: [Array, Object],
            required: true
        }
    },

    setup() {
        const activeItem = ref(0);
        const mode = ref(0);
        return {
            activeItem,
            mode
        }
    },

    mounted() {
        setInterval(() => {
            if (this.activeItem == (this.gallery.length - 1) || this.activeItem == 0) {
                this.mode = this.mode == 1 ? 0 : 1;
            }
            if (this.mode == 1) {
                this.activeItem += 1;
            }
            if (this.mode == 0) {
                this.activeItem -= 1;
            }

        }, 5000);
    },


    methods: {
        isArray(value) {
            return Array.isArray(value);
        },
    },


    watch: {
        activeItem() {
            if (this.gallery.length <= this.activeItem) {
                this.activeItem = 0
            }
        }
    },

    components: {
        JsonDataDisplay,
    }

});
</script>