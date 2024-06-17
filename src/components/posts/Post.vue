<script setup>
import { ref } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { usePostStore } from "@/stores/PostStore";
import { useAuthorStore } from "@/stores/AuthorStore";
import Comments from "@/components/comments/Comments.vue";

const route = useRoute();

const postStore = usePostStore();
const authorStore = useAuthorStore();

await postStore.fetchPost(route.params.id);

const userId = await postStore.post.userId;

await authorStore.fetchAuthorPerId(userId);
</script>

<template>
    <div class="container mx-auto p-2">
        <div v-if="postStore.loader">Loading post...</div>
        <div v-if="postStore.error">{{ error.message }}</div>
        <div v-if="postStore.post">
            <div v-if="authorStore.loader">Loading author...</div>
            <div v-if="authorStore.error">{{ error.message }}</div>
            <div v-if="authorStore.author">
                <div class="shadow-lg p-7 rounded-3xl">
                    <h1 class="text-4xl mt-4 first-letter:uppercase">
                        {{ postStore.post.title }}
                    </h1>
                    <p class="italic mt-4">
                        Written by:
                        <RouterLink
                            :to="`/author/${authorStore.author.username}`"
                            class="text-teal-400"
                            >{{ authorStore.author.name }}</RouterLink
                        >
                    </p>
                    <p class="mt-5 text-lg first-letter:uppercase">
                        {{ postStore.post.body }}
                    </p>
                </div>
                <Suspense>
                    <Comments :postId="postStore.post.id" />
                </Suspense>
            </div>
        </div>
    </div>
</template>
