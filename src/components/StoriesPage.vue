<template>
    <div>
        <h2>Истории</h2>
        <router-link :to="{name: 'stories.all'}">Все</router-link>
        <router-link :to="{name: 'stories.famous'}">Известные</router-link>
        <router-view></router-view>
    </div>
</template>
