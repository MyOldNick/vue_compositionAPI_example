<template>
    <div @click="action" class="button">
        {{title}}
    </div>
</template>

<script>

export default {
    name: "Button",
    props: ['title'],
    setup(props, { emit }) {

        const action = () => emit('action')

        return {
            action
        }
    }

}
</script>

<style scoped>
    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: 40px;
        background-color: rgb(82, 80, 80);
        border-radius: 50px;
        color: white;
        cursor: pointer;
        user-select: none;
    }
</style>