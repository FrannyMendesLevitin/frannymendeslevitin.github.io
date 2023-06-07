// JavaScript code to dynamically load navigation menu

// Create an array of navigation links
const links = [
    { name: 'Home', url: '#' },
    { name: 'About', url: '#' },
    { name: 'Services', url: '#' },
    { name: 'Contact', url: '#' }
  ];
  
  // Get the navigation element
  const navigation = document.getElementById('navigation');
  
  // Create a function to generate the dropdown menu
  function generateDropdown() {
    const select = document.createElement('select');
    select.classList.add('bx--select');
  
    links.forEach(link => {
      const option = document.createElement('option');
      option.text = link.name;
      option.value = link.url;
      select.appendChild(option);
    });
  
    select.addEventListener('change', function () {
      const selectedUrl = select.value;
      if (selectedUrl) {
        window.location.href = selectedUrl;
      }
    });
  
    return select;
  }
  
  // Create a function to generate the horizontal menu
  function generateHorizontalMenu() {
    const ul = document.createElement('ul');
  
    links.forEach(link => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = link.url;
      a.textContent = link.name;
      li.appendChild(a);
      ul.appendChild(li);
    });
  
    return ul;
  }
  
  // Function to check if the navigation should be horizontal or dropdown based on the screen width
  function checkScreenWidth() {
    const screenWidth = window.innerWidth;
    const isMobile = screenWidth <= 768; // Adjust this value as needed
  
    if (isMobile) {
      const dropdown = generateDropdown();
      navigation.innerHTML = '';
      navigation.appendChild(dropdown);
      dropdown.classList.add('bx--form-item');
      dropdown.classList.add('bx--select');
      dropdown.classList.add('bx--select--inline');
      dropdown.classList.add('bx--select--light');
      dropdown.classList.add('bx--select--sm');
      dropdown.classList.add('open');
    } else {
      const horizontalMenu = generateHorizontalMenu();
      navigation.innerHTML = '';
      navigation.appendChild(horizontalMenu);
      horizontalMenu.classList.add('horizontal');
    }
  }
  
  // Call the function initially
  checkScreenWidth();
  
  // Call the function on window resize
  window.addEventListener('resize', checkScreenWidth);
  