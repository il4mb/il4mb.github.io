<script>

import { defineComponent, ref } from 'vue';


export default defineComponent({

    setup() {
        const isNite = ref(false);
        const animate = ref(false);

        return {
            isNite,
            animate
        }
    },

    mounted() {

        this.isNite =  localStorage.theme === 'dark' ? true : false;
        if(this.isNite) {
            document.documentElement.classList.add('dark')
        }
    },


    methods: {
        switchTheme() {
            this.animate = true;
            this.isNite = !this.isNite;
            this.$emit('switchTheme', this.isNite);
        }
    },
    watch: {
        isNite(fo) {
            if (fo) {
                localStorage.theme = 'dark';
                document.documentElement.classList.add('dark')
            } else {
                localStorage.removeItem('theme')
                document.documentElement.classList.remove('dark')
            }
        }
    }
})
</script>

<template>
    <button @click="switchTheme" class="text-xl fixed top-5 right-5 md:right-4 lg:right-8 z-50 dark:text-white">
        <Transition :name="animate ? 'rotate' : ''">
            <v-icon class="hover:text-3xl transition-all duration-500" v-if="!isNite" icon="moon" />
            <v-icon class="hover:text-3xl transition-all duration-500" v-else icon="sun" />
        </Transition>

    </button>
</template>
