// Toggle visibility of navbar when button clicked

const navToggle = document.querySelector(".navbar-toggle");
navToggle.addEventListener("click", function () {
  document.querySelector(".Portfolio-navbar").classList.toggle("show");
});

// Tab interface for different section of resume

const resumeHeading = document.querySelector(".resume-heading");
const resumeItems = document.querySelectorAll(".resume-item");
const resumeTabs = document.querySelectorAll(".resume-tabs");

resumeHeading.onclick = (event) => {
  event.preventDefault();
  const clickedItemId = event.target.dataset.id;
  if (clickedItemId) {
    resumeItems.forEach((item) => {
      item.classList.remove("active");
    });
    event.target.parentElement.classList.add("active");

    resumeTabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    const correspondingTab = document.getElementById(clickedItemId);
    correspondingTab.classList.add("active");
  }
};
// Navbar header sticky while scrolling

function stickyNav() {
  var headerHeight = document.querySelector("#resume").offsetHeight / 2;
  var navbar = document.querySelector("header");
  var scrollValue = window.scrollY;

  if (scrollValue > headerHeight) {
    navbar.classList.add("header-sticky");
  } else if (scrollValue < headerHeight) {
    navbar.classList.remove("header-sticky");
  }
}

window.addEventListener("scroll", stickyNav);

// send email

const msg = document.querySelector(".form-message");
(function() {
            // https://dashboard.emailjs.com/admin/account
            emailjs.init({
              publicKey: "ksFtyca1vs6i7TK-a",
            });
        })();

window.onload = function() {
            document
            .getElementById('contact-form')
            .addEventListener('submit', function(event) {
                event.preventDefault();
                document.querySelector(".loader").classList.add("show");
                // these IDs from the previous steps
                emailjs.sendForm('service_8vb6m0j', 'template_487klfh', this).then(
                  function(){
                      document
                      .getElementById('contact-form').reset();
                      document.querySelector(".loader").classList.remove("show");
                      msg.innerHTML = "";
                      msg.innerHTML += "<span class='success-msg'>Email Sent</span>";
                      msg.classList.add("show");
                      setTimeout(()=> msg.classList.remove("show"),2000);

                    },
                    function (error) {
                      document.querySelector(".loader").classList.toggle("show");
                         msg.classList.add("show");
                          msg.innerHTML += "<span class='error-msg'>Email Not Sent</span>";
             
                    }
                  );
            });
        }
// Initialize Swipers for each section
document.addEventListener('DOMContentLoaded', function () {
  const familySlider = new Swiper('.family-slider', {
    loop: true,
    direction: 'horizontal',
    pagination: {
      el: '.family-slider .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.family-slider .swiper-button-next',
      prevEl: '.family-slider .swiper-button-prev',
    },
    scrollbar: {
      el: '.family-slider .swiper-scrollbar',
    },
  });

  const campusSlider = new Swiper('.campus-slider', {
    loop: true,
    direction: 'horizontal',
    pagination: {
      el: '.campus-slider .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.campus-slider .swiper-button-next',
      prevEl: '.campus-slider .swiper-button-prev',
    },
    scrollbar: {
      el: '.campus-slider .swiper-scrollbar',
    },
  });

  const ootdSlider = new Swiper('.ootd-slider', {
    loop: true,
    direction: 'horizontal',
    pagination: {
      el: '.ootd-slider .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.ootd-slider .swiper-button-next',
      prevEl: '.ootd-slider .swiper-button-prev',
    },
    scrollbar: {
      el: '.ootd-slider .swiper-scrollbar',
    },
  });

  const dressSlider = new Swiper('.dress-slider', {
    loop: true,
    direction: 'horizontal',
    pagination: {
      el: '.dress-slider .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.dress-slider .swiper-button-next',
      prevEl: '.dress-slider .swiper-button-prev',
    },
    scrollbar: {
      el: '.dress-slider .swiper-scrollbar',
    },
  });
});
