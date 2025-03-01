const openMenu = document.querySelector(".open-menu"),
  nav = document.querySelector(".menu-mob"),
  closeMenu = document.querySelector(".close-menu");

openMenu.addEventListener("click", () => {
  nav.classList.remove("translate-x-[14340px]");
});
closeMenu.addEventListener("click", () => {
  nav.classList.add("translate-x-[14340px]");
});


if (document.querySelector(".first-swiper")) {
  var swiper = new Swiper(".first-swiper", {
    slidesPerView: 5,
    speed: 400,
    centeredSlides: !1,
    spaceBetween: 30,
    grabCursor: !0,
    autoplay: { delay: 5500, disableOnInteraction: !1 },
    loop: !0,
    pagination: { el: ".swiper-pagination-first", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next-first",
      prevEl: ".swiper-button-prev-first",
    },
    breakpoints: {
      640: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: 5, spaceBetween: 40 },
      1024: { slidesPerView: 5, spaceBetween: 20 },
    },
  });
}













if (document.querySelector(".second-swiper")) {
  var swiper = new Swiper(".second-swiper", {
    slidesPerView: 3,
    speed: 400,
    centeredSlides: !1,
    spaceBetween: 30,
    grabCursor: !0,
    autoplay: { delay: 5500, disableOnInteraction: !1 },
    loop: !0,
    pagination: { el: ".swiper-pagination-first", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next-first",
      prevEl: ".swiper-button-prev-first",
    },
    breakpoints: {
      640: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: 3, spaceBetween: 40 },
      1024: { slidesPerView: 3, spaceBetween: 20 },
    },
  });
}






if (document.querySelector(".common-questions")) {
  let e = document.querySelectorAll(
      ".common-questions .parent-box .box-container"
    ),
    s = document.getElementById("q-box-1"),
    t = document.getElementById("q-box-2"),
    a = document.getElementById("q-box-3"),
    i = document.getElementById("q-box-4"),
    n = document.getElementById("q-radio-btn1"),
    r = document.getElementById("q-radio-btn2"),
    d = document.getElementById("q-radio-btn3"),
    l = document.getElementById("q-radio-btn4");
  e.forEach((e) => {
    e.addEventListener("click", () => {
      let s = e.querySelector("#answer");
      s.classList.contains("hidden")
        ? (s.classList.remove("hidden"),
          e.querySelector("span").classList.add("-rotate-180"),
          e.querySelector("span").classList.add("-translate-y-0"),
          e.querySelector("span").classList.add("lg:translate-y-0"))
        : (s.classList.add("hidden"),
          e.querySelector("span").classList.remove("-rotate-180"),
          e.querySelector("span").classList.remove("-translate-y-0"),
          e.querySelector("span").classList.add("lg:translate-y-0"));
    });
  }),
    t.classList.add("hidden"),
    a.classList.add("hidden"),
    i.classList.add("hidden"),
    n.addEventListener("change", () => {
      n.checked &&
        (s.classList.remove("hidden"),
        t.classList.add("hidden"),
        a.classList.add("hidden"),
        i.classList.add("hidden"));
    }),
    r.addEventListener("change", () => {
      r.checked &&
        (s.classList.add("hidden"),
        t.classList.remove("hidden"),
        a.classList.add("hidden"),
        i.classList.add("hidden"));
    }),
    d.addEventListener("change", () => {
      d.checked &&
        (s.classList.add("hidden"),
        t.classList.add("hidden"),
        a.classList.remove("hidden"),
        i.classList.add("hidden"));
    }),
    l.addEventListener("change", () => {
      l.checked &&
        (s.classList.add("hidden"),
        t.classList.add("hidden"),
        a.classList.add("hidden"),
        i.classList.remove("hidden"));
    }),
    document.body.addEventListener("click", (s) => {
      e.forEach((e) => {
        if (!e.contains(s.target)) {
          let t = e.querySelector("#answer");
          t.classList.add("hidden"),
            e.querySelector("span").classList.remove("-rotate-180");
        }
      });
    });
}