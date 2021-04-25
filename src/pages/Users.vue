<template>
    <div class="container">
        <Card v-for="({id, name}) in users" :key="id" :title="name"/>
    </div>
</template>

<script>
//vue
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
//components
import Card from '../components/Card/Card'

export default {
    name: "Users",
    components: {
        Card
    },

    setup() {
        const store = useStore()
        
        onMounted(() => {
             store.dispatch('getUsers')
        })

        return {
            users: computed(() => store.getters.getUsersState)
        }
    },
}
</script>

<style scoped>
    
</style>