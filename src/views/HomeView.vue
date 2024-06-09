<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import { usePostStore } from "@/stores/post";
import AuthorsList from "@/components/AuthorsList.vue";

const { posts, loading, error, getTotalPosts } = storeToRefs(usePostStore());
const { fetchPosts, getPostsPerAuthor, getTotalPostsPerAuthorId } =
    usePostStore();

const activeAuthor = ref("");

fetchPosts();

function allPosts() {
    activeAuthor.value = null;
}
</script>

<template>
    <div>
        <h1 class="text-center text-teal-900 text-5xl mb-8">Welcome to Vue</h1>
        <div class="flex gap-2 flex-wrap sm:flex-nowrap justify-center">
            <AuthorsList v-model="activeAuthor" />
            <div class="grow">
                <p v-if="loading">Loading posts...</p>
                <p v-if="error">{{ error.message }}</p>
                <div v-if="posts">
                    <h2 class="text-center text-teal-700 text-3xl mb-6">
                        Posts List
                    </h2>
                    <button
                        @click="allPosts"
                        class="bg-teal-700 text-center py-2 px-4 text-white rounded-lg my-2 hover:bg-teal-600 duration-75 cursor-pointer mb-4"
                    >
                        Show all posts
                    </button>
                    <div v-if="activeAuthor">
                        <p class="italic mb-4">
                            Total posts:
                            <span class="text-teal-700">
                                {{ getTotalPostsPerAuthorId(activeAuthor) }}
                            </span>
                        </p>
                        <ul>
                            <li
                                v-for="post in getPostsPerAuthor(activeAuthor)"
                                :key="post.id"
                                class="mb-6 p-4 rounded-lg border border-teal-700 w-full"
                            >
                                <RouterLink
                                    :to="`/post/${post.id}`"
                                    class="text-teal-700 text-xl hover:opacity-60 duration-500"
                                >
                                    {{ post.title }}
                                </RouterLink>
                                <p class="line-clamp-1">{{ post.body }}</p>
                            </li>
                        </ul>
                    </div>
                    <div v-else>
                        <p class="italic mb-4">
                            Total posts:
                            <span class="text-teal-700">{{
                                getTotalPosts
                            }}</span>
                        </p>
                        <ul>
                            <li
                                v-for="post in posts"
                                :key="post.id"
                                class="mb-6 px-4"
                            >
                                <RouterLink
                                    :to="`/post/${post.id}`"
                                    class="text-teal-700 text-xl hover:opacity-60 duration-500"
                                >
                                    {{ post.title }}
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.main {
    display: flex;
}
</style>
