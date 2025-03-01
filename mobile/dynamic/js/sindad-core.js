const openMenu = document.querySelector(".open-menu"),
  nav = document.querySelector(".menu-mob"),
  closeMenu = document.querySelector(".close-menu");
if (
  (openMenu.addEventListener("click", () => {
    nav.classList.remove("translate-x-[14340px]");
  }),
  closeMenu.addEventListener("click", () => {
    nav.classList.add("translate-x-[14340px]");
  }),
  document.querySelector(".first-swiper"))
)
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
if (document.querySelector(".first-swiper-mob"))
  var swiper = new Swiper(".first-swiper-mob", {
    slidesPerView: 1.5,
    speed: 400,
    centeredSlides: !1,
    spaceBetween: 10,
    grabCursor: !0,
    autoplay: { delay: 5500, disableOnInteraction: !1 },
    loop: !0,
    pagination: { el: ".swiper-pagination-first", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next-first",
      prevEl: ".swiper-button-prev-first",
    },
    breakpoints: {
      640: { slidesPerView: 1.5, spaceBetween: 20 },
      768: { slidesPerView: 1.5, spaceBetween: 40 },
      1024: { slidesPerView: 1.5, spaceBetween: 20 },
    },
  });
if (document.querySelector(".second-swiper-mob"))
  var swiper = new Swiper(".second-swiper-mob", {
    slidesPerView: 1.2,
    speed: 400,
    centeredSlides: !1,
    spaceBetween: 10,
    grabCursor: !0,
    autoplay: { delay: 5500, disableOnInteraction: !1 },
    loop: !0,
    breakpoints: {
      640: { slidesPerView: 1.2, spaceBetween: 20 },
      768: { slidesPerView: 1.2, spaceBetween: 40 },
      1024: { slidesPerView: 1.3, spaceBetween: 20 },
    },
  });
if (document.querySelector(".second-swiper"))
  var swiper = new Swiper(".second-swiper", {
    slidesPerView: 3,
    speed: 400,
    centeredSlides: !1,
    spaceBetween: 30,
    grabCursor: !0,
    autoplay: { delay: 5500, disableOnInteraction: !1 },
    loop: !0,
    breakpoints: {
      640: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: 3, spaceBetween: 40 },
      1024: { slidesPerView: 3, spaceBetween: 20 },
    },
  });
