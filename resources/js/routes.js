import VueRouter from 'vue-router'
import Bookables from "./bookables/Bookables";
import Bookable from "./bookable/Bookable";
import Review from "./review/Review";
import Basket from "./basket/Basket";

const routes = [{
        path: '/',
        component: Bookables,
        name: 'home',
    },
    {
        path: '/bookable/:id',
        component: Bookable,
        name: 'bookable',
    },
    {
        path: '/review/:id',
        component: Review,
        name: 'review'
    },
    {
        path: '/basket',
        component: Basket,
        name: 'basket'
    },
    {
        path: '/auth/login',
        component: require("./auth/Login").default,
        name: 'login'
    },
    {
        path: '/auth/regisster',
        component: require("./auth/Register").default,
        name: 'register'
    }
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
