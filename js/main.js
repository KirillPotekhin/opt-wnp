"use strict";

const feedbackBtn = document.querySelector(`.main-nav__feedback`);
const scrollToFeedback = () => {
  const feedbackOffsetHeight = document.querySelector(`.feedback`);
  feedbackOffsetHeight.scrollIntoView({
    block: `start`,
    behavior: `smooth`,
  });
}
feedbackBtn.addEventListener('click', scrollToFeedback);

const pageHeader = document.querySelector(`.page-header`);
const pageHeaderHeight = pageHeader.offsetHeight;
window.addEventListener(`scroll`, () => {
  const feedbackOffsetHeight = document.querySelector(`.feedback`).offsetTop;
  if (window.scrollY >= (feedbackOffsetHeight - pageHeaderHeight)) {
    pageHeader.classList.add(`visually-hidden`);
    return;
  }
  pageHeader.classList.remove(`visually-hidden`);
});

const Specification = {
  seasonFall: `fall`,
  seasonWinter: `winter`,
  seasonSummer: `summer`,
  typeHat: `Шапка`,
  typeBandage: `Повязка`,
  typeSnood: `Снуд`,
  typeScarf: `Шарф`,
  typeKlondike: `Косынка`,
  typeBandana: `Бандана`,
  typePanama: `Панама`,
  typeRubber: `Резинка-платок`,
  typeSolokha: `Солоха`,
  modelAlfa: `Альфа`,
  modelApolon: `Аполон`,
  modelBerlin: `Берлин`,
  modelValencia: `Валенсия`,
  modelVenera: `Венера`,
  modelGera: `Гера`,
  modelZevs: `Зевс`,
  modelKapella: `Капелла`,
  modelLapland: `Лапландия`,
  modelLondon: `Лондон`,
  modelMiami: `Майами`,
  modelMars: `Марс`,
  modelNika: `Ника`,
  modelOlimpia: `Олимпия`,
  modelOlimpia2side: `Олимпия 2х сторонняя`,
  modelOlimpia2sideiy: `Олимпия 2х сторонний`,
  modelOrion: `Орион`,
  modelSafari: `Сафари`,
  modelSelena: `Селена`,
  modelSirius: `Сириус`,
  size3840: `38-40`,
  size4046: `40-46`,
  size4244: `42-44`,
  size4246: `42-46`,
  size4448: `44-48`,
  size4648: `46-48`,
  size4850: `48-50`,
  size4852: `48-52`,
  size4854: `48-54`,
  size5052: `50-52`,
  size5053: `50-53`,
  size5254: `52-54`,
  size5258: `52-58`,
  size5458: `54-58`,
  size5658: `56-58`,
  sizeM: `M`,
  sizeS: `S`,
  composition100a: `100% акрил`,
  composition100h: `100% хлопок`,
  composition30w70a: `30% шерсть, 70% акрил`,
  composition50w50a: `50% шерсть, 50% акрил`,
  composition60pe35v5s: `60% полиэстер, 35% вискоза, 5% спандекс`,
  composition92pe8n: `92% полиэстер, 8% нейлон`,
  composition95pe5e: `95% полиэстер, 5% эластан`,
  composition95h5e: `95% хлопок, 5% эластан`,
  composition96pe4e: `96% полиэстер, 4% эластан`,
  composition97h3e: `97% хлопок, 3% эластан`,
};

