<template>
    <nav class="navbar navbar-expand-lg" style="background-color: rgb(174, 245, 241);">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/equipo" class="nav-link">Equipo</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/ubicacion" class="nav-link">Ubicacion</router-link>
            </li>
            <li class="nav-item">
                <a class="nav-link">Disabled</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
</template>

<script>
    export default{
        name: 'HeaderComp'
    }
</script>