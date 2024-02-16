import React, { useEffect } from "react";
import $ from "jquery";

export const JqueryBase = () => {
  useEffect(() => {
    $(".table-responsive--dynamic .dropdown").on(
      "show.bs.dropdown",
      function () {
        var $btnDropDown = $(this).find(".btn-link");
        var $listHolder = $(this).find(
          ".table-responsive--dynamic .dropdown-menu"
        );
        //reset position property for DD container
        $(this).css("position", "static");
        $listHolder.css({
          top:
            $btnDropDown.offset().top + $btnDropDown.outerHeight(true) + "px",
          left: $btnDropDown.offset().left + "px",
        });
        $listHolder.data("open", true);
      }
    );
    //add BT DD hide event
    $(".table-responsive--dynamic .dropdown").on(
      "hidden.bs.dropdown",
      function () {
        var $listHolder = $(this).find(
          ".table-responsive--dynamic .dropdown-menu"
        );
        $listHolder.data("open", false);
      }
    );
    //add on scroll for table holder
    $(".table-responsive--dynamic").scroll(function () {
      var $ddHolder = $(this).find(".table-responsive--dynamic .dropdown");
      var $btnDropDown = $(this).find(".btn-link");
      var $listHolder = $(this).find(
        ".table-responsive--dynamic .dropdown-menu"
      );
      if ($listHolder.data("open")) {
        $listHolder.css({
          top:
            $btnDropDown.offset().top + $btnDropDown.outerHeight(true) + "px",
          left: $btnDropDown.offset().left + "px",
        });
        $ddHolder.toggleClass(
          "open",
          $btnDropDown.offset().left > $(this).offset().left
        );
      }
    });

    // Preloader
    window.addEventListener("load", function () {
      document.querySelector("body").classList.add("loaded");
    });

    /* Replace all SVG images with inline SVG */
    $("img.svg").each((i, e) => {
      const $img = $(e);

      const imgID = $img.attr("id");

      const imgClass = $img.attr("class");

      const imgURL = $img.attr("src");

      $.get(
        imgURL,
        (data) => {
          // Get the SVG tag, ignore the rest
          let $svg = $(data).find("svg");

          // Add replaced image's ID to the new SVG
          if (typeof imgID !== "undefined") {
            $svg = $svg.attr("id", imgID);
          }
          // Add replaced image's classes to the new SVG
          if (typeof imgClass !== "undefined") {
            $svg = $svg.attr("class", `${imgClass} replaced-svg`);
          }

          // Remove any invalid XML tags as per http://validator.w3.org
          $svg = $svg.removeAttr("xmlns:a");

          // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
          if (
            !$svg.attr("viewBox") &&
            $svg.attr("height") &&
            $svg.attr("width")
          ) {
            $svg.attr(
              `viewBox 0 0  ${$svg.attr("height")} ${$svg.attr("width")}`
            );
          }

          // Replace image with new SVG
          $img.replaceWith($svg);
        },
        "xml"
      );
    });

    /* sidebar collapse  */
    $("body").on("click", function (e) {
      if (window.matchMedia("(max-width: 1151px)").matches) {
        if (
          $(e.target).is(".sidebar__menu-group *") == false &&
          $(e.target).is(".header-top *") == false
        ) {
          $(".sidebar").addClass("collapsed");
          $(".contents").addClass("expanded");
          $(".footer-wrapper").addClass("expanded");
        }
      }
    });

    const sidebarToggle = document.querySelector(".sidebar-toggle");

    function sidebarCollapse(e) {
      e.preventDefault();
      $(".overlay-dark-sidebar").toggleClass("show");
      document.querySelector(".sidebar").classList.toggle("collapsed");
      document.querySelector(".contents").classList.toggle("expanded");
      document.querySelector(".footer-wrapper").classList.toggle("expanded");
    }
    if (sidebarToggle) {
      sidebarToggle.addEventListener("click", sidebarCollapse);
    }

    $(window).on("scroll", function (e) {
      let blogContainer = document.querySelector(".blog-details"),
        shareGroup = document.querySelector(".blog-share-top");
      if (blogContainer != null && shareGroup != null) {
        window.pageYOffset <= blogContainer.offsetTop
          ? shareGroup.classList.remove("show")
          : window.pageYOffset >= blogContainer.offsetTop &&
            window.pageYOffset <=
              blogContainer.offsetTop + blogContainer.clientHeight - 700
          ? shareGroup.classList.add("show")
          : shareGroup.classList.remove("show");
      }
    });

    /* sidebar nav events */
    $(".sidebar_nav .has-child ul").hide();
    $(".sidebar_nav .has-child.open ul").show();
    $(".sidebar_nav .has-child >a").on("click", function (e) {
      e.preventDefault();
      $(this).parent().next("has-child").slideUp();
      $(this).parent().parent().children(".has-child").children("ul").slideUp();
      $(this).parent().parent().children(".has-child").removeClass("open");
      if ($(this).next().is(":visible")) {
        $(this).parent().removeClass("open");
      } else {
        $(this).parent().addClass("open");
        $(this).next().slideDown();
      }
    });

    /* Header mobile view */
    $(window)
      .bind("resize", function () {
        var screenSize = window.innerWidth;
        if ($(this).width() <= 767.98) {
          $(".navbar-right__menu").appendTo(".mobile-author-actions");
          // $(".search-form").appendTo(".mobile-search");
          $(".contents").addClass("expanded");
          $(".sidebar ").addClass("collapsed");
        } else {
          $(".navbar-right__menu").appendTo(".navbar-right");
        }
      })
      .trigger("resize");
    $(window)
      .bind("resize", function () {
        var screenSize = window.innerWidth;
        if ($(this).width() > 767.98) {
          $(".dm-mail-sidebar").addClass("show");
        }
      })
      .trigger("resize");
    $(window)
      .bind("resize", function () {
        var screenSize = window.innerWidth;
        if ($(this).width() <= 991) {
          $(".sidebar").addClass("collapsed");
          $(".sidebar-toggle").on("click", function () {
            $(".overlay-dark-sidebar").toggleClass("show");
          });
          $(".overlay-dark-sidebar").on("click", function () {
            $(this).removeClass("show");
            $(".sidebar").addClass("collapsed");
          });
        }
      })
      .trigger("resize");

    /* Mobile Menu */
    $(window)
      .bind("resize", function () {
        var screenSize = window.innerWidth;
        if ($(this).width() <= 991.98) {
          $(".menu-horizontal").appendTo(".mobile-nav-wrapper");
        }
      })
      .trigger("resize");

    $(".btn-search").on("click", function () {
      $(this).toggleClass("search-active");
      $(".mobile-search").toggleClass("show");
      $(".mobile-author-actions").removeClass("show");
    });

    $(".kanban-items li").hover(function () {
      $(this).toggleClass("active");
    });

    $(".btn-author-action").on("click", function () {
      $(".mobile-author-actions").toggleClass("show");
      $(".mobile-search").removeClass("show");
      $(".btn-search").removeClass("search-active");
    });

    $(".menu-mob-trigger").on("click", function (e) {
      e.preventDefault();
      $(".mobile-nav-wrapper").toggleClass("show");
    });

    $(".nav-close").on("click", function (e) {
      e.preventDefault();
      $(".mobile-nav-wrapper").removeClass("show");
    });

    $(".list-thumb-gallery li a").click(function (e) {
      $(".list-thumb-gallery li a").removeClass("active");

      var $this = $(this);
      if (!$this.hasClass("active")) {
        $this.addClass("active");
      }
    });

    /* print button  */
    function printContent(el) {
      var restorepage = document.body.innerHTML;
      var printcontent = document.querySelector(el).innerHTML;
      document.body.innerHTML = printcontent;
      window.print();
      document.body.innerHTML = restorepage;
    }
    if (document.querySelector(".print-btn")) {
      document
        .querySelector(".print-btn")
        .addEventListener("click", function () {
          printContent(".payment-invoice");
        });
    }
    let getData = (optionValue, defaultValue) =>
      typeof optionValue === "undefined" ? defaultValue : optionValue;

    /* Slider */

    var bannerSlick = {
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: false,
      nextArrow: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    var testimonialSlider1 = {
      // rtl: true,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: 30,
      // centerPadding: '60px',
      centerPadding: 0,
      // Add FontAwesome Class
      prevArrow:
        '<div class="slider-arrow slider-prev las la-arrow-left"></div>',
      nextArrow:
        '<div class="slider-arrow slider-next las la-arrow-right"></div>',
      responsive: [
        {
          breakpoint: 1499,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            centerMode: false,
            dots: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    var testimonialSlider2 = {
      // rtl: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow:
        '<div class="slider-arrow slider-prev las la-arrow-left"></div>',
      nextArrow:
        '<div class="slider-arrow slider-next las la-arrow-right"></div>',
      responsive: [
        {
          breakpoint: 1499,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            centerMode: false,
            dots: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    var testimonialSliderFor = {
      // rtl: true,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      infinite: true,
      asNavFor: ".testimonial-slider3-nav",
      arrows: false,
    };
    var testimonialSliderNav = {
      // rtl: true,
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      asNavFor: ".testimonial-slider3-for",
      lazyLoad: "progressive",
      // centerPadding: '30%',
      swipe: true,
      focusOnSelect: true,
      cssEase: "linear",
      touchMove: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1899,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
          },
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    };
    var testimonialSlider4 = {
      // rtl: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow:
        '<div class="slider-arrow slider-prev las la-arrow-left"></div>',
      nextArrow:
        '<div class="slider-arrow slider-next las la-arrow-right"></div>',
    };
    if ($("html").attr("dir") == "rtl") {
      bannerSlick.rtl = true;
      testimonialSlider1.rtl = true;
      testimonialSlider2.rtl = true;
      testimonialSliderFor.rtl = true;
      testimonialSliderNav.rtl = true;
      testimonialSlider4.rtl = true;
    }
    /* Banner slider */

    /* Refresh Slick Under Tab */

    if (document.getElementsByClassName("slick-slider")) {
      $('a[data-bs-toggle="tab"]').on("shown.bs.tab", function () {
        $(".slick-slider").slick("refresh");
      });

      $(document).ready(function () {
        var globalSlider = {
          dots: true,
          arrows: false,
        };
        $(".global-slider").slick(globalSlider);
      });
    }

    /* Dropdown Event */
    $(".dropdown-clickEvent a").on("click", function (e) {
      e.preventDefault();
      const text = $(this).text();
      const notice = `
            <div class="dm-notice">
                <span>${text} Clicked</span>
            </div>
        `;
      $(".dm-message").prepend(notice);
      $(".dm-message").toggleClass("show");

      setTimeout(function () {
        $(".dm-message").empty();
        $(".dm-message").removeClass("show");
      }, 3000);
    });

    /* Popup gallery */

    /* Video Popup */

    /* Hover active */
    $(".friends-follow").on("click", function (e) {
      e.preventDefault();
      let $button = $(this);
      if ($button.hasClass("following")) {
        //$.ajax(); Do Unfollow

        $button.removeClass("following");
        $button.removeClass("unfollow");
        $button.text("Follow");
      } else {
        // $.ajax(); Do Follow
        $button.html('<i class="la la-check"></i> following');
        $button.addClass("following");
      }
    });

    /* Profile Post Highlighting */
    const postForm = document.querySelector(".ap-post-form");
    const postInput = document.querySelector(".ap-post-form textarea");
    const overlayDark = document.createElement("div");

    overlayDark.classList.add("overlay-dark");

    function highlightForm(e) {
      e.preventDefault();
      document.body.appendChild(overlayDark);
      overlayDark.style.opacity = "1";
      overlayDark.style.visibility = "visible";
      document.body.style.position = "relative";
      setTimeout(function () {
        postForm.classList.add("highlighted");
      }, 300);
    }

    if (postForm && postInput) {
      postInput.addEventListener("click", highlightForm);
    }

    function highlightRemoveForm(e) {
      if (
        !e.target.closest(".ap-post-form") &&
        postForm.classList.contains("highlighted")
      ) {
        document.body.removeChild(overlayDark);
        overlayDark.style.opacity = "0";
        overlayDark.style.visibility = "hidden";
        document.body.removeAttribute("style");
        postForm.classList.remove("highlighted");
      }
    }
    if (postForm !== null) {
      document.body.addEventListener("click", highlightRemoveForm);
    }

    /* clock  */

    /* Gallery Filter */
    const options = {
      gridItemsSelector: ".filtr-item",
      gutterPixels: 25, // Items spacing in pixels
      spinner: {
        enabled: true,
      },
      layout: "sameSize",
    };
    const option = {
      gridItemsSelector: ".filtr-item--style2",
      gutterPixels: 25, // Items spacing in pixels
      layout: "sameHeight",
    };
    const simpleFilters = document.querySelectorAll(".simplefilter li");
    Array.from(simpleFilters).forEach((node) =>
      node.addEventListener("click", function () {
        simpleFilters.forEach((filter) => filter.classList.remove("active"));
        node.classList.add("active");
      })
    );

    /* Tab Multiple Trigger */
    $("#ueberTab a").on("click", function (e) {
      let otherTabs = $(this).attr("data-secondary").split(","),
        nav;
      for (let i = 0; i < otherTabs.length; i++) {
        nav = $('<ul class="nav d-none" id="tmpNav"></ul>');
        nav.append(
          '<li class="nav-item"><a href="#" data-bs-toggle="tab" data-bs-target="' +
            otherTabs[i] +
            '">nav</a></li>"'
        );
        nav.find("a").tab("show");
      }
    });

    /* Star Rating Basic */

    /* Star Rating Read Only */

    /* Star Rating Read Only */

    /* Star Rating Read Only */

    /* Countdown Activation */

    /* Embedded Spin */

    /* Uploads Basic */

    /* Time Picker */

    /* Slider Controls */

    /* Slider Controls */

    /* Drawer Trigger */

    /* Drawer Placement */

    /* Upload Avatar */

    /* Collapsable Menu */
    function mobileMenu(dropDownTrigger, dropDown) {
      $(".menu-wrapper .menu-collapsable " + dropDown).slideUp();

      $(".menu-wrapper " + dropDownTrigger).on("click", function (e) {
        if ($(this).parent().hasClass("has-submenu")) {
          e.preventDefault();
        }
        $(this)
          .toggleClass("open")
          .siblings(dropDown)
          .slideToggle()
          .parent()
          .siblings(".sub-menu")
          .children(dropDown)
          .slideUp()
          .siblings(dropDownTrigger)
          .removeClass("open");
      });
    }
    mobileMenu(".menu-collapsable .dm-menu__link", ".dm-submenu");

    /* Select */

    /* Mail Compose Rich-text*/

    /* Mail Compose Rich-text*/

    /* Input password toggle */
    function eye_pass() {
      $(".toggle-password2").click(function () {
        $(this).toggleClass("uil-eye");
        let input = $(this).parent().find("#password-field");
        if (input.attr("type") == "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
      });
    }
    eye_pass();

    /* mailbar Toggle */
    $(".mailbar-toggle").on("click", function () {
      $(".dm-mail-sidebar").toggleClass("show");
    });
    $(".mailbar-cross").on("click", function (e) {
      e.preventDefault();
      $(".dm-mail-sidebar").removeClass("show");
    });

    /* Bookmarks Icon */
    $(".like-icon").click(function () {
      $(this).find(".icon").toggleClass("lar");
      $(this).find(".icon").toggleClass("las");
    });

    /* Follow button */
    $(".ap-button .follow").click(function () {
      $(this).find(".follow-icon").toggleClass("la-user-plus");
      $(this).find(".follow-icon").toggleClass("la-user-check");
      $(this).toggleClass("active");
    });

    /* Price Ranges */

    /* Text Limit */
    $(".text-limit p span").text(function (index, currentText) {
      return currentText.substr(0, 34);
    });

    $(document).on("click", ".qty-plus", function () {
      $(this)
        .prev()
        .val(+$(this).prev().val() + 1);
    });
    $(document).on("click", ".qty-minus", function () {
      if ($(this).next().val() > 0)
        $(this)
          .next()
          .val(+$(this).next().val() - 1);
    });

    $(".fc-listMonth-button").on("click", function () {
      const lastChild = document.querySelectorAll(".fc-list-table");
    });

    $(".open-popup-modal").each(function (i, e) {
      $(e).on("click", function () {
        $(this).siblings(".popup-overlay").fadeIn("slow").addClass("active");
        $(this)
          .siblings(".popup-overlay")
          .children(".popup-content")
          .fadeIn("slow")
          .addClass("active");
        $("body").fadeIn("slow").addClass("is-open");
      });
    });

    // See more/Less More
    $(".limit-list-item ul").each(function () {
      var LiN = $(this).find("li").length;
      if (LiN > 5) {
        $("li", this).eq(4).nextAll().hide().addClass("toggleable");
        $(this).append('<li class="mt-2 more">See more</li>');
      }
    });
    $(".limit-list-item ul").on("click", ".more", function () {
      if ($(this).hasClass("less")) {
        $(this).text("See more").removeClass("less");
      } else {
        $(this).text("See less").addClass("less");
      }
      $(this).siblings("li.toggleable").slideToggle();
    });

    //close the edit title modal
    $("body").on("click", function (e) {
      if (!e.target.closest(".open-popup-modal, .popup-content")) {
        $(".popup-overlay, .popup-content")
          .fadeIn("slow")
          .removeClass("active");
        $("body").fadeIn("slow").removeClass("is-open");
      }
    });
    window.addEventListener(
      "keydown",
      function (e) {
        if (
          (e.key == "Escape" || e.key == "Esc" || e.keyCode == 27) &&
          e.target.nodeName == "BODY"
        ) {
          $(".popup-overlay, .popup-content")
            .fadeIn("slow")
            .removeClass("active");
          $("body").fadeIn("slow").removeClass("is-open");
        }
      },
      true
    );

    /* Indeterminate */
    $('.bd-example-indeterminate [type="checkbox"]').prop(
      "indeterminate",
      true
    );

    /* Submenu position relative to it's parent */
    let submenus = document.querySelectorAll(".sidebar li.has-child");
    let direction = document.querySelector("html").getAttribute("dir");
    submenus.forEach((item) => {
      item.addEventListener("mouseover", function () {
        let menuItem = this;
        let menuItemRect = menuItem.getBoundingClientRect();
        let submenuWrapper = menuItem.querySelector("ul");
        submenuWrapper.style.top = `${menuItemRect.top}px`;
        if (direction === "ltr") {
          submenuWrapper.style.left = `${
            menuItemRect.left + Math.round(menuItem.offsetWidth * 0.75) + 10
          }px`;
        } else if (direction === "rtl") {
          submenuWrapper.style.right = `${
            Math.round(menuItem.offsetWidth * 0.75) + 10
          }px`;
        }
      });
    });

    /* sidebar scroll to active link on page load */
    const activeLink = document.querySelector(".sidebar_nav li a.active");
    if (activeLink !== null) {
      const activeLinkOffset = activeLink.offsetTop;
      //document.querySelector('.sidebar').style.marginTop = activeLinkOffset + 'px';
      $(".sidebar").animate(
        {
          scrollTop: activeLinkOffset - 120,
        },
        "slow"
      );
    }

    /* Active Composer */
    const btnCompose = document.querySelector(".btn-compose");
    const btnAddLabel = document.querySelector(".btn-add-label");
    const mailComposer = document.querySelector(".dm-mailCompose");
    const lebelForm = document.querySelector(".add-lebel-from");
    const closeCompose = document.querySelector(".compose-close");
    const closelabel = document.querySelector(".label-close");

    function showBox(e) {
      e.preventDefault();
      if (this.dataset.trigger == "label") lebelForm.classList.add("show");
      else if (this.dataset.trigger == "compose")
        mailComposer.classList.add("show");

      if ($(e.target).hasClass("label-close"))
        lebelForm.classList.remove("show");
    }

    function removeBox(e) {
      e.preventDefault();
      if (this.dataset.trigger == "label") lebelForm.classList.remove("show");
      else if (this.dataset.trigger == "compose")
        mailComposer.classList.remove("show");
    }

    if (btnCompose !== null && closeCompose !== null) {
      btnCompose.addEventListener("click", showBox);
      btnAddLabel.addEventListener("click", showBox);
    }

    if (closeCompose !== null && closelabel !== null) {
      closeCompose.addEventListener("click", removeBox);
      closelabel.addEventListener("click", removeBox);
    }

    /* Custom Input Number */
    function customQuantity() {
      $(
        '<div class="pt_QuantityNav"><div class="pt_QuantityButton pt_QuantityUp"><i class="las la-angle-up"></i></div><div class="pt_QuantityButton pt_QuantityDown"><i class="las la-angle-down"></i></div></div>'
      ).insertAfter(".pt_Quantity input");
      $(".pt_Quantity").each(function () {
        var spinner = $(this),
          input = spinner.find('input[type="number"]'),
          btnUp = spinner.find(".pt_QuantityUp"),
          btnDown = spinner.find(".pt_QuantityDown"),
          min = input.attr("min"),
          max = input.attr("max"),
          valOfAmout = input.val(),
          newVal = 0;

        btnUp.on("click", function () {
          var oldValue = parseFloat(input.val());

          if (oldValue >= max) {
            var newVal = oldValue;
          } else {
            var newVal = oldValue + 1;
          }
          spinner.find("input").val(newVal);
          spinner.find("input").trigger("change");
        });
        btnDown.on("click", function () {
          var oldValue = parseFloat(input.val());
          if (oldValue <= min) {
            var newVal = oldValue;
          } else {
            var newVal = oldValue - 1;
          }
          spinner.find("input").val(newVal);
          spinner.find("input").trigger("change");
        });
      });
    }
    customQuantity();

    /* Active Tooltip */
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );

    /* Sidebar Change */
    const layoutChangeBtns = document.querySelectorAll("[data-layout]");

    function changeLayout(e) {
      e.preventDefault();
      if (this.dataset.layout === "light") {
        $("ul.l_sidebar li a,.l_sidebar a").removeClass("active");
        $(this).addClass("active");
        $("body").removeClass("layout-dark");
        $("body").addClass("layout-light");
      } else if (this.dataset.layout === "dark") {
        $("ul.l_sidebar li a,.l_sidebar a").removeClass("active");
        $(this).addClass("active");
        $("body").removeClass("layout-light");
        $("body").addClass("layout-dark");
      } else if (this.dataset.layout === "side") {
        $("ul.l_navbar li a,.l_navbar a").removeClass("active");
        $(this).addClass("active");
        $("body").removeClass("top-menu");
        $("body").addClass("side-menu");
      } else if (this.dataset.layout === "top") {
        $("ul.l_navbar li a,.l_navbar a").removeClass("active");
        $(this).addClass("active");
        $("body").removeClass("side-menu");
        $("body").addClass("top-menu");
      }
    }
    $(".enable-dark-mode").click(function () {
      $("body").toggleClass("layout-dark");
      $(".enable-dark-mode a").toggleClass("active");
    });

    if (layoutChangeBtns) {
      layoutChangeBtns.forEach((layoutChangeBtn) =>
        layoutChangeBtn.addEventListener("click", changeLayout)
      );
      layoutChangeBtns.forEach((layoutChangeBtn) =>
        layoutChangeBtn.addEventListener("click", closeCustomizer)
      );
    }

    /* Customizing */
    const customizerBtn = document.querySelector(".customizer-trigger");
    const customizer = document.querySelector(".customizer-wrapper");
    const customizerClose = document.querySelector(".customizer-close");
    const customizerOverlay = document.querySelector(".customizer-overlay");

    function toggleCustomizer(e) {
      e.preventDefault();
      this.classList.toggle("show");
      customizer.classList.toggle("show");
      $(".customizer-overlay").addClass("show");
    }

    function closeCustomizer(e) {
      e.preventDefault();
      customizer.classList.remove("show");
      customizerBtn.classList.remove("show");
      customizerOverlay.classList.remove("show");
    }

    if (customizerBtn) {
      customizerBtn.addEventListener("click", toggleCustomizer);
    }

    if (customizerClose && customizerOverlay) {
      customizerClose.addEventListener("click", closeCustomizer);
      customizerOverlay.addEventListener("click", closeCustomizer);
    }

    $(".search-toggle").on("click", function (e) {
      e.preventDefault();
      $(this).toggleClass("active");
      $(".search-form-topMenu").toggleClass("show");
    });

    return () => {};
  }, []);
};
