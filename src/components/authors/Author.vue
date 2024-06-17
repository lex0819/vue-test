<script setup>
import { RouterLink } from "vue-router";

defineProps(["author", "posts"]);
</script>

<template>
    <div>
        <h1>{{ author.name }}</h1>
        <p>{{ posts.length }} posts was written.</p>
        <div>
            <p>{{ author.email }}</p>
            <p>{{ author.phone }}</p>
            <p>{{ author.website }}</p>
            <div>
                <p>{{ author.address.city }}</p>
                <p>{{ author.address.street }}</p>
                <p>{{ author.address.suite }}</p>
                <p>{{ author.address.zipcode }}</p>
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
