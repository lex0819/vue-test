import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com/posts/";

export const usePostsStore = defineStore("postsStore", () => {
    const loader = ref(false);
    const error = ref(null);
    const posts = ref([]);
    const postsPerAuthor = ref([]);

    const fetchPosts = async () => {
        try {
            loader.value = true;
            const response = await axios.get(`${apiUrl}`);
            const data = await response.data;
            posts.value = data;
        } catch (error) {
            console.error(error);
            error.value = error;
        } finally {
            loader.value = false;
        }
    };

    const setPostsPerAuthor = (userId) => {
        postsPerAuthor.value = posts.value.filter(
            (post) => parseInt(userId) === post.userId
        );
    };

    return {
        loader,
        error,
        posts,
        postsPerAuthor,
        setPostsPerAuthor,
        fetchPosts,
    };
});