function uploadDocumentFooter(e) {
  document.querySelector("#contact-form-resize .Loading_Form").style.display =
    "block";
  let t = document
      .querySelector("#contact-form-resize")
      .querySelector("#captchaContainer input[name='captcha']").value,
    r = document
      .querySelector("#contact-form-resize")
      .querySelector("#captchaContainer input[name='captchaid']").value,
    a = JSON.stringify(e.source?.rows[0]);
  $bc.setSource("cms.uploadFooter", {
    value: a,
    captcha: t,
    captchaid: r,
    run: !0,
  });
}
function refreshCaptchaFooter(e) {
  $bc.setSource("captcha.refreshFooter", !0);
}
function captchaRenderedFooter() {
  document.querySelector("#contact-form-resize .contactUsInput").placeholder =
    "کد امنیتی";
}
async function OnProcessedEditObjectFooter(e) {
  "6" == (await e.response.json()).errorid
    ? ((document.querySelector(
        "#contact-form-resize .Loading_Form"
      ).style.display = "none"),
      (document.querySelector("#contact-form-resize .message-api").innerHTML =
        "درخواست شما با موفقیت ثبت شد."))
    : (refreshCaptchaFooter(),
      setTimeout(() => {
        (document.querySelector(
          "#contact-form-resize .Loading_Form"
        ).style.display = "none"),
          (document.querySelector(
            "#contact-form-resize .message-api"
          ).innerHTML = "خطایی رخ داده, لطفا مجدد اقدام کنید.");
      }, 2e3));
}
async function RenderFormFooter() {
  var e = document.querySelector(
    "#contact-form-resize .email-ans input[data-bc-text-input]"
  );
  e.setAttribute("placeholder", "ایمیل");
  var e = document.querySelector(
    "#contact-form-resize .text-ans input[data-bc-text-input]"
  );
  e.setAttribute("placeholder", "متن");
}
function uploadDocumentAdvice(e) {
  document.querySelector("#advice-form .Loading_Form").style.display = "block";
  let t = document
      .querySelector("#advice-form")
      .querySelector("#captchaContainer input[name='captcha']").value,
    r = document
      .querySelector("#advice-form")
      .querySelector("#captchaContainer input[name='captchaid']").value,
    a = JSON.stringify(e.source?.rows[0]);
  $bc.setSource("cms.uploadAdvice", {
    value: a,
    captcha: t,
    captchaid: r,
    run: !0,
  });
}
function refreshCaptchaAdvice(e) {
  $bc.setSource("captcha.refreshAdvice", !0);
}
async function OnProcessedEditObjectAdvice(e) {
  "6" == (await e.response.json()).errorid
    ? ((document.querySelector("#advice-form .Loading_Form").style.display =
        "none"),
      (document.querySelector("#advice-form .message-api").innerHTML =
        "درخواست شما با موفقیت ثبت شد."))
    : (refreshCaptchaAdvice(),
      setTimeout(() => {
        (document.querySelector("#advice-form .Loading_Form").style.display =
          "none"),
          (document.querySelector("#advice-form .message-api").innerHTML =
            "خطایی رخ داده, لطفا مجدد اقدام کنید.");
      }, 2e3));
}
async function RenderFormAdvice() {
  var e = document.querySelector(
    "#advice-form .name-ans input[data-bc-text-input]"
  );
  e.setAttribute("placeholder", "نام و نام خانوادگی");
  var e = document.querySelector(
    "#advice-form .phone-ans input[data-bc-text-input]"
  );
  e.setAttribute("placeholder", " تلفن همراه");
  var e = document.querySelector("#advice-form .msg-ans textarea");
  e.setAttribute("placeholder", "متن پیام");
}
const FetchPageNumPrev = async (e) => {
    let t = document.querySelector(".fetch-content-categories"),
      r = t.getAttribute("data-catid"),
      a = await fetch(`/article-load-cats.bc?catid=${r}&pagenum=${e}`),
      n = await a.text();
    t.innerHTML = n;
  },
  FetchPageNumNext = async (e) => {
    let t = document.querySelector(".fetch-content-categories"),
      r = t.getAttribute("data-catid"),
      a = await fetch(`/article-load-cats.bc?catid=${r}&pagenum=${e}`),
      n = await a.text();
    t.innerHTML = n;
  },
  FetchWithPageNum = async (e) => {
    let t = document.querySelector(".fetch-content-categories"),
      r = t.getAttribute("data-catid"),
      a = await fetch(`/article-load-cats.bc?catid=${r}&pagenum=${e}`),
      n = await a.text();
    t.innerHTML = n;
  };
document.querySelector(".fetch-content-categories") &&
  document.addEventListener("DOMContentLoaded", function () {
    let e = document.querySelectorAll('input[type="radio"][name="radio"]'),
      t = document.querySelector(".fetch-content-categories");
    if (t) {
      let r = t.getAttribute("data-catid");
      async function a() {
        let e = await fetch(`/article-load-cats.bc?catid=${r}`),
          a = await e.text();
        t.innerHTML = a;
      }
      a(),
        e.forEach((e) => {
          e.addEventListener("change", async function () {
            if (this.checked) {
              let e = this.value;
              try {
                t.innerHTML =
                  '<div class="w-full flex justify-center"><span class="loader"></span></div>';
                let r = await fetch(`/article-load-cats.bc?catid=${e}`),
                  a = await r.text();
                t.innerHTML = a;
              } catch (n) {
                console.error("Error:", n),
                  (t.innerHTML =
                    '<div class="text-red-500">خطا در بارگذاری مقالات</div>');
              }
            }
          });
        });
    }
  });
const parentNav = document.querySelectorAll("#parent-nav"),
  child1 = document.querySelectorAll("#child1-nav");
