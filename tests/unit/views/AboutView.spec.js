import { shallowMount } from "@vue/test-utils";

import About from "@/views/AboutView.vue";

describe("Pruebas en <AboutView />", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(About);
	});

	test("Debe de hacer match con el snapshot", () => {
		expect(wrapper.html()).toMatchSnapshot();
	});
});
