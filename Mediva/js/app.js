"use strict";

$(window).on("load", function () {
  // Preloader
  $(".preloader").fadeOut();
  $("body").removeAttr("style");

  // Highlight current page navbar item based on url
  $(function () {
    $("nav a").each(function () {
      if ($(this).prop("href") === window.location.href) {
        $(this).addClass("active");
        $(this).parents("li.nav_item").children("a.nav_link").addClass("active");
      }
    });
  });
});

$(document).ready(function () {
  // Hotline box
  $("nav .responsive_nav .pos_rel button.dot_menu").click(function () {
    $("nav .responsive_nav .pos_rel .option_item").toggleClass("active");
  });

  // Stick navbar to the top of the screen
  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $("nav").addClass("nav_fixed");

      $("body").css({
        marginTop: $("nav").outerHeight() + "px",
      });
    } else {
      $("nav").removeClass("nav_fixed");

      $("body").css({
        marginTop: 0,
      });
    }
  });

  // Scroll back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      $("button.go_top").addClass("active");
    } else {
      $("button.go_top").removeClass("active");
    }
  });
  $("button.go_top").click(function () {
    $("html, body").animate({ scrollTop: "0" }, 1000);
    return false;
  });

  // Burger-menu
  $("button.burger_menu").click(function () {
    $("button.burger_menu, ul.menu_reveal").toggleClass("active");
  });

  $("ul.menu_reveal li.dropdown").click(function () {
    $(this).toggleClass("active");
    $(this).children("ul").slideToggle(500);
  });

  // OwlCarousel
  $("ul.cat_slider").owlCarousel({
    items: 2,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    responsive: {
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 6,
      },
    },
  });

  $("ul.client_slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
  });

  // Nice-select
  $("select").niceSelect();

  // Datetimepicker
  jQuery.datetimepicker.setLocale("en");

  $("#datetimepicker").datetimepicker({
    i18n: {
      de: {
        months: [
          "Januar",
          "Februar",
          "März",
          "April",
          "Mai",
          "Juni",
          "Juli",
          "August",
          "September",
          "Oktober",
          "November",
          "Dezember",
        ],
        dayOfWeek: ["So.", "Mo", "Di", "Mi", "Do", "Fr", "Sa."],
      },
    },
    timepicker: false,
    format: "d.m.Y",
  });

  // Odometer
  $(".odometer").appear(function (e) {
    var odo = $(".odometer");

    odo.each(function () {
      var countNumber = $(this).attr("data-count");

      $(this).html(countNumber);
    });
  });

  // Tab-menu in "About" page
  $("section.pricing_area .tab ul.tabs").find("> li:eq(0)").addClass("active");
  $("section.pricing_area .tab ul.tabs li button").on("click", function (g) {
    var tab = $(this).closest(".tab"),
      index = $(this).closest("li").index();

    tab.find("ul.tabs > li").removeClass("active");
    $(this).closest("li").addClass("active");

    tab.find(".tab_content").find("div.tab_item").not($("div.tab_item").eq(index)).slideUp();
    tab.find(".tab_content").find("div.tab_item").eq(index).slideDown();

    g.preventDefault();
  });

  // Tab-menu in "Doctor details" and "Doctor dashboard" pages
  $(".tab_menu ul.nav_tabs li.nav_item button").click(function () {
    var index = $(this).closest("li.nav_item").index();

    $(".tab_menu ul.nav_tabs li.nav_item button").removeClass("active");
    $(this).addClass("active");

    $(".tab_menu .tab_content .tab_pane").removeClass("active");
    $(".tab_menu .tab_content .tab_pane").eq(index).addClass("active");
  });

  //Schedule calendar
  if ($("#schedule_calendar").length) {
    $("#schedule_calendar").monthly();
  }

  // FAQ accordion
  $("ul.accordion li.accordion_item button.accordion_title").click(function () {
    $(this).toggleClass("active");
    $(this).next().slideToggle("fast");

    $(".accordion_content").not($(this).next()).slideUp("fast");
    $(".accordion_title").not($(this)).removeClass("active");
  });
});
