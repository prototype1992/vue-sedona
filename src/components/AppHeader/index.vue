<template>
  <header class="app-header">
    <nav class="main-menu">
      <router-link to="/" tabindex="1">
        <img
          class="logo"
          src="./img/logo.png"
          alt="Седона"
        >
      </router-link>
      <ul class="menu-list">
        <li class="menu-list__item" v-for="(menu, index) in mainMenu" :key="index">
          <router-link
            :to="menu.link"
            class="menu-list__link"
          >
            {{menu.text}}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'AppHeader',
    data() {
      return {
        mainMenu: [
          {
            link: '/info',
            text: 'Информация'
          },
          {
            link: '/photo-video',
            text: 'Фото и видео'
          },
          {
            link: '/map',
            text: 'Карта штата'
          },
          {
            link: '/hotels',
            text: 'Гостиницы'
          }
        ]
      }
    },
  }
</script>

<style lang="scss">
  .app-header {
    position: relative;
    z-index: 2;

    background-color: #fff;
  }

  .logo {
    position: absolute;
    z-index: 3;
    left: 50%;
    width: 138px;
    height: 70px;
    transform: translateX(-50%);
    &:focus {
      outline: 1px solid blue;
    }
  }

  .main-menu {
    height: 56px;
    padding: 0 72px;
    color: #000;
  }

  .menu-list {
    display: flex;
    align-items: flex-start;

    margin: 0;
    padding: 0;

    list-style: none;

    flex-wrap: wrap;
    justify-content: space-between;
    .menu-list__item  {
      text-align: left;
      width: 203px;
      margin: 15px 0;
      &:nth-child(2) {
        margin-right: 62px;
      }
      &:nth-child(3) {
        margin-left: 62px;
        text-align: right;
      }
      &:nth-child(4) {
        text-align: right;
      }
      .router-link-active {
        color: #81b3d2;
      }
    }

    .menu-list__link {
      font-weight: bold;
      line-height: 26px;
      color: #000;
      &:hover,
      &:focus {
        color: #81b3d2;
      }

      &:active {
        color: rgba(0, 0, 0, .302);
      }
    }
  }
</style>
