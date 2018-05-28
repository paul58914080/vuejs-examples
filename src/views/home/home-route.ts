import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/helloworld/HelloWorld.vue'; // @ is an alias to /src

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/example1',
            component: HelloWorld,
        },
    ],
});
