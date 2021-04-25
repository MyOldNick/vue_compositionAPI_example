<template>
    <div class="container page-container">
        {{text}}
        {{data.text2}}
    </div>
</template>
<script>
import { reactive, ref } from 'vue'

export default {
    name: "Page",

    setup() {
        const text = ref("Hello world")

        const data = reactive({
            text2: 'Cat'
        })

        setTimeout(() => {

            text.value = 'Hello'

            data.text2 = "Котики"

        }, 1000)


        return {
            text,
            data
        }
    }
}
</script>
<style scoped>
    .page-container {
        min-height: 80vh;
    }
</style>