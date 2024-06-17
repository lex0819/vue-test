<script setup>
import { RouterLink } from "vue-router";
import { useAuthorsStore } from "@/stores/AuthorsStore";

const authorsStore = useAuthorsStore();

await authorsStore.fetchAuthors();
</script>
<template>
    <div>
        <div v-if="authorsStore.loader">
            <span class="loading loading-spinner loading-md"></span>
        </div>
        <div v-if="authorsStore.error">{{ error.message }}</div>
        <ul v-if="authorsStore.authors">
            <li
                v-for="author in authorsStore.authors"
                :key="author.id"
                class="my-6 p-4 rounded-lg border border-teal-700 w-full"
            >
                <div
                    class="tooltip tooltip-accent sm:tooltip-right"
                    :data-tip="`${author.email}`"
                >
                    <RouterLink
                        :to="`/author/${author.id}`"
                        class="text-teal-700 text-lg hover:opacity-60 duration-500"
                        >{{ author.name }}</RouterLink
                    >
                </div>
            </li>
        </ul>
    </div>
</template>
