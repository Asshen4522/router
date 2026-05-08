import { createRouter, createWebHistory } from "vue-router";
import Page1 from "./components/page1.vue";
import Page2 from "./components/page2.vue";

const routes = [
    {path:'/',component: Page1,name:'p1'},
    {path:'/one',component: Page2,name:'p2'},
]

export const router = createRouter({
    // history: createWebHistory(),
    routes
})