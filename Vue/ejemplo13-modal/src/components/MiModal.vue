<template>

    <div class="modal" tabindex="-1" aria-labelledby="exampleModalLabel">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Titulo de mi modal</h5>
                <button type="button" class="btn-close" @click="cerrar" aria-label="x"></button>
            </div>
            <div class="modal-body">
                Esto es el texto de mi ejemplo
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="cerrar">Close</button>
                <button type="button" class="btn btn-secondary">Save changes</button>
            </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'MiModal',
        methods:{
            cerrar(){
                this.$emit('cerrar-modal');
            }
        }
    }
</script>

<style scoped>
    /* Para que lo muestre en el centro de la pantalla */ 
    .modal{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>