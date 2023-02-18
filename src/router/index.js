import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
// import AboutView from "../views/AboutView.vue";
// import TesteTS from '../views/TesteTS.vue';

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/accommodations",
    name: "accommodations",
    component: () => import("@/views/AccommodationsView.vue"),
  },
  {
    path: "/reservations",
    name: "reservations",
    component: () => import("@/views/ReservationsView.vue"),
  },
  {
    path: "/reservations/:id",
    name: "reservationsId",
    component: () => import("@/views/ReservationsView.vue"),
    props: true
  },
  {
    path: "/my-reservations",
    name: "my-reservations",
    component: () => import("@/views/MyReservationsView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/ContactView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: "/accommodation/:id",
    name: "accomodation",
    component: () => import("@/views/AccommodationView.vue"),
    props: true
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
