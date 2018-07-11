<template>
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
</template>

<script>
    export default {
    	name: 'header',
    	data() {
    		return {
				mainMenu: [
					'Информация',
					'Фото и видео',
					'Карта штата',
					'Гостиницы'
				]
            }
        }
    }
</script>

<style>
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
</style>
