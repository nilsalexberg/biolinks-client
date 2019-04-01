<template>
  <div class="container">
    <main class="card">
      <div class="row no-gutters">
        <aside class="col-md-3">
          <div class="list-group">
            <router-link class="list-group-item" to="/">Home</router-link>
            <router-link class="list-group-item" to="/about">About</router-link>
          </div>
        </aside>
        <section class="col-md-9">
          <div class="card-body">
            <slot />
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<style scoped>
.container {
  padding-top: 100px;
}
.card {
  border: none;
}
.list-group-item {
  border: none;
}
</style>
