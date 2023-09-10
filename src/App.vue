<template>
    <header id="main-header" class="transition-all duration-500 sticky z-[100] top-0 bg-white dark:bg-neutral-800">
        <nav class="w-full h-[70px] text-neutral-800 dark:text-white">
            <div class="flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[70px]">

                <h1 class="text-3xl font-ops">{{ define.siteName }}</h1>

                <div class="ms-auto">
                    <router-link to="/" class="mx-3">
                        Home
                    </router-link>
                    <router-link to="/about" class="mx-3">
                        About
                    </router-link>

                    <button @click="isNite = !isNite">
                        <v-icon icon="moon" v-if="!isNite" />
                        <v-icon icon="sun" v-else />
                    </button>
                </div>
            </div>
        </nav>
    </header>
    <main class="h-full w-full bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white">
        <router-view />
    </main>

    <nav class="fixed bottom-0 p-16 w-full flex">
        <router-link v-for="item in menu" :key="item.name" :to="item.link">
            <div class="transition-all duration-500 px-5 py-3 hover:scale-105"
                :class="{ 'transform scale-105': item.active }">{{ item.name }}</div>
        </router-link>
    </nav>


    <div class="bg-gradient"></div>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({

    data() {
        return {
            isNite: false,
            header: null,
            menu: [
            {
                name: 'Home',
                link: '/',
                active: true
            },
            {
                name: 'About',
                link: '/about',
                active: false

            }
            ]
        }
    },

    mounted() {

        this.header = document.getElementById('main-header');
        this.header.style.backgroundColor = "#00000000";
        window.addEventListener('scroll', this.scrollListener);

        if (localStorage.theme === 'dark') {
            this.isNite = true;
            document.documentElement.classList.add('dark')
        } else {
            this.isNite = false;
        }
    },
    unmounted() {
        window.removeEventListener('scroll', this.scrollListener);
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
        },
        $route(to, from) {
            
            for(let i =0; i < this.menu.length; i++) {
                if(this.menu[i].link == to.path) {
                    this.menu[i].active = true;
                } else {
                    this.menu[i].active = false;
                }
            }
        }
    },

    methods: {
        scrollListener(event) {

            const offsetTop = document.documentElement.scrollTop;


            if (offsetTop > 80) {
                this.header.style.backgroundColor = "";
                this.header.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
            } else {
                this.header.style.backgroundColor = "#00000000";
                this.header.style.boxShadow = "";
            }
        }
    }
})
</script>