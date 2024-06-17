<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useAuthorStore } from "@/stores/AuthorsStoresStore";
// import { usePostStore } from "@/stores/post";
// import Author from "@/components/authors/Author.vue";

const route = useRoute();
const { authors } = storeToRefs(useAuthorStore());
// const { getPostsPerAuthor } = storeToRefs(usePostStore());
// const { fetchPosts } = usePostStore();
const { fetchAuthors, getPostAuthor } = useAuthorStore();

const posts = ref([]);

async function fetchPosts() {
    posts.value = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${getAuthorByUserName.id}`
    )
        .then((response) => response.json())
        .catch((er) => console.log(er));
}

fetchPosts();
fetchAuthors();
const getAuthorByUserName = computed(() => {
    return (
        authors.value.find(
            (author) => author.username === route.params.username
        ) || 1
    );
});
</script>

<template>
    <div>
        <h1>{{ getAuthorByUserName.name }}</h1>
        <p>{{ posts.length }} posts was written.</p>
        <div>
            <p>{{ getAuthorByUserName.email }}</p>
            <p>{{ getAuthorByUserName.phone }}</p>
            <p>{{ getAuthorByUserName.website }}</p>
            <div>
                <p>{{ getAuthorByUserName.address.city }}</p>
                <p>{{ getAuthorByUserName.address.street }}</p>
                <p>{{ getAuthorByUserName.address.suite }}</p>
                <p>{{ getAuthorByUserName.address.zipcode }}</p>
            </div>
        </div>
        <ul class="mt-6">
            <li v-for="post in posts" :key="post.id">
                <RouterLink :to="`/post/${post.id}`">{{
                    post.title
                }}</RouterLink>
            </li>
        </ul>
    </div>
</template>
