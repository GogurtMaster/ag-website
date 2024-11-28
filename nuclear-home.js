const dropdownButtons = document.querySelectorAll('.dropdown-button');

dropdownButtons.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const isExpanded = content.style.display === 'block';
    
    // Toggle dropdown content visibility
    content.style.display = isExpanded ? 'none' : 'block';

    // Toggle active state for the button
    button.classList.toggle('active', !isExpanded);
  });
});
