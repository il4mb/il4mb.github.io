<template>

    <ModSwitch></ModSwitch>
    <NavProgress></NavProgress>

    <router-view v-slot="{ Component, route }">
        <transition 
            enter-active-class="animate__animated animate__slideOutUp"
            leave-active-class="animate__animated animate__slideOutDown">
            <main class="max-h-[100vh] h-[100vh] overflow-hidden flex items-center" :key="route.name">
                <component :is="Component" />
            </main>
        </transition>
    </router-view>
</template>

<script>

import ModSwitch from './views/components/ThemeModeSwitch.vue';
import NavProgress from './views/components/NavProgress.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        ModSwitch,
        NavProgress
    },

})
</script>