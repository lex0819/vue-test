import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com/";

export const useCommentsStore = defineStore("commentsStore", () => {
    const loader = ref(false);
    const error = ref(null);
    const comments = ref([]);

    const fetchCommentsPerPost = async (id) => {
        try {
            loader.value = true;
            const response = await axios.get(`${apiUrl}posts/${id}/comments`);
            const data = await response.data;
            comments.value = data;
        } catch (error) {
            error.value = error;
            console.log(error);
        } finally {
            loader.value = false;
        }
    };

    const sendNewComment = async (comment) => {
        try {
            loader.value = true;
            const response = await axios.post(
                `${apiUrl}comments`,
                { ...comment },
                {
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8",
                    },
                }
            );
            const data = await response.data;
            console.log(data);
            return true;
        } catch (error) {
            error.value = error;
            console.error(error);
            return false;
        } finally {
            loader.value = false;
        }
    };

    const setAddNewComment = (comment) => {
        comments.value.push({ ...comment });
    };

    return {
        loader,
        error,
        comments,
        fetchCommentsPerPost,
        setAddNewComment,
        sendNewComment,
    };
});