const products = [
  {
    season: Specification.seasonFall,
    model: Specification.modelOlimpia,
    type: Specification.typeHat,
    sizeSmall: `${Specification.size4850} / ${Specification.size5052}`,
    sizeHigh: `${Specification.size5254} / ${Specification.size5658}`,
    composition: Specification.composition95pe5e,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: 600,
    priceHigh: 700,
  },
  {
    season: Specification.seasonFall,
    model: Specification.modelOlimpia,
    type: Specification.typeBandage,
    sizeSmall: ``,
    sizeHigh: `${Specification.sizeS} / ${Specification.sizeM}`,
    composition: Specification.composition95pe5e,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: ``,
    priceHigh: 400,
  },
  {
    season: Specification.seasonFall,
    model: Specification.modelOlimpia,
    type: Specification.typeSnood,
    sizeSmall: `${Specification.sizeS}`,
    sizeHigh: `${Specification.sizeM}`,
    composition: Specification.composition95pe5e,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: 600,
    priceHigh: 700,
  },
  {
    season: Specification.seasonFall,
    model: Specification.modelOlimpia2side,
    type: Specification.typeHat,
    sizeSmall: `${Specification.size4850}`,
    sizeHigh: `${Specification.size5254} / ${Specification.size5658}`,
    composition: Specification.composition95pe5e,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: 650,
    priceHigh: 750,
  },
  {
    season: Specification.seasonFall,
    model: Specification.modelOlimpia2sideiy,
    type: Specification.typeSnood,
    sizeSmall: `${Specification.sizeS}`,
    sizeHigh: `${Specification.sizeM}`,
    composition: Specification.composition95pe5e,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: 650,
    priceHigh: 750,
  },
  {
    season: Specification.seasonFall,
    model: Specification.modelOrion,
    type: Specification.typeHat,
    sizeSmall: ``,
    sizeHigh: `${Specification.size5254} / ${Specification.size5658}`,
    composition: Specification.composition95pe5e,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: 600,
    priceHigh: 700,
  },
  {
    season: Specification.seasonFall,
    model: Specification.modelOrion,
    type: Specification.typeSnood,
    sizeSmall: `${Specification.sizeS}`,
    sizeHigh: `${Specification.sizeM}`,
    composition: Specification.composition95pe5e,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: 600,
    priceHigh: 700,
  },
  {
    season: Specification.seasonFall,
    model: Specification.modelZevs,
    type: Specification.typeHat,
    sizeSmall: ``,
    sizeHigh: `${Specification.sizeS} / ${Specification.sizeM}`,
    composition: Specification.composition30w70a,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: ``,
    priceHigh: 900,
  },
  {
    season: Specification.seasonFall,
    model: Specification.modelZevs,
    type: Specification.typeSnood,
    sizeSmall: ``,
    sizeHigh: `${Specification.sizeM}`,
    composition: Specification.composition30w70a,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: ``,
    priceHigh: 900,
  },
  {
    season: Specification.seasonFall,
    model: Specification.modelKapella,
    type: Specification.typeHat,
    sizeSmall: ``,
    sizeHigh: `${Specification.sizeS} / ${Specification.sizeM}`,
    composition: Specification.composition30w70a,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: ``,
    priceHigh: 900,
  },
  {
    season: Specification.seasonFall,
    model: Specification.modelKapella,
    type: Specification.typeScarf,
    sizeSmall: ``,
    sizeHigh: `${Specification.sizeM}`,
    composition: Specification.composition30w70a,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: ``,
    priceHigh: 900,
  },
  {
    season: Specification.seasonFall,
    model: Specification.modelGera,
    type: Specification.typeHat,
    sizeSmall: ``,
    sizeHigh: `${Specification.sizeM}`,
    composition: Specification.composition100a,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: ``,
    priceHigh: 800,
  },
  {
    season: Specification.seasonFall,
    model: Specification.modelGera,
    type: Specification.typeSnood,
    sizeSmall: ``,
    sizeHigh: `${Specification.sizeM}`,
    composition: Specification.composition100a,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: ``,
    priceHigh: 800,
  },
  {
    season: Specification.seasonFall,
    model: Specification.modelNika,
    type: Specification.typeBandage,
    sizeSmall: ``,
    sizeHigh: `${Specification.sizeM}`,
    composition: Specification.composition96pe4e,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: ``,
    priceHigh: 580,
  },
  {
    season: Specification.seasonFall,
    model: Specification.modelSelena,
    type: Specification.typeBandage,
    sizeSmall: ``,
    sizeHigh: `${Specification.sizeM}`,
    composition: Specification.composition92pe8n,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: ``,
    priceHigh: 500,
  },
  {
    season: Specification.seasonFall,
    model: Specification.modelAlfa,
    type: Specification.typeHat,
    sizeSmall: ``,
    sizeHigh: `${Specification.size5258}`,
    composition: Specification.composition60pe35v5s,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: ``,
    priceHigh: 900,
  },
  {
    season: Specification.seasonFall,
    model: Specification.modelAlfa,
    type: Specification.typeBandage,
    sizeSmall: ``,
    sizeHigh: `${Specification.sizeM}`,
    composition: Specification.composition60pe35v5s,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: ``,
    priceHigh: 550,
  },
  {
    season: Specification.seasonFall,
    model: Specification.modelAlfa,
    type: Specification.typeSnood,
    sizeSmall: ``,
    sizeHigh: `${Specification.sizeM}`,
    composition: Specification.composition60pe35v5s,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: ``,
    priceHigh: 1000,
  },
  {
    season: Specification.seasonFall,
    model: Specification.modelMars,
    type: Specification.typeHat,
    sizeSmall: ``,
    sizeHigh: `${Specification.size4448} / ${Specification.size5052}`,
    composition: Specification.composition95h5e,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: ``,
    priceHigh: 600,
  },
  {
    season: Specification.seasonSummer,
    model: Specification.modelSafari,
    type: Specification.typePanama,
    sizeSmall: ``,
    sizeHigh: `${Specification.size4648} / ${Specification.size5052} / ${Specification.size5458}`,
    composition: Specification.composition97h3e,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: ``,
    priceHigh: 750,
  },
  {
    season: Specification.seasonSummer,
    model: Specification.modelSafari,
    type: Specification.typeHat,
    sizeSmall: ``,
    sizeHigh: `${Specification.size4850} / ${Specification.size5254}`,
    composition: Specification.composition100h,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: ``,
    priceHigh: 500,
  },
  {
    season: Specification.seasonSummer,
    model: Specification.modelMiami,
    type: Specification.typeBandage,
    sizeSmall: ``,
    sizeHigh: `${Specification.size5458}`,
    composition: Specification.composition95pe5e,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: ``,
    priceHigh: 700,
  },
  {
    season: Specification.seasonSummer,
    model: Specification.modelMiami,
    type: Specification.typeRubber,
    sizeSmall: ``,
    sizeHigh: `${Specification.sizeM}`,
    composition: Specification.composition95pe5e,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: ``,
    priceHigh: 600,
  },
  {
    season: Specification.seasonSummer,
    model: Specification.modelSafari,
    type: Specification.typeKlondike,
    sizeSmall: ``,
    sizeHigh: `${Specification.size4246} / ${Specification.size4852} / ${Specification.size5458}`,
    composition: Specification.composition100h,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: ``,
    priceHigh: 400,
  },
  {
    season: Specification.seasonSummer,
    model: Specification.modelSafari,
    type: Specification.typeBandage,
    sizeSmall: ``,
    sizeHigh: `${Specification.size4850} / ${Specification.size5254} / ${Specification.size5658}`,
    composition: Specification.composition100h,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: ``,
    priceHigh: 400,
  },
  {
    season: Specification.seasonSummer,
    model: Specification.modelSafari,
    type: Specification.typeSolokha,
    sizeSmall: ``,
    sizeHigh: `${Specification.sizeM}`,
    composition: Specification.composition97h3e,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: ``,
    priceHigh: 400,
  },
  {
    season: Specification.seasonSummer,
    model: Specification.modelSafari,
    type: Specification.typeBandana,
    sizeSmall: ``,
    sizeHigh: `${Specification.size4854}`,
    composition: Specification.composition97h3e,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: ``,
    priceHigh: 450,
  },
  {
    season: Specification.seasonWinter,
    model: Specification.modelLondon,
    type: Specification.typeHat,
    sizeSmall: ``,
    sizeHigh: `${Specification.sizeM}`,
    composition: Specification.composition50w50a,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: ``,
    priceHigh: 1400,
  },
  {
    season: Specification.seasonWinter,
    model: Specification.modelLondon,
    type: Specification.typeSnood,
    sizeSmall: ``,
    sizeHigh: `${Specification.sizeM}`,
    composition: Specification.composition50w50a,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: ``,
    priceHigh: 1900,
  },
  {
    season: Specification.seasonWinter,
    model: Specification.modelValencia,
    type: Specification.typeHat,
    sizeSmall: ``,
    sizeHigh: `${Specification.sizeM}`,
    composition: Specification.composition50w50a,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: ``,
    priceHigh: 1700,
  },
  {
    season: Specification.seasonWinter,
    model: Specification.modelLapland,
    type: Specification.typeHat,
    sizeSmall: ``,
    sizeHigh: `${Specification.sizeM}`,
    composition: Specification.composition50w50a,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: ``,
    priceHigh: 1600,
  },
  {
    season: Specification.seasonWinter,
    model: Specification.modelBerlin,
    type: Specification.typeHat,
    sizeSmall: ``,
    sizeHigh: `${Specification.sizeM}`,
    composition: Specification.composition50w50a,
    color: `Актуальные расцветки уточняются при заказе`,
    priceSmall: ``,
    priceHigh: 1200,
  },
];

