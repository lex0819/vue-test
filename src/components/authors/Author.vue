<script setup>
import { useRoute, RouterLink } from "vue-router";
import { useAuthorStore } from "@/stores/AuthorStore";

const route = useRoute();

const authorStore = useAuthorStore();

await authorStore.fetchAuthorPerId(route.params.id); // userId

await authorStore.fetchPostsPerAuthor(route.params.id);
</script>

<template>
    <div>
        <div v-if="authorStore.loader">
            <span class="loading loading-spinner loading-md"></span>
        </div>
        <div v-if="authorStore.error">{{ authorStore.error.message }}</div>
        <div v-if="authorStore.author" class="">
            <h1 class="text-center text-teal-900 text-5xl mb-8">
                {{ authorStore.author.name }}
            </h1>
            <p class="italic mt-4">
                <span class="text-teal-500">{{
                    authorStore.posts.length
                }}</span>
                posts was written.
            </p>
            <div class="shadow-lg p-7 rounded-3xl">
                <h2 class="text-center text-teal-700 text-3xl mb-6">
                    Contacts
                </h2>
                <div class="my-5 p-3 rounded-3xl border-teal-700 border-2">
                    <div>
                        <div
                            class="tooltip tooltip-accent sm:tooltip-right"
                            data-tip="write email"
                        >
                            <a :href="`mailto: ${authorStore.author.email}`">
                                {{ authorStore.author.email }}
                            </a>
                        </div>
                    </div>
                    <div>
                        <div
                            class="tooltip tooltip-accent sm:tooltip-right"
                            data-tip="call phone"
                        >
                            <a :href="`tel:${authorStore.author.phone}`">{{
                                authorStore.author.phone
                            }}</a>
                        </div>
                    </div>
                    <div>
                        <div
                            class="tooltip tooltip-accent sm:tooltip-right"
                            data-tip="go to website"
                        >
                            <a
                                :href="`https://${authorStore.author.website}`"
                                >{{ authorStore.author.website }}</a
                            >
                        </div>
                    </div>
                </div>
                <h2 class="text-center text-teal-700 text-3xl mb-6">Address</h2>
                <div class="my-5 p-3 rounded-3xl border-teal-700 border-2">
                    <p>{{ authorStore.author.address.city }}</p>
                    <p>{{ authorStore.author.address.street }}</p>
                    <p>{{ authorStore.author.address.suite }}</p>
                    <p>{{ authorStore.author.address.zipcode }}</p>
                </div>
            </div>
            <h2 class="text-center text-teal-700 text-3xl my-6">Posts</h2>
            <ul class="mt-6">
                <li
                    v-for="post in authorStore.posts"
                    :key="post.id"
                    class="mb-6 px-4"
                >
                    <RouterLink
                        :to="`/post/${post.id}`"
                        class="text-teal-700 text-xl hover:opacity-60 duration-500"
                        >{{ post.title }}</RouterLink
                    >
                </li>
            </ul>
        </div>
    </div>
</template>
