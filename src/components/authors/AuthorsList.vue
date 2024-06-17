<script setup>
import { useAuthorsStore } from "@/stores/AuthorsStore";

const authorsStore = useAuthorsStore();

await authorsStore.fetchAuthors();

const activeAuthor = defineModel(); //send to parent
</script>

<template>
    <div>
        <div v-if="authorsStore.loader">
            <span class="loading loading-spinner loading-md"></span>
        </div>
        <div v-if="authorsStore.error">{{ error.message }}</div>
        <div v-if="authorsStore.authors">
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
                    v-for="author in authorsStore.authors"
                    :key="author.id"
                    :value="author.id"
                >
                    {{ author.name }}
                </option>
            </select>
            <p class="italic mb-4" v-if="activeAuthor">
                Chosen author's Id:
                <span class="text-teal-700">{{ activeAuthor }}</span>
            </p>
        </div>
    </div>
</template>
