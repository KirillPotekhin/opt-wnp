/*! Movavi v0.0.1 | (c) 2020 Kirill Potekhin | MIT License | http://link-to-your-git-repo.com */
"use strict"; //forEach в ie11

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');

  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
} //.remove() ie11


if (!('remove' in Element.prototype)) {
  Element.prototype.remove = function () {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
} //Array.from ie11


if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;

    var isCallable = function isCallable(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };

    var toInteger = function toInteger(value) {
      var number = Number(value);

      if (isNaN(number)) {
        return 0;
      }

      if (number === 0 || !isFinite(number)) {
        return number;
      }

      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };

    var maxSafeInteger = Math.pow(2, 53) - 1;

    var toLength = function toLength(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    }; // The length property of the from method is 1.


    return function from(arrayLike
    /*, mapFn, thisArg */
    ) {
      // 1. Let C be the this value.
      var C = this; // 2. Let items be ToObject(arrayLike).

      var items = Object(arrayLike); // 3. ReturnIfAbrupt(items).

      if (arrayLike == null) {
        throw new TypeError("Array.from requires an array-like object - not null or undefined");
      } // 4. If mapfn is undefined, then let mapping be false.


      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;

      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        } // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.


        if (arguments.length > 2) {
          T = arguments[2];
        }
      } // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).


      var len = toLength(items.length); // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).

      var A = isCallable(C) ? Object(new C(len)) : new Array(len); // 16. Let k be 0.

      var k = 0; // 17. Repeat, while k < len… (also steps a - h)

      var kValue;

      while (k < len) {
        kValue = items[k];

        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }

        k += 1;
      } // 18. Let putStatus be Put(A, "length", len, true).


      A.length = len; // 20. Return A.

      return A;
    };
  })();
}

var basketLink = document.querySelector(".basket__link");
var modal = document.querySelectorAll(".modal");
var modalBasket = document.querySelector(".modal--basket");
var modalAlarm = document.querySelector(".modal--alarm");
var modalBasketClose = modalBasket.querySelector(".basket-modal__exit");
var modalAlarmClose = modalAlarm.querySelector(".alarm-modal__exit");
var modalOverlay = document.querySelector(".overlay");
var deleteTotalButton = modalBasket.querySelector(".basket-modal__total-delete");
var productWrapper = modalBasket.querySelector(".basket-modal__products");
var orderButton = document.querySelectorAll(".product-card__order"); // localStorage.clear();

var basketProducts = !!localStorage.getItem("basketProduct") ? JSON.parse(localStorage.getItem("basketProduct")).filter((function (it) {
  return it;
})) : [{
  title: "ALCHEMY OF CRYSTALS STICKER PACK",
  priceOld: 99,
  priceClick: 99,
  id: 0,
  img: "img/product.png"
}];

var renderProduct = function renderProduct() {
  var productAll = productWrapper.querySelectorAll(".basket-modal__product");
  productAll.forEach((function (it) {
    it.remove();
  }));

  var _iterator = _createForOfIteratorHelper(basketProducts),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var basketProduct = _step.value;
      var priceValue = !!localStorage.getItem("isStock") ? basketProduct.priceOld : basketProduct.priceClick;
      productWrapper.insertAdjacentHTML('beforeEnd', createProduct(basketProduct.title, priceValue, basketProduct.id, basketProduct.img));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  onCalculateTotalPrice();
};

var createProduct = function createProduct(titleCard, priceValue, id, img) {
  return "<div class=\"basket-modal__product\">\n    <img class=\"basket-modal__product-image\" src=\"".concat(img, "\" width=\"134\" height=\"75\" alt=\"product\">\n    <div class=\"basket-modal__product-description\">\n      <p class=\"basket-modal__product-title\">").concat(titleCard, "</p>\n      <div class=\"basket-modal__description-wrapper\">\n        <div class=\"basket-modal__price\">\n          <span class=\"basket-modal__price-value\">").concat(priceValue, ".0</span>\n          <span class=\"basket-modal__price-currency\">\u0440\u0443\u0431.</span>\n        </div>\n        <a class=\"basket-modal__delete\" href=\"#\" data-id=\"").concat(id, "\">\n          <span class=\"basket-modal__delete-item\">Delete</span>\n        </a>\n      </div>\n    </div>\n  </div>");
};

var getOrderButtom = function getOrderButtom() {
  return orderButton.forEach((function (it, i) {
    var render = function render() {
      var titleCard = Array.from(document.querySelectorAll(".product-card__title"))[i].textContent;
      var price = Array.from(document.querySelectorAll(".product-card__price--actual .product-card__price-value"))[i].textContent;
      var priceOld = Array.from(document.querySelectorAll(".product-card__price--old .product-card__price-value"))[i].textContent;
      var priceValue = !!localStorage.getItem("isStock") ? priceOld : price;
      var src = "http://picsum.photos/300/150?r=".concat(Math.random());

      if (basketProducts.some((function (product) {
        return product.title === titleCard;
      }))) {
        alert("\u0422\u0430\u043A\u043E\u0439 \u0442\u043E\u0432\u0430\u0440 \u0443\u0436\u0435 \u0432\u044B\u0431\u0440\u0430\u043D");
      } else {
        basketProducts.push({
          title: titleCard,
          priceOld: priceOld,
          priceClick: price,
          id: basketProducts.length,
          img: src
        });
        productWrapper.insertAdjacentHTML('beforeEnd', createProduct(titleCard, priceValue, i, src));
      }
    };

    var action = function action() {
      render();
      onCalculateTotalPrice();
      onRecordLocalStorageArray();
    };

    it.addEventListener("click", action);
  }));
}; //Modal


