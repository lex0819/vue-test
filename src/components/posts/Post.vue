<script setup>
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import { useCommentStore } from "../../stores/comment";
import Comment from "../comments/Comments.vue";
import AddComment from "../comments/AddComment.vue";

defineProps(["post", "author"]);

const { getPostComments } = storeToRefs(useCommentStore());
const { fetchComments } = useCommentStore();

fetchComments();
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
        <h2 class="text-2xl mt-4 first-letter:uppercase">
            Comments: <span>{{ getPostComments.length }}</span>
        </h2>
        <Comment :comments="getPostComments" />
        <AddComment />
    </div>
</template>
