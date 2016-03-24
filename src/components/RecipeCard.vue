<template>
    <a v-link="{ path: '/home/recipe/' + recipe.id }">
        <div class="card">
            <div class="card-image">
                <div class="black-filter"></div>
                <img class="recipe-img" v-bind:src="recipe.img">
                <span class="card-title white-text">{{recipe.name}}</span>
            </div>
            <div class="card-content black-text">
                <span>Tags: </span>
                <span v-for="tag in recipe.tags">{{tag}} </span>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    props: ['recipe'],
    data () {
        return {
        }
    }
}
</script>