var onKeyEscDown = function onKeyEscDown(evt) {
  if (evt.key === "Escape" || evt.key === "Esc") {
    onCloseModal();
  }
};

var onClickOverlayCloseModal = function onClickOverlayCloseModal(evt) {
  if (evt.target == modalOverlay) {
    onCloseModal();
  }
};

var onOpenModal = function onOpenModal(modal) {
  return function (evt) {
    onCloseModal();
    modal.style.display = "block";
    modalOverlay.style.display = "block";
    document.addEventListener("keydown", onKeyEscDown);
    document.addEventListener("click", onClickOverlayCloseModal);

    if (modal == modalBasket) {
      evt.preventDefault();
      onClickDeleteProduct();
      onClickDeleteAllProduct();
      console.log(basketProducts);
    }
  };
};

var onCloseModal = function onCloseModal() {
  modalAlarm.style.display = "none";
  modalBasket.style.display = "none";
  modalOverlay.style.display = "none";
  document.removeEventListener("keydown", onKeyEscDown);
  document.removeEventListener("click", onClickOverlayCloseModal);
};

var onClickButtonCloseModal = function onClickButtonCloseModal(evt) {
  evt.preventDefault();
  onCloseModal();
}; //Корзина Modal


basketLink.addEventListener("click", onOpenModal(modalBasket));
modalBasketClose.addEventListener("click", onClickButtonCloseModal); //Окончание акции Modal

modalAlarmClose.addEventListener("click", onClickButtonCloseModal); //Записываю массив с продуктами в localstorage

var onRecordLocalStorageArray = function onRecordLocalStorageArray() {
  localStorage.removeItem("basketProduct");
  localStorage.setItem("basketProduct", JSON.stringify(basketProducts));
}; //Считает итоговую цену


var onCalculateTotalPrice = function onCalculateTotalPrice() {
  var price = productWrapper.querySelectorAll(".basket-modal__price-value");
  var total = Array.from(price);
  var prices = [];

  for (var i = 0; i < total.length; i++) {
    prices.push(Number(total[i].textContent.replace(/ /g, "")));
  }

  var totalPrice = prices.length ? prices.reduce((function (arr, atr) {
    return arr + atr;
  })) : 0;
  document.querySelector(".basket-modal__total-value").textContent = "".concat(totalPrice, ".0");
  document.querySelector(".basket__price-value").textContent = "".concat(totalPrice, ".0");
}; //Функция удаления товара из корзины


var onClickDeleteProduct = function onClickDeleteProduct() {
  var productAll = productWrapper.querySelectorAll(".basket-modal__product");
  var deleteButton = modalBasket.querySelectorAll(".basket-modal__delete");
  deleteButton.forEach((function (it, i) {
    it.addEventListener("click", (function (evt) {
      evt.preventDefault();
      productAll[i].remove();
      basketProducts = basketProducts.filter((function (product) {
        return product.id.toString() !== it.dataset.id;
      }));
      onRecordLocalStorageArray();
      onCalculateTotalPrice();
    }));
  }));
}; //Функция удаления всех товаров из корзины


var onClickDeleteAllProduct = function onClickDeleteAllProduct() {
  var productAll = productWrapper.querySelectorAll(".basket-modal__product");
  deleteTotalButton.addEventListener("click", (function (evt) {
    evt.preventDefault();
    productAll.forEach((function (it) {
      it.remove();
      onCalculateTotalPrice();
    }));
    basketProducts.splice(0, basketProducts.length);
    onRecordLocalStorageArray();
  }));
}; //Timer


var alarmInfo = document.querySelector(".product-card__alarm-info");
var timerTime = 15 * 60;
var lsKey = "timerEnd";
var savedTime = parseInt(localStorage.getItem(lsKey));

var castTimeFormat = function castTimeFormat(value) {
  return value < 10 ? "0".concat(value) : "".concat(value);
};

var timerStart = function timerStart(finishDate) {
  localStorage.setItem(lsKey, finishDate.getTime());
  var timerId = setInterval((function () {
    var seconds = parseInt((finishDate - new Date()) / 1000);
    var alarmMinute = parseInt((finishDate - new Date()) / 1000 / 60);
    var alarmSecond = parseInt((finishDate - new Date() - alarmMinute * 1000 * 60) / 1000);
    alarmInfo.textContent = "Offer valid ".concat(castTimeFormat(alarmMinute), " : ").concat(castTimeFormat(alarmSecond));

    if (seconds <= 0) {
      clearInterval(timerId);
      onOpenModal(modalAlarm)();
      discountNo();
      localStorage.setItem("isStock", "false");
      renderProduct();
    }
  }), 100);
};

window.onload = function () {
  var date = new Date(); //Чтобы таймер больше не запускался

  savedTime ? date.setTime(savedTime) : date.setTime(date.getTime() + 1000 * timerTime);
  !!localStorage.getItem("isStock") ? discountNo() : timerStart(date); //Вставляет товары в корзину

  renderProduct();
  onCalculateTotalPrice();
  getOrderButtom();
}; //Функция, которая при окончании таймера удаляет его из карточки, скрывает акционную цену и делает выравнивание 


var discountNo = function discountNo() {
  var actualPrice = document.querySelectorAll(".product-card__price");

  if (!!document.querySelector(".product-card__alarm")) {
    document.querySelector(".product-card__alarm").remove();
    document.querySelector(".product-card__wrapper-detail").style.justifyContent = "flex-end";
    actualPrice.forEach((function (it) {
      it.classList.toggle("product-card__price--actual");
      !it.classList.contains("product-card__price--actual") ? it.remove() : "";
    }));
  }
};