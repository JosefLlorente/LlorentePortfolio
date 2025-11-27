const toggleButton = document.querySelector('.theme-toggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  const icon = toggleButton.querySelector('i');
  if (document.body.classList.contains('dark-theme')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});
