<template>
    <div class="scrollable">
        <section class="px-3 md:p-0" ref="target">
            <header class="mb-6">
                <h2 class="text-3xl font-ops">What I Do?</h2>
            </header>

            <article class="mb-5">
                <h3 class="text-xl font-ops">Web Development</h3>
                <p class="mb-5 p-3">Crafting responsive and user-friendly websites is my forte. From sleek landing pages
                    to
                    complex web
                    applications, I thrive on turning your concepts into reality. My expertise includes HTML, CSS,
                    JavaScript,
                    and a range of modern web frameworks.</p>
            </article>

            <article class="mb-5">
                <h3 class="text-xl font-ops">Android Development</h3>
                <p class="mb-5 p-3">As an Android enthusiast, I build native Android applications that stand out in the
                    crowded
                    app
                    marketplace. Whether it's a utility app, e-commerce platform, or a unique idea, I develop intuitive
                    and
                    high-performance Android apps.</p>
            </article>

            <article>
                <h3 class="text-xl font-ops">Technologies I Work With</h3>
                <p class="mb-5 p-3">My toolkit includes a wide array of technologies, such as:</p>
                <div class="bg-slate-200 text-slate-600 dark:bg-slate-600 dark:text-white p-5 rounded-lg">
                    <JsonDataDisplay :data="data"></JsonDataDisplay>
                </div>
            </article>
        </section>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import JsonDataDisplay from './components/JsonDataDisplay.vue';

export default defineComponent({
    props: {
        data: {
            type: [String, Array, Object],
            required: true,
        }
    },
    components: {
        JsonDataDisplay
    }
})
</script>