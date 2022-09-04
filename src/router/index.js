import { createRouter, createWebHashHistory } from "vue-router";

import daybookRouter from "@/modules/daybook/router";

const routes = [
	{
		path: "/",
		name: "home",
		component: () =>
			import(/* webpackChunkName: "home" */ "@/views/HomeView.vue"),
	},
	{
		path: "/about",
		name: "about",
		component: () =>
			import(/* webpackChunkName: "about" */ "@/views/AboutView.vue"),
	},
	{
		path: "/daybook",
		...daybookRouter,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
