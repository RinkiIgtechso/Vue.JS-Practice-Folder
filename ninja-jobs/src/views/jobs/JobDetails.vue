<template>
    <h1>Job Details</h1>
    <p>The job id is {{ id }}</p>
    <div v-if="job">
        <h1>{{ job.title }}</h1>
        <p>{{ job.details }}</p>
    </div>
    <div v-else>
        <p>Loading the job details...</p>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data(){
        return{
            job: null
        }
    },
    mounted(){
        fetch(`http://localhost:3000/jobs/` + this.id)
        .then((res)=> { return res.json()} )
        .then(data => this.job = data)
        .catch(err => console.log(err.message))
    }
}
</script>

<style>

</style>