 //navbar
    document.addEventListener("DOMContentLoaded", () => {
      fetch("partials/navbar.html")
        .then(res => res.text())
        .then(data => {
          document.getElementById("navbar").innerHTML = data;
        })
        .catch(err => console.error("Error loading navbar:", err));
    });
  // footer
      document.addEventListener("DOMContentLoaded", () => {
      fetch("partials/footer.html")
        .then(res => res.text())
        .then(data => {
          document.getElementById("footer").innerHTML = data;
        })
        .catch(err => console.error("Error loading footer:", err));
    });
    
    document.addEventListener('click', function(e) {
      if (e.target.classList.contains('crumb')) {
        document.querySelectorAll('.crumb').forEach(item => {
            item.classList.remove('activebread');
        });
        e.target.classList.add('activebread');
    }
    })
    