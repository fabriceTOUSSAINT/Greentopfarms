// Custom stuff
$(document).ready(function ($) {
  // properties[Date]
  // 	if ( $('input[name="properties[Date]"]') ) {
  // 		let n =  new Date();
  // 		let y = n.getFullYear();
  // 		let m = n.getMonth() + 1;
  // 		let d = n.getDate() + 1;
  // 		let date = y + "-" + m + "-" + d;
  // 		$('input[name="properties[Date]"]').attr('min', date);
  // 	}

  // Cart Page
  const toDisableCheckoutButton = false;
  console.warn("jawn this should update");

  const isProductPage = document.body.classList.contains("template--product");

  //     if ( isProductPage && $('#delivery-date')[0].type != 'date' ) {
  if (isProductPage && $("#delivery-date")[0]) {
    var dateToday = new Date();
    $("#delivery-date").datepicker({
      minDate: dateToday,
    });
    $("#delivery-time").timepicker({
      timeFormat: "h:mm p",
      interval: 15,
      minTime: "8",
      maxTime: "6:00pm",
      defaultTime: "11",
      startTime: "8:00",
      dynamic: false,
      dropdown: true,
      scrollbar: true,
    });
  }

  const isShoppingCartPage = document.body.classList.contains(
    "page--your-shopping-cart"
  );
  if (isShoppingCartPage) {
    // Check if zipcode is in radius
    const nyc_zipcodes = [
      10199,
      10008,
      10185,
      10179,
      10178,
      10177,
      10176,
      10175,
      10174,
      10173,
      10172,
      10171,
      10170,
      10169,
      10168,
      10167,
      10166,
      10165,
      10164,
      10163,
      10162,
      10161,
      10160,
      10159,
      10158,
      10157,
      10156,
      10155,
      10154,
      10153,
      10152,
      10152,
      10151,
      10150,
      10138,
      10133,
      10132,
      10131,
      10130,
      10129,
      10128,
      10126,
      10125,
      10124,
      10122,
      10123,
      10121,
      10120,
      10119,
      10118,
      10117,
      10116,
      10115,
      10113,
      10114,
      10112,
      10111,
      10110,
      10453,
      10109,
      10108,
      10107,
      10106,
      10105,
      10104,
      10103,
      10102,
      10101,
      10090,
      10087,
      10081,
      10080,
      10075,
      10069,
      10065,
      10060,
      10055,
      10045,
      10044,
      10043,
      10041,
      10040,
      10039,
      10038,
      10037,
      10036,
      10035,
      10034,
      10033,
      10032,
      10031,
      10030,
      10279,
      10278,
      10277,
      10276,
      10275,
      10274,
      10273,
      10272,
      10271,
      10270,
      10269,
      10261,
      10259,
      10258,
      10256,
      10213,
      10212,
      10211,
      10203,
      10249,
      10242,
      10260,
      10268,
      10267,
      10266,
      10265,
      10457,
      10460,
      10458,
      10467,
      10468,
      10451,
      10452,
      10456,
      10454,
      10455,
      10459,
      10474,
      10463,
      10471,
      10466,
      10469,
      10470,
      10475,
      10461,
      10462,
      10464,
      10465,
      10472,
      10473,
      11212,
      11213,
      11216,
      11233,
      11238,
      11209,
      11214,
      11228,
      11204,
      11218,
      11219,
      11230,
      11234,
      11236,
      11239,
      11223,
      11224,
      11229,
      11235,
      11201,
      11205,
      11215,
      11217,
      11231,
      11203,
      11210,
      11225,
      11226,
      11207,
      11208,
      11211,
      11222,
      11220,
      11232,
      11206,
      11221,
      11237,
      10026,
      10027,
      10030,
      10037,
      10039,
      10001,
      10011,
      10018,
      10019,
      10020,
      10036,
      10029,
      10035,
      10010,
      10016,
      10017,
      10022,
      10012,
      10013,
      10014,
      10004,
      10005,
      10006,
      10007,
      10038,
      10280,
      10281,
      10282,
      10285,
      10286,
      10002,
      10003,
      10009,
      10021,
      10028,
      10044,
      10065,
      10075,
      10128,
      10023,
      10024,
      10025,
      10031,
      10032,
      10033,
      10034,
      10040,
      11361,
      11362,
      11363,
      11364,
      11354,
      11355,
      11356,
      11357,
      11358,
      11359,
      11360,
      11365,
      11366,
      11367,
      11412,
      11423,
      11432,
      11433,
      11434,
      11435,
      11436,
      11101,
      11102,
      11103,
      11104,
      11105,
      11106,
      11374,
      11375,
      11379,
      11385,
      11691,
      11692,
      11693,
      11694,
      11695,
      11697,
      11004,
      11005,
      11411,
      11413,
      11422,
      11426,
      11427,
      11428,
      11429,
      11414,
      11415,
      11416,
      11417,
      11418,
      11419,
      11420,
      11421,
      11368,
      11369,
      11370,
      11372,
      11373,
      11377,
      11378,
    ];

    const zipcode_btn = document.getElementById("zipcode");

    document
      .getElementById("delivery-radius")
      .addEventListener("keypress", function (event) {
        if (event.keyCode == 13) {
          event.preventDefault();
          checkZipCode(event);
        }
      });

    // Listen to button click, to check user submission if zipcode is in NYC
    zipcode_btn.addEventListener("click", (event) => checkZipCode(event));

    const checkZipCode = (event) => {
      const zipcodeEl = document.getElementById("delivery-radius");
      const zipcodeEntered = parseInt(zipcodeEl.value);
      const inRadius = zipcodeEntered
        ? nyc_zipcodes.includes(zipcodeEntered)
        : false;
      const checkoutBtns = document.querySelectorAll(".disabled--checkout");

      disableCheckout(!inRadius);

      if (!inRadius) {
        zipcodeEl.classList.add("delivery-radius-fail");
        zipcodeEl.classList.remove("delivery-radius-success");

        if (
          window.confirm(
            'Sorry you are out of our delivery radius. Select "OK" to head to our contact us to see what we can do. '
          )
        ) {
          window.location.href = "/pages/our-approach";
        }
      } else {
        zipcodeEl.classList.remove("delivery-radius-fail");
        zipcodeEl.classList.add("delivery-radius-success");
      }
    };

    // Calculate amount of hours until scheduled delivery time to determine if within order cutoff time
    const individualCutoff = 8; // 8am;
    const caterCutoff = 12; // 12pm
    let missedCheckoutTime = false;
    const mainContent = document.querySelector(
      ".layout--main-content  .content"
    );
    const cartItems = mainContent.querySelectorAll(".variant-id");

    cartItems.forEach((item, index) => {
      const dateEl = item.querySelector(".js-delivery-Delivery-Date");
      const timeEl = item.querySelector(".js-delivery-Delivery-Time");

      if (!dateEl || !timeEl) {
        if (item.dataset.variantId == "17822881185849") {
          // If item is a tip, add note
          let tipValue = $("#updates_17822881185849").val();
          tipValue = parseInt(tipValue) * 0.01;
          $(".tip-block-header").addClass("tip-block-header--tip-added");
          $(".tip-block-header").after(
            "<span class='tip-block-header--tip-added-value'>Thank you for your tip of $" +
              tipValue +
              "</span>"
          );
        }

        // If item is neither a tip or has no date or time return
        return;
      }

      const date = dateEl.dataset.deliveryDeliveryDate;
      const time = timeEl.dataset.deliveryDeliveryTime;

      const deliveryTime = new Date(`${date} ${time}`).getTime();
      const deliveryDate = new Date(`${date} GMT-0500`).getDate();
      const currentTime = new Date().getTime();
      const currentHour = new Date().getHours();
      const todaysDate = new Date().getDate();

      const timeRemaining = parseInt((deliveryTime - currentTime) / 1000);
      const hoursLeft = parseInt(timeRemaining / 3600);
      const daysAwayFromDelivery = deliveryDate - todaysDate;

      window.Shopify.getCart(function (result) {
        const productTags = result.items[index].properties.tags.split(",");
        const isCatering = productTags.includes("Catering");
        const isIndividual = productTags.includes("Individual");

        const isCaterDeliveryCutoff = isCatering && hoursLeft <= 24;
        const isCaterTimeCutoff =
          currentHour >= caterCutoff || deliveryTime <= currentHour;

        const isIndividualDeliveryCutoff =
          isIndividual && daysAwayFromDelivery <= 0;
        const isIndividualTimeCutoff =
          currentHour >= individualCutoff || deliveryTime <= currentHour;

        // catering
        if (isCaterDeliveryCutoff && isCaterTimeCutoff) {
          dateEl.classList.add("past-cutoff");
          timeEl.classList.add("past-cutoff");
          missedCheckoutTime = true;
        } else if (isIndividualDeliveryCutoff && isIndividualTimeCutoff) {
          dateEl.classList.add("past-cutoff");
          timeEl.classList.add("past-cutoff");
          missedcheckoutTime = true;
        }

        if (missedCheckoutTime) {
          const cutOffBtn = document.querySelector(".js-delivery-time-btn");
          cutOffBtn.classList.remove("hide-element");
          disableCheckout(true);
        }
      });
    });
  }
});

function disableCheckout(toDisable) {
  const checkoutBtns = document.querySelectorAll(".disabled--checkout");

  if (toDisable) {
    checkoutBtns.forEach((button) => {
      button.classList.remove("successful--checkout");
    });
  } else {
    checkoutBtns.forEach((button) => {
      button.classList.add("successful--checkout");
    });
  }
}
