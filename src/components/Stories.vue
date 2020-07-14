<template>
    <ul class="list-group">
        <li v-for="(story, index) in stories" :key="index" class="list-group-item">
            {{story.write}} сказал "{{story.plot}}"
            Кол-во голосов: {{story.upvotes}}
        </li>
    </ul>
</template>
<script>
import {store} from '../store.js'
export default {
    data(){
        return {
            stories: store.stories
        }
    },
    created() {
        console.log('истории')
    }
}
</script>