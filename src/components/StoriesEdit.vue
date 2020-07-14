<template>
    <div class="row">
        <h3>Редактирование</h3>
        <form>
            <div class="form-group col-md-offset-2 col-md-8">
                <input class="form-control" v-model="story.plot">
            </div>
            <div class="form-group col-md-12">
                <button type="button" @click="saveChanges(story)" class="btn btn-success">
                    Сохранить изменения
                </button>
                <button type="button" @click="goBack" class="btn btn-primary">
                    Вернуться назад
                </button>
            </div>
        </form>
    </div>
</template>
<script>
    import {store} from '../store.js';
    export default {
        data() {
            return {
                story: {}
            }
        },
        methods: {
            isTheOne(story) {
                return story.id === this.id
            },
            saveChanges(story) {
                console.log(story)
                this.$router.push('/stories')
            },
            goBack() {
                this.$router.back()
            }
        },
        mounted() {
            this.story = store.stories.find(this.isTheOne)
        }
    }
</script>