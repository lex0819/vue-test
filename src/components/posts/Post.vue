<script setup>
import { RouterLink } from "vue-router";
import Comments from "@/components/comments/Comments.vue";

defineProps(["post", "author"]);
</script>

<template>
    <div>
        <div class="shadow-lg p-7 rounded-3xl">
            <h1 class="text-4xl mt-4 first-letter:uppercase">
                {{ post.title }}
            </h1>
            <p v-if="author" class="italic mt-4">
                Written by:
                <RouterLink
                    :to="`/author/${author.username}`"
                    class="text-teal-400"
                    >{{ author.name }}</RouterLink
                >
            </p>
            <p class="mt-5 text-lg first-letter:uppercase">{{ post.body }}</p>
        </div>

        <Comments :postId="post.id" />
    </div>
</template>
