<script setup>
import { ref, computed, watch } from "vue";
import { RouterLink } from "vue-router";
import { usePostsStore } from "@/stores/PostsStore";
import AuthorsList from "@/components/authors/AuthorsList.vue";

const activeAuthor = ref(null);
const postsStore = usePostsStore();

await postsStore.fetchPosts();

const allPosts = () => {
    activeAuthor.value = null;
};

watch(activeAuthor, () => {
    postsStore.setPostsPerAuthor(activeAuthor.value);
});
</script>
<template>
    <div class="py-6">
        <h1 class="text-center text-teal-900 text-5xl mb-8">Welcome to Vue</h1>
        <div class="flex gap-5 flex-wrap sm:flex-nowrap justify-center">
            <AuthorsList v-model="activeAuthor" />
            <div class="grow">
                <div v-if="postsStore.loader">
                    <span class="loading loading-spinner loading-md"></span>
                </div>
                <div v-if="postsStore.error">
                    {{ postsStore.error.message }}
                </div>
                <div v-if="postsStore.posts">
                    <h2 class="text-center text-teal-700 text-3xl mb-6">
                        Posts List
                    </h2>
                    <button
                        @click="allPosts"
                        class="bg-teal-700 text-center py-2 px-4 text-white rounded-lg hover:bg-teal-600 duration-75 cursor-pointer mb-4"
                    >
                        Show all posts
                    </button>
                    <div v-if="activeAuthor">
                        <p class="italic mb-4">
                            Total posts:
                            <span class="text-teal-700">
                                {{ postsStore.postsPerAuthor.length }}
                            </span>
                        </p>
                        <ul>
                            <li
                                v-for="post in postsStore.postsPerAuthor"
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
                                postsStore.posts.length
                            }}</span>
                        </p>
                        <ul>
                            <li
                                v-for="post in postsStore.posts"
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
