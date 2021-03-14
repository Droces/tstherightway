const sdbs = document.getElementById('small-device-button-sidebar')
const sidebar = document.getElementById('sidebar')

sdbs.addEventListener("click", () => {
  const isExpanded = sidebar.getAttribute('aria-expanded') === 'true'
  sidebar.setAttribute('aria-expanded', isExpanded ? 'false' : 'true')
});