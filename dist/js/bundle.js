/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/basket.js":
/*!**********************************!*\
  !*** ./src/js/modules/basket.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ basket)
/* harmony export */ });
function basket() {
  let itemBox = document.querySelectorAll(".item_box");
  let cartCont = document.getElementById("cart_content");

  function count() {
    let count = 0;
    if (getCartData()) {
      let cardData = getCartData();
      console.log(cardData);
      for (const key in cardData) {
        count += cardData[key][2];
        console.log(cardData[key][2]);
      }
    }
    return count;
  }
  //count();
  function removeItem(minus) {
    if (getCartData()) {
      let cardData = getCartData();
      let item = minus.getAttribute("data-id");
      cardData[item][2] = cardData[item][2] - 1;
      if (cardData[item][2] == 0) {
        delete cardData[item];
      }
      setCartData(cardData);
      let length = Object.getOwnPropertyNames(cardData);
      if (length == 0) {
        clearCart();
      }
      openCart();
    }
  }

  // Записываем данные в LocalStorage
  function setCartData(o) {
    localStorage.setItem("cart", JSON.stringify(o));
  }
  // Получаем данные из LocalStorage
  function getCartData() {
    return JSON.parse(localStorage.getItem("cart"));
  }

  function addToCart(e) {
    let button = e.target;
    button.disabled = true;
    let cartData = getCartData() || {};
    let parentBox = button.parentNode;
    let itemId = button.getAttribute("data-id");
    let itemTitle = parentBox.querySelector(".item_title").innerHTML;
    let itemPrice = parentBox.querySelector(".item_price").innerHTML;
    console.log(cartData);
    if (cartData.hasOwnProperty(itemId)) {
      cartData[itemId][2] += 1;
    } else {
      cartData[itemId] = [itemTitle, itemPrice, 1];
    }

    setCartData(cartData);
    button.disabled = false;
    cartCont.innerHTML = "The product has been added to the cart.";
    setTimeout(function () {
      cartCont.innerHTML = "Continue shopping...";
    }, 1000);
  }

  function openCart(e) {
    let cartData = getCartData();
    console.log(JSON.stringify(cartData));

    if (cartData !== null) {
      let cardTable = "";
      cardTable =
        '<table class="shopping_list"><tr><th>Name</th><th>Price</th><th>Count</th><th>Remove product</th></tr>';
      for (let items in cartData) {
        cardTable += "<tr>";
        for (let i = 0; i < cartData[items].length; i++) {
          cardTable += `<td>${cartData[items][i]}</td>`;
        }
        cardTable += `<td><span class="minus" onclick="removeItem(this)" data-id="${items}">-</span></td></tr>`;
      }
      cardTable += `<tr><td>Total price</td><td></td><td>${count()}</td><td></td></tr>`;
      cardTable += "<table>";
      cartCont.innerHTML = cardTable;
    } else {
      cartCont.innerHTML = "The shopping cart is empty!";
    }
  }

  function clearCart(e) {
    localStorage.removeItem("cart");
    cartCont.innerHTML = "The shopping cart cleared";
  }

  document.getElementById("clear_cart").addEventListener("click", clearCart);

  for (let i = 0; i < itemBox.length; i++) {
    itemBox[i].querySelector(".add_item").addEventListener("click", addToCart);
  }

  document.getElementById("checkout").addEventListener("click", openCart);
}


/***/ }),

/***/ "./src/js/modules/goods.js":
/*!*********************************!*\
  !*** ./src/js/modules/goods.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ goods)
/* harmony export */ });
function goods() {
  function insertBooks(books) {
    let str = ``;
    for (let i = 0; i < books.length; i++) {
      str += `<div class="bookWrap col-sm-4 col-12">`;
      str += `<div class="card text-center my-5 p-3">`;

      str += `<div class="card-title"><h5>${books[i].title}</h5></div>`;

      str += `<div class="image card-body"><img src="${books[i].imageCover}" width="200" /></div>`;
      str += `<div class="card-text"><p>${books[i].author}</p></div>`;
      str += `</div>`;
      str += `</div>`;
    }
    // str += `</div>`;
    document.getElementById("books").innerHTML = str;
  }

  async function loadBooks() {
    let url = "books.json";
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    insertBooks(data);
  }
  //loadBooks();
  document.getElementById("load").addEventListener("click", loadBooks);
  // window.addEventListener("load", loadBooks);
  // $("#load").click(function () {
  //   $.getJSON("books.json", function (result) {
  //     $.each(result, function (i, field) {
  //       $("#books").append(i + " " + field.title + "<br>");
  //     });
  //   });
  // });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_basket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/basket */ "./src/js/modules/basket.js");
/* harmony import */ var _modules_goods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/goods */ "./src/js/modules/goods.js");


window.addEventListener("DOMContentLoaded", function () {
  (0,_modules_basket__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_goods__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map