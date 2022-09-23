<template>
    <div class="row" style="margin-top: 50px;">
        <div class="col-md-1"></div>
        <div class="col-md-4">
            <h2>Hiberus Tecnología</h2>
            <h4>Paseo Isabel La Católica, 6</h4>
            <h4>50009 Zaragoza</h4>

            <em>info@hiberus.com</em> <br/>
            <strong>+34 902 877 392</strong>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-5">
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
        <div class="col-md-1"></div>   
    </div>
</template>

<script>
    export default{
        name: 'ContenidoUbicacion',
        data() {
            return {
                center: {lat: 41.6369216, lng: -0.8996619},
                markers: [
                    {position: {
                        lat: 41.636915, lng: -0.899654}, 
                     nombre: 'Hiberus'
                    }
                ]
            }
        }
    }
</script>