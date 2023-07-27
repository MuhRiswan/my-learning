// Navbar
window.addEventListener("scroll", function () {
  const navbarWrap = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbarWrap.classList.add("scroll");
  } else {
    navbarWrap.classList.remove("scroll");
  }
});

// Review Carousel

var isCarouselPage =
  $(".carousel-inner").length > 0 && $(".carousel-item").length > 0;

if (isCarouselPage) {
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;

  $(".button-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 4)
      scrollPosition = scrollPosition + cardWidth;
    $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
  });

  $(".button-prev").on("click", function () {
    if (scrollPosition > 0) scrollPosition = scrollPosition - cardWidth;
    $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
  });
}

// Blog Card
const blogSection = document.getElementById("blog");
if (blogSection) {
  let currentPage = 0;
  const cardsPerPage = 9;

  // Mendapatkan semua card blog
  const blogCards = document.querySelectorAll(".blog-card");

  // Mendapatkan tombol prev dan next
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // Fungsi untuk menampilkan card pada halaman yang aktif dengan animasi
  function showActivePage() {
    for (let i = 0; i < blogCards.length; i++) {
      if (
        i >= currentPage * cardsPerPage &&
        i < (currentPage + 1) * cardsPerPage
      ) {
        blogCards[i].classList.add("active-blog-card");
        blogCards[i].style.animation = "fadeIn 0.5s forwards";
      } else {
        blogCards[i].classList.remove("active-blog-card");
        blogCards[i].style.animation = "fadeOut 0.5s forwards";
      }
    }

    // Cek apakah tombol prev harus ditampilkan atau disembunyikan
    if (currentPage === 0) {
      prevBtn.hidden = true;
    } else {
      prevBtn.hidden = false;
    }

    // Cek apakah tombol next harus ditampilkan atau disembunyikan
    if ((currentPage + 1) * cardsPerPage >= blogCards.length) {
      nextBtn.hidden = true;
    } else {
      nextBtn.hidden = false;
    }
  }

  // Fungsi untuk menampilkan halaman sebelumnya
  function prevPage() {
    if (currentPage > 0) {
      currentPage--;
      showActivePage();
    }
  }

  // Fungsi untuk menampilkan halaman selanjutnya
  function nextPage() {
    if ((currentPage + 1) * cardsPerPage < blogCards.length) {
      currentPage++;
      showActivePage();
    }
  }

  // Tampilkan halaman pertama ketika halaman pertama dimuat
  showActivePage();
}

// End
