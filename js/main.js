/*! Movavi v0.0.1 | (c) 2020 Kirill Potekhin | MIT License | http://link-to-your-git-repo.com */
"use strict";

var feedbackBtn = document.querySelector(".main-nav__feedback");

var scrollToFeedback = function scrollToFeedback() {
  var feedbackOffsetHeight = document.querySelector(".feedback");
  feedbackOffsetHeight.scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
};

feedbackBtn.addEventListener('click', scrollToFeedback);
var pageHeader = document.querySelector(".page-header");
var pageHeaderHeight = pageHeader.offsetHeight;
window.addEventListener("scroll", (function () {
  var feedbackOffsetHeight = document.querySelector(".feedback").offsetTop;

  if (window.scrollY >= feedbackOffsetHeight - pageHeaderHeight) {
    pageHeader.classList.add("visually-hidden");
    return;
  }

  pageHeader.classList.remove("visually-hidden");
}));
var Specification = {
  seasonFall: "fall",
  seasonWinter: "winter",
  seasonSummer: "summer",
  typeHat: "\u0428\u0430\u043F\u043A\u0430",
  typeBandage: "\u041F\u043E\u0432\u044F\u0437\u043A\u0430",
  typeSnood: "\u0421\u043D\u0443\u0434",
  typeScarf: "\u0428\u0430\u0440\u0444",
  typeKlondike: "\u041A\u043E\u0441\u044B\u043D\u043A\u0430",
  typeBandana: "\u0411\u0430\u043D\u0434\u0430\u043D\u0430",
  typePanama: "\u041F\u0430\u043D\u0430\u043C\u0430",
  typeRubber: "\u0420\u0435\u0437\u0438\u043D\u043A\u0430-\u043F\u043B\u0430\u0442\u043E\u043A",
  typeSolokha: "\u0421\u043E\u043B\u043E\u0445\u0430",
  modelAlfa: "\u0410\u043B\u044C\u0444\u0430",
  modelApolon: "\u0410\u043F\u043E\u043B\u043E\u043D",
  modelBerlin: "\u0411\u0435\u0440\u043B\u0438\u043D",
  modelValencia: "\u0412\u0430\u043B\u0435\u043D\u0441\u0438\u044F",
  modelVenera: "\u0412\u0435\u043D\u0435\u0440\u0430",
  modelGera: "\u0413\u0435\u0440\u0430",
  modelZevs: "\u0417\u0435\u0432\u0441",
  modelKapella: "\u041A\u0430\u043F\u0435\u043B\u043B\u0430",
  modelLapland: "\u041B\u0430\u043F\u043B\u0430\u043D\u0434\u0438\u044F",
  modelLondon: "\u041B\u043E\u043D\u0434\u043E\u043D",
  modelMiami: "\u041C\u0430\u0439\u0430\u043C\u0438",
  modelMars: "\u041C\u0430\u0440\u0441",
  modelNika: "\u041D\u0438\u043A\u0430",
  modelOlimpia: "\u041E\u043B\u0438\u043C\u043F\u0438\u044F",
  modelOlimpia2side: "\u041E\u043B\u0438\u043C\u043F\u0438\u044F 2\u0445 \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u044F\u044F",
  modelOlimpia2sideiy: "\u041E\u043B\u0438\u043C\u043F\u0438\u044F 2\u0445 \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u0439",
  modelOrion: "\u041E\u0440\u0438\u043E\u043D",
  modelSafari: "\u0421\u0430\u0444\u0430\u0440\u0438",
  modelSelena: "\u0421\u0435\u043B\u0435\u043D\u0430",
  modelSirius: "\u0421\u0438\u0440\u0438\u0443\u0441",
  size3840: "38-40",
  size4046: "40-46",
  size4244: "42-44",
  size4246: "42-46",
  size4448: "44-48",
  size4648: "46-48",
  size4850: "48-50",
  size4852: "48-52",
  size4854: "48-54",
  size5052: "50-52",
  size5053: "50-53",
  size5254: "52-54",
  size5258: "52-58",
  size5458: "54-58",
  size5658: "56-58",
  sizeM: "M",
  sizeS: "S",
  composition100a: "100% \u0430\u043A\u0440\u0438\u043B",
  composition100h: "100% \u0445\u043B\u043E\u043F\u043E\u043A",
  composition30w70a: "30% \u0448\u0435\u0440\u0441\u0442\u044C, 70% \u0430\u043A\u0440\u0438\u043B",
  composition50w50a: "50% \u0448\u0435\u0440\u0441\u0442\u044C, 50% \u0430\u043A\u0440\u0438\u043B",
  composition60pe35v5s: "60% \u043F\u043E\u043B\u0438\u044D\u0441\u0442\u0435\u0440, 35% \u0432\u0438\u0441\u043A\u043E\u0437\u0430, 5% \u0441\u043F\u0430\u043D\u0434\u0435\u043A\u0441",
  composition92pe8n: "92% \u043F\u043E\u043B\u0438\u044D\u0441\u0442\u0435\u0440, 8% \u043D\u0435\u0439\u043B\u043E\u043D",
  composition95pe5e: "95% \u043F\u043E\u043B\u0438\u044D\u0441\u0442\u0435\u0440, 5% \u044D\u043B\u0430\u0441\u0442\u0430\u043D",
  composition95h5e: "95% \u0445\u043B\u043E\u043F\u043E\u043A, 5% \u044D\u043B\u0430\u0441\u0442\u0430\u043D",
  composition96pe4e: "96% \u043F\u043E\u043B\u0438\u044D\u0441\u0442\u0435\u0440, 4% \u044D\u043B\u0430\u0441\u0442\u0430\u043D",
  composition97h3e: "97% \u0445\u043B\u043E\u043F\u043E\u043A, 3% \u044D\u043B\u0430\u0441\u0442\u0430\u043D"
};
var products = [{
  season: Specification.seasonFall,
  model: Specification.modelOlimpia,
  type: Specification.typeHat,
  sizeSmall: "".concat(Specification.size4850, " / ").concat(Specification.size5052),
  sizeHigh: "".concat(Specification.size5254, " / ").concat(Specification.size5658),
  composition: Specification.composition95pe5e,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: 600,
  priceHigh: 700
}, {
  season: Specification.seasonFall,
  model: Specification.modelOlimpia,
  type: Specification.typeBandage,
  sizeSmall: "",
  sizeHigh: "".concat(Specification.sizeS, " / ").concat(Specification.sizeM),
  composition: Specification.composition95pe5e,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: "",
  priceHigh: 400
}, {
  season: Specification.seasonFall,
  model: Specification.modelOlimpia,
  type: Specification.typeSnood,
  sizeSmall: "".concat(Specification.sizeS),
  sizeHigh: "".concat(Specification.sizeM),
  composition: Specification.composition95pe5e,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: 600,
  priceHigh: 700
}, {
  season: Specification.seasonFall,
  model: Specification.modelOlimpia2side,
  type: Specification.typeHat,
  sizeSmall: "".concat(Specification.size4850),
  sizeHigh: "".concat(Specification.size5254, " / ").concat(Specification.size5658),
  composition: Specification.composition95pe5e,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: 650,
  priceHigh: 750
}, {
  season: Specification.seasonFall,
  model: Specification.modelOlimpia2sideiy,
  type: Specification.typeSnood,
  sizeSmall: "".concat(Specification.sizeS),
  sizeHigh: "".concat(Specification.sizeM),
  composition: Specification.composition95pe5e,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: 650,
  priceHigh: 750
}, {
  season: Specification.seasonFall,
  model: Specification.modelOrion,
  type: Specification.typeHat,
  sizeSmall: "",
  sizeHigh: "".concat(Specification.size5254, " / ").concat(Specification.size5658),
  composition: Specification.composition95pe5e,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: 600,
  priceHigh: 700
}, {
  season: Specification.seasonFall,
  model: Specification.modelOrion,
  type: Specification.typeSnood,
  sizeSmall: "".concat(Specification.sizeS),
  sizeHigh: "".concat(Specification.sizeM),
  composition: Specification.composition95pe5e,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: 600,
  priceHigh: 700
}, {
  season: Specification.seasonFall,
  model: Specification.modelZevs,
  type: Specification.typeHat,
  sizeSmall: "",
  sizeHigh: "".concat(Specification.sizeS, " / ").concat(Specification.sizeM),
  composition: Specification.composition30w70a,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: "",
  priceHigh: 900
}, {
  season: Specification.seasonFall,
  model: Specification.modelZevs,
  type: Specification.typeSnood,
  sizeSmall: "",
  sizeHigh: "".concat(Specification.sizeM),
  composition: Specification.composition30w70a,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: "",
  priceHigh: 900
}, {
  season: Specification.seasonFall,
  model: Specification.modelKapella,
  type: Specification.typeHat,
  sizeSmall: "",
  sizeHigh: "".concat(Specification.sizeS, " / ").concat(Specification.sizeM),
  composition: Specification.composition30w70a,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: "",
  priceHigh: 900
}, {
  season: Specification.seasonFall,
  model: Specification.modelKapella,
  type: Specification.typeScarf,
  sizeSmall: "",
  sizeHigh: "".concat(Specification.sizeM),
  composition: Specification.composition30w70a,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: "",
  priceHigh: 900
}, {
  season: Specification.seasonFall,
  model: Specification.modelGera,
  type: Specification.typeHat,
  sizeSmall: "",
  sizeHigh: "".concat(Specification.sizeM),
  composition: Specification.composition100a,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: "",
  priceHigh: 800
}, {
  season: Specification.seasonFall,
  model: Specification.modelGera,
  type: Specification.typeSnood,
  sizeSmall: "",
  sizeHigh: "".concat(Specification.sizeM),
  composition: Specification.composition100a,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: "",
  priceHigh: 800
}, {
  season: Specification.seasonFall,
  model: Specification.modelNika,
  type: Specification.typeBandage,
  sizeSmall: "",
  sizeHigh: "".concat(Specification.sizeM),
  composition: Specification.composition96pe4e,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: "",
  priceHigh: 580
}, {
  season: Specification.seasonFall,
  model: Specification.modelSelena,
  type: Specification.typeBandage,
  sizeSmall: "",
  sizeHigh: "".concat(Specification.sizeM),
  composition: Specification.composition92pe8n,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: "",
  priceHigh: 500
}, {
  season: Specification.seasonFall,
  model: Specification.modelAlfa,
  type: Specification.typeHat,
  sizeSmall: "",
  sizeHigh: "".concat(Specification.size5258),
  composition: Specification.composition60pe35v5s,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: "",
  priceHigh: 900
}, {
  season: Specification.seasonFall,
  model: Specification.modelAlfa,
  type: Specification.typeBandage,
  sizeSmall: "",
  sizeHigh: "".concat(Specification.sizeM),
  composition: Specification.composition60pe35v5s,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: "",
  priceHigh: 550
}, {
  season: Specification.seasonFall,
  model: Specification.modelAlfa,
  type: Specification.typeSnood,
  sizeSmall: "",
  sizeHigh: "".concat(Specification.sizeM),
  composition: Specification.composition60pe35v5s,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: "",
  priceHigh: 1000
}, {
  season: Specification.seasonFall,
  model: Specification.modelMars,
  type: Specification.typeHat,
  sizeSmall: "",
  sizeHigh: "".concat(Specification.size4448, " / ").concat(Specification.size5052),
  composition: Specification.composition95h5e,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: "",
  priceHigh: 600
}, {
  season: Specification.seasonSummer,
  model: Specification.modelSafari,
  type: Specification.typePanama,
  sizeSmall: "",
  sizeHigh: "".concat(Specification.size4648, " / ").concat(Specification.size5052, " / ").concat(Specification.size5458),
  composition: Specification.composition97h3e,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: "",
  priceHigh: 750
}, {
  season: Specification.seasonSummer,
  model: Specification.modelSafari,
  type: Specification.typeHat,
  sizeSmall: "",
  sizeHigh: "".concat(Specification.size4850, " / ").concat(Specification.size5254),
  composition: Specification.composition100h,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: "",
  priceHigh: 500
}, {
  season: Specification.seasonSummer,
  model: Specification.modelMiami,
  type: Specification.typeBandage,
  sizeSmall: "",
  sizeHigh: "".concat(Specification.size5458),
  composition: Specification.composition95pe5e,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: "",
  priceHigh: 700
}, {
  season: Specification.seasonSummer,
  model: Specification.modelMiami,
  type: Specification.typeRubber,
  sizeSmall: "",
  sizeHigh: "".concat(Specification.sizeM),
  composition: Specification.composition95pe5e,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: "",
  priceHigh: 600
}, {
  season: Specification.seasonSummer,
  model: Specification.modelSafari,
  type: Specification.typeKlondike,
  sizeSmall: "",
  sizeHigh: "".concat(Specification.size4246, " / ").concat(Specification.size4852, " / ").concat(Specification.size5458),
  composition: Specification.composition100h,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: "",
  priceHigh: 400
}, {
  season: Specification.seasonSummer,
  model: Specification.modelSafari,
  type: Specification.typeBandage,
  sizeSmall: "",
  sizeHigh: "".concat(Specification.size4850, " / ").concat(Specification.size5254, " / ").concat(Specification.size5658),
  composition: Specification.composition100h,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: "",
  priceHigh: 400
}, {
  season: Specification.seasonSummer,
  model: Specification.modelSafari,
  type: Specification.typeSolokha,
  sizeSmall: "",
  sizeHigh: "".concat(Specification.sizeM),
  composition: Specification.composition97h3e,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: "",
  priceHigh: 400
}, {
  season: Specification.seasonSummer,
  model: Specification.modelSafari,
  type: Specification.typeBandana,
  sizeSmall: "",
  sizeHigh: "".concat(Specification.size4854),
  composition: Specification.composition97h3e,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: "",
  priceHigh: 450
}, {
  season: Specification.seasonWinter,
  model: Specification.modelLondon,
  type: Specification.typeHat,
  sizeSmall: "",
  sizeHigh: "".concat(Specification.sizeM),
  composition: Specification.composition50w50a,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: "",
  priceHigh: 1400
}, {
  season: Specification.seasonWinter,
  model: Specification.modelLondon,
  type: Specification.typeSnood,
  sizeSmall: "",
  sizeHigh: "".concat(Specification.sizeM),
  composition: Specification.composition50w50a,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: "",
  priceHigh: 1900
}, {
  season: Specification.seasonWinter,
  model: Specification.modelValencia,
  type: Specification.typeHat,
  sizeSmall: "",
  sizeHigh: "".concat(Specification.sizeM),
  composition: Specification.composition50w50a,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: "",
  priceHigh: 1700
}, {
  season: Specification.seasonWinter,
  model: Specification.modelLapland,
  type: Specification.typeHat,
  sizeSmall: "",
  sizeHigh: "".concat(Specification.sizeM),
  composition: Specification.composition50w50a,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: "",
  priceHigh: 1600
}, {
  season: Specification.seasonWinter,
  model: Specification.modelBerlin,
  type: Specification.typeHat,
  sizeSmall: "",
  sizeHigh: "".concat(Specification.sizeM),
  composition: Specification.composition50w50a,
  color: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u043A\u0438 \u0443\u0442\u043E\u0447\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435",
  priceSmall: "",
  priceHigh: 1200
}];

