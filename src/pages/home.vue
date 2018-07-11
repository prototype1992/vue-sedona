<template>
    <div class="">

        <div class="main-poster">
            <img class="main-poster-image" src="../assets/img/title-intro.png" alt="Welcome to the gargeous Sedona"
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
                <img class="town-imge" src="../assets/img/sedona-town.png" alt="Городок Седона" height="256"
                     width="800">
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
                <img src="../assets/img/sedona-bridge.png" alt="Мост дьявола" height="256" width="799">
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
            <p class="search-hotels-description">
                Укажите предполагаемые даты поездки,<br>
                и мы покажем вам лучшие предложения гостиниц в седоне
            </p>
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
                    <button class="modal-window-button blue-btn" name="search" type="submit">
                        Найти
                    </button>
                </div>
            </form>
            <iframe class="map-iframe"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d52385.1356576571!2d-111.83015794013141!3d34.854443815417135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1530445292295"
                    width="1200" height="593" allowfullscreen></iframe>
        </div>

    </div>
</template>


<script>
	export default {
		name: 'indexPage',
		data() {
			return {
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

</style>
