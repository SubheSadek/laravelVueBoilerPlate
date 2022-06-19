import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import index from './components/index'
import AuthRoutes from '../../app/Http/Controllers/Auth/Vue/js/router'


 const mainRoutes = [
    { path: '/', component: index, name: 'index'},
]

// bring in all the modules routes
var routes = []
routes = routes.concat(
    mainRoutes,
    AuthRoutes
)

export default new VueRouter({
	mode: 'history',
	routes,
})