var randomInteger = function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

var createElements = function createElements(container, products) {
  var content = document.createElement('div');
  products.forEach((function (product, index) {
    var template = "<article class=\"catalog__item ".concat(index % 2 !== 0 ? "catalog__item--reverse catalog__item--reverse-color" : "", "\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"catalog__item-pictures\">\n\t\t\t\t\t<div class=\"catalog__item-picture\">\n\t\t\t\t\t\t<img class=\"catalog__item-img\" width=\"288px\" height=\"288px\" alt=\"\u041D\u0430\u0448\u0438 \u043C\u043E\u0434\u0435\u043B\u0438\" src=\"img/slide").concat(randomInteger(1, 3), ".jpg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"catalog__item-picture\">\n\t\t\t\t\t\t<img class=\"catalog__item-img\" width=\"288px\" height=\"288px\" alt=\"\u041D\u0430\u0448\u0438 \u043C\u043E\u0434\u0435\u043B\u0438\" src=\"img/slide2.jpg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"catalog__item-picture\">\n\t\t\t\t\t\t<img class=\"catalog__item-img\" width=\"288px\" height=\"288px\" alt=\"\u041D\u0430\u0448\u0438 \u043C\u043E\u0434\u0435\u043B\u0438\" src=\"img/slide3.jpg\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"catalog__item-description\">\n\t\t\t\t\t<table class=\"catalog__table\">\n\t\t\t\t\t\t<tr class=\"catalog__table-line\">\n\t\t\t\t\t\t\t<td class=\"catalog__table-cell catalog__table-cell--font\">\u041C\u043E\u0434\u0435\u043B\u044C</td>\n\t\t\t\t\t\t\t<td class=\"catalog__table-cell\">").concat(product.model, "</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr class=\"catalog__table-line\">\n\t\t\t\t\t\t\t<td class=\"catalog__table-cell catalog__table-cell--font\">\u0422\u0438\u043F</td>\n\t\t\t\t\t\t\t<td class=\"catalog__table-cell\">").concat(product.type, "</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr class=\"catalog__table-line\">\n\t\t\t\t\t\t\t<td class=\"catalog__table-cell catalog__table-cell--font\">\u0420\u0430\u0437\u043C\u0435\u0440</td>\n\t\t\t\t\t\t\t<td class=\"catalog__table-cell\">").concat(product.sizeSmall !== "" ? "".concat(product.sizeSmall, " / ").concat(product.sizeHigh) : "".concat(product.sizeHigh), "</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr class=\"catalog__table-line\">\n\t\t\t\t\t\t\t<td class=\"catalog__table-cell catalog__table-cell--font\">\u0421\u043E\u0441\u0442\u0430\u0432</td>\n\t\t\t\t\t\t\t<td class=\"catalog__table-cell\">").concat(product.composition, "</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr class=\"catalog__table-line\">\n\t\t\t\t\t\t\t<td class=\"catalog__table-cell catalog__table-cell--font\">\u0426\u0432\u0435\u0442</td>\n\t\t\t\t\t\t\t<td class=\"catalog__table-cell\">").concat(product.color, "</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr class=\"catalog__table-line\">\n\t\t\t\t\t\t\t<td class=\"catalog__table-cell catalog__table-cell--font\">\u0420\u043E\u0437\u043D\u0438\u0447\u043D\u0430\u044F \u0446\u0435\u043D\u0430</td>\n\t\t\t\t\t\t\t<td class=\"catalog__table-cell\">\n\t\t\t\t\t\t\t\t<table>\n                  <tr class=\"catalog__table-line catalog__table-line--price\">\n                    ").concat(product.sizeSmall !== "" ? "<td class=\"catalog__table-cell catalog__table-cell--padding\">".concat(product.sizeSmall, "</td>") : "", "\n\t\t\t\t\t\t\t\t\t\t<td class=\"catalog__table-cell catalog__table-cell--padding\">").concat(product.sizeHigh, "</td>\n\t\t\t\t\t\t\t\t\t</tr>\n                  <tr class=\"catalog__table-line catalog__table-line--price\">\n                    ").concat(product.sizeSmall !== "" ? "<td class=\"catalog__table-cell\">".concat(product.priceSmall, "\u0420</td>") : "", "\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<td class=\"catalog__table-cell\">").concat(product.priceHigh, "\u0420</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n    </article>");
    content.insertAdjacentHTML("beforeend", template);
  }));
  container.append(content);
};