const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);         
};

const translit = (str) => {
	str = str.toLowerCase().replace(/<.+>/, ' ').replace(/\s+/, ' ');
	const c = {
		'а':'a', 'б':'b', 'в':'v', 'г':'g', 'д':'d', 'е':'e', 'ё':'jo', 'ж':'zh', 'з':'z', 'и':'i', 'й':'j', 'к':'k', 'л':'l', 'м':'m', 'н':'n', 'о':'o', 'п':'p', 'р':'r', 'с':'s', 'т':'t', 'у':'u', 'ф':'f', 'х':'h', 'ц':'c', 'ч':'ch', 'ш':'sh', 'щ':'shch', 'ъ':'', 'ы':'y', 'ь':'', 'э':'e', 'ю':'ju', 'я':'ja', ' ':'-', ';':'', ':':'', ',':'', '—':'-', '–':'-', '.':'', '«':'', '»':'', '"':'', "'":'', '@':'',
	}
	let newStr = new String();
	for (let i = 0; i < str.length; i++) {
		let ch = str.charAt(i);
		newStr += ch in c ? c[ch] : ch;
	}
	return newStr;
};



const createElements = (container, products) => {
  const content = document.createElement('div');
  products.forEach((product, index) => {

    console.log(`key`, `${translit(product.model.replace(/\s/g, '-').toLowerCase())}-${translit(product.type.replace(/\s/g, '').toLowerCase())}`, index+1);

    const template = `<article class="catalog__item ${index % 2 !== 0 ? `catalog__item--reverse catalog__item--reverse-color` : ``}">
			<div class="container">
				<div class="catalog__item-pictures">
          <div class="catalog__item-picture">
            <picture>
              <source media="(min-width: 960px)" srcset="img/${translit(product.model.replace(/\s/g, '-').toLowerCase())}-${translit(product.type.replace(/\s/g, '').toLowerCase())}-1-1024.jpg">
              <source media="(min-width: 720px)" srcset="img/${translit(product.model.replace(/\s/g, '-').toLowerCase())}-${translit(product.type.replace(/\s/g, '').toLowerCase())}-1-800.jpg">
              <img class="catalog__item-img" width="288px" height="288px" alt="${product.model} ${product.type} 1" src="img/${translit(product.model.replace(/\s/g, '-').toLowerCase())}-${translit(product.type.replace(/\s/g, '').toLowerCase())}-1-600.jpg">
            </picture>
					</div>
					<div class="catalog__item-picture">
            <picture>
              <source media="(min-width: 960px)" srcset="img/${translit(product.model.replace(/\s/g, '-').toLowerCase())}-${translit(product.type.replace(/\s/g, '').toLowerCase())}-2-1024.jpg">
              <source media="(min-width: 720px)" srcset="img/${translit(product.model.replace(/\s/g, '-').toLowerCase())}-${translit(product.type.replace(/\s/g, '').toLowerCase())}-2-800.jpg">
              <img class="catalog__item-img" width="288px" height="288px" alt="${product.model} ${product.type} 2" src="img/${translit(product.model.replace(/\s/g, '-').toLowerCase())}-${translit(product.type.replace(/\s/g, '').toLowerCase())}-1-800.jpg">
            </picture>
					</div>
					<div class="catalog__item-picture">
            <picture>
              <source media="(min-width: 720px)" srcset="img/${translit(product.model.replace(/\s/g, '-').toLowerCase())}-${translit(product.type.replace(/\s/g, '').toLowerCase())}-2-1024.jpg">
              <img class="catalog__item-img" width="288px" height="288px" alt="${product.model} ${product.type} 2}" src="img/${translit(product.model.replace(/\s/g, '-').toLowerCase())}-${translit(product.type.replace(/\s/g, '').toLowerCase())}-2-800.jpg">
            </picture>
					</div>
				</div>
				<div class="catalog__item-description">
					<table class="catalog__table">
						<tr class="catalog__table-line">
							<td class="catalog__table-cell catalog__table-cell--font">Модель</td>
							<td class="catalog__table-cell">${product.model}</td>
						</tr>
						<tr class="catalog__table-line">
							<td class="catalog__table-cell catalog__table-cell--font">Тип</td>
							<td class="catalog__table-cell">${product.type}</td>
						</tr>
						<tr class="catalog__table-line">
							<td class="catalog__table-cell catalog__table-cell--font">Размер</td>
							<td class="catalog__table-cell">${product.sizeSmall !== `` ? `${product.sizeSmall} / ${product.sizeHigh}` : `${product.sizeHigh}`}</td>
						</tr>
						<tr class="catalog__table-line">
							<td class="catalog__table-cell catalog__table-cell--font">Состав</td>
							<td class="catalog__table-cell">${product.composition}</td>
						</tr>
						<tr class="catalog__table-line">
							<td class="catalog__table-cell catalog__table-cell--font">Цвет</td>
							<td class="catalog__table-cell">${product.color}</td>
						</tr>
						<tr class="catalog__table-line">
							<td class="catalog__table-cell catalog__table-cell--font">Розничная цена</td>
							<td class="catalog__table-cell">
								<table>
                  <tr class="catalog__table-line catalog__table-line--price">
                    ${product.sizeSmall !== `` ? `<td class="catalog__table-cell catalog__table-cell--padding">${product.sizeSmall}</td>` : ``}
										<td class="catalog__table-cell catalog__table-cell--padding">${product.sizeHigh}</td>
									</tr>
                  <tr class="catalog__table-line catalog__table-line--price">
                    ${product.sizeSmall !== `` ? `<td class="catalog__table-cell">${product.priceSmall}Р</td>` : ``}												
										<td class="catalog__table-cell">${product.priceHigh}Р</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
				</div>
			</div>
    </article>`;

    content.insertAdjacentHTML(`beforeend`, template);
  });

  container.append(content);
};



