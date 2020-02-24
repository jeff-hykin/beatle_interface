<template>
    <column>
        <!-- Icon/Title -->
        <row class=title-section align-v=center width=100vw padding=2rem :wrap=true>
            <img class=our-logo src="../assets/logo.png" alt="logo">
            <div style='min-width: 0.5rem; width: 3rem;'></div>
            <column align-h=left>
                <h1 class=our-title>Beatle Control Center</h1>
            </column>
        </row>
        <!-- Projects -->
        <row class=content-container align-h=left :wrap=true width=100vw margin=2rem>
            Main Area
        </row>
    </column>
</template>
<script>
    export default {
        components: {},
    }
</script>
<style lang="scss" scoped>
.title-section {
    .our-logo {
        height: 10rem;
    }
    
    .our-title {
        font-size: 39pt;
        font-weight: 100;
    }
}
.content-container {
    max-width: 68rem;
}
</style>