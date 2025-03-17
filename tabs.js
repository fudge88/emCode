// get all tabs using query selector
// add event/click to tabs
// remove active class from all tabs and panel
// add active class to clicked tab and panel

document.addEventListener('DOMContentLoaded', function () {
	console.log('DOM loaded');
	const tabs = document.querySelectorAll('.tabBtn');
	const panels = document.querySelectorAll('.tabPanel');
	console.log(tabs);
	console.log(panels);

	tabs.forEach((tab) => {
		tab.addEventListener('click', () => {});
	});
});
