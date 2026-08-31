<script setup lang="ts">
import TechnologyTag from '@/components/Technology-Tag.vue'
import HighlightText from '@/components/Highlight-Text.vue';
import { tech } from '@/icons/tech';
</script>

<template>
    <div class="tracking-wide leading-10 px-5 mt-8 md:px-0">
        <h1 class="text-5xl font-semibold dark:text-accent-2 text-accent">Hi! (ᵔᵕᵔ)◜</h1>
        <p class="text-xl pt-2 ps-1.5">
            Hello! My name is <HighlightText>Skip</HighlightText>. I'm a bachelor student within IT, and I'm currently working towards my end goal of being a <HighlightText>full-stack developer</HighlightText>!
        </p>

        <br>
        <h2 class="text-3xl font-bold tracking text-accent dark:text-accent-2">As a developer</h2>
        <p class="text-xl pt-2 ps-1.5">
            I work alot with <HighlightText>Vue</HighlightText> and <HighlightText>Typescript</HighlightText> since I mostly do front-end. Though, I am interested in learning backend so I am currently learning <HighlightText>ElysiaJS</HighlightText> in order to learn backend more properly. 
        <br><br>
            Personally i am a big fan of <HighlightText>customization</HighlightText>. My goal when developing apps is to make them as customizable and accessible as possible for me and others. In addition I am also interested in <HighlightText>open-source</HighlightText> software and actively try to find and make open-source alternatives.
        </p>
        
        <br>
        <h2 class="text-3xl font-bold dark:text-accent-2 text-accent">Experience</h2>
        <p class="text-xl pt-2 ps-1.5">
            I have worked two <HighlightText>internships</HighlightText>, at the first one I refactored old <HighlightText>jQuery</HighlightText> pages to <HighlightText>Vue</HighlightText>. At the second one i explored <HighlightText>Quasar</HighlightText> and <HighlightText>NestJS</HighlightText>. 
            Other than that i have a decent amount of experience just working on my own projects.
        </p>
    </div>

    <div class="mt-12">
        <h2 class="text-3xl font-bold dark:text-accent-2 text-accent text-center md:text-start">Skills</h2>
        <div class="border-t-1 md:border-b-1 md:border-1 dark:border-zinc-700 border-zinc-200 md:rounded-md md:inset-shadow-sm px-8 pt-4 pb-8 mt-2">
            <div v-for="key of Object.keys(tech)" class="nth-[n+2]:mt-10">
                <h2 class="text-2xl text-center md:text-start font-bold">{{ key }}</h2>
                <div class="flex justify-center md:justify-start gap-2 mt-2 flex-wrap">
                    <TechnologyTag class="hover:scale-105 transition-transform" v-for="item of tech[key]" :name="item.name" :icon="item.icon"/>
                </div>
            </div>
        </div>  
    </div>  
</template>