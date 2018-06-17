<template src="./home.html">
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import router from './home-route';

    @Component({
        router,
    })
    export default class Home extends Vue {
    }
</script>
<style lang="scss" scoped="scss" src="./home.scss">
</style>
