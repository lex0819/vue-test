<script setup>
// import { RouterLink } from 'vue-router'
import { storeToRefs } from "pinia";
import { useAuthorStore } from "@/stores/author";

const { authors } = storeToRefs(useAuthorStore());
const { fetchAuthors } = useAuthorStore();

fetchAuthors();

const activeAuthor = defineModel();
</script>

<template>
    <div>
        <div v-if="authors">
            <label
                for="author"
                class="block text-center text-teal-700 text-3xl mb-6"
                >Choose author</label
            >
            <select
                id="author"
                name="author"
                title="author"
                v-model="activeAuthor"
                class="outline-none border border-teal-700 text-lg rounded-lg focus:ring-teal-700 focus:border-teal-700 block py-2 px-4 mb-4"
            >
                <option selected value="">all authors</option>
                <option
                    v-for="author in authors"
                    :key="author.id"
                    :value="author.id"
                >
                    {{ author.name }}
                </option>
            </select>
            <p class="italic mb-4">
                Chosen author's Id:
                <span class="text-teal-700">{{ activeAuthor }}</span>
            </p>
        </div>
    </div>
</template>