const productsSeasons = [];
const productsSeasonFall = products.slice().filter((it) => it.season === `fall`);
const productsSeasonWinter = products.slice().filter((it) => it.season === `winter`);
const productsSeasonSummer = products.slice().filter((it) => it.season === `summer`);
productsSeasons.push(productsSeasonFall);
productsSeasons.push(productsSeasonWinter);
productsSeasons.push(productsSeasonSummer);

const tabs = document.querySelector(`.tabs`);
const tabsButtons = tabs.querySelectorAll(`.tabs__btn`);
const tabsContents = document.querySelectorAll(`.catalog__tabs-content`);

Array.from(tabsContents).forEach((tabContent, index) => createElements(tabContent, productsSeasons[index]));

tabsButtons.forEach((it, i) => {
  it.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    if (it.classList.contains(`tabs__btn--active`)) {
      return;
    }

    it.classList.add(`tabs__btn--active`);
    const itemNotActive = Array.from(tabsButtons).filter((tab) => tab.id !== evt.target.id);
    itemNotActive.forEach((it) => {
      if (it.classList.contains(`tabs__btn--active`)) {
        it.classList.remove(`tabs__btn--active`);
      }
    });

    Array.from(tabsContents).forEach((it, index) => {
      if ((i !== index) & (!it.classList.contains(`visually-hidden`))) {
        it.classList.add(`visually-hidden`);
      }

      if ((i === index) & (it.classList.contains(`visually-hidden`))) {
        it.classList.remove(`visually-hidden`);

        // $('.catalog__item-pictures').slick('resize');

        // const catalogItemPictures = it.querySelectorAll(`.catalog__item-pictures`);
        // Array.from(catalogItemPictures).forEach((item) => {
        //   const tabImg = item.querySelector(`.catalog__item-img`);
        //   const widthSlickContainer = item.querySelector(`.slick-list`).offsetWidth;
        //   tabImg.style.width = `${widthSlickContainer}px`;
        //   tabImg.style.height = `auto`;
          
        //   const marginReset = item.querySelector(`.slick-track`);
        //   marginReset.style.margin = 0;
        // });
        $(`.catalog__item-pictures`).slick(`reinit`);
      }
    });
  });
});

