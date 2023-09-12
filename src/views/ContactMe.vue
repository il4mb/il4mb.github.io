<template>
    <div class="scrollable">
        <section>
            <header class="mb-6">
                <h2 class="text-3xl font-ops">Contact Me</h2>
            </header>

            <h3 class="text-xl font-ops mb-5">Open to Opportunities</h3>

            <article>
                <p class="mb-5 px-3">I'm excited to connect with you and discuss how we can work together on your next
                    project or explore
                    exciting opportunities. Feel free to reach out to me through the following contact methods:</p>

                <ul class="px-3 mb-3">
                    <li v-for="contact in data" class="text-blue-400 text-2xl font-ops">
                        <a :href="contact.link" target="_blank" class="hover:text-blue-700 transition-all duration-300">
                            <span class="p-2"><v-icon :icon="contact.icon" /></span>
                            <span class="text-lg">{{ contact.label }}</span>
                        </a>
                    </li>
                </ul>


                <p class="mb-5 px-3">Whether you have a specific inquiry, a project proposal, or just want to say hello, I'm
                    always ready to engage in a meaningful conversation. Your message is important to me, and I'll do my
                    best to respond promptly.</p>

                <p class="text-center pt-8">Let's start the conversation and create something remarkable together!</p>
            </article>
        </section>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: [String, Array, Object],
            required: true
        }
    }
}
</script>