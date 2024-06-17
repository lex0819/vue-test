import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com/";

export const useAuthorStore = defineStore("authorStore", () => {
    const loader = ref(false);
    const error = ref(null);
    const author = ref({});
    const posts = ref([]);

    const fetchAuthorPerId = async (userId) => {
        loader.value = true;
        try {
            const response = await axios.get(`${apiUrl}users/${userId}`);
            const data = await response.data;
            author.value = data;
        } catch (error) {
            console.error(error);
            error.value = error;
        } finally {
            loader.value = false;
        }
    };

    const fetchPostsPerAuthor = async (userId) => {
        loader.value = true;
        try {
            const response = await axios.get(`${apiUrl}posts?userId=${userId}`);
            const data = await response.data;
            posts.value = data;
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
        author,
        posts,
        fetchAuthorPerId,
        fetchPostsPerAuthor,
    };
});
