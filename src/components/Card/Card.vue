<template>
    <div class="card">
        <p>{{title}}</p>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: ['title']
}
</script>

<style scoped>
.card {
    height: 50px;
    max-width: 350px;
    margin: 10px auto;
    padding: 10px 10px;
    border: 1px solid gray;
    border-radius: 10px;
}
    
</style>