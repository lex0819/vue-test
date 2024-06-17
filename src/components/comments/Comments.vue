<script setup>
// import { ref, computed } from "vue";
import { useCommentsStore } from "@/stores/CommentsStore.js";
import AddComment from "@/components/comments/AddComment.vue";

const props = defineProps(["postId"]);

const commentsStore = useCommentsStore();

await commentsStore.fetchCommentsPerPost(props.postId);
</script>

<template>
    <div>
        <AddComment :postId="props.postId" />

        <h2 class="text-2xl mt-4 first-letter:uppercase">
            Comments: <span>{{ commentsStore.comments.length }}</span>
        </h2>
        <div
            v-for="comment in commentsStore.comments"
            :key="comment.id"
            class="shadow-lg p-7 rounded-3xl my-4"
        >
            <h3 class="text-xl my-1 first-letter:uppercase">
                {{ comment.name }}
            </h3>
            <div class="italic my-1 text-teal-400">{{ comment.email }}</div>
            <p>{{ comment.body }}</p>
        </div>
    </div>
</template>
