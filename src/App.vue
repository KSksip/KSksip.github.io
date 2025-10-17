<script setup lang="ts">
import {ref} from 'vue'
const theme = ref(localStorage.getItem("theme"))

function toggleDarkMode(){
  const html = document.getElementById('html-root')

  if (html?.classList.contains('dark')) {
    html.classList.remove('dark')
    theme.value = 'light'
    localStorage.setItem("theme", theme.value)
  
  } else {
    html?.classList.add('dark')
    theme.value = 'dark'
    localStorage.setItem("theme", theme.value)
  }
}


</script>

<template>
  <div class="animate-fade-in min-h-screen flex flex-col justify-between">
    <div class="font-IBMPlexMono sticky top-0 dark:bg-zinc-800/90">
      <nav class="font-adwaita flex dark:bg-zinc-900/10 bg-white/90 grow-0 flex-row border-b-1 dark:border-zinc-700 border-zinc-200 p-2 justify-center h-13 text-2xl 
      [&_div]:w-1/3 [&_div]:flex
      [&_div>*]:hover:cursor-pointer [&_div>*]:hover:text-accent dark:[&_div>*]:hover:text-accent-2">
          <div class="gap-2">
              <button class="visible sm:invisible size-full sm:hidden w-10">
                <v-icon name="md-menu-round" class="size-full"></v-icon>
              </button>
              <a href="https://github.com/KSksip" class="flex gap-2">
                <v-icon class="size-8" name="fa-github" />
                <h2 class="font-bold">KSksip</h2>
              </a>
          </div>
          <div class="invisible sm:visible justify-center *:font-medium gap-6">
              <router-link 
                to="/" 
                :class="$route.fullPath == '/' ? 'text-accent dark:text-accent-2' : ''">
                Home
              </router-link>

              <router-link 
                to="/projects"
                :class="$route.fullPath == '/projects' ? 'text-accent dark:text-accent-2' : ''">
                Projects
              </router-link>
          </div>

          <div class="justify-end pe-2">
            <button @click="toggleDarkMode">
              <v-icon 
                :name="theme == 'dark' ? 'bi-moon-stars-fill' : 'bi-moon-stars'" 
                class="size-10 rounded-full p-1"
              ></v-icon>
            </button>
          </div>
      </nav>
    </div>
    
    <div class="lg:py-2 mx-4 cursor-default md:w-190 md:mx-auto grow">
      <RouterView />
    </div>

    <div class="border-t-1 dark:bg-zinc-900/10 bg-zinc-100/20 dark:border-zinc-700 border-zinc-200 flex gap-2 justify-evenly p-6 mt-10 dark:*:text-zinc-400 *:text-zinc-500">
      <a href="https://github.com/KSksip/KSksip.github.io" class="hover:text-accent hover:underline">See Page Source</a>
    </div>
  </div>
</template>

<style scoped>

</style>
