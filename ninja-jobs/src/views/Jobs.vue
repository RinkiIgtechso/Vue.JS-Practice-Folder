<template>
    <h1>Jobs</h1>
    <div v-if="jobs.length">
        <div v-for="job in jobs" :key="job.id" class="job">
            <router-link :to="{ name: 'JobDetails', params:{id: job.id }}">
                <h2>{{ job.title }}</h2>
            </router-link>
        </div>
    </div>
    <div v-else>
        <p>Loading the data...</p>
    </div>
</template>
<!-- <MyComponent
  v-for="(item, index) in items"
  :item="item"
  :index="index"
  :key="item.id"
  
/> -->
<!-- the click event's propagation will be stopped -->
<!-- <a @click.stop="doThis"></a> -->

<!-- the submit event will no longer reload the page -->
<!-- <form @submit.prevent="onSubmit"></form> -->

<!-- modifiers can be chained -->
<!-- <a @click.stop.prevent="doThat"></a> -->
<!-- only trigger handler if event.target is the element itself -->

<!-- i.e. not from a child element -->
<!-- <div @click.self="doThat">...</div> -->
<script>
export default {
    data(){
        return{
            jobs:[],
        }
    },
    mounted(){
        fetch('http://localhost:3000/jobs')
        .then((res)=> { return res.json()} )
        .then(data => this.jobs = data)
        .catch(err => console.log(err.message))
    }
}
</script>

<style>
    .job h2{
        background: #f4f4f4;
        padding: 20px;
        border-radius: 10px;
        margin: 10px auto;
        max-width: 600px;
        cursor: pointer;
        color: #444;
    }
    .job h2:hover{
        background: #ddd;
    }
    .job a{
        text-decoration: none;
    }
</style>