var productsSeasons = [];
var productsSeasonFall = products.slice().filter((function (it) {
  return it.season === "fall";
}));
var productsSeasonWinter = products.slice().filter((function (it) {
  return it.season === "winter";
}));
var productsSeasonSummer = products.slice().filter((function (it) {
  return it.season === "summer";
}));
productsSeasons.push(productsSeasonFall);
productsSeasons.push(productsSeasonWinter);
productsSeasons.push(productsSeasonSummer);
var tabs = document.querySelector(".tabs");
var tabsButtons = tabs.querySelectorAll(".tabs__btn");
var tabsContents = document.querySelectorAll(".catalog__tabs-content");
Array.from(tabsContents).forEach((function (tabContent, index) {
  return createElements(tabContent, productsSeasons[index]);
}));
tabsButtons.forEach((function (it, i) {
  it.addEventListener("click", (function (evt) {
    evt.preventDefault();

    if (it.classList.contains("tabs__btn--active")) {
      return;
    }

    it.classList.add("tabs__btn--active");
    var itemNotActive = Array.from(tabsButtons).filter((function (tab) {
      return tab.id !== evt.target.id;
    }));
    itemNotActive.forEach((function (it) {
      if (it.classList.contains("tabs__btn--active")) {
        it.classList.remove("tabs__btn--active");
      }
    }));
    Array.from(tabsContents).forEach((function (it, index) {
      if (i !== index & !it.classList.contains("visually-hidden")) {
        it.classList.add("visually-hidden");
      }

      if (i === index & it.classList.contains("visually-hidden")) {
        it.classList.remove("visually-hidden");
        var catalogItemPictures = it.querySelectorAll(".catalog__item-pictures");
        Array.from(catalogItemPictures).forEach((function (item) {
          var tabImg = item.querySelector(".catalog__item-img");
          var widthSlickContainer = item.querySelector(".slick-list").offsetWidth;
          tabImg.style.width = "".concat(widthSlickContainer, "px");
          tabImg.style.height = "auto";
          var marginReset = item.querySelector(".slick-track");
          marginReset.style.margin = 0;
        }));
      }
    }));
  }));
}));
window.addEventListener("resize", (function () {
  var tabImgs = document.querySelectorAll(".catalog__item-img");
  tabImgs.forEach((function (it) {
    return it.style.width = "100%";
  }));
}));