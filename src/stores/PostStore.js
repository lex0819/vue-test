import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com/posts/";

export const usePostStore = defineStore("postStore", () => {
    const loader = ref(false);
    const error = ref(null);
    const post = ref({});

    const fetchPost = async (id) => {
        try {
            loader.value = true;
            const response = await axios.get(`${apiUrl}${id}`);
            const data = await response.data;
            post.value = data;
        } catch (error) {
            console.error(error);
            error.value = error;
        } finally {
            loader.value = false;
        }
    };

    return {
        loader,
        error,
        post,
        fetchPost,
    };
});
