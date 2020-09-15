<template>
    <!--    Simple banner-->
    <div class="banner" :style="bannerStyles" :class="`banner__${position}`">
        <!--        Content projected here-->
        <slot></slot>
    </div>
</template>

<script>
    const defaultStyles = {
        left: 0,
        right: 0,
    };
    export default {
        name: "pk-banner",
        // configuration options for our banner
        props: {
            position: {
                type: String,
                default: 'top',
                validator(position) {
                    return ['top', 'bottom'].indexOf(position) > -1;
                },
            },
            styles: {
                type: Object,
                default: () => ({}),
            },
        },
        data() {
            return {
                bannerStyles: {
                    ...defaultStyles,
                    ...this.styles,
                },
            };
        },
    };
</script>
<style scoped>
    .banner {
        padding: 12px;
        background-color: #fcf6cd;
        color: #f6a623;
        text-align: left;
        position: fixed;
        z-index: 2;
    }

    .banner.banner__top {
        top: 0;
        border-bottom: 2px solid saddlebrown;
    }

    .banner.banner__bottom {
        bottom: 0;
        border-top: 2px solid saddlebrown;
    }
</style>
