<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <div class="container mx-auto px-2">
        <header class="py-7">
            <div class="grid grid-cols-3">
                <RouterLink to="/">
                    <svg
                        class="w-8"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 261.76 226.69"
                    >
                        <path
                            d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z"
                            fill="#41b883"
                        />
                        <path
                            d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z"
                            fill="#34495e"
                        />
                    </svg>
                </RouterLink>
                <nav class="flex justify-center gap-3">
                    <RouterLink to="/" class="text-lg hover:text-teal-300"
                        >Home</RouterLink
                    >
                    <RouterLink to="/posts" class="text-lg hover:text-teal-300"
                        >Posts</RouterLink
                    >
                    <RouterLink
                        to="/authors"
                        class="text-lg hover:text-teal-300"
                        >Authors</RouterLink
                    >
                </nav>
            </div>
        </header>
        <RouterView />
    </div>
</template>
<style scoped>
.router-link-active {
    color: teal;
}
</style>
