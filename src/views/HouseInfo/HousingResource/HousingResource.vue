<template>
    <div class="housing-resource">
        <house-date></house-date>
        <current-house></current-house>
        <house-type></house-type>
        <other-type></other-type>
    </div>
</template>

<script setup>
import HouseDate from './HouseDate/HouseDate.vue';
import CurrentHouse from './CurrentHouse/CurrentHouse.vue';
import HouseType from './HouseType/HouseType.vue';
import OtherType from './OtherType/OtherType.vue';
</script>

<style scoped>
.housing-resource{
    background-color: var(--waterFall-background-color);
}
</style>