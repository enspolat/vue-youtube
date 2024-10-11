<template>
  <ul>
    <li v-for="post in response" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { useFetch } from './useFetch'

interface IPost {
  id: number
  title: string
  body: string
}

const { response, loading, error } = useFetch<IPost[]>('/posts')
</script>
