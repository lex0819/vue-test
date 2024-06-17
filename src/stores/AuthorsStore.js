import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";
import { usePostsStore } from "./PostsStore";

const apiUrl = "https://jsonplaceholder.typicode.com/users/";

export const useAuthorsStore = defineStore("authorsStore", () => {
    const loader = ref(false);
    const error = ref(null);
    const authors = ref([]);

    const fetchAuthors = async () => {
        loader.value = true;
        try {
            const response = await axios.get(`${apiUrl}`);
            const data = await response.data;
            authors.value = data;
        } catch (error) {
            console.error(error);
            error.value = error;
        } finally {
            loader.value = false;
        }
    };

    return { loader, error, authors, fetchAuthors };
});
