import { defineStore } from 'pinia'
import {ComputedRef, Ref} from "vue";


export const useItemsStore:any = defineStore('items', ():object => {
    const list:Ref<Array<any>> = ref(['detvgbh'])
    const count:Ref<number> = ref(0)
    const name:Ref<string> = ref('Eduardo')
    const doubleCount:ComputedRef<number> = computed(() => count.value * 2)

    function increment():void {
        count.value++
        list.value.push(count.value)
    }

    return { list, count, name, doubleCount, increment }
})