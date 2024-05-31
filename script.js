function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Function to toggle theme
function toggleTheme() {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
  
  // Save the theme preference to localStorage
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    document.getElementById('theme-icon').innerHTML = '<path d="M6 0a6 6 0 0 0 0 12 6 6 0 0 0 1-11.938V0zM9 16a7 7 0 0 0 0-14 7 7 0 0 0-1 13.93A7 7 0 0 0 9 16z"/>';
  } else {
    localStorage.setItem('theme', 'light');
    document.getElementById('theme-icon').innerHTML = '<path d="M12 8a5 5 0 1 1-4-8 5 5 0 0 1 4 8zM6 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm2-11a5 5 0 0 1-2 9V3a5 5 0 0 1 2-1z"/>';
  }
}

// Load the preferred theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.add(savedTheme);
  
  // Set the initial icon based on the theme
  if (savedTheme === 'dark') {
    document.getElementById('theme-icon').innerHTML = '<path d="M6 0a6 6 0 0 0 0 12 6 6 0 0 0 1-11.938V0zM9 16a7 7 0 0 0 0-14 7 7 0 0 0-1 13.93A7 7 0 0 0 9 16z"/>';
  } else {
    document.getElementById('theme-icon').innerHTML = '<path d="M12 8a5 5 0 1 1-4-8 5 5 0 0 1 4 8zM6 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm2-11a5 5 0 0 1-2 9V3a5 5 0 0 1 2-1z"/>';
  }
});
