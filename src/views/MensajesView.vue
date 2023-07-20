<template>
    <div class="container">
        <div class="left">
            <header>

                <div class="icon-perfil">
                    <p>JT</p>
                </div>

                <div class="buscador">
                    <div class="icon">
                        <img src="/search.png" alt="Search">
                    </div>
                    <input
                        type="text"
                        placeholder="Search..."
                    >
                </div>

            </header>
            <div class="container-chats">
                
                <div class="content-chats">
                    <h2>Chats</h2>
                    <InfoCard
                        v-for="chat in chatsList" 
                        :key="chat.id"
                        :nombre="chat.nombre"
                        :mensaje="chat.mensaje"
                        :fecha="chat.fecha"
                        :icon="chat.icon"
                    />
                </div>
                
                <div class="content-chats">
                    <h2>Contacts</h2>
                    <InfoCard 
                        v-for="contacto in contactosList" 
                        :key="contacto.id"
                        :nombre="contacto.nombre"
                        :mensaje="contacto.mensaje"
                        :fecha="contacto.fecha"
                        :icon="contacto.icon"
                    />
                </div>

            </div>
            
        </div>
        <div class="right">

            <header>

                <div class="datos-usuario">

                    <div class="icon-perfil">
                        <p>JT</p>
                    </div>

                    <div class="item-text">
                        <p>Gavin Griffith</p>
                        <span>Frontend Developer</span>
                    </div>

                </div>

                <div class="opciones">

                    <div class="icon">
                        <img src="./../../public/phone.png" alt="Call">
                    </div>
                    <div class="icon">
                        <img src="./../../public/video-camera.png" alt="video-camera">
                    </div>
                    <div class="icon">
                        <img src="./../../public/search.png" alt="search">
                    </div>
                    <div class="icon">
                        <img src="./../../public/dots-vertical.png" alt="dots-vertical">
                    </div>


                </div>

            </header>

            <main class="content-mensajes">

                <div class="mensaje-right">
                    <div class="datos-mensaje">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, natus.</p>
                        <span>1:45 AM</span>
                    </div>
                    <div class="icon-perfil">
                        <p>JT</p>
                    </div>
                </div>

                <div class="mensaje-left">
                    <div class="datos-mensaje">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, natus.</p>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <span>1:45 AM</span>
                    </div>
                    <div class="icon-perfil">
                        <p>GG</p>
                    </div>
                </div>

                <div class="mensaje-right">
                    <div class="datos-mensaje">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, natus.</p>
                        <span>1:45 AM</span>
                    </div>
                    <div class="icon-perfil">
                        <p>JT</p>
                    </div>
                </div>

                <div class="mensaje-left">
                    <div class="datos-mensaje">
                        <p>Lo pude haber dejado mas bonito.</p>
                        <p>Pero la verdad siento que se ve hermoso 😍</p>
                        <p>Igual pude haber omitido el Login para dedicarle mas a esta parte 😥</p>
                        <span>1:45 AM</span>
                    </div>
                    <div class="icon-perfil">
                        <p>GG</p>
                    </div>
                </div>

            </main>

            <div class="container-form">
                <input
                    type="text"
                    placeholder="Type your message..."
                >
                <div class="opciones-mensaje">
                    <div class="icon">
                        <img src="./../../public/microphone.png" alt="microphone">
                    </div>
                    <input type="file" class="input-file" id="img">
                    <label for="img">
                        <img src="./../../public/paper-clip.png" alt="paper-clip">
                    </label>
                    <button>
                        <p>SEND</p>
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import InfoCard from '../components/InforCard/InfoCard.vue';

    export default {
        components: {
            InfoCard
        },
        data() {
            return {
                chatsList: [
                    {
                        id: 1,
                        nombre: "Gavin Griffith",
                        mensaje: "I will purchase it for sure. 👍",
                        fecha: "Jun 8",
                        icon: "GG"
                    },
                    {
                        id: 2,
                        nombre: "Harriet McBride",
                        mensaje: "If it takes long you can mail me...",
                        fecha: "Jun 7",
                        icon: "HM"
                    },
                ],
                contactosList: [
                    {
                        id: 1,
                        nombre: "Gavin Griffith",
                        mensaje: "I will purchase it for sure. 👍",
                        fecha: "Jun 8",
                        icon: "GG"
                    },
                    {
                        id: 2,
                        nombre: "Harriet McBride",
                        mensaje: "If it takes long you can mail me...",
                        fecha: "Jun 7",
                        icon: "HM"
                    },
                    {
                        id: 3,
                        nombre: "Danny Conner",
                        mensaje: "I will purchase it for sure. 👍",
                        fecha: "Jun 18",
                        icon: "DC"
                    },
                    {
                        id: 4,
                        nombre: "Janie West",
                        mensaje: "If it takes long you can mail me...",
                        fecha: "May 7",
                        icon: "JW"
                    },
                    {
                        id: 5,
                        nombre: "Bryan Murray",
                        mensaje: "If it takes long you can mail me...",
                        fecha: "Dec 7",
                        icon: "BM"
                    },
                ],
            }
        }
    }
</script>