<template>
    <div class="scrollable">
        <section class="max-w-[1200px] w-full mx-auto">

            <div class="z-10 mx-auto flex flex-wrap items-center p-3 md:p-0">

                <div class="w-full">
                    <header class="w-full">
                        <h2 class="text-4xl font-ops"><span class="block">Hello, i'am {{ define.name }}</span> <span
                                class="text-xl">A full-stack web and Android developer.</span> </h2>
                    </header>

                    <article class="md:flex-1 order-3 md:order-2 w-full py-10 gap-4 md:p-5 md:ps-0 max-w-lg">
                        <p class="mb-5"><v-icon icon="paperclip" class="text-4xl text-slate-600" />
                            I specialize in creating
                            seamless digital experiences by combining cutting-edge technologies with elegant design. With a
                            keen
                            eye
                            for
                            detail and a love for coding, I bring your ideas to life.</p>
                    </article>

                    <figure class="md:flex-1 order-2 md:order-last w-full mt-5 text-right">
                        <div
                            class="w-[208px] h-[208px] inline-block rounded-full bg-slate-400 relative overflow-visible border-4 border-transparent">
                            <img class="w-[200px] h-[200px] object-cover rounded-b-full absolute bottom-0 drop-shadow-[2px_4px_4px_rgb(0,0,0)] hover:drop-shadow-[2px_4px_4px_#1249a9] hover:w-[295px] hover:h-[295px] transition-all duration-500"
                                src="../assets/images//ilhamb.png" alt="Profile Picture">
                        </div>
                        <figcaption class="font-ops">ilham b</figcaption>
                    </figure>

                    <div class="mb-8">
                        <router-link to="/about-me" class="block text-base font-ops hover:text-blue-500">
                            About Me
                        </router-link>
                        <router-link to="/projects-highlight" class="block text-base font-ops hover:text-blue-500">
                            My Project Highlight
                        </router-link>
                    </div>

                    <div>
                        <v-icon class="mx-3 mb-3 text-3xl md:text-4xl" v-for="item in skils" :icon="item" />
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { ref } from 'vue'
import { defineComponent } from 'vue'

export default defineComponent({

    props: {
        define: Object
    },

    data() {
        return {
            transitionName: null,
            skils: [
                ["fas", "terminal"],
                ["fab", "java"],
                ["fab", "js"],
                ["fab", "node-js"],
                ["fab", "vuejs"],
                ["fab", "react"],
                ["fab", "square-git"],
                ["fab", "php"],
                ["fab", "symfony"],
                ["fab", "python"],
                ["fab", "css3"],
                ["fab", "html5"],
                ['fab', 'github']
            ]
        }
    }

})
</script>