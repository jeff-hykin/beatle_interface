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
        <row class=content-container width=100vw margin=2rem>
            <ui-button color='primary' @click="toggleStatus">
                Toggle Arm/Disarm
            </ui-button>
        </row>
        <column position=fixed left=0 bottom=0 width=100vw padding=1rem align-h=left color="white" :background-color='status=="disarmed"?"var(--blue-400)" : "var(--red-500)" '  >
            status: {{status}}
        </column>
    </column>
</template>
<script>
    export default {
        components: {},
        data:()=>({
           status 
        }),
        methods: {
            toggleStatus() {
                if (this.status == "disarmed") {
                    this.status = "armed"
                } else {
                    this.status = "disarmed"
                }
            }
        }
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