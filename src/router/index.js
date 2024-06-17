import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/post/:id",
            name: "post",
            component: () => import("@/views/PostView.vue"),
        },
        {
            path: "/authors",
            name: "authors",
            component: () => import("@/views/AuthorsView.vue"),
        },
        {
            path: "/author/:username",
            name: "author",
            component: () => import("@/views/AuthorView.vue"),
        },
        {
            path: "/:pathMatch(.*)*",
            name: "notfound",
            component: () => import("@/views/NotFound.vue"),
        },
    ],
});

export default router;
