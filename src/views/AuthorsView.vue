<script setup>
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import { useAuthorsStore } from "@/stores/AuthorsStore";

const { authors } = storeToRefs(useAuthorStore());
const { fetchAuthors } = useAuthorStore();

fetchAuthors();
</script>

<template>
    <div>
        <ul v-if="authors">
            <li
                v-for="author in authors"
                :key="author.id"
                class="my-6 p-4 rounded-lg border border-teal-700 w-full"
            >
                <div
                    class="tooltip tooltip-accent sm:tooltip-right"
                    :data-tip="`${author.email}`"
                >
                    <RouterLink
                        :to="`/author/${author.username}`"
                        class="text-teal-700 text-lg hover:opacity-60 duration-500"
                        >{{ author.name }}</RouterLink
                    >
                </div>
            </li>
        </ul>
    </div>
</template>
