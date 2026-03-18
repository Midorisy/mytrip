import { defineStore } from "pinia";
import { ref } from "vue";

export const useHouseParameter = defineStore("houseParameter", ()=> {
    const graft = ref(false)
    const houseGuid=ref('')
    const houseId=ref(null)
    const landlordInviteScene = ref('')
    const preview = ref(false)

    function setHouseId(id) {
        houseId.value = id
    }
    
    return {
        graft,
        houseGuid,
        houseId,
        landlordInviteScene,
        preview,
        // 下面是方法
        setHouseId
    }

})