// const rescueSizeImage = () => {
//   const tabImgs = document.querySelectorAll(`.catalog__item-img`);
//   tabImgs.forEach((item) => {
//     const widthSlickContainer = item.querySelector(`.slick-list`).offsetWidth;
//     item.style.width = `${widthSlickContainer}px`;
//     item.style.height = `auto`;
//     console.log(item.style);

//   });          
// };

// window.addEventListener(`scroll`, rescueSizeImage);

// window.removeEventListener(`scroll`, rescueSizeImage);

// window.addEventListener(`resize`, () => {
//   const tabImgs = document.querySelectorAll(`.catalog__item-img`);
//   tabImgs.forEach((it) => it.style.width = `100%`);
// });

document.addEventListener('DOMContentLoaded', () => {

  const ajaxSend = (formData) => {
      fetch('/php/mail.php', { // файл-обработчик 
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded', // отправляемые данные 
          },
          body: formData
      })
          .then(response => console.log('Сообщение отправлено методом fetch'))
          .catch(error => console.error(error))
  };

  const forms = document.getElementsByTagName('form');
  for (let i = 0; i < forms.length; i++) {
      forms[i].addEventListener('submit', function (e) {
          e.preventDefault();
          const formData = new FormData(this);
          console.log(`send mail`, formData);
          ajaxSend(formData);
          this.reset(); // очищаем поля формы 
      });
  };

});