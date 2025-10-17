<script setup lang="ts">
import { ref } from 'vue';

import TechnologyTag from '@/components/Technology-Tag.vue';

const projects = [
  {
    icon: "la-globe-solid",
    name: "This Website",
    date: "October 2, 2025",
    techStack: [
      {
        name: "VueJS",
        icon: "co-vue-js"
      },
      {
        name: "TailwindCSS",
        icon: "si-tailwindcss"
      },
    ]
  },
];
</script>

<template>
  <div class="tracking-wide sm:px-5 md:px-0 w-full">
<!--<h1 class="text-5xl font-semibold dark:text-accent-2 text-accent">Some of my projects!</h1>-->    <br>
    <div class="flex flex-col">
      <a v-for="project in projects" href="https://github.com/KSksip/KSksip.github.io" target="_blank" class="hover:text-accent dark:hover:text-accent-2 hover:cursor-pointer">
        <!-- sm:border-1 sm:hover:inset-shadow-sm !!incase i want to add it back -->
        <div class="border-zinc-200 sm:px-6 sm:py-6 rounded-md flex justify-between">
          <div class="flex flex-col w-full">
            <div class="flex justify-between">
              <div class="sm:flex gap-2">
                <div class="flex">
                  <v-icon :name="project.icon" class="size-9"></v-icon>
                  <h2 class="leading-8.5 ms-2 text-2xl sm:text-3xl font-bold">{{ project.name }}</h2>
                </div>
                <p class="sm:text-lg mt-1.5 ms-1 italic">({{ project.date }})</p>
              </div>
              <v-icon name="hi-external-link" class="hidden my-auto me-4 size-10"></v-icon>
            </div>
            <div class="mt-2 flex gap-2 flex-wrap invisible sm:visible">
              <TechnologyTag v-for="tech in project.techStack" :icon="tech.icon" :name="tech.name"/>
            </div>
          </div>
        </div>
        <hr v-if="projects.length > 1" class="border-zinc-200 my-4">
      </a>
      
    </div>

      <!-- <div class="border-t-1 border-b-1 md:border-1 dark:border-zinc-700 border-zinc-200 md:rounded-md inset-shadow-sm px-8 pt-4 pb-8 mt-2">
        
      </div> -->
  </div>
</template>
