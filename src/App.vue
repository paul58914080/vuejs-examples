<template>
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand">Vue.js examples</a>
            <div class="collapse navbar-collapse ml-3">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="nav-item ml-3">
                        <router-link to="/about">About</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <router-view/>
    </div>
</template>

<style lang="scss">
    @import 'styles/styles.scss';

    html, body {
        height: 100%;
    }

    #app {
        font-family: $font-family;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
    }

    .nav-item {
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
