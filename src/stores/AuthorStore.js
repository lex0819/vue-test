import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com/users/";

export const useAuthorStore = defineStore("authorStore", () => {
    const loader = ref(false);
    const error = ref(null);
    const author = ref({});

    const fetchAuthorPerId = async (id) => {
        try {
            loader.value = true;
            const response = await axios.get(`${apiUrl}${id}`);
            const data = await response.data;
            author.value = data;
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
        fetchAuthorPerId,
    };
});
