<script setup lang="ts">
import PostHeader from './PostHeader.vue';
</script>

<template>
    <div class="post">
        <PostHeader />
        <slot />
    </div>

    <div class="comments">
        <Twikoo />
    </div>
</template> 