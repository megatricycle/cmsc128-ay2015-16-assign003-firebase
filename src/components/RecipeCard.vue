<template>
    <a v-link="{ path: '/home/recipe/testrecipeid' }">
        <div class="card">
            <div class="card-image">
                <img src="/src/img/samplebg.png">
                <span class="card-title">Card Title</span>
            </div>
            <div class="card-content black-text">
                <p>Tags:</p>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    data () {
        return {
        }
     }
}
</script>
