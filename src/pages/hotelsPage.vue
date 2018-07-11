<template>
    <div id="hotels">
        <section class="form-search">
            <h2 class="visually-hidden">Поиск гостиниц по параметрам</h2>
            <form class="filter filter-container" action="/filter" method="get">
                <div class="filter-checkbox">
                    <h3 class="filter-title">Инфраструктура</h3>
                    <ul class="filter-checkbox-list">
                        <li class="filter-checkbox-item">
                            <label>
                                <input class="visually-hidden" name="pool" type="checkbox" checked>
                                <span class="checkbox-indicator"></span>
                                Бассейн
                            </label>
                        </li>
                        <li class="filter-checkbox-item">
                            <label>
                                <input class="visually-hidden" name="parking" type="checkbox">
                                <span class="checkbox-indicator"></span>
                                Парковка
                            </label>
                        </li>
                        <li class="filter-checkbox-item">
                            <label>
                                <input class="visually-hidden" name="wi-fi" type="checkbox">
                                <span class="checkbox-indicator"></span>
                                Wi-Fi
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="filter-checkbox">
                    <h3 class="filter-title">Тип жилья</h3>
                    <ul class="filter-checkbox-list">
                        <li class="filter-checkbox-item">
                            <label>
                                <input class="visually-hidden" name="guesthouse" type="checkbox" checked>
                                <span class="checkbox-indicator"></span>
                                Гостиница
                            </label>
                        </li>
                        <li class="filter-checkbox-item">
                            <label>
                                <input class="visually-hidden" name="motel" type="checkbox" checked>
                                <span class="checkbox-indicator"></span>
                                Мотель
                            </label>
                        </li>
                        <li class="filter-checkbox-item">
                            <label>
                                <input class="visually-hidden" name="apartment" type="checkbox" checked>
                                <span class="checkbox-indicator"></span>
                                Апартаменты
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="filter-range">
                    <h3 class="filter-title">Стоимость в сутки (р):</h3>
                    <div class="price-controls">
                        <label class="min-price">от
                            <input name="min-price" type="text" value="0">
                        </label>
                        <label class="max-price">до
                            <input name="max-price" type="text" value="3000">
                        </label>
                    </div>
                    <div class="range-controls">
                        <div class="scale">
                            <div class="bar"></div>
                            <div class="range-toggle range-toggle-min"></div>
                            <div class="range-toggle range-toggle-max"></div>
                        </div>
                    </div>
                    <button class="btn-transparent" type="submit">Показать</button>
                </div>
            </form>
        </section>
        <section class="hotels-content">
            <h2 class="visually-hidden">Результаты поиска гостиниц</h2>
            <div class="sortable">
                <span class="sortable-result">Найдено: 3</span>
                <h3 class="sortable-text">Сортировка:</h3>
                <ul class="sortable-list">
                    <li class="sortable-item">
                        <a class="sortable-link current-link" href="#">По цене</a>
                    </li>
                    <li class="sortable-item">
                        <a class="sortable-link" href="#">По типу</a>
                    </li>
                    <li class="sortable-item">
                        <a class="sortable-link" href="#">По рейтингу</a>
                    </li>
                </ul>
                <div class="sort-btn-container">
                    <a class="link-sort-btn" href="#">
                        <p class="visually-hidden">Сортировка по возростанию</p>
                        <svg height="10" viewBox="0 0 11 10" width="11" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 0L0 10h11z" fill="#cacaca"/>
                        </svg>
                    </a>
                    <a class="link-sort-btn current-link" href="#">
                        <p class="visually-hidden">Сортировка по убыванию</p>
                        <svg height="10" viewBox="0 0 11 10" width="11" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 10L0 0h11" fill="#cacaca"/>
                        </svg>
                    </a>
                </div>
            </div>
            <ul class="hotels">
                <li class="hotel">
                    <div class="hotel-left">
                        <div class="hotel-image">
                            <img src="../assets/img/amara.jpg" alt="Amara Resost & SPA" height="90" width="135">
                        </div>
                        <div class="hotel-content">
                            <a class="hotel-link text-link" href="#">
                                <h3 class="hotel-name">Amara Resort & Spa</h3>
                            </a>
                            <p class="hotel-type">
                                <span>Гостиница</span>
                                <span>От 4000 Р.</span>
                            </p>
                            <button class="btn-left blue-btn" type="button">Подробнее</button>
                            <button class="btn-right brown-btn" type="button">Забронировать</button>
                        </div>
                    </div>
                    <div class="hotel-right">
                        <div class="hotel-stars hotel-stars-four"></div>
                        <div class="hotel-rating">
                            Рейтинг: 8,5
                        </div>
                    </div>
                </li>
                <li class="hotel">
                    <div class="hotel-left">
                        <div class="hotel-image">
                            <img src="../assets/img/desert.jpg" alt="Desert Quail Inn" height="90" width="135">
                        </div>
                        <div class="hotel-content">
                            <a class="hotel-link text-link" href="#">
                                <h3 class="hotel-name">Desert Quail Inn</h3>
                            </a>
                            <p class="hotel-type">
                                <span>Мотель</span>
                                <span>От 3000 Р.</span>
                            </p>
                            <button class="btn-left blue-btn" type="button">Подробнее</button>
                            <button class="btn-right brown-btn" type="button">Забронировать</button>
                        </div>
                    </div>
                    <div class="hotel-right">
                        <div class="hotel-stars hotel-stars-three"></div>
                        <div class="hotel-rating">
                            Рейтинг: 8,9
                        </div>
                    </div>
                </li>
                <li class="hotel">
                    <div class="hotel-left">
                        <div class="hotel-image">
                            <img src="../assets/img/villas.jpg" alt="Villas at Poco Diablo" height="90" width="135">
                        </div>
                        <div class="hotel-content">
                            <a class="hotel-link text-link" href="#">
                                <h3 class="hotel-name">Villas at Poco Diablo</h3>
                            </a>
                            <p class="hotel-type">
                                <span>Апартаменты</span>
                                <span>От 2000 Р.</span>
                            </p>
                            <button class="btn-left blue-btn" type="button">Подробнее</button>
                            <button class="btn-right brown-btn" type="button">Забронировать</button>
                        </div>
                    </div>
                    <div class="hotel-right">
                        <div class="hotel-stars hotel-stars-second"></div>
                        <div class="hotel-rating">
                            Рейтинг: 9,2
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
	export default {
		name: 'hotelsPage',
        data() {
        	return {}
        }
	}
</script>

<style>
    #hotels {
        margin-bottom: 120px;
    }
</style>
