<template>
    <div>
        <h3>Все истории ({{stories.length}})</h3>
        <ul class="list-group">
            <li v-for="story in stories" :key="story.id" class="list-group-item">
                <div class="row">
                    <h4>{{story.write}} сказал "{{story.plot}}"
                        <span class="badge">{{story.upvotes}}</span>
                    </h4>
                    <router-link
                        :to="{name: 'stories.edit'}" tag="button"
                        class="btn btn-default" exact
                    >
                        Редактировать
                    </router-link>
                </div>
            </li>
        </ul>
    </div>
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