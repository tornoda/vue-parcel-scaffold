<template>
    <div>
        <p class="router-link">
            <router-link to="/home">Home</router-link>
            <router-link to="/demo">Demo</router-link>
        </p>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
};
</script>

<style scoped>
.router-link > a {
    color: black;
    text-decoration: none;
    transition: all 0.3s;
    font-size: 20px;
    display: inline-block;
    width: 150px;
    text-align: center;
}
.router-link-active {
    color: red;
    font-weight: bold;
    font-size: 36px !important;
}
</style>
