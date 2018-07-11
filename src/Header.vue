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

<style></style>
