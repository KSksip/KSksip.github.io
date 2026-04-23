<script setup lang="ts">
const props = defineProps({
    icon: String,
    name: String
})

import { Icon } from "@iconify/vue";
</script>

<template>
    <div v-if="props.icon" class="dark:bg-zinc-700 bg-white border-1 dark:border-zinc-600 border-zinc-300 rounded-full shadow-md
    flex py-2 ps-3 pe-4 gap-1 font-bold h-10">
        <Icon class="size-6 my-auto" :icon="props.icon" />
        <p class="my-auto">{{ props.name }}</p>
    </div>
</template>
