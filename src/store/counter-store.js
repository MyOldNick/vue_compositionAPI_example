import { ref, computed } from "vue";

const useCounterStore = () => {
  
  const counter = ref(0);

  const addCounter = () => (counter.value = ++counter.value);

  return {
      counter: computed(() => counter.value),
      addCounter
  }

};

export default useCounterStore;
