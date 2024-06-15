import { ref } from "vue";
import { defineStore } from "pinia";
// import { usePostStore } from "./post";

export const useCommentStore = defineStore("comment", () => {
    const comments = ref([]);

    async function fetchComments() {
        comments.value = await fetch(
            "https://jsonplaceholder.typicode.com/comments"
        ).then((response) => response.json());
    }

    function addComment(Comment) {
        comments.value.push(Comment);
    }

    const getPostComments = (postId) => {
        return comments.value.filter((com) => postId === com.postId);
    };

    return {
        fetchComments,
        addComment,
        getPostComments,
    };
});
