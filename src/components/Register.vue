<template>
    <div id="register">
        <h2>Форма регистрации</h2>
        <input type="text" placeholder="Имя" class="form-control">
        <input type="text" placeholder="Фамилия" class="form-control">
        <input type="text" placeholder="Электронная почта" class="form-control">
        <input type="text" placeholder="Пароль" class="form-control">
        <input type="text" placeholder="Подтверждение пароля" class="form-control">
        <button type="submit" class="btn">Зарегистрироваться</button>
        <famous></famous>
    </div>
</template>
<script>
    import Famous from './Famous';
    export default {
        components: {
            Famous
        },
        created() {
            console.log('регистрация')
        }
    }
</script>