<template>
    <div class="greet">
        <h1>{{ msg }}</h1>
    </div>
</template>
<script>
export default {
    data () {
        return {
            msg: 'Нет! Я хочу использовать элемент <component>!'
        }
    }
}
</script>