<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <header class="shadow-lg p-2 m-8 rounded-lg">
        <div class="flex justify-center">
            <nav class="flex justify-center gap-2">
                <RouterLink to="/" class="text-lg hover:text-teal-300"
                    >Home</RouterLink
                >
                <RouterLink to="/posts" class="text-lg hover:text-teal-300"
                    >Posts</RouterLink
                >
                <RouterLink to="/authors" class="text-lg hover:text-teal-300"
                    >Authors</RouterLink
                >
            </nav>
        </div>
    </header>
    <RouterView />
</template>
<style scoped>
.router-link-active {
    color: teal;
}
</style>
