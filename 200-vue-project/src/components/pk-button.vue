<template>
    <button @click="submit(type)"
            class="btn" :class="`btn__${type}`">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "pk-button",
        props: {
            type: {
                type: String,
                default: 'info',
                validator(position) {
                    return ['info', 'warning', 'error'].indexOf(position) > -1;
                },
            }
        },
        methods: {
            submit(type) {
                // submit the click event and its type
                this.$emit('submit', type);
            }
        }
    }
</script>

<style scoped>
    .btn {
        width: 85px;
        height: 40px;
        border: 2px solid #f6a623;
        border-radius: 4px;
        box-shadow: 2px 2px 2px silver;
        text-align: center;
        font-weight: bold;
    }

    /* Styles for the different types of buttons */
    .btn.btn__info {
        background-color: lightblue;
        color: black;
    }

    .btn.btn__warning {
        background-color: #e6c330;
        color: black;
    }

    .btn.btn__error {
        background-color: #e61c1b;
        color: white;
    }
</style>
