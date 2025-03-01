function empty_value(t) {
  $(t).closest(".city").find(".country").val(""),
    $(t).closest(".city").find(".searchList").fadeIn(),
    $(t).closest(".city").find(".country").focus(),
    $(t).closest(".city").find(".ul-list").show(),
    $(t).closest(".city").siblings(".city").find(".searchList").fadeOut();
}
function city_search(t) {
  0 === t.which ||
    t.ctrlKey ||
    t.metaKey ||
    t.altKey ||
    (4 == $(t).attr("data-type")
      ? ($(t).val(""),
        $(t).closest(".city").find(".co-id").val(""),
        $(t).closest(".city").find(".mini-loading").show(),
        1 != $(t).attr("data-active")
          ? ($(t).closest(".city").find(".mini-loading").show(),
            $.ajax({
              url: "/Client_City_Search.bc",
              type: "get",
              data: { type: $(t).attr("data-type"), lid: "1" },
              success: function (l) {
                $(t).attr("data-active", "1"),
                  $(t).closest(".city").find(".mini-loading").hide(),
                  $(t).closest(".city").find(".countryFlight").empty().html(l),
                  $(t).closest(".city").find(".countryFlight").slideDown();
              },
            }))
          : $(t).closest(".city").find(".countryFlight").slideDown())
      : ((upper_case =
          $(t).val().substr(0, 1).toUpperCase() +
          $(t).val().substr(1).toLowerCase()),
        $(t).val(upper_case),
        "3" == $(t).attr("data-type")
          ? "رم" == $(t).val() || "قم" == $(t).val()
            ? $(t).val().length > 1
              ? ($(t).closest(".city").find(".mini-loading").show(),
                $(t).closest(".city").find(".ul-list").hide(),
                $.ajax({
                  url: "/Client_City_Search.bc",
                  type: "get",
                  data: {
                    term: $(t).val(),
                    type: $(t).attr("data-type"),
                    lid: 1,
                    select_value: 0,
                  },
                  success: function (l) {
                    $(t).closest(".city").find(".mini-loading").hide(),
                      $(t)
                        .closest(".city")
                        .find(".countryFlight")
                        .empty()
                        .html(l);
                  },
                }))
              : $(t).closest(".city").find(".countryFlight").empty()
            : $(t).val().length > 2
            ? ($(t).closest(".city").find(".mini-loading").show(),
              $(t).closest(".city").find(".ul-list").hide(),
              $.ajax({
                url: "/Client_City_Search.bc",
                type: "get",
                data: {
                  term: $(t).val(),
                  type: $(t).attr("data-type"),
                  lid: 1,
                  select_value: 0,
                },
                success: function (l) {
                  $(t).closest(".city").find(".mini-loading").hide(),
                    $(t)
                      .closest(".city")
                      .find(".countryFlight")
                      .empty()
                      .html(l);
                },
              }))
            : $(t).closest(".city").find(".countryFlight").empty()
          : "3" !== $(t).attr("data-type") &&
            ($(t).val().length > 2
              ? ($(t).closest(".city").find(".mini-loading").show(),
                $(t).closest(".city").find(".ul-list").hide(),
                $.ajax({
                  url: "/Client_City_Search.bc",
                  type: "get",
                  data: {
                    term: $(t).val(),
                    type: $(t).attr("data-type"),
                    lid: 1,
                    select_value: 0,
                  },
                  success: function (l) {
                    $(t).closest(".city").find(".mini-loading").hide(),
                      $(t)
                        .closest(".city")
                        .find(".countryFlight")
                        .empty()
                        .html(l);
                  },
                }))
              : $(t).closest(".city").find(".countryFlight").empty())));
}
function show_flightclass(t) {
  $(t).find(".show-flightclass").toggleClass("hidden");
}
function change_room_count(t) {
  if (
    ((e = parseInt($(t).closest("ul").next().val())),
    (n = $(t).text().indexOf("+") > -1 ? e + 1 : e > 0 ? e - 1 : 0),
    (o = ""),
    !(n >= 5 || n < 1))
  ) {
    if (($(t).closest("ul").next().val(n), e < n)) {
      var l = n;
      for ($(t).closest("form").find(".countRoom").empty(), i = 1; i <= l; i++)
        $(t)
          .closest("form")
          .find(".countRoom")
          .append(
            '<div class="contentRooms contentRoom"><div class="numberOfRooms RoomRow   text-primary float-right clear-both w-full mb-4 text-right">اتاق' +
              i +
              '</div><div class="itemlable2 clear-both w-full mb-4 text-zinc-900 float-right relative"><label class="float-right mb-1" for="textbox-adultcount' +
              i +
              '"> <span class="notshow">بزرگسال</span> </label><ul class="button-click float-left w-full h-[30px] leading-12"><li class="float-right   cursor-pointer leading-[30px] inset-0 text-3xl w-7 h-7 bg-secondary-50 text-zinc-900 !flex rounded-full !items-center !justify-center bg-white border border-secondary-300 hover:text-primary-900"><div class="button cursor-pointer secondary h-full leading-[30px]" onclick="increaseAdult(this)"><span class="hide cursor-pointer">+</span></div></li><li class="float-left cursor-pointer leading-[30px] inset-0 text-3xl w-7 h-7 bg-secondary-50 text-zinc-900 !flex rounded-full !items-center !justify-center bg-white border border-secondary-300 hover:text-primary-900 "><div class="button cursor-pointer secondary h-full leading-[30px]"  onclick="decreaseAdult(this)"><span class="cursor-pointer hide">-</span></div></li></ul><input type="text" class="cat_textbox adultcount adult-count    w-[35px] mt-2 h-[30px] !bg-transparent leading-[30px] absolute left-0 right-0 top-[25px] m-auto text-center" id="textbox-adultcount' +
              i +
              '" name="_roo$(t).rooms__' +
              i +
              '.adultcount" maxlength="4000" value="2"> <div class="clr"></div></div><div class="itemlable2 clear-both w-full mb-4 text-zinc-900 float-right relative"> <label class="float-right   leading-12 mb-1" for="textbox-childcount' +
              i +
              '"> <span class="notshow">کودک</span> </label><ul class="button-click-childRoom float-left w-full h-[30px] leading-12"><li class="float-right cursor-pointer leading-[30px] inset-0 text-3xl w-7 h-7 bg-secondary-50 text-zinc-900 !flex rounded-full !items-center !justify-center bg-white border border-secondary-300 hover:text-primary-900"><div class="button secondary h-full leading-[30px] cursor-pointer" onclick="increaseChild(this)"><span class="hide cursor-pointer">+</span></div></li><li class="float-left  cursor-pointer leading-[30px] inset-0 text-3xl w-7 h-7 bg-secondary-50 text-zinc-900 !flex rounded-full !items-center !justify-center bg-white border border-secondary-300 hover:text-primary-900"><div class="button secondary h-full leading-[30px]" onclick="decreaseChild(this)"><span class="hide">-</span></div></li><div class="clr"></div></ul><input type="text" class="cat_textbox chcount child-count w-[35px] mt-2 h-[30px] !bg-transparent leading-[30px] absolute left-0 right-0 top-[25px] m-auto text-center" id="textbox-childcount' +
              i +
              '" maxlength="4000" value="0"></div><div class="clr"></div><div class="childDropdowns section-select-age clear-both"></div><input type="hidden" name="_roo$(t).rooms__' +
              i +
              '.childcountandage" class="childcountandage" /></div></div>'
          );
    } else
      e > n && destroyRoomDropdown($(t).closest("form").find(".countRoom"), n);
    (o = o.substring(0, o.length - 2)),
      $(t).closest("form").find(".passenger-counts").show(),
      $(t).closest("form").find(".count-room .count").text(n),
      $(t).closest("form").find(".count-adultRoom .count").text(""),
      $(t).closest("form").find(".count-childRoom .count").text(""),
      $(t).closest("form").find(".hotel-inputH").attr("placeholder", "");
  }
}
750 >= $(window).width() &&
  ("/Tem3_Roundtrip_Search.bc" === $("#flightSearch").attr("action") &&
    $("#flightSearch").attr("action", "/M_Roundtrip_Search.bc"),
  "/Tem3_Oneway_Search.bc" === $("#flightSearch").attr("action") &&
    $("#flightSearch").attr("action", "/M_Oneway_Search.bc"),
  $("#hotelsearch").attr("action", "/M_Hotel_Search.bc"),
  $("#Tour-form").attr("action", "/M_Tour_Search.bc"),
  $("#flightHotelSearch").attr("action", "/M_FlightHotel_Search.bc"),
  $(".formflight").each(function () {
    $(this).submit(function (t) {
      var l = "";
      if (
        ($(this)
          .find(".createChildDropdown")
          .each(function () {
            l += $(this).find("select").val() + ",";
          }),
        "" !== l)
      ) {
        $(this).find(".select-age-value").val(l);
        var c = $(this)
          .find(".select-age-value")
          .val()
          .replace(/,(?=[^,]*$)/, "");
        $(this).find(".select-age-value").val(c);
      }
      var a = $(this).find(".adultcount").val(),
        r = $(".childcount").val(),
        d = parseInt(a) + parseInt(r),
        u = 0;
      $(".select-age").each(function () {
        2 >= parseInt($(this).val()) && (u += 1);
      }),
        u > a &&
          (t.preventDefault(),
          $(".alert-text").html(
            "به ازای هر بزرگسال تنها یک نوزاد انتخاب کنید!"
          )),
        d > 10 &&
          (t.preventDefault(),
          $(".alert-text").html(
            "باید مجموع تعداد بزرگسال و کودک کمتر از 10 باشد !"
          )),
        a < 1 &&
          (t.preventDefault(),
          $(".alert-text").html("حداقل یک بزرگسال انتخاب کنید !"));
    });
  })),
  $("#return").click(function () {
    document.querySelector(".cstmz-type-div").classList.remove("sm-frl"),
      (document.querySelector("input#return-input").checked = !0),
      $(this).addClass("active-r-btn"),
      $("#direct").removeClass("active-r-btn"),
      $("#multi").removeClass("active-r-btn"),
      $("#multi-flight-form").addClass("hidden"),
      $("#flightSearch #inp2-flight").prop("disabled", !1),
      $(".return-date-city").removeClass("disabled-date"),
      $("#flightSearch").find(".end_date").addClass("nextCalOpening"),
      750 >= $(window).width() &&
        $("#flightSearch").attr("action", "/M_Roundtrip_Search.bc"),
      $("#flightSearch").show(),
      $(".Flighttype-text").text("رفت و برگشت");
  }),
  $("#direct").click(function () {
    (document.querySelector("input#direct-input").checked = !0),
      document.querySelector(".cstmz-type-div").classList.remove("sm-frl"),
      $(this).addClass("active-r-btn"),
      $("#return").removeClass("active-r-btn"),
      $("#multi").removeClass("active-r-btn"),
      $("#multi-flight-form").addClass("hidden"),
      $("#flightSearch #inp2-flight").prop("disabled", !0),
      $("#flightSearch").find(".end_date").removeClass("nextCalOpening"),
      750 >= $(window).width() &&
        $("#flightSearch").attr("action", "/M_Oneway_Search.bc"),
      $("#flightSearch").show(),
      $(".Flighttype-text").text("یک طرفه"),
      $(".return-date-city").addClass("disabled-date");
  }),
  $(".flight-btn").click(function () {
    $(".date_info_selected").find(".type_date").text("تاریخ رفت :"),
      $(".date_info_selected").find(".day_of_date").text("---"),
      $(".date_info_selected").find(".month_of_date").text(" "),
      $(this).removeClass("inactive"),
      $(".selected").removeClass("active-module"),
      $(this).addClass("active-module"),
      $(".hotel-btn").addClass("inactive"),
      $(".tour-btn").addClass("inactive"),
      $(".flighthotel-btn").addClass("inactive"),
      $(".r-flight").show(),
      $(".r-hotel").hide(),
      $(".r-tour").hide(),
      $(".r-flighthotel").hide(),
      $("#top-banner-resize").css(
        "background-image",
        'url("../images/search-bg.jpg")'
      );
  }),
  $(".hotel-btn").click(function () {
    return (
      $(".date_info_selected").find(".type_date").text("تاریخ رفت :"),
      $(".date_info_selected").find(".day_of_date").text("---"),
      $(".date_info_selected").find(".month_of_date").text(" "),
      $(this).removeClass("inactive"),
      $(".selected").removeClass("active-module"),
      $(this).addClass("active-module"),
      $(".flight-btn").addClass("inactive"),
      $(".flighthotel-btn").addClass("inactive"),
      $(".tour-btn").addClass("inactive"),
      $(".r-hotel").show(),
      $(".r-flight").hide(),
      $(".r-tour").hide(),
      $(".r-flighthotel").hide()
    );
  }),
  $(".flighthotel-btn").click(function () {
    return (
      $(".date_info_selected").find(".type_date").text("تاریخ رفت :"),
      $(".date_info_selected").find(".day_of_date").text("---"),
      $(".date_info_selected").find(".month_of_date").text(" "),
      $(this).removeClass("inactive"),
      $(".selected").removeClass("active-module"),
      $(this).addClass("active-module"),
      $(".flight-btn").addClass("inactive"),
      $(".hotel-btn").addClass("inactive"),
      $(".tour-btn").addClass("inactive"),
      $(".r-flighthotel").show(),
      $(".r-hotel").hide(),
      $(".r-flight").hide(),
      $(".r-tour").hide(),
      $("#top-banner-resize").css(
        "background-image",
        'url("../images/fh-search-bg.jpg")'
      )
    );
  }),
  $(".tour-btn").click(function () {
    return (
      $(".date_info_selected").find(".type_date").text("تاریخ رفت :"),
      $(".date_info_selected").find(".day_of_date").text("---"),
      $(".date_info_selected").find(".month_of_date").text(" "),
      $(this).removeClass("inactive"),
      $(".selected").removeClass("active-module"),
      $(this).addClass("active-module"),
      $(".flight-btn").addClass("inactive"),
      $(".hotel-btn").addClass("inactive"),
      $(".flighthotel-btn").addClass("inactive"),
      $(".r-flighthotel").hide(),
      $(".r-hotel").hide(),
      $(".r-flight").hide(),
      $(".r-tour").show(),
      $("#top-banner-resize").css(
        "background-image",
        'url("../images/fh-search-bg.jpg")'
      )
    );
  }),
  $(document).ready(function () {
    $("#FlightClass1, .FlightClass ul").on("click", function (t) {
      t.stopPropagation();
    });
  }),
  $(document).ready(function () {
    $(".FlightClass li").each(function () {
      $(this).click(function () {
        var t = $(this).attr("data-value"),
          l = $(this).text();
        $(this).closest(".flightclass-box").find(".FlightClass-value").val(t),
          $(this).closest(".flightclass-box").find(".FlightClass-text").text(l);
      });
    });
  }),
  $(document).ready(function () {
    $(".close-hotel-psg").click(function () {
      $(".HotelPassengers").addClass("hidden");
      let t = $(this).closest(".pass-box");
      t.next(".flightclass-box").length &&
        t
          .next(".flightclass-box")
          .find(".show-flightclass")
          .removeClass("hidden");
    }),
      $(".selected").click(function () {
        $(this).attr("id"),
          $(this).hasClass("inactive") &&
            ($(".selected").addClass("inactive"),
            $(".selected").removeClass("active-module"),
            $(this).removeClass("inactive"),
            $(this).addClass("active-module"));
      });
  }),
  $(".country").each(function () {
    $(this).on("blur", function () {
      if ($(this).closest(".city").find(".countryFlight").text().length > 0) {
        if (0 == hoverelse) {
          var t = $(this)
              .closest(".city")
              .find(".countryFlight")
              .children(".selectCountry:first")
              .find(".txtcountry")
              .text(),
            l =
              (t.split(" "),
              $(this)
                .closest(".city")
                .find(".countryFlight")
                .children(".selectCountry:first")
                .find(".countryid")
                .val());
          $(this).closest(".city").find(".country").val(t);
          var c = t.split("(");
          $(this).closest(".city").find(".split-text").text(c[0]),
            $(this).closest(".city").find(".text-value").val(t),
            $(this).closest(".city").find(".co-id").val(l),
            $(this).closest(".city").find(".countryFlight").empty();
        }
      } else $(this).closest(".city").find(".mini-loading").css("display", "none");
    });
  });
