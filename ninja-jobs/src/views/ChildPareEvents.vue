<template>
    <HomeLayout>
        <template #header>
            <h1>Welcome to the vue.js ✨🎉🙌❤</h1>
        </template>

        <template #default>
            <p>A paragraph for the main content.</p>
            <p>And another one.</p>
        </template>

        <template #footer>
            <p>@copyright</p>
        </template>
    </HomeLayout>
</template>

<script>
import FancyButton from "./jobs/FancyButton.vue";
import HomeLayout from './jobs/HomeLayout.vue';

export default {
    name:'ChildPareEvents',
    props: {
        title: {
            type: String
        }
    },
    components:{
        FancyButton,
        HomeLayout
    },
    methods: {
        changeTitle:function(){
            console.log("clicked event")
            this.$emit('changeTitle', "Updated Homepage")
        }
    }
}
</script>

<style>

</style>