document.addEventListener("DOMContentLoaded", function() {
    let menuItemsWithSubmenu = document.querySelectorAll('.has-submenu');
    
    menuItemsWithSubmenu.forEach(function(item) {
        item.addEventListener('click', function(event) {
            let submenu = this.querySelector('.submenu');
            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';
            } else {
                submenu.style.display = 'block';
            }
            event.stopPropagation();
        });

        item.addEventListener('mouseover', function() {
            let submenu = this.querySelector('.submenu');
            submenu.style.display = 'block';
        });

        item.addEventListener('mouseout', function() {
            let submenu = this.querySelector('.submenu');
            submenu.style.display = 'none';
        });
    });

    document.addEventListener('click', function(event) {
        let submenus = document.querySelectorAll('.submenu');
        submenus.forEach(function(submenu) {
            submenu.style.display = 'none';
        });
    });
});
