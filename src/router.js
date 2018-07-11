import Vue from "vue";
import Router from "vue-router";

// pages
import home from "./pages/home";
import hotels from "./pages/hotels";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "home",
			component: home
		},
		{
			path: "/hotels",
			name: "hotels",
			component: hotels
		}
	]
});
