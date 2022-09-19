<template>
    <div>
        <h1>Ejemplo de mapa</h1>
        <!-- Tipos de mapas: roadmap, satellite, hybrid, terrain -->
        <GMapMap 
            :center='center' 
            :zoom='14'
            map-type-id='roadmap'   
            style="width: 100%; height: 500px">

            <GMapMarker
                v-for='(marca, index) in markers'
                :key='index'
                :position='marca.position'
                :label='marca.nombre'>
            </GMapMarker>

        </GMapMap>
    </div>
</template>


<script>
    export default {
        name: 'MiMapa',
        data(){
            return{
                center: {lat: 41.6369216, lng: -0.8996619},
                markers: [
                    {position: {
                        lat: 41.636915, lng: -0.899654}, 
                     nombre: 'Hiberus'
                    },
                    {position: {
                        lat: 41.6378209, lng:-0.9037446}, 
                     nombre: 'Ilunion Romareda'
                    }
                ]
            }
        }
    }
</script>