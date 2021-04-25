<template>
    <div class="container">
        <h1 class="counter-title">{{counter}}</h1>
        <Button class="counter-button" :title="`Изменить стейт`" @click="addCounter"/>
    </div>
</template>
<script>
//store
import useCounterStore from '../store/counter-store'
//components
import Button from '../components/Button/Button'

export default {
    name: "Counter",
    components: {
        Button
    },
    setup() {
        const { counter, addCounter } = useCounterStore()

        return {
            counter,
            addCounter
        }
    }
}
</script>
<style scoped>
    .counter-title {
        margin-top: 50px;
        text-align: center;
    }

    .counter-button {
        margin: 20px auto;
    }
</style>