<script setup>
import { ref } from "vue";
import { useCommentsStore } from "@/stores/CommentsStore";

const props = defineProps(["postId"]);

const commentsStore = useCommentsStore();

const sendOk = ref(false);
// const comment = ref({});
const comment = {};

const submit = async (e) => {
    const form = document.getElementById("form-add");
    let formData = new FormData(form);
    formData.append("postId", props.postId);

    formData.forEach((value, key) => (comment[key] = value));

    commentsStore.setAddNewComment(comment);

    sendOk.value = await commentsStore.sendNewComment(comment);

    if (sendOk.value) {
        form.reset();
    }
};
</script>
<template>
    <div>
        <form
            method="post"
            class="shadow-lg p-7 rounded-3xl"
            id="form-add"
            @submit.prevent="submit"
        >
            <h2 class="text-2xl my-4 first-letter:uppercase">
                Add new comment
            </h2>
            <div>
                <label
                    for="name"
                    class="input input-bordered flex items-center gap-2 my-4"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        class="w-4 h-4 opacity-70"
                    >
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
                        />
                    </svg>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        class="grow"
                        placeholder="Username"
                    />
                </label>
            </div>
            <div>
                <label
                    for="email"
                    class="input input-bordered flex items-center gap-2 my-4"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        class="w-4 h-4 opacity-70"
                    >
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
                        />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
                        />
                    </svg>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        class="grow"
                        placeholder="Email"
                    />
                </label>
            </div>
            <div class="flex items-center my-4">
                <label for="body" class="hidden">your comment</label>
                <textarea
                    name="body"
                    id="body"
                    required
                    placeholder="your comment"
                    class="textarea textarea-bordered grow"
                ></textarea>
            </div>
            <button type="submit" class="btn">send</button>
        </form>
        <div v-if="sendOk">
            <dialog id="my_modal_2" class="modal" open>
                <div class="modal-box">
                    <h3 class="font-bold text-lg">
                        Your comment was added successful!
                    </h3>
                    <p class="py-4">Click to close</p>
                    <div class="modal-action">
                        <button class="btn" @click="sendOk = false">
                            Close
                        </button>
                    </div>
                </div>
            </dialog>
        </div>
    </div>
</template>
