<template>
    <div class="container">
        <header class="page-header">
            <nav class="main-menu">
                <a href="#">
                    <img class="page-logo" src="./assets/img/logo.png" alt="Седона" height="70" width="138">
                </a>
                <ul class="menu-list">
                    <li class="menu-item-left" v-for="menu in mainMenu">
                        <a class="text-link" href="#">{{menu}}</a>
                    </li>
                </ul>
            </nav>
        </header>

        <header/>

        <main>
            <div class="main-poster">
                <img class="main-poster-image" src="./assets/img/title-intro.png" alt="Welcome to the gargeous Sedona"
                     height="352"
                     width="458">
            </div>
            <div class="intro">
                <h1 class="intro-title">Седона — небольшой городок в Аризоне, заслуживающий большего!</h1>
                <h2 class="intro-sub-title">Рассмотрим 5 причин, по которым Седона круче, чем гранд каньон!</h2>
            </div>
            <section class="town">
                <div class="town-left advantages-item">
                    <h3>Настоящий городок</h3>
                    <p>— №1 —</p>
                    <p>Седона — не аттракцион для туристов, там течёт своя жизнь</p>
                </div>
                <div class="town-right">
                    <img class="town-imge" src="./assets/img/sedona-town.png" alt="Городок Седона" height="256" width="800">
                </div>
            </section>
            <section class="services">
                <h3 class="visually-hidden">В городке Вы найдете:</h3>
                <div class="service-item house">
                    <h4>Жильё</h4>
                    <p>Рекомендуем пожить в настоящем мотеле, всё как в кино!</p>
                </div>
                <div class="service-item food">
                    <h4>Еда</h4>
                    <p>Всегда заказывайте фирменный бургер, вы не разочаруетесь!</p>
                </div>
                <div class="service-item souvenir">
                    <h4>Сувениры</h4>
                    <p>Не только китайского, но и местного производства!</p>
                </div>
            </section>
            <section class="bridge">
                <div class="bridge-left">
                    <img src="./assets/img/sedona-bridge.png" alt="Мост дьявола" height="256" width="799">
                </div>
                <div class="bridge-right advantages-item">
                    <h3>Там есть<br> Мост дьявола</h3>
                    <p>— №2 —</p>
                    <p>Да, по нему можно пройти! Если конечно вы осмелитесь</p>
                </div>
            </section>
            <section class="more-advantages">
                <div class="advantages-item">
                    <h3>Небольшая площадь</h3>
                    <p>— №3 —</p>
                    <p>Все достопримечательности находятся очень близко</p>
                </div>
                <div class="advantages-item">
                    <h3>Красивая дорога</h3>
                    <p>— №4 —</p>
                    <p>Ехать в Седону из Лас-Вегаса совсем не скучно!</p>
                </div>
                <div class="advantages-item advantages-item-tourist">
                    <h3>Мало туристов</h3>
                    <p>— №5 —</p>
                    <p>Большинство едет в гранд каньон и толпится там</p>
                </div>
            </section>
            <section class="search-hotel">
                <h2 class="search-hotels-title">Заинтересовались?</h2>
                <p class="search-hotels-description">Укажите предполагаемые даты поездки,<br> и мы покажем вам лучшие
                    предложения
                    гостиниц в седоне</p>
                <div class="search-hotel-form">
                    <a href="#" class="search-hotels-btn brown-btn" @click="toggleForm">
                        Поиск гостиницы в Седоне
                    </a>
                </div>
            </section>
            <div class="map">
                <form class="modal-window-cantainer" action="#" method="post">
                    <div v-bind:class="[isOpenForm ? activeClass : '', errorClass]">
                        <div class="field-container">
                            <label for="date-arrival">Дата заезда:</label>
                            <input class="modal-window-field date-field" id="date-arrival" name="arrival" type="text"
                                   value="24 АПРЕЛЯ 2017" required>
                            <button class="date-button field-button" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22">
                                    <path
                                        d="M19.251 2.025h-2.845V.648c0-.381-.294-.689-.656-.689-.363 0-.656.308-.656.689v1.377h-3.938V.648c0-.381-.294-.689-.655-.689-.363 0-.657.308-.657.689v1.377H5.906V.648c0-.381-.294-.689-.656-.689-.363 0-.657.308-.657.689v1.377H1.75C.784 2.025 0 2.847 0 3.862v16.302C0 21.179.784 22 1.75 22h17.501c.966 0 1.749-.821 1.749-1.836V3.862c0-1.015-.783-1.837-1.749-1.837zm.437 18.139a.448.448 0 0 1-.437.459H1.75a.45.45 0 0 1-.438-.459V3.862a.45.45 0 0 1 .438-.459h2.844v1.378c0 .381.294.689.657.689.362 0 .656-.308.656-.689V3.403h3.938v1.378c0 .381.294.689.657.689.361 0 .655-.308.655-.689V3.403h3.938v1.378c0 .381.293.689.656.689.362 0 .656-.308.656-.689V3.403h2.845c.241 0 .437.206.437.459v16.302z"/>
                                    <path
                                        d="M4.594 8.225h2.625v2.066H4.594zM4.594 11.668h2.625v2.067H4.594zM4.594 15.112h2.625v2.066H4.594zM9.188 15.112h2.625v2.066H9.188zM9.188 11.668h2.625v2.067H9.188zM9.188 8.225h2.625v2.066H9.188zM13.781 15.112h2.625v2.066h-2.625zM13.781 11.668h2.625v2.067h-2.625zM13.781 8.225h2.625v2.066h-2.625z"/>
                                </svg>
                                <span class="visually-hidden">Выбрать дату</span>
                            </button>
                        </div>
                        <div class="field-container">
                            <label for="date-departure">Дата выезда:</label>
                            <input class="modal-window-field date-field" id="date-departure" name="departure"
                                   type="text"
                                   value="4 ИЮЛЯ 2017">
                            <button class="date-button field-button" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22">
                                    <path
                                        d="M19.251 2.025h-2.845V.648c0-.381-.294-.689-.656-.689-.363 0-.656.308-.656.689v1.377h-3.938V.648c0-.381-.294-.689-.655-.689-.363 0-.657.308-.657.689v1.377H5.906V.648c0-.381-.294-.689-.656-.689-.363 0-.657.308-.657.689v1.377H1.75C.784 2.025 0 2.847 0 3.862v16.302C0 21.179.784 22 1.75 22h17.501c.966 0 1.749-.821 1.749-1.836V3.862c0-1.015-.783-1.837-1.749-1.837zm.437 18.139a.448.448 0 0 1-.437.459H1.75a.45.45 0 0 1-.438-.459V3.862a.45.45 0 0 1 .438-.459h2.844v1.378c0 .381.294.689.657.689.362 0 .656-.308.656-.689V3.403h3.938v1.378c0 .381.294.689.657.689.361 0 .655-.308.655-.689V3.403h3.938v1.378c0 .381.293.689.656.689.362 0 .656-.308.656-.689V3.403h2.845c.241 0 .437.206.437.459v16.302z"/>
                                    <path
                                        d="M4.594 8.225h2.625v2.066H4.594zM4.594 11.668h2.625v2.067H4.594zM4.594 15.112h2.625v2.066H4.594zM9.188 15.112h2.625v2.066H9.188zM9.188 11.668h2.625v2.067H9.188zM9.188 8.225h2.625v2.066H9.188zM13.781 15.112h2.625v2.066h-2.625zM13.781 11.668h2.625v2.067h-2.625zM13.781 8.225h2.625v2.066h-2.625z"/>
                                </svg>
                                <span class="visually-hidden">Выбрать дату</span>
                            </button>
                        </div>
                        <div class="field-container">
                            <label for="adults">Взрослые:</label>
                            <input class="modal-window-field number-field number-field-adults" id="adults" name="number"
                                   type="number" value="2"
                                   min="1">
                            <button class="adults-button-minus field-button" type="button">
                                <svg>
                                    <rect fill="#a9a9a9" height="3" width="12" x="13" y="17"/>
                                </svg>
                                <span class="visually-hidden">Минус один взрослый</span>
                            </button>
                            <button class="adults-button-plus field-button" type="button">
                                <svg>
                                    <rect fill="#a9a9a9" height="3" width="12" x="13" y="17"/>
                                    <rect fill="#a9a9a9" height="12" width="3" x="17.5" y="12.5"/>
                                </svg>
                                <span class="visually-hidden">Плюс один взрослый</span>
                            </button>
                            <label for="children">Дети:</label>
                            <input class="modal-window-field number-field number-field-children" id="children"
                                   name="number"
                                   type="number" value="0"
                                   min="0">
                            <button class="children-button-minus field-button" type="button">
                                <svg>
                                    <rect fill="#a9a9a9" height="3" width="12" x="13" y="17"/>
                                </svg>
                                <span class="visually-hidden">Плюс один рfебенок</span>
                            </button>
                            <button class="children-button-plus field-button children" type="button">
                                <svg>
                                    <rect fill="#a9a9a9" height="3" width="12" x="13" y="17"/>
                                    <rect fill="#a9a9a9" height="12" width="3" x="17.5" y="12.5"/>
                                </svg>
                                <span class="visually-hidden">Минус один ребенок</span>
                            </button>
                        </div>
                        <button class="modal-window-button blue-btn" name="search" type="submit">Найти</button>
                    </div>
                </form>
                <iframe class="map-iframe"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d52385.1356576571!2d-111.83015794013141!3d34.854443815417135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1530445292295"
                        width="1200" height="593" allowfullscreen></iframe>
            </div>
        </main>
        <footer class="page-footer">
            <span class="visit">#Visitsedona</span>
            <ul class="social-list">
                <li class="social social-tw">
                    <a class="social-button" href="https://twitter.com/" title="Twitter" target="_blank">
                        <span class="visually-hidden">Twitter</span>
                        <svg height="15" viewBox="0 0 17 15" width="17" xmlns:xlink="http://www.w3.org/1999/xlink"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.95.144c1.685-.496 2.984.27 3.577 1.179.673-.231 1.331-.481 2.011-.708a2.345 2.345 0 0 1-.857 1.768c.685.17 1.304-.491 1.304-.491-.169 1-1.006 1.788-1.563 2.024-.231 6.75-3.175 11.217-10.077 11.082h-.446c-.41 0-4.164-.46-4.898-1.887 2.271.196 3.893-.422 4.693-1.177-.96-.3-2.679-.477-2.979-2.95.349.106.564.228 1.19.119C1.705 8.247.374 7.53.448 5.33c.285.328 1.067.536 1.34.472C1.085 5.561-.182 2.442.894.85c1.818 1.854 3.735 3.606 7.152 3.773C8.254 2.33 9.183.793 10.95.144z"
                                fill="#FFF"/>
                        </svg>
                    </a>
                </li>
                <li class="social social-fb">
                    <a class="social-button" href="https://www.facebook.com/" title="Facebook" target="_blank">
                        <span class="visually-hidden">Facebook</span>
                        <svg height="22" viewBox="0 0 12 22" width="12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4V0H8a4 4 0 0 0-4 4v4H0v4h4v10h4V12h4V8H8V4h4z" fill="#FFF"/>
                        </svg>
                    </a>
                </li>
                <li class="social social-vk">
                    <a class="social-button" href="https://vk.com/" title="YouTube" target="_blank">
                        <span class="visually-hidden">YouTube</span>
                        <svg height="16" viewBox="0 0 20 16" width="20" xmlns:xlink="http://www.w3.org/1999/xlink"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17 0H3C1.35 0 0 1.35 0 3v10c0 1.65 1.35 3 3 3h14c1.65 0 3-1.35 3-3V3c0-1.65-1.35-3-3-3zM6.027 11.998V4.002L15.014 8l-8.987 3.998z"
                                fill="#FFF"/>
                        </svg>

                    </a>
                </li>
            </ul>
            <div class="footer-copyright">
                <a class="footer-copyright-link" href="https://htmlacademy.ru/intensive/htmlcss">
                    <span class="website">Website by</span>
                    <svg id="Layer_1" data-name="Layer 1" height="41" viewBox="0 0 108.08 36.85" width="115"
                         xmlns="http://www.w3.org/2000/svg"><title>logo-htmlacademy-small1</title>
                        <path
                            d="M44.61,26.88a2,2,0,0,0,.55-0.1v1.33a3.25,3.25,0,0,1-1.18.21,1.67,1.67,0,0,1-1.67-1,4.84,4.84,0,0,1-3.14,1.08c-1.51,0-2.91-.83-2.91-2.55,0-2.13,2-2.79,3.71-2.79a11.08,11.08,0,0,1,2.17.25v-0.3c0-1-.76-1.77-2.19-1.77a7.42,7.42,0,0,0-3,.64v-1.7a10.21,10.21,0,0,1,3.19-.55c2.36,0,3.81,1.12,3.81,3.65v3a0.54,0.54,0,0,0,.49.59h0.17Zm-6.44-1.13A1.35,1.35,0,0,0,39.63,27h0.11a3.39,3.39,0,0,0,2.41-1V24.58a9.72,9.72,0,0,0-1.81-.21c-1,0-2.16.33-2.16,1.38h0Zm12.36-6.11a5,5,0,0,1,2.57.64V22a4.08,4.08,0,0,0-2.3-.7,2.75,2.75,0,1,0,0,5.49,5,5,0,0,0,2.43-.64v1.71a6.27,6.27,0,0,1-2.76.57A4.21,4.21,0,0,1,46,24.51q0-.21,0-0.41a4.32,4.32,0,0,1,4.18-4.46h0.38Zm12.17,7.24a2,2,0,0,0,.55-0.1v1.33a3.25,3.25,0,0,1-1.18.21,1.67,1.67,0,0,1-1.67-1,4.84,4.84,0,0,1-3.14,1.08c-1.51,0-2.91-.83-2.91-2.55,0-2.13,2-2.79,3.71-2.79a11.08,11.08,0,0,1,2.17.25v-0.3c0-1-.76-1.77-2.19-1.77a7.42,7.42,0,0,0-3,.64v-1.7a10.21,10.21,0,0,1,3.19-.55c2.36,0,3.81,1.12,3.81,3.65v3a0.54,0.54,0,0,0,.49.59h0.17Zm-6.44-1.13A1.35,1.35,0,0,0,57.73,27h0.11a3.39,3.39,0,0,0,2.41-1V24.58a9.72,9.72,0,0,0-1.81-.21c-1.06,0-2.16.33-2.16,1.38h0ZM73,16V28.2H71.35V26.88a3.88,3.88,0,0,1-3.19,1.54,4.4,4.4,0,0,1,0-8.78,3.81,3.81,0,0,1,3,1.3V16H73Zm-4.53,5.22a2.76,2.76,0,1,0,0,5.52A2.86,2.86,0,0,0,71.15,25V23A2.91,2.91,0,0,0,68.49,21.27ZM79,19.64c3.31,0,4.46,2.68,3.92,5.09H76.7c0.21,1.5,1.67,2.11,3.19,2.11a6.11,6.11,0,0,0,2.64-.59v1.6a7.14,7.14,0,0,1-3,.57C77,28.42,74.78,27,74.78,24a4.18,4.18,0,0,1,4-4.39H79Zm0.09,1.54a2.28,2.28,0,0,0-2.44,2.1v0.06H81.3A2,2,0,0,0,79.13,21.18Zm5.73,7V19.87h1.65v1a3.81,3.81,0,0,1,2.78-1.27A2.86,2.86,0,0,1,91.89,21a4.12,4.12,0,0,1,2.91-1.33A3.06,3.06,0,0,1,98,23V28.2h-1.9V23.05a1.59,1.59,0,0,0-1.42-1.75H94.42a2.8,2.8,0,0,0-2.07,1.12V28.2h-1.9V23.05A1.59,1.59,0,0,0,89,21.31H88.8a3,3,0,0,0-2.21,1.29v5.63H84.86Zm21.31-8.33h1.9l-3.91,9.46c-0.9,2.17-2.09,2.86-3.35,2.86a4.76,4.76,0,0,1-1.1-.14V30.46a2.86,2.86,0,0,0,.85.12c0.9,0,1.58-.64,2.07-1.9l0.17-.42-4-8.4h2l2.86,6.29ZM38.73,1.46V6.22a3.81,3.81,0,0,1,2.7-1.14,3.25,3.25,0,0,1,3.44,3.4v5.15H43V8.72a1.81,1.81,0,0,0-1.61-2h-0.3a2.93,2.93,0,0,0-2.32,1.39v5.52h-1.9V1.46h1.9ZM49.94,2.31v3h3V6.91h-3v3.81c0,1.1.5,1.46,1.58,1.46a4.49,4.49,0,0,0,1.69-.33v1.6A6.8,6.8,0,0,1,51,13.8a2.55,2.55,0,0,1-2.86-2.74V6.89H46.58V5.26h1.5V2.74Zm5.4,11.31V5.28H57v1A3.81,3.81,0,0,1,59.77,5a2.86,2.86,0,0,1,2.6,1.33A4.12,4.12,0,0,1,65.28,5,3.06,3.06,0,0,1,68.44,8.4v5.21h-1.9V8.46a1.59,1.59,0,0,0-1.42-1.75H64.89a2.8,2.8,0,0,0-2.07,1.12v5.78h-1.9V8.46A1.59,1.59,0,0,0,59.5,6.71H59.27A3,3,0,0,0,57.06,8v5.63H55.34ZM71.17,1.45H73V13.6H71.17V1.45ZM14.71,0H14.55L0,1.54V28.21l14.55,8.66,14.55-8.66V1.54Zm12.5,27.1L14.55,34.64,1.9,27.12V16.18l12.59,7.5V25L5.86,19.9v1.31l8.68,5.21v1.39L5.87,22.65V24l8.68,5.21,8.75-5.24V18.31L27.2,16V27.12Zm0-12.53-3.48,2-1.6,1L14.51,13v1.31L21,18.23H21l-0.14.09-1,.54-5.37-3.2V17l4.24,2.52-1,.67-3.2-1.9v1.31l2.1,1.24L14.5,22.1,2,14.65,14.51,7.11Zm0-1.32L14.49,5.76,1.91,13.25v-10L14.56,1.92,27.21,3.25v10h0Z"
                            fill="#231f20" transform="translate(0 -0.02)"/>
                    </svg>
                </a>
            </div>
        </footer>
    </div>
