<template>
    <section class="min-h-[100vh] flex items-center justify-center pt-[120px] py-12 md:py-3">

        <div class="blur-[2px] h-full w-full absolute flex items-center justify-center">
            <span class="text-[6rem] font-ops opacity-50">{{ define.siteName }}</span>
        </div>

        <div class="max-w-[1200px] w-full z-10 mx-auto flex flex-wrap items-center p-3 md:p-0">

            <header class="w-full">
                <h2 class="text-4xl font-ops"><span class="block">Hello, i'am {{ define.name }}</span> <span
                        class="text-xl">A full-stack web and Android developer.</span> </h2>
            </header>

            <article class="md:flex-1 order-3 md:order-2 w-full py-10 gap-4 md:p-5 md:ps-0 max-w-lg">
                <p>I specialize in creating
                    seamless digital experiences by combining cutting-edge technologies with elegant design. With a keen
                    eye
                    for
                    detail and a love for coding, I bring your ideas to life.</p>
            </article>

            <figure class="md:flex-1 order-2 md:order-last w-full mt-5 text-right">
                <img class="w-36 h-36 inline-block rounded-full" src="../assets/images/9f812254803073.63d8046ea484d.jpg"
                    alt="Profile Picture">
                <figcaption class="font-ops">ilham b</figcaption>
            </figure>
        </div>
    </section>

    <section class="w-full max-w-[1200px] min-h-[100vh] mx-auto px-3 md:p-0" ref="target">
        <header class="mb-5" v-element-visibility="onElementVisibility">
            <h2 class="text-2xl font-bold">What I Do?</h2>
        </header>
        <article>
            <h3 class="text-xl">Web Development</h3>
            <p class="mb-5 p-3">Crafting responsive and user-friendly websites is my forte. From sleek landing pages to
                complex web
                applications, I thrive on turning your concepts into reality. My expertise includes HTML, CSS, JavaScript,
                and a range of modern web frameworks.</p>

            <h3 class="text-xl">Android Development</h3>
            <p class="mb-5 p-3">As an Android enthusiast, I build native Android applications that stand out in the crowded
                app
                marketplace. Whether it's a utility app, e-commerce platform, or a unique idea, I develop intuitive and
                high-performance Android apps.</p>


            <h3 class="text-xl">Technologies I Work With</h3>
            <p>🛠️ My toolkit includes a wide array of technologies, such as:</p>
            <table class="border-collapse border border-slate-500">
                <tbody>
                    <tr>
                        <th class="border border-slate-500">Front-End</th>
                        <td class="border border-slate-500">HTML5, CSS3, JavaScript, React, Angular, Vue.js</td>
                    </tr>
                    <tr>
                        <th class="border border-slate-500">Back-End</th>
                        <td class="border border-slate-500">Node.js, Python, Ruby on Rails, PHP</td>
                    </tr>
                    <tr>
                        <th class="border border-slate-500">Databases</th>
                        <td class="border border-slate-500">MySQL, MongoDB, PostgreSQL</td>
                    </tr>
                    <tr>
                        <th class="border border-slate-500">Mobile Development</th>
                        <td class="border border-slate-500">Java, Kotlin, Android Studio</td>
                    </tr>
                    <tr>
                        <th class="border border-slate-500">Version Control</th>
                        <td class="border border-slate-500">Git, GitHub, Bitbucket</td>
                    </tr>
                    <tr>
                        <th class="border border-slate-500">Deployment</th>
                        <td class="border border-slate-500">AWS, Heroku, Firebase</td>
                    </tr>
                    <tr>
                        <th class="border border-slate-500">Responsive Design</th>
                        <td class="border border-slate-500">Bootstrap, Material-UI, Tailwind</td>
                    </tr>
                </tbody>
            </table>
        </article>
    </section>

    <section>
        <header>
            <h2 class="text-2xl font-bold">My Approach</h2>
        </header>

        <article>
            <p>🔨 I believe in crafting code that is not just functional but also maintainable and scalable. My development
                process is collaborative, focusing on clear communication with clients to ensure that your vision is
                realized to
                perfection.</p>
        </article>
    </section>


    <section>
        <header>
            <h2 class="text-2xl font-bold">Portfolio Highlights</h2>
        </header>
        <article>
            <p>Explore some of my recent projects to get a taste of what I can create:</p>
        </article>
    </section>

    <section>
        <header>
            <h2>Let's Collaborate</h2>
        </header>

        <article>
            <p>
                I'm always excited to take on new challenges and work with clients who are as passionate about their ideas
                as I am
                about coding. If you have a project in mind or just want to chat, feel free to reach out. Together, we can
                build
                something amazing!
            </p>
        </article>
    </section>

    <footer>
        <h3>Get in Touch</h3>
        <p>

            📧 Email: {{ define.contact.email }}
            📱 LinkedIn: {{ define.contact.linkedin }}
            🐦 GitHub: {{ define.contact.github }}
            📷 Instagram: [Your Instagram Handle]</p>
    </footer>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { vElementVisibility } from '@vueuse/components';

const target = ref()
const isVisible = ref(false)

async function onElementVisibility(state) {
    isVisible.value = state;

    if (state === true) {

        setTimeout(() => {
            window.scrollTo({
                left: 0,
                top: findPosition(target.value),
                behavior: 'smooth',
            });
        }, 200);

    }
}


function findPosition(obj) {
    var currenttop = 0;
    if (obj.offsetParent) {
        do {
            currenttop += obj.offsetTop;
        } while ((obj = obj.offsetParent));
        return currenttop;
    }
}
</script>