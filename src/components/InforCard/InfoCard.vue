<template>
    <div class="info-card">

        <div class="icon-perfil">
            <p>{{ icon }}</p>
        </div>

        <div class="box-texto">
            <p>{{ nombre }}</p>
            <span>{{ mensaje }}</span>
        </div>

        <div class="box-fecha">
            <p>{{ fecha }}</p>
        </div>

    </div>
</template>

<script>
    export default {
        props: {
            nombre: {
                type: String,
                required: false,
                default: "Gavin Griffith",
            },
            mensaje: {
                type: String,
                required: false,
                default: "I will purchase it for sure. 👍",
            },
            fecha: {
                type: String,
                required: false,
                default: "Jun 8",
            },
            icon: {
                type: String,
                required: false,
                default: "GG",
            },
        }
    }
</script>