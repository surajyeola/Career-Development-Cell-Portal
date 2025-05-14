const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

document.addEventListener('DOMContentLoaded', function() {
  const sidebarItems = document.querySelectorAll('.sidebar-item');

  sidebarItems.forEach(item => {
      item.addEventListener('click', function() {
          const pageName = this.textContent.trim().toLowerCase().replace(/\s+/g, '_') + '.html';

          window.location.href = pageName;
      });
  });

  const sidebarFooter = document.querySelector('.sidebar-footer');

    sidebarFooter.addEventListener('click', function() {
        window.location.href = 'login.html';
    });
});