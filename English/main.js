var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
	triggerElement: "#trigger1",
	triggerHook: 0.4, // show, when scrolled 10% into view
	duration: "30%", // hide 10% before exiting view (80% + 10% from bottom)
	offset: 50 // move trigger to center of element
})
.setClassToggle("#title", "visible") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
	triggerElement: "#trigger2",
	triggerHook: 0.9, // show, when scrolled 10% into view
	duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
	offset: 50 // move trigger to center of element
})
.setClassToggle("#paragraph1", "visible") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
	triggerElement: "#trigger3",
	triggerHook: 0.9, // show, when scrolled 10% into view
	duration: "70%", // hide 10% before exiting view (80% + 10% from bottom)
	offset: 50 // move trigger to center of element
})
.setClassToggle("#paragraph2", "visible") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
	triggerElement: "#trigger4",
	triggerHook: 0.9, // show, when scrolled 10% into view
	duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
	offset: 50 // move trigger to center of element
})
.setClassToggle("#paragraph3", "visible") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
	triggerElement: "#paragraph3",
	triggerHook: 0.4, // show, when scrolled 10% into view
	duration: "60%", // hide 10% before exiting view (80% + 10% from bottom)
	offset: 50 // move trigger to center of element
})
.setClassToggle("#img3", "visible") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
	triggerElement: "#trigger5",
	triggerHook: 0.9, // show, when scrolled 10% into view
	duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
	offset: 50 // move trigger to center of element
})
.setClassToggle("#question1", "visible") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
	triggerElement: "#trigger6",
	triggerHook: 0.9, // show, when scrolled 10% into view
	duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
	offset: 50 // move trigger to center of element
})
.setClassToggle("#quote1", "visible") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
	triggerElement: "#trigger7",
	triggerHook: 0.9, // show, when scrolled 10% into view
	duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
	offset: 50 // move trigger to center of element
})
.setClassToggle("#paragraph4", "visible") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
	triggerElement: "#paragraph4",
	triggerHook: 0.4, // show, when scrolled 10% into view
	duration: "60%", // hide 10% before exiting view (80% + 10% from bottom)
	offset: 50 // move trigger to center of element
})
.setClassToggle("#img1", "visible") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
	triggerElement: "#trigger8",
	triggerHook: 0.9, // show, when scrolled 10% into view
	duration: "70%", // hide 10% before exiting view (80% + 10% from bottom)
	offset: 50 // move trigger to center of element
})
.setClassToggle("#question2", "visible") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
	triggerElement: "#trigger9",
	triggerHook: 0.8, // show, when scrolled 10% into view
	duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
	offset: 50 // move trigger to center of element
})
.setClassToggle("#quote2", "visible") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
	triggerElement: "#quote2",
	triggerHook: 0.4, // show, when scrolled 10% into view
	duration: "60%", // hide 10% before exiting view (80% + 10% from bottom)
	offset: 50 // move trigger to center of element
})
.setClassToggle("#img2", "visible") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
	triggerElement: "#trigger10",
	triggerHook: 0.9, // show, when scrolled 10% into view
	duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
	offset: 50 // move trigger to center of element
})
.setClassToggle("#paragraph5", "visible") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
	triggerElement: "#trigger11",
	triggerHook: 0.9, // show, when scrolled 10% into view
	duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
	offset: 50 // move trigger to center of element
})
.setClassToggle("#quote3", "visible") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
	triggerElement: "#trigger12",
	triggerHook: 0.9, // show, when scrolled 10% into view
	duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
	offset: 50 // move trigger to center of element
})
.setClassToggle("#paragraph6", "visible") // add class to reveal
.addTo(controller);


new ScrollMagic.Scene({
	triggerElement: "#trigger13",
	triggerHook: 0.9, // show, when scrolled 10% into view
	duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
	offset: 50 // move trigger to center of element
})
.setClassToggle("#paragraph7", "visible") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
	triggerElement: "#trigger14",
	triggerHook: 0.9, // show, when scrolled 10% into view
	duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
	offset: 50 // move trigger to center of element
})
.setClassToggle("#question3", "visible") // add class to reveal
.addTo(controller);