</template>

<script>
	import Header from "./Header";

	export default {
		components: {Header},
		name: 'app',
		data() {
			return {
				mainMenu: [
					'Информация',
					'Фото и видео',
					'Карта штата',
					'Гостиницы'
                ],
                isOpenForm: false,
				activeClass: 'modal-window modal-show',
				errorClass: 'modal-window'
            }
		},
        methods: {
			toggleForm(event) {
				event.preventDefault();
				this.isOpenForm = !this.isOpenForm;
            }
        }
	}
</script>

<style>
    body {
        font-family: 'PT Sans', Arial, sans-serif;
        font-size: 14px;
        line-height: 21px;

        margin: 0;
        padding: 0;

        text-transform: uppercase;

        color: #333;
        background-color: #f2f2f2;
    }

    .visually-hidden {
        position: absolute;

        overflow: hidden;
        clip: rect(0 0 0 0);

        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;

        border: 0;
    }

    .container {
        width: 1200px;
        margin: 0 auto;

        box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.20);

        background-color: #fff;
    }

    a {
        text-decoration: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    .menu-list a {
        font-weight: bold;
        line-height: 26px;

        color: #000;
    }

    .menu-list a.current {
        color: #766357;
    }

    .text-link:hover,
    .text-link:focus {
        color: #81b3d2;
    }

    .text-link:active {
        color: rgba(0, 0, 0, .302);
    }

    .page-header {
        position: relative;
        z-index: 2;

        background-color: #fff;
    }

    .page-logo {
        position: absolute;
        z-index: 3;
        left: 50%;

        width: 138px;
        height: 70px;

        transform: translateX(-50%);
    }

    .main-menu {
        height: 56px;
        padding: 0 72px;

        color: #000;
    }

    .main-menu ul {
        display: flex;
        align-items: flex-start;

        margin: 0;
        padding: 0;

        list-style: none;

        flex-wrap: wrap;
        justify-content: space-between;
    }

    .menu-list li {
        width: 203px;
        margin: 15px 0;
    }

    .menu-list li:nth-child(2) {
        margin-right: 62px;
    }

    .menu-list li:nth-child(3) {
        margin-left: 62px;
        text-align: right;
    }

    .menu-list li:nth-child(4) {
        text-align: right;
    }

    .menu-item-left {
        text-align: left;
    }

    .menu-item-right {
        text-align: right;
    }

    .main-poster {
        position: relative;
        z-index: 1;

        width: 1200px;
        height: 433px;
        margin-bottom: 63px;
        padding-top: 74px;

        text-align: center;

        background-color: #81b3d2;
        background-image: url(./assets/img/intro.jpg);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center top;
    }

    .main-poster::after {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;

        height: 57px;

        content: '';

        background-image: url(./assets/img/intro-after.png);
        background-repeat: no-repeat;
        background-position: center bottom;
    }

    .intro {
        padding: 0 340px;

        text-align: center;

        background: #fff;
    }

    .intro h1 {
        font-size: 21px;
        font-weight: bold;
        line-height: 26px;

        margin: 10px 0 25px;

        color: #000;
    }

    .intro h2 {
        font-size: 14px;
        line-height: 26px;

        margin: 0 0 51px;

        color: #333;
    }

    .town {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;

        min-height: 256px;
        margin: 0;
        padding: 0;
    }

    .advantages-item {
        width: 400px;
        min-height: 256px;

        text-align: center;

        color: #fff;
        background: #81b3d2;
    }

    .advantages-item h3 {
        font-size: 21px;
        font-weight: bold;

        margin: 0;
        padding: 48px 125px 25px;
    }

    .advantages-item p {
        margin: 0;
        padding: 0 0 21px;
    }

    .advantages-item p:last-child {
        padding: 0 60px;
    }

    .bridge-right p:last-child {
        padding: 0 40px;
    }

    .services {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
    }

    .service-item {
        width: 400px;
        min-height: 324px;
        margin: 0;
        padding: 0;

        text-align: center;

        background: #fff;
    }

    .service-item.house {
        background-image: url(./assets/img/icon-1.svg);
        background-repeat: no-repeat;
        background-position: center 54px;
    }

    .service-item.food {
        background-image: url(./assets/img/icon-3.svg);
        background-repeat: no-repeat;
        background-position: center 55px;
    }

    .service-item.souvenir {
        background-image: url(./assets/img/icon-2.svg);
        background-repeat: no-repeat;
        background-position: center 50px;
    }

    .service-item h4 {
        font-size: 21px;

        margin: 0;
        padding: 156px 0 23px;

        color: #000;
    }

    .service-item p {
        margin: 0;
        padding: 0 58px 0;
    }

    .bridge {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;

        height: 256px;
    }

    .more-advantages {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-wrap: wrap;
    }

    .more-advantages .advantages-item {
        color: #333;
        background: #eee;
    }

    .more-advantages h3 {
        color: #000;
    }

    .advantages-item-tourist p:nth-of-type(2) {
        padding: 0 75px;
    }

    .search-hotel {
        min-height: 291px;

        text-align: center;

        background: #fff;
    }

    .search-hotel h2 {
        font-size: 30px;
        font-weight: bold;
        line-height: 36px;

        margin: 0;
        padding: 53px 0 25px;

        color: #000;
    }

    .search-hotel p {
        line-height: 24px;

        margin: 0;
        padding: 0 380px 44px;
    }

    .search-hotels-btn {
        font-family: inherit;
        font-size: 21px;
        font-weight: bold;
        line-height: 26px;

        display: block;
        width: 568px;
        min-height: 26px;
        margin: 0;
        padding: 30px 0;

        text-transform: inherit;

        color: #cfcac7;
        border: none;
        background-color: #766357;
        box-shadow: 0 10px 20px 0 rgba(118, 99, 87, .25);
    }

    .brown-btn:hover,
    .brown-btn:focus {
        color: #fff;
        background: #604e43;
    }

    .brown-btn:active {
        color: #928a85;
        background: #503e33;
    }

    .search-hotel-form {
        position: relative;
        z-index: 1;

        width: 568px;
        margin: 0 auto;
    }

    .modal-window-container {
        overflow: hidden;

        width: 568px;
        min-height: 395px;

        background: #fff;
    }

    .modal-window {
        font-family: inherit;
        font-weight: bold;
        line-height: 26px;

        position: absolute;
        left: 50%;

        display: none;

        padding: 55px;

        transition: .5s transform linear;
        transform: translateX(-50%);

        background-color: #fff;
    }

    .modal-show {
        display: block;

        animation: open .6s;
    }

    @keyframes open {
        0% {
            transform: translateX(-50%) translateY(-395px);
        }
        100% {
            transform: translateX(-50%) translateY(0);
        }
    }

    .field-container {
        position: relative;

        display: flex;

        width: 458px;
        height: 38px;
        margin: 0 0 30px;
        padding: 0;

        justify-content: space-between;
        align-items: baseline;
    }

    .modal-window-field {
        font-family: inherit;
        font-size: 14px;
        font-weight: bold;
        line-height: 26px;

        text-transform: inherit;
    }

    .date-field {
        width: 295px;
        height: 37px;
        margin: 0 38px 0 0;
        padding: 1px 0 0 13px;

        border: none;
        background: #f2f2f2;
    }

    .number-field {
        width: 38px;
        height: 38px;
        margin: 0 38px;
        padding: 0;

        text-align: center;

        border: none;
        background: #f2f2f2;
    }

    .modal-window-field:hover {
        outline: 0;
        background: #ebebeb;
    }

    .date-field:focus {
        outline: 0;

        height: 33px;

        background: #fff;
        border: 2px solid #e5e5e5;
        border-right: none;
    }

    .number-field:focus {
        outline: 0;

        height: 34px;

        background: #fff;
        border-top: 2px solid #e5e5e5;
        border-bottom: 2px solid #e5e5e5;
    }

    .modal-window-field:hover + .field-button {
        background: #ebebeb;
    }

    .date-field:focus + .field-button {
        background: #fff;
        border: 2px solid #e5e5e5;
        border-left: none;
    }

    .number-field-adults:focus ~ .adults-button-minus {
        background: #fff;
        border: 2px solid #e5e5e5;
        border-right: none;
    }

    .number-field-adults:focus ~ .adults-button-plus {
        background: #fff;
        border: 2px solid #e5e5e5;
        border-left: none;
    }

    .number-field-children:focus ~ .children-button-minus {
        background: #fff;
        border: 2px solid #e5e5e5;
        border-right: none;
    }

    .number-field-children:focus ~ .children-button-plus {
        background: #fff;
        border: 2px solid #e5e5e5;
        border-left: none;
    }

    .number-field-adults:hover ~ .adults-button-plus,
    .number-field-children:hover ~ .children-button-plus {
        background: #ebebeb;
    }

    .number-field-adults:focus ~ .adults-button-plus,
    .number-field-children:focus ~ .children-button-plus {
        background: #fff;
    }

    input[type='number']::-webkit-outer-spin-button,
    input[type='number']::-webkit-inner-spin-button {
        margin: 0;

        -webkit-appearance: none;
    }

    input[type='number'] {
        -moz-appearance: textfield;
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        margin: 0;

        -webkit-appearance: none;
    }

    .field-button {
        position: absolute;

        display: flex;

        width: 38px;
        height: 38px;
        margin: 0;
        padding: 0;

        border: none;
        background: #f2f2f2;

        justify-content: center;
        align-items: center;
    }

    .date-button {
        top: 0;
        right: 0;
    }

    .adults-button-minus {
        top: 0;
        right: 308px;
    }

    .adults-button-plus {
        top: 0;
        right: 233px;
    }

    .children-button-minus {
        top: 0;
        right: 76px;
    }

    .children-button-plus {
        top: 0;
        right: 0;
    }

    .field-button path {
        fill: #cacaca;
    }

    .field-button:focus {
        outline: 0;
    }

    .field-button:hover path,
    .field-button:focus path,
    .field-button:hover rect,
    .field-button:focus rect {
        fill: #000;
    }

    .field-button:active path,
    .field-button:active rect {
        fill: #81b3d2;
    }

    .modal-window-button {
        font-family: inherit;
        font-size: 21px;
        font-weight: bold;
        line-height: 26px;

        width: 458px;
        height: 58px;
        margin-top: 24px;

        text-transform: inherit;

        color: #fff;
        background: #81b3d2;
        border: none;
    }

    .field-container label:nth-of-type(2) {
        margin-left: 25px;
    }

    .number-field-adults {
        margin-left: 50px;
    }

    .blue-btn:hover,
    .blue-btn:focus {
        background: #669ec0;
    }

    .blue-btn:active {
        color: #88b6d1;
        background: #5496bd;
    }

    .page-footer {
        position: relative;
        z-index: 2;

        display: flex;

        min-height: 120px;
        margin-top: -120px;

        background-color: rgba(252, 251, 251, .9);

        align-items: center;
        justify-content: space-between;

        padding: 0 101px 0 133px;
    }

    .visit {
        font-size: 21px;
        font-weight: bold;
        line-height: 26px;
    }

    .page-footer li {
        list-style: none;
    }

    .social-button {
        display: flex;

        width: 46px;
        height: 48px;

        background: #81b3d2;

        justify-content: center;
        align-items: center;
    }

    .social-button:hover,
    .social-button:focus {
        background: #669ec0;
    }

    .social-button:active path {
        background: #5496bd;

        fill: #88b6d1;
    }

    .social-list {
        display: flex;

        width: 150px;
        margin: 0;
        padding: 0;

        flex-wrap: wrap;
        justify-content: space-between;
    }

    .footer-copyright {
        width: 197px;
        margin-left: -30px;
    }

    .footer-copyright a {
        display: flex;

        text-decoration: none;

        color: #000;

        align-items: center;
        justify-content: space-between;
    }

    .footer-copyright-link:hover path,
    .footer-copyright-link:focus path {
        fill: #81b3d2;
    }

    .footer-copyright-link:active path {
        fill: #bdbbbc;
    }

    .page-footer-inner {
        margin-top: 0;
    }

    .filter-container {
        display: flex;
        align-items: flex-start;

        min-height: 217px;
        padding: 0 72px;

        color: #fff;
        background-color: #4d7ba2;
        background-image: url(./assets/img/filter-background.jpg);
        background-repeat: no-repeat;
        background-position: 0 -56px;

        justify-content: flex-start;
    }

    .filter-title {
        font-size: 16px;
        line-height: 21px;

        margin: 0;
        padding: 28px 0 23px;
    }

    .filter-checkbox ul {
        overflow: hidden;

        width: 255px;
        margin: 0;
        padding: 0;

        list-style: none;
    }

    .filter-checkbox li {
        position: relative;

        margin: 0 0 25px 37px;
        padding: 0;
    }

    .filter-checkbox-item input[type='checkbox']:checked + .checkbox-indicator::before {
        position: absolute;
        bottom: -1px;
        left: 14px;

        width: 5px;
        height: 22px;

        content: '';
        transform: rotate(45grad);

        border: .5px solid #4d799c;
        border-bottom: 0;
        border-radius: 2px;
        background: #fff;
    }

    .filter-checkbox-item input[type='checkbox']:checked + .checkbox-indicator::after {
        position: absolute;
        bottom: 0;
        left: 4px;

        width: 4.5px;
        height: 12.5px;

        content: '';
        transform: rotate(-50grad);

        border: 0 solid #4d799c;
        border-left: .5px solid #4d799c;
        border-radius: 2px;
        background: #fff;
    }

    .filter-checkbox-item input[type='checkbox'] + .checkbox-indicator {
        position: absolute;
        left: -37px;

        width: 18px;
        height: 18px;

        border: 3px solid #fff;
        border-radius: 4px;
    }

    .filter-checkbox-item input[type='checkbox']:focus + .checkbox-indicator {
        outline: thin dotted;
        outline: 5px auto -webkit-focus-ring-color;
    }

    .filter-checkbox-item input[type='checkbox']:disabled + .checkbox-indicator {
        border-color: #6a6a6a;
    }

    .filter-checkbox-item input[type='checkbox']:disabled + .checkbox-indicator::before,
    .filter-checkbox-item input[type='checkbox']:disabled + .checkbox-indicator::after {
        background-color: #6a6a6a;
    }

    .filter-range {
        width: 317px;
        margin-left: 228px;
    }

    .filter-range .filter-title {
        margin-bottom: -13px;
    }

    .price-controls {
        font-size: 0;

        position: relative;

        height: 32px;
        margin-bottom: 20px;

        border: 2px solid #fff;
        border-radius: 2px;
    }

    .price-controls::after {
        position: absolute;
        top: 50%;
        left: 50%;

        width: 2px;
        height: 22px;

        content: '';
        transform: translate(-50%, -50%);

        background: #fff;
    }

    .price-controls label {
        font-family: inherit;
        font-size: 14px;
        line-height: 21px;

        display: inline-block;
        vertical-align: middle;

        margin-top: 5px;

        cursor: pointer;
    }

    .price-controls label:last-child {
        margin-left: -10px;
    }

    .price-controls .min-price,
    .price-controls .max-price {
        width: 90px;
        padding-left: 65px;
    }

    .price-controls input {
        font: inherit;

        width: 50px;
        margin: 0;

        color: inherit;
        border: none;
        background: none;
    }

    .range-controls {
        position: relative;

        margin-bottom: 32px;
    }

    .range-controls .scale {
        height: 2px;

        background: rgba(255, 255, 255, .3);
    }

    .range-controls .bar {
        width: 80%;
        height: 2px;

        background: #fff;
    }

    .range-toggle {
        position: absolute;
        top: -9px;

        width: 4px;
        height: 4px;

        cursor: pointer;

        border: 8px solid #fff;
        border-radius: 50%;
        background: #ababab;
        box-shadow: 0 2px 1px 0 rgba(0, 1, 1, .2);
    }

    .range-toggle:hover {
        background: #1c4f80;
    }

    .range-toggle-min {
        left: 0;
    }

    .range-toggle-max {
        left: 80%;
    }

    .btn-transparent {
        font-family: inherit;
        font-size: 14px;
        line-height: 20px;

        display: block;

        margin: 0 154px;
        padding: 6px 34px;

        cursor: pointer;
        transform: translateX(-50%);
        text-transform: inherit;

        color: #fff;
        border: 2px solid #fff;
        border-radius: 2px;
        background: transparent;
    }

    .btn-transparent:hover {
        color: #000;
        background: #fff;
    }

    .hotels-content {
        background: #fefefe;
    }

    .hotels-content ul {
        margin: 0;
        padding: 0;

        list-style: none;
    }

    .sortable {
        font-size: 12px;
        line-height: 18px;

        display: flex;

        height: 86px;
        padding: 0 72px;

        border-bottom: 1px solid #e5e5e5;

        align-items: center;
    }

    .sortable-list {
        display: flex;
    }

    .sortable-item a {
        color: #c7c7c7;
        border-bottom: 1px dotted #81b3d2;
    }

    .sortable-item a:hover {
        color: #81b3d2;
    }

    .sortable-item a:focus {
        color: #81b3d2;
        border: none;
    }

    .sortable a:active {
        color: #000;
        border: none;
    }

    .sortable span {
        font-size: 21px;
        font-weight: bold;
        line-height: 26px;

        margin: 0 47px 0 0;
    }

    .sortable h3 {
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;

        margin-right: 38px;
    }

    .sortable li {
        margin: 2px 32px 0 0;
        padding: 0;
    }

    .sort-btn-container {
        font-family: inherit;
        font-size: 0;

        margin-left: auto;

        display: flex;

        width: 35px;
        height: 13px;
        margin-top: 2px;

        justify-content: flex-end;
    }

    .sort-btn-container svg {
        padding-left: 15px;
    }

    .hotel {
        display: flex;

        width: 1056px;
        min-height: 92px;
        padding: 29px 72px;

        border-bottom: 1px solid #e5e5e5;

        justify-content: space-between;
    }

    .hotel-left {
        display: flex;

        flex-wrap: wrap;
    }

    .hotel-image {
        max-height: 90px;
        max-width: 135px;
        margin-right: 31px;
    }

    .hotel-image img {
        width: 100%;
        height: auto;
    }

    .hotel-content h3 {
        font-size: 21px;
        font-weight: bold;
        line-height: 26px;

        max-width: 650px;
        margin: -4px 0 6px;
        padding: 0;
    }

    .hotel-content p {
        font: inherit;

        margin: 0 0 14px;
        padding: 0;
    }

    .hotel-type {
        display: flex;

        width: 181px;

        justify-content: space-between;
    }

    .hotel-content button {
        font-family: inherit;
        font-size: 14px;
        font-weight: bold;
        line-height: 21px;

        padding: 3px 17px;

        text-transform: inherit;

        color: #fff;
        border: none;
    }

    .btn-left {
        background: #81b3d2;
    }

    .btn-right {
        background: #766357;
    }

    .hotel-link {
        color: #000;
    }

    .hotel-right {
        display: flex;
        flex-direction: column;

        justify-content: space-between;
        align-items: flex-end;
    }

    .hotel-stars {
        width: 112px;
        height: 16px;
        margin-right: -3px;

        background-image: url(./assets/img/star.svg);
        background-repeat: repeat-x;
        background-position: center right;
    }

    .hotel-stars-one {
        width: 20%;
    }

    .hotel-stars-second {
        width: 40%;
    }

    .hotel-stars-three {
        width: 60%;
    }

    .hotel-stars-four {
        width: 80%;
    }

    .hotel-stars-five {
        width: 100%;
    }

    .hotel-rating {
        font-size: 14px;
        line-height: 21px;

        width: 83px;
        height: 21px;
        padding: 3px 15px 3px 16px;

        color: #666;
        background-color: #f2f2f2;
    }

    .link-sort-btn:hover path {
        fill: #000;
    }

    .link-sort-btn:active path,
    .link-sort-btn:focus path {
        fill: #81b3d2;
    }

    a.current-link,
    .current-link path {
        color: #81b3d2;
        border: none;

        fill: #81b3d2;
    }

    .map {
        position: relative;

        width: 100%;
        height: 593px;

        overflow: hidden;

        background-image: url(./assets/img/map.png);
        background-repeat: no-repeat;
        background-position: center;
    }

    .map-iframe {
        border: none;
    }

</style>
