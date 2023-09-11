<template>
    <ul class="navprogress" ref="ul">

        <li v-for="route in $router.options.routes" :key="route.name" :class="{
            'text-blue-500': route.path === path
        }">

            <router-link class="block" :to="route.path" >
                <span class="transition-all duration-500">{{ route.name }}</span>
                <v-icon icon="circle" class="transition-all duration-500" :class="{ 'text-3xl': route.path === path }" />
            </router-link>
        </li>
    </ul>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({

    data() {
        return {
            ul: ref(this.$refs.ul),
            path: "/",
        }
    },

    watch: {

        $route(to, from) {
            this.path = to.path;
        }
    },

    methods: {

        onMouseover(ev) {
            const ul = this.$refs.ul;
            const el = ev.currentTarget.querySelector('span');

            el.classList.add('animate__animated', 'animate__slideInLeft');
        },

        onMouseLave(ev) {
            const ul = this.$refs.ul;
            const el = ev.currentTarget.querySelector('span');

            el.classList.remove('animate__animated', 'animate__slideInLeft');

            console.log(el);
        }

    },

});

</script>