document.addEventListener("DOMContentLoaded", function () {
  const fetchContentArticle = document.querySelector(".fetch-content-faq");
  const tourLi = document.querySelectorAll(".faq-li");

  const liId = tourLi[0].getAttribute("data-id");
  if (fetchContentArticle) {
    async function firstContent() {
      const firstResponse = await fetch(`/faq-load-items.bc?id=${liId}`);
      const firstData = await firstResponse.text();
      fetchContentArticle.innerHTML = firstData;
      var scripts = document
        .querySelector(".fetch-content-faq")
        .getElementsByTagName("script");
      for (var i = 0; i < scripts.length; i++) {
        var scriptTag = document.createElement("script");
        if (scripts[i].src) {
          scriptTag.src = scripts[i].src;
          scriptTag.async = !1;
        } else {
          scriptTag.text = scripts[i].textContent;
        }
        document.head.appendChild(scriptTag).parentNode.removeChild(scriptTag);
      }
    }
    firstContent();
    tourLi.forEach((item) => {
      item.addEventListener("click", function () {
        tourLi.forEach((li) => {
          li.style.backgroundColor = "";
          li.style.color = "";
        });
        document.querySelector(".fetch-content-faq").innerHTML =
          "<span class='loader'></span>";
        item.style.color = "var(--primary-900)";
        let cmsQuery = item.getAttribute("data-id");
        async function secondContent() {
          try {
            const firstResponse = await fetch(
              `/faq-load-items.bc?id=${cmsQuery}`
            );
            if (!firstResponse.ok) {
              throw new Error(`HTTP error! Status: ${firstResponse.status}`);
            }
            const firstData = await firstResponse.text();
            fetchContentArticle.innerHTML = firstData;
            var scripts = document
              .querySelector(".fetch-content-faq")
              .getElementsByTagName("script");
            for (var i = 0; i < scripts.length; i++) {
              var scriptTag = document.createElement("script");
              if (scripts[i].src) {
                scriptTag.src = scripts[i].src;
                scriptTag.async = !1;
              } else {
                scriptTag.text = scripts[i].textContent;
              }
              document.head
                .appendChild(scriptTag)
                .parentNode.removeChild(scriptTag);
            }
          } catch (error) {
            console.error("Fetch failed:", error);
            fetchContentArticle.innerHTML =
              "<p>مشکلی در دریافت اطلاعات رخ داد: " + error.message + "</p>";
          }
        }
        secondContent();
      });
    });
  }
});
