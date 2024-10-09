<script setup lang="ts">
import { ref } from 'vue'

// Reactive array to store dashboards (start with an empty array)
const dashboards = ref([])

// Function to add a new dashboard row
const addDashboard = () => {
  const newIndex = dashboards.value.length + 1
  dashboards.value.push({
    name: `Dashboard ${newIndex}`,
    url: 'http://abcdefhij.lmno'
  })
}
</script>

<template lang="pug">
    // Set the background color to lighter purple and fill the whole screen
    div.bg-purple-50.min-h-screen.w-screen.flex.justify-center.items-center
        div.p-10.bg-white.border.rounded-md.w-full.max-w-2xl
            div.flex.justify-between.mb-4
                button.bg-gray-200.px-4.py-2.rounded 
                    NuxtLink(to="/") Back
                h2.text-xl.font-semibold My Dashboards
    
            div.grid.grid-cols-1.gap-6
                div(v-if="dashboards.length === 0") No dashboards added yet.
    
                div(v-for="(dashboard, index) in dashboards" :key="index" class="border p-6 bg-white rounded shadow-md w-full")
                    div.font-semibold {{ dashboard.name }}
                    div 
                        a(:href="dashboard.url" class="text-blue-500") {{ dashboard.url }}
                    div.mt-2 
                        input(type="checkbox")
                        span Delete
    
            div.mt-8.flex.justify-between
                button.bg-purple-200.px-4.py-2.rounded(@click="addDashboard") Add Dashboard
</template>
