document.addEventListener('DOMContentLoaded', function () {
	const tabs = document.querySelectorAll('.tabBtn');
	const panels = document.querySelectorAll('.tabPanel');

	tabs.forEach((tab) => {
		tab.addEventListener('click', () => {
			// remove active class from all tabs and panel
			tabs.forEach((tab) => {
				tab.classList.remove('active');
			});
			// remove active class from all panels
			panels.forEach((panel) => {
				panel.classList.remove('active');
			});
			// add active class to clicked tab and panel
			tab.classList.add('active');
			const clickedTab = tab.getAttribute('data-tab');
			document.getElementById(clickedTab).classList.add('active');
		});
	});
});
