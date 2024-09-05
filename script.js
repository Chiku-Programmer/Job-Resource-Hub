
// Add event listener to dropdown links
document.querySelectorAll('.dropdown-link').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.querySelector('.dropdown-options').style.display = 'block';
    });
    link.addEventListener('mouseout', () => {
        link.querySelector('.dropdown-options').style.display = 'none';
    });
});

// Add event listener to search button
document.querySelector('.search-bar button').addEventListener('click', () => {
    const searchQuery = document.querySelector('.search-bar input').value;
    // Implement search functionality here
    console.log(`Searching for: ${searchQuery}`);
});

// Add event listener to call-to-action buttons
document.querySelectorAll('.call-to-action button').forEach(button => {
    button.addEventListener('click', () => {
        // Implement button functionality here
        console.log('Button clicked!');
    });
});

// Add event listener to navigation menu links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        // Implement navigation menu link functionality here
        console.log(`Navigation link clicked: ${link.textContent}`);
    });
});

// Add event listener to featured resources section
document.querySelector('.featured-resources').addEventListener('click', () => {
    // Implement featured resources section functionality here
    console.log('Featured resources section clicked!');
});

// Add event listener to off-campus jobs section
document.querySelector('#off-campus').addEventListener('click', () => {
    // Implement off-campus jobs section functionality here
    console.log('Off-campus jobs section clicked!');
});

// Add event listener to hackathons section
document.querySelector('#hackathons').addEventListener('click', () => {
    // Implement hackathons section functionality here
    console.log('Hackathons section clicked!');
});

// Add event listener to remote jobs section
document.querySelector('#remote-jobs').addEventListener('click', () => {
    // Implement remote jobs section functionality here
    console.log('Remote jobs section clicked!');
});
