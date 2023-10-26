<template>
    <div class="container-inicio">
        <div class="content-titulo">
            <h1>Prueba tecnica con VueJs</h1>
        </div>

        <div class="content-form">
            <form>
                <input
                    v-model="usuario"
                    type="text"
                    placeholder="Solo ingresa tu nombre"
                >
                <input
                    v-model="password"
                    type="password"
                    placeholder="La contraseña es admin"
                >
                <button @click.prevent="login">
                    <p>Ingresa a los mensajes</p>
                </button>
                <div v-if="error" class="mensaje-error">
                    <p>{{ error }}</p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                usuario: "",
                password: "",
                error: "", // Prueba con la contraseña admin
            }
        },
        methods: {
            login() {
                if ( this.usuario !== "" && this.password === "admin" ) {
                    this.error = "";
                    this.$router.push({
                        name: 'Mensajes',
                        query: { 
                            nombre: this.usuario 
                        }
                    })
                } else {
                    this.error = "Prueba con la contraseña admin"
                }
            }
        }
    }
</script>