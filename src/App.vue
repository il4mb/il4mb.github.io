<template>
    <ModSwitch></ModSwitch>
    <NavProgress></NavProgress>

    <router-view v-slot="{ Component, route }">
        <transition :enter-active-class="enterAnimationClass" :leave-active-class="leaveAnimationClass" mode="out-in">
            <main class="max-h-[100vh] h-[100vh] overflow-hidden flex items-center" :key="route.name">
                <component :is="Component" :define="define" />
            </main>
        </transition>
    </router-view>
</template>

<script>

import ModSwitch from './views/components/ThemeModeSwitch.vue';
import NavProgress from './views/components/NavProgress.vue';
import { defineComponent } from 'vue';

export default defineComponent({

    data() {
        return {
            items: [],
            leaveAnimationClass: "animate__animated animate__slideOutDown",
            enterAnimationClass: "animate__animated animate__slideOutUp"
        }
    },
    created() {
        this.$router.options.routes.forEach(route => {
            this.items.push({ name: route.name, path: route.path })
        });
    },
    setup() {
        const define = {
            name: 'ilham B',
            contact: {
                github: 'https://github.com/il4mb',
                linkedin: 'https://www.linkedin.com/in/il4mb/',
                email: "durianbohong@gmail.com"
            },
            siteName: 'il4mb'

        }

        return {
            define
        }
    },
    components: {
        ModSwitch,
        NavProgress
    },

    watch: {

        $route(to, from) {

            const xFrom = this.items.find(x => x.path == from.path);
            const xTo = this.items.find(x => x.path == to.path);

            const ixf = this.items.indexOf(xFrom);
            const ixt = this.items.indexOf(xTo);

            if (ixf < ixt) {

                this.leaveAnimationClass = "animate__animated animate__bounceOutUp";
                this.enterAnimationClass = "animate__animated animate__bounceInUp";

            } else {

                this.leaveAnimationClass = "animate__animated animate__bounceOutDown";
                this.enterAnimationClass = "animate__animated animate__bounceInDown";
                
            }
        }
    }

})
</script>