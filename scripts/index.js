document.addEventListener("DOMContentLoaded", () => {
	// Define custom animations for different sections
	const elements = [
		{
			selector: ".hero h1",
			animation: "fade-down",
			delay: 300,
			duration: 1000
		},
		{
			selector: ".hero p",
			animation: "fade-up",
			delay: 600,
			duration: 1000
		},
		{
			selector: ".cta-button",
			animation: "fade-up",
			delay: 900,
			duration: 1000
		},
		{
			selector: ".about-text",
			animation: "fade-right",
			delay: 300,
			duration: 1500
		},
		{
			selector: ".about-image",
			animation: "fade-left",
			delay: 600,
			duration: 1500
		},
		{
			selector: ".skill",
			animation: "zoom-in",
			delay: 200,
			duration: 800
		},
		{
			selector: ".project-card",
			animation: "flip-up",
			delay: 200,
			duration: 1500
		},
		{
			selector: ".contact-section",
			animation: "slide-up",
			delay: 300,
			duration: 1500
		}
	];

	// Apply custom animations
	elements.forEach((el) => {
		document.querySelectorAll(el.selector).forEach((element) => {
			element.setAttribute("data-aos", el.animation);
			element.setAttribute("data-aos-delay", el.delay.toString());
			element.setAttribute("data-aos-duration", el.duration.toString());
		});
	});

	// Initialize AOS after setting custom animations
	AOS.init({
		// Global settings:
		disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
		initClassName: "aos-init", // class applied after initialization
		animatedClassName: "aos-animate", // class applied on animation
		useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
		disableMutationObserver: false, // disables automatic mutations' detections (advanced)
		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
		throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: 120, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 700, // values from 0 to 3000, with step 50ms
		easing: "ease-in-out", // default easing for AOS animations
		once: false, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: "top-bottom" // defines which position of the element regarding to window should trigger the animation
	});
});