var destroyRoomDropdown = function (t, l) {
  l < 1 || t.find("div.contentRooms").get(l).remove();
};
function increaseAdult(t) {
  var l = $(t),
    c = parseInt(l.closest("ul").next().val()),
    a = l.text().indexOf("+") ? c + 1 : c > 0 ? c - 1 : 0;
  l.closest("form").find(".hotel-inputH").attr("placeholder", ""),
    a >= 10 || (l.closest("ul").next().val(a), SumAdult(t));
}
function decreaseAdult(t) {
  var l = $(t),
    c = parseInt(l.closest("ul").next().val()),
    a = l.text().indexOf("+") ? c + 1 : c > 0 ? c - 1 : 0;
  a < 1 || (l.closest("ul").next().val(a), SumAdult(t));
}
function SumAdult(t) {
  var l,
    c = 0;
  $(t)
    .closest("form")
    .find(".countRoomHT")
    .find(".contentRooms")
    .each(function () {
      c += parseInt($(this).find(".adultcount").val());
    }),
    (l = parseInt(c)),
    $(t).closest("form").find(".passenger-counts").show(),
    $(t).closest("form").find(".count-adultRoom .count").text(l);
}
function increaseChild(t) {
  var l = $(t),
    c = parseInt(l.closest("ul").next().val()),
    a = l.text().indexOf("+") ? c + 1 : c > 0 ? c - 1 : 0,
    r = "";
  if (!(a >= 5)) {
    if ((l.closest("ul").next().val(a), c < a)) {
      var d = a;
      for (
        l.closest(".contentRooms").find(".childDropdowns").empty(), i = 1;
        i <= d;
        i++
      )
        l.closest(".contentRooms")
          .find(".childDropdowns")
          .append(
            '<div class="age-selection dir-rtl createChildDropdown mb-4 w-full float-right clear-both"><div class="label float-right   leading-12 mb-1">سن کودک ' +
              i +
              '</div><select class="select-age float-left bg-[#F8F8F8] w-[88px] h-12 leading-12 rounded-lg w-full px-2"><option value="1">تا 1 سال</option><option value="2">1 تا 2</option><option value="3">2 تا 3</option><option value="4">3 تا 4</option><option value="5">4 تا 5</option><option value="6">5 تا 6</option><option value="7">6 تا7</option><option value="8">7 تا 8</option><option value="9">8 تا 9</option><option value="10">9 تا 10</option><option value="11">10 تا 11</option><option value="12">11 تا 12</option></select><div class="clr"></div></div>'
          );
    }
    (r = r.substring(0, r.length - 2)), SumChild(t);
  }
}
function decreaseChild(t) {
  var l = $(t),
    c = parseInt(l.closest("ul").next().val()),
    a = l.text().indexOf("+") ? c + 1 : c > 0 ? c - 1 : 0,
    r = "";
  l.closest("ul").next().val(a),
    c > a &&
      destroyChildDropdownRoom(
        l.closest(".contentRooms").find(".childDropdowns"),
        a
      ),
    (r = r.substring(0, r.length - 2)),
    SumChild(t);
}
function SumChild(t) {
  var l,
    c = 0;
  $(t)
    .closest("form")
    .find(".countRoomHT")
    .find(".contentRooms")
    .each(function () {
      c += parseInt($(this).find(".chcount").val());
    }),
    (l = parseInt(c)),
    $(t).closest("form").find(".count-childRoom .count").text(l),
    $(t).closest("form").find(".passenger-counts").show(),
    $(t).closest("form").find(".hotel-inputH").attr("placeholder", "");
}
function change_pass_count(t) {
  if (
    ((e = parseInt($(t).closest("ul").next().val())),
    (n = $(t).text().indexOf("+") > -1 ? e + 1 : e > 0 ? e - 1 : 0),
    (o = ""),
    $(t).closest("form").find(".hotel-inputH").attr("placeholder", ""),
    $(t).closest(".inner-city").find(".passenger-counts").show(),
    !(n >= 5))
  ) {
    if (($(t).closest("ul").next().val(n), e < n)) {
      var l = n;
      for (
        $(t).closest("form").find(".childDropdowns").empty(), i = 1;
        i <= l;
        i++
      )
        $(t)
          .closest("form")
          .find(".childDropdowns")
          .append(
            '<div class="age-selection dir-rtl createChildDropdown mb-4 w-full float-right clear-both"><div class="label float-right   leading-12 mb-1">سن کودک ' +
              i +
              '</div><select  class="select-age float-left bg-[#F8F8F8] w-[88px] h-12 leading-12 rounded-lg w-full px-2"><option value="1">تا 1 سال</option><option value="2">1 تا 2</option><option value="3">2 تا 3</option><option value="4">3 تا 4</option><option value="5">4 تا 5</option><option value="6">5 تا 6</option><option value="7">6 تا7</option><option value="8">7 تا 8</option><option value="9">8 تا 9</option><option value="10">9 تا 10</option><option value="11">10 تا 11</option><option value="12">11 تا 12</option></select><div class="clr"></div></div>'
          );
      $(t).closest(".inner-city").find(".count-childRoom .count") &&
        $(t).closest(".inner-city").find(".count-childRoom .count").text(n);
    } else
      e > n &&
        (destroyChildDropdownRoom(
          $(t).closest("form").find(".childDropdowns"),
          n
        ),
        $(t).closest(".inner-city").find(".count-childRoom .count") &&
          $(t).closest(".inner-city").find(".count-childRoom .count").text(n));
    o = o.substring(0, o.length - 2);
  }
}
var destroyChildDropdownRoom = function (t, l) {
  t.find("div.createChildDropdown").get(l).remove();
};
$(".button-click .button").on("click", function () {
  var t = $(this),
    l = parseInt(t.closest("ul").next().val()),
    c = "+" == t.text() ? l + 1 : l > 0 ? l - 1 : 0;
  c >= 10 ||
    c < 1 ||
    (t.closest("ul").next().val(c),
    $(".cat_textbox").each(function () {
      $(this).next("span").text();
    }),
    t.closest("form").find(".hotel-inputF").attr("placeholder", ""),
    t.closest("form").find(".hotel-inputH").attr("placeholder", ""),
    t
      .closest("form")
      .find(".count-adult")
      .text(c + " بزرگسال "),
    t.closest(".inner-city").find(".passenger-counts").show(),
    $(this).closest(".inner-city").find(".count-adultRoom .count") &&
      $(this).closest(".inner-city").find(".count-adultRoom .count").text(c));
});
var createChildDropdown = function (t) {
    var l = $("<div />", {
      class: "createChildDropdown mb-4 w-full float-right clear-both",
    });
    return (
      l.append(
        $("<label />", {
          class: "float-right   leading-12 mb-1",
          for: "select-age-" + t,
        }).text("سن کودک " + t)
      ),
      l.append(
        $(
          '<select class="select-age float-left bg-[#F8F8F8] w-[88px] h-12 leading-12 rounded-lg w-full px-2" id="select-age' +
            t +
            '"/>'
        )
      ),
      [
        "تا 1 سال",
        "1 تا 2 سال ",
        "2 تا 3 سال",
        "3 تا 4 سال ",
        "4 تا 5 سال",
        "5 تا 6 سال",
        "6 تا 7 سال",
        "7 تا 8 سال",
        "8 تا 9 سال",
        "9 تا 10 سال",
        "10 تا 11 سال",
        "11 تا 12 سال",
      ].forEach(function (t, c) {
        l.find("select").append(
          $("<option />")
            .text(t)
            .attr("value", c + 1)
        );
      }),
      l
    );
  },
  destroyChildDropdown = function (t, l) {
    t.find("div.createChildDropdown").get(l).remove();
  };
