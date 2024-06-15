import { ref } from "vue";
import { defineStore } from "pinia";
// import { usePostStore } from "./post";

export const useCommentStore = defineStore({
    id: "comment",
    state: () => ({
        comments: ref([]),
    }),
    getters: {
        // getComments(state) {
        //     return state.comments;
        // },
        getPostComments: (state) => {
            // const postSore = usePostStore();
            // return state.comments.filter(
            //     (post) => post.postId === postSore.post.id
            // );

            return (postId) =>
                state.comments.filter((com) => postId === com.postId);
        },
    },
    actions: {
        async fetchComments() {
            this.comments = await fetch(
                "https://jsonplaceholder.typicode.com/comments"
            ).then((response) => response.json());
        },
        addComment(Comment) {
            this.comments.push(Comment);
        },
    },
});
