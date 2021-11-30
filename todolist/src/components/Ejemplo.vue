<template>
    <span>{{ message }}</span>
</template>

<script>
export default {
    data(){
        return {
            message: "Esto es un string"
        }
    },
    created(){
        this.message = "Created";
    }
}
</script>