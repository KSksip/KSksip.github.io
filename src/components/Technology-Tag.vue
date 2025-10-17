<script setup>
const props = defineProps({
    icon: String,
    name: String
})
</script>

<template>
    <div class="dark:bg-zinc-700 bg-white border-1 dark:border-zinc-600 border-zinc-300 rounded-full shadow-md
    flex py-2 ps-3 pe-4 gap-1 font-bold h-10">
        <v-icon class="size-6 my-auto" :name="props.icon"></v-icon>
        <p class="my-auto">{{ props.name }}</p>
    </div>
</template>
