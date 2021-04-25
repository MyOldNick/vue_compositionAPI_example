<template>
    <div class="movie-card">
        <img class="movie-card-image" :src="`${imgUrl}${image}`"/>
        <p>{{title}}</p>
    </div>
</template>
<script>
//constants
import { IMAGE_API } from '../../constants/API'

export default {
    name: "MovieCard",
    props: ['image', 'title'],
    
    setup() {  
        return {
            imgUrl: IMAGE_API
        }
    }
}
</script>
<style scoped>
    .movie-card {
        width: 200px;
        height: 300px;
        margin: 20px 20px;
    }

    .movie-card-image {
        width: 100%;
        max-height: 90%;
    }
</style>