function loadContentHomaPage() {
  loadSearchEngine("search-engine.bc", "search-box");
}
async function loadSearchEngine(e, t) {
  try {
    var r = new XMLHttpRequest();
    r.open("GET", e),
      r.send(),
      (r.onreadystatechange = function () {
        if (4 == this.readyState && 200 == this.status) {
          var e = document.getElementById(t);
          e.innerHTML = r.responseText;
          for (
            var a = e.getElementsByTagName("script"), n = 0;
            n < a.length;
            n++
          ) {
            var c = document.createElement("script");
            a[n].src
              ? ((c.src = a[n].src), (c.async = !1))
              : (c.text = a[n].textContent),
              document.head.appendChild(c).parentNode.removeChild(c);
          }
          let i = window.location.pathname;
          i &&
            ("/hotel" == i
              ? (sessionStorage.setItem("pageName", "hotel"),
                $(".date_info_selected").find(".type_date").text("تاریخ رفت :"),
                $(".date_info_selected").find(".day_of_date").text("---"),
                $(".date_info_selected").find(".month_of_date").text(" "),
                $(".hotel-btn").removeClass("inactive"),
                $(".selected").removeClass("active-module"),
                $(".hotel-btn").addClass("active-module"),
                $(".flight-btn").addClass("inactive"),
                $(".flighthotel-btn").addClass("inactive"),
                $(".tour-btn").addClass("inactive"),
                $(".r-hotel").show(),
                $(".r-flight").hide(),
                $(".r-tour").hide(),
                $(".r-flighthotel").hide())
              : "/flight" == i &&
                (sessionStorage.setItem("pageName", "flight"),
                $(".date_info_selected").find(".type_date").text("تاریخ رفت :"),
                $(".date_info_selected").find(".day_of_date").text("---"),
                $(".date_info_selected").find(".month_of_date").text(" "),
                $(".flight-btn").removeClass("inactive"),
                $(".selected").removeClass("active-module"),
                $(".flight-btn").addClass("active-module"),
                $(".hotel-btn").addClass("inactive"),
                $(".tour-btn").addClass("inactive"),
                $(".flighthotel-btn").addClass("inactive"),
                $(".r-flight").show(),
                $(".r-hotel").hide(),
                $(".r-tour").hide(),
                $(".r-flighthotel").hide()));
        }
      }),
      document.querySelector(".sdfr1").addEventListener("click", () => {
        (document.querySelector("#direct-input").checked = !0),
          (document.querySelector("#return-input").checked = !1),
          (document.querySelector("#multi-input").checked = !1);
      }),
      document.querySelector(".sdfr2").addEventListener("click", () => {
        (document.querySelector("#direct-input").checked = !1),
          (document.querySelector("#return-input").checked = !0),
          (document.querySelector("#multi-input").checked = !1);
      }),
      document.querySelector(".sdfr3").addEventListener("click", () => {
        (document.querySelector("#direct-input").checked = !1),
          (document.querySelector("#return-input").checked = !1),
          (document.querySelector("#multi-input").checked = !0),
          document.querySelector(".cstmz-type-div").classList.add("sm-frl");
      });
  } catch (a) {}
}
function convertJalaliDate(e) {
  let t = e.split("/"),
    r = t[0],
    a;
  return `${t[2]} ${
    [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ][parseInt(t[1], 10) - 1]
  } ${r}`;
}
parentNav.forEach((e) => {
  e.addEventListener("click", () => {
    e.nextElementSibling.classList.contains("hidden")
      ? (e.nextElementSibling.classList.remove("hidden"),
        e.nextElementSibling.classList.add("flex"),
        e.querySelector("span").classList.add("rotate-180"))
      : (e.nextElementSibling.classList.add("hidden"),
        e.nextElementSibling.classList.remove("flex"),
        e.querySelector("span").classList.remove("rotate-180"));
  }),
    closeMenu.addEventListener("click", () => {
      e.nextElementSibling.classList.add("hidden"),
        e.nextElementSibling.classList.remove("flex"),
        e.querySelector("span").classList.remove("rotate-180");
    });
}),
  child1.forEach((e) => {
    e.addEventListener("click", () => {
      e.querySelector("ul").classList.contains("hidden")
        ? (e.querySelector("ul").classList.remove("hidden"),
          e.querySelector("ul").classList.add("flex"),
          e.querySelector("div span").classList.add("rotate-180"))
        : (e.querySelector("ul").classList.add("hidden"),
          e.querySelector("ul").classList.remove("flex"),
          e.querySelector("div span").classList.remove("rotate-180"));
    }),
      closeMenu.addEventListener("click", () => {
        e.querySelector("ul").classList.add("hidden"),
          e.querySelector("ul").classList.remove("flex"),
          e.querySelector("div span").classList.remove("rotate-180");
      });
  }),
  document.addEventListener("DOMContentLoaded", function () {
    let e = document.querySelector(".fetch-content-article"),
      t = document.querySelectorAll(".tour-li");
    if (t.length > 0) {
      let r = t[0].getAttribute("data-id");
      if (e) {
        async function a() {
          let t = await fetch(`/article-load-items.bc?id=${r}`),
            a = await t.text();
          e.innerHTML = a;
          for (
            var n = document
                .querySelector(".fetch-content-article")
                .getElementsByTagName("script"),
              c = 0;
            c < n.length;
            c++
          ) {
            var i = document.createElement("script");
            n[c].src
              ? ((i.src = n[c].src), (i.async = !1))
              : (i.text = n[c].textContent),
              document.head.appendChild(i).parentNode.removeChild(i);
          }
        }
        a(),
          t.forEach((r) => {
            r.addEventListener("click", function () {
              t.forEach((e) => {
                (e.style.backgroundColor = ""), (e.style.color = "");
              }),
                (document.querySelector(".fetch-content-article").innerHTML =
                  "<span class='loader'></span>"),
                (r.style.color = "var(--primary-900)");
              let a = r.getAttribute("data-id");
              async function n() {
                try {
                  let t = await fetch(`/article-load-items.bc?id=${a}`);
                  if (!t.ok) throw Error(`HTTP error! Status: ${t.status}`);
                  let r = await t.text();
                  e.innerHTML = r;
                  for (
                    var n = document
                        .querySelector(".fetch-content-article")
                        .getElementsByTagName("script"),
                      c = 0;
                    c < n.length;
                    c++
                  ) {
                    var i = document.createElement("script");
                    n[c].src
                      ? ((i.src = n[c].src), (i.async = !1))
                      : (i.text = n[c].textContent),
                      document.head.appendChild(i).parentNode.removeChild(i);
                  }
                } catch (o) {
                  console.error("Fetch failed:", o),
                    (e.innerHTML =
                      "<p>مشکلی در دریافت اطلاعات رخ داد: " +
                      o.message +
                      "</p>");
                }
              }
              n();
            });
          });
      }
    }
  }),
  document.addEventListener("DOMContentLoaded", function () {
    let e = document.querySelector(".fetch-content-faq"),
      t = document.querySelectorAll(".faq-li");
    if (t.length > 0) {
      let r = t[0].getAttribute("data-id");
      if (e) {
        async function a() {
          let t = await fetch(`/faq-load-items.bc?id=${r}`),
            a = await t.text();
          e.innerHTML = a;
          for (
            var n = document
                .querySelector(".fetch-content-faq")
                .getElementsByTagName("script"),
              c = 0;
            c < n.length;
            c++
          ) {
            var i = document.createElement("script");
            n[c].src
              ? ((i.src = n[c].src), (i.async = !1))
              : (i.text = n[c].textContent),
              document.head.appendChild(i).parentNode.removeChild(i);
          }
        }
        a(),
          t.forEach((r) => {
            r.addEventListener("click", function () {
              t.forEach((e) => {
                (e.style.backgroundColor = ""), (e.style.color = "");
              }),
                (document.querySelector(".fetch-content-faq").innerHTML =
                  "<span class='loader'></span>"),
                (r.style.backgroundColor = "var(--secondary-800)");
              let a = r.getAttribute("data-id");
              async function n() {
                try {
                  let t = await fetch(`/faq-load-items.bc?id=${a}`);
                  if (!t.ok) throw Error(`HTTP error! Status: ${t.status}`);
                  let r = await t.text();
                  e.innerHTML = r;
                  for (
                    var n = document
                        .querySelector(".fetch-content-faq")
                        .getElementsByTagName("script"),
                      c = 0;
                    c < n.length;
                    c++
                  ) {
                    var i = document.createElement("script");
                    n[c].src
                      ? ((i.src = n[c].src), (i.async = !1))
                      : (i.text = n[c].textContent),
                      document.head.appendChild(i).parentNode.removeChild(i);
                  }
                } catch (o) {
                  console.error("Fetch failed:", o),
                    (e.innerHTML =
                      "<p>مشکلی در دریافت اطلاعات رخ داد: " +
                      o.message +
                      "</p>");
                }
              }
              n();
            });
          });
      }
    }
  }),
  document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector(".date-hide-gold")) {
      let e = document.querySelector(".date-hide-gold"),
        t = document.querySelector(".show-real-date-gold");
      if (e && t) {
        let r = convertJalaliDate(e.textContent.trim());
        t.textContent = r;
      }
    }
  });
const tLi = document.querySelectorAll("ul .tour-li ");
tLi.length > 0 && (tLi[0].style.color = "var(--primary-900)");
const faqLi = document.querySelectorAll("ul .faq-li");
faqLi.length > 0 && (faqLi[0].style.backgroundColor = "var(--secondary-800)");
