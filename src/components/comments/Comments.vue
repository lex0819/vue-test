<script setup>
import { ref, computed } from "vue";
import AddComment from "@/components/comments/AddComment.vue";

const props = defineProps(["postId"]);

const commentStore = ref([]);

async function fetchComments() {
    commentStore.value = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${props.postId}/comments`
    ).then((response) => response.json());
}

function addComment(comment) {
    commentStore.value.push({ ...comment });
}

const countComments = computed(() => commentStore.value.length);

fetchComments();
</script>

<template>
    <div>
        <AddComment :postId="props.postId" :newCom="addComment" />

        <h2 class="text-2xl mt-4 first-letter:uppercase">
            Comments: <span>{{ countComments }}</span>
        </h2>
        <div
            v-for="comment in commentStore"
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
