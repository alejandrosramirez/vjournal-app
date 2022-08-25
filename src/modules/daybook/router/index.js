export default {
	name: "daybook",
	component: () =>
		import(
			/* webpackChunkName: "daybook" */ "@/modules/daybook/layouts/DaybookLayout.vue"
		),
	children: [
		{
			path: "",
			name: "daybook-no-entry-selected",
			component: () =>
				import(
					/* webpackChunkName: "daybook-no-entry-selected" */ "@/modules/daybook/views/NoEntrySelectedView.vue"
				),
		},
	],
};
