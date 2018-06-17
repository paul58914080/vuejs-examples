import Vue from 'vue';
import Router from 'vue-router';
import Alerts from '@/components/alerts/Alerts.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/alerts',
            name: 'Alerts',
            component: Alerts,
        },
        {
            path: '*',
            redirect: '/alerts',
        },
    ],
});