function CheckExteraHoteldate(t) {
  var l = $(t).prop("checked");
  1 == l
    ? ($(t).val(1),
      $(".Wrapper-ExteraHoteldate").css("display","flex"),
      $(".checkout").attr("required", !0),
      $(".checkin").attr("required", !0))
    : 0 == l &&
      ($(t).val(0),
      $(".Wrapper-ExteraHoteldate").hide(),
      $(".checkout").attr("required", !1),
      $(".checkin").attr("required", !1),
      $(".checkout").val(""),
      $(".checkin").val(""));
}
function SelectPlace(t) {
  var l = $(t).attr("data-id"),
    c = $(t).text(),
    a = c.split("-");
  $(t).closest(".city").find(".text-value").val(c),
    $(t).closest(".city").find(".co-id").val(l),
    $(t).closest(".city").find(".split-text").text(a[0]),
    $(t).closest(".city").find(".searchList").fadeOut(),
    $(t).closest(".city").next(".city").find(".searchList").fadeIn(),
    $(t)
      .closest(".city")
      .next(".city")
      .find(".click-content")
      .trigger("onclick"),
    $(t).closest(".city").next("div").hasClass("Basis_Date_Box")
      ? $(t).closest(".city").next("div").find(".start_date").click()
      : $(t).closest(".city").hasClass("tocity_container") &&
        $(t).closest(".first-part").next("div").find(".start_date").click();
}
function ExchangeRoute(t) {
  var l = $(t).closest(".city").find(".FCD1").val(),
    c = $(t).closest(".city").next(".city").find(".FCD2").val(),
    a = $(t).closest(".city").find(".FCDid1").val(),
    r = $(t).closest(".city").next(".city").find(".FCDid2").val(),
    d = $(t).closest(".city").find(".dep-txt").text(),
    u = $(t).closest(".city").next(".city").find(".des-txt").text();
  $(t).closest(".city").find(".FCD1").val(c),
    $(t).closest(".city").next(".city").find(".FCD2").val(l),
    $(t).closest(".city").find(".FCDid1").val(r),
    $(t).closest(".city").next(".city").find(".FCDid2").val(a),
    $(t).closest(".city").find(".dep-txt").text(u),
    $(t).closest(".city").next(".city").find(".des-txt").text(d);
}
function openNextCal(t) {
  let l = $(".rezervation-item > li:not(.inactive)").attr("data-id");
  "r-flighthotel" === l
    ? $(".Wrapper-ExteraHoteldate").is(":visible") &&
      "" !== $(".Wrapper-ExteraHoteldate").find(".checkin").val()
      ? "" === $(".Wrapper-ExteraHoteldate").find(".nextCalOpeningex").val() &&
        $(".Wrapper-ExteraHoteldate")
          .find(".nextCalOpeningex")
          .trigger("onclick")
      : "" ==
          $("." + l)
            .find(".nextCalOpening")
            .val() &&
        ($("." + l)
          .find(".nextCalOpening")
          .val(),
        $("." + l)
          .find(".nextCalOpening")
          .trigger("onclick"))
    : $("." + l)
        .find(".nextCalOpening")
        .trigger("onclick");
}
function showMultiCity(t) {
  document.querySelector(".cstmz-type-div").classList.add("sm-frl"),
    (document.querySelector("input#multi-input").checked = !0),
    $("#multi-flight-form").removeClass("hidden"),
    $(t).addClass("active-r-btn"),
    $("#direct").removeClass("active-r-btn"),
    $("#return").removeClass("active-r-btn"),
    $("#flightSearch").hide(),
    $("#multi-flight-form").show(),
    750 >= $(window).width() &&
      $("#multi-flight-form").attr("action", "/M_MultiCity_Search.bc"),
    $(".Flighttype-text").text("چند مسیره");
}
function addMulticityRoute(t) {
  if (
    document
      .querySelector(".route-container")
      .querySelectorAll(".route-content").length < 4
  ) {
    let l = document
        .querySelector(".route-container")
        .querySelectorAll(".route-content")[0].innerHTML,
      c = document.createElement("div");
    (c.innerHTML = l),
      $(window).width() >= 1024
        ? (c.className =
            "route-content set_Date_Box relative clear-both flex flex-col gap-2 pb-7 pt-5 float-right w-full")
        : (c.className =
            "route-content relative clear-both flex flex-col gap-2 mb-7 mt-5 float-right w-full"),
      (c.querySelector(".multi-route-tlt").innerText = [
        "مقصد اول",
        "مقصد دوم",
        "مقصد سوم",
        "مقصد چهارم",
      ][
        document
          .querySelector(".route-container")
          .querySelectorAll(".route-content").length
      ]),
      c.querySelectorAll("input").forEach((t) => {
        t.value = "";
      }),
      c.insertAdjacentHTML(
        "beforeend",
        '<div class="route-minus-btn text-primary-900  bottom-[77px] flex items-center cursor-pointer text-sm" onclick="deleteMulticityRoute(this)">حذف <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#880C25" class="inline-block w-5 h-5">\n  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />\n</svg>\n</div>'
      ),
      c.querySelector(".gregorian_date") &&
        c.querySelector(".gregorian_date").remove(),
      document.querySelector(".route-container").append(c),
      c.setAttribute(
        "data-index",
        t
          .closest("form")
          .querySelector(".route-container")
          .querySelectorAll(".route-content").length
      ),
      (c.querySelector(".fromcity_container").querySelector(".country").value =
        c.previousElementSibling
          .querySelector(".tocity_container")
          .querySelector(".country").value),
      (c.querySelector(".fromcity_container").querySelector(".fromcity").value =
        c.previousElementSibling
          .querySelector(".tocity_container")
          .querySelector(".tocity").value);
  }
  checkButtonAddCity();
}
function deleteMulticityRoute(t) {
  let l = ["مقصد اول", "مقصد دوم", "مقصد سوم", "مقصد چهارم"];
  t.closest(".route-content").remove();
  let c = 0;
  document
    .querySelector("#multi-flight-form")
    .querySelector(".route-container")
    .querySelectorAll(".route-content")
    .forEach((t) => {
      (t.querySelector(".multi-route-tlt").innerText = l[c]),
        c++,
        t.setAttribute("data-index", c);
    }),
    checkButtonAddCity();
}
function checkButtonAddCity(t) {
  document.querySelector(".route-container").querySelectorAll(".route-content")
    .length >= 4
    ? (document
        .getElementsByClassName("route-plus-btn")[0]
        .classList.remove("hvr-outline-out"),
      document
        .getElementsByClassName("route-plus-btn")[0]
        .classList.add("deactive-addmc"))
    : (document
        .getElementsByClassName("route-plus-btn")[0]
        .classList.remove("deactive-addmc"),
      document
        .getElementsByClassName("route-plus-btn")[0]
        .classList.add("hvr-outline-out"));
}
function formMulticity_search_isSubmited(t, l) {
  let c = ["مقصد اول", "مقصد دوم", "مقصد سوم", "مقصد چهارم"],
    a = "";
  if (
    (t
      .querySelector(".childDropdowns")
      .querySelectorAll("select")
      .forEach((t) => {
        a = a + t.value + ",";
      }),
    "" !== a)
  ) {
    t.querySelector(".select-age-value").value = a;
    var r = t
      .querySelector(".select-age-value")
      .value.replace(/,(?=[^,]*$)/, "");
    t.querySelector(".select-age-value").value = r;
  } else t.querySelector(".select-age-value").value = 0;
  for (let d = 0; d < t.getElementsByClassName("route-content").length; d++)
    t
      .getElementsByClassName("route-content")
      [d].querySelector(".fromcity")
      .setAttribute("name", `_root.route__${d}.fromcity`),
      t
        .getElementsByClassName("route-content")
        [d].querySelector(".tocity")
        .setAttribute("name", `_root.route__${d}.tocity`),
      t
        .getElementsByClassName("route-content")
        [d].querySelector(".start_date")
        .setAttribute("name", `_root.route__${d}.departuredate`),
      t
        .getElementsByClassName("route-content")
        [d].querySelector(".fromcity-text")
        .setAttribute("name", `_root.route__${d}.fromcityName`),
      t
        .getElementsByClassName("route-content")
        [d].querySelector(".tocity-text")
        .setAttribute("name", `_root.route__${d}.tocityName`),
      t
        .getElementsByClassName("route-content")
        [d].querySelector(".multi-route-tlt")
        .insertAdjacentHTML(
          "beforeend",
          `<input type="hidden" value="${c[d]}" name="_root.route__${d}.index"/>`
        );
}
function exchangeDepDes(t) {
  var l = $(t).closest(".route-content").find(".FCD1").val(),
    c = $(t).closest(".route-content").find(".FCD2").val(),
    a = $(t).closest(".route-content").find(".FCDid1").val(),
    r = $(t).closest(".route-content").find(".FCDid2").val(),
    d = $(t).closest(".route-content").find(".split-text-des").text(),
    u = $(t).closest(".route-content").find(".split-text-dep").text();
  $(t).closest(".route-content").find(".FCD1").val(c),
    $(t).closest(".route-content").find(".FCD2").val(l),
    $(t).closest(".route-content").find(".FCDid1").val(r),
    $(t).closest(".route-content").find(".FCDid2").val(a),
    $(t).closest(".route-content").find(".split-text-des").text(u),
    $(t).closest(".route-content").find(".split-text-dep").text(d);
}
$(".button-click-child .button").on("click", function () {
  var t = $(this),
    l = parseInt(t.closest("ul").next().val()),
    c = "+" == t.text() ? l + 1 : l > 0 ? l - 1 : 0,
    a = "";
  c >= 5 ||
    (t.closest("ul").next().val(c),
    t
      .closest("ul")
      .prev()
      .val(c + ","),
    t
      .closest("form")
      .find(".cat_textbox")
      .each(function () {
        a += $(this).next("span").text() + ": " + $(this).val() + "، ";
      }),
    l < c
      ? t.closest("form").find(".childDropdowns").append(createChildDropdown(c))
      : l > c &&
        destroyChildDropdown(t.closest("form").find(".childDropdowns"), c),
    (a = a.substring(0, a.length - 2)),
    t.closest(".inner-city").find(".passenger-counts").show(),
    t.closest("form").find(".hotel-inputF").attr("placeholder", ""),
    t
      .closest("form")
      .find(".count-child")
      .text(" کودک " + c));
}),
  $(".search-flight").click(function () {
    "0," == (s = $(this).closest("form").find(".childcountinput").val()) &&
      $(this).closest("form").find(".childcountinput").val(0),
      $(this)
        .closest("form")
        .find(".contentRooms")
        .each(function () {
          var t = $(this).find(".chcount").val(),
            l = "";
          $(this)
            .find(".select-age")
            .each(function () {
              l = l + "," + $(this).val();
            }),
            $(this)
              .find(".childcountandage")
              .val(t + l);
        });
  }),
  $(".Basis_Date").each(function () {
    $(this).click(function () {
      $(".searchList").slideUp();
    });
  }),
  $(document).ready(function () {
    $(".frm").each(function () {
      $(this).submit(function (t) {
        $(this)
          .find(
            "input[name=fdate],input[name=tdate],input[type=text].FCD1 ,input[type=text].FCD2,input[type=text].FCD,input[type=hidden].co-id"
          )
          .each(function () {
            "" != $(this).val() || $(this).is(":disabled")
              ? ($(this).closest("div").find(".notification").remove(),
                $(this).closest(".date-city").removeClass("input-alarm"))
              : (t.preventDefault(),
                $(this).after('<span class="notification p-absolute"></span>'),
                $(this).closest(".date-city").find(".selected-day").empty(),
                $(this).closest(".date-city").find(".selected-month").empty(),
                $(this).closest(".date-city").addClass("input-alarm"));
          });
      });
    });
  }),
  $(
    ".hotel-input , .count-adult , .count-child , .count-room , .count-adultRoom , .count-childRoom , .fclass, .pass-box, .pass-box .inner-city, .ui-datepicker, .ui-datepicker td, ui-datepicker td a"
  ).click(function (t) {
    let l = document.querySelectorAll(".searchList"),
      c = document.querySelector(".show-flighttype"),
      a = document.querySelectorAll(".flightclass-box");
    return (
      a.forEach((t) => {}),
      l.forEach((t) => {
        t.style.display = "none";
      }),
      c.classList.add("hidden"),
      $(this)
        .parents(".city .inner-city")
        .children(".HotelPassengers")
        .toggleClass("hidden"),
      t.preventDefault(),
      !1
    );
  }),
  $(document).on("click", function (t) {
    $(t.target).closest(
      ".searchList,.country,.selectCountry,.city, .form-search-input"
    ).length || $(".searchList").slideUp(),
      $(t.target).closest(
        ".hotel-input , .count-adult , .count-child , .count-room , .count-adultRoom , .count-childRoom , .fclass , .HotelPassengers div , HotelPassengers span"
      ).length || $(".HotelPassengers").addClass("hidden");
  }),
  $(".Classname-box select").each(function () {
    $(this).change(function () {
      var t;
      switch ($(this).val()) {
        case "Economy":
          t = "اکونومی";
          break;
        case "BusinessClass":
          t = "بیزینس";
          break;
        case "FirstClass":
          t = "فرست";
      }
      $(this).closest(".city").find(".fclass").text(t);
    });
  }),
  $(window).width() >= 1024 &&
    $("#multi-flight-form")
      .find(".route-content")
      .each(function () {
        $(this).addClass("set_Date_Box");
      }),
  $("#tourSearch .country").on("keyup", function () {
    var t = $(this).val().toLowerCase();
    $(".selectCountry").hide(),
      $(".selectCountry")
        .filter(function () {
          return $(this).text().toLowerCase().includes(t);
        })
        .show();
  }),
  document.body.addEventListener("click", (t) => {
    document.querySelector(".show-flighttype");
    let l = document.querySelector(".flight-items "),
      c = document.querySelectorAll(".flightclass-box");
    l.contains(t.target),
      c.forEach((l) => {
        l.contains(t.target);
      });
  });
