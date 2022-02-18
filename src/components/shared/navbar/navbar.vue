<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <div class="container-fluid">
      <router-link
        class="navbar-brand nav-link active"
        :to="{ name: 'homepage' }"
        >Portal de Solicitudes de Permisos</router-link
      >
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'add-permit' }"
              >Agregar</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>