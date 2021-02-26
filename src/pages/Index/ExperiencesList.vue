<template>
  <div class="experiencesList">
    <div class="flex-parent">
      <div class="input-flex-container">
        <div class="input active">
          <span data-year="2018"></span>
        </div>
        <div class="input">
          <span data-year="2018"></span>
        </div>
        <div class="input">
          <span data-year="2019"></span>
        </div>
        <div class="input">
          <span data-year="2020"></span>
        </div>
      </div>
      <div class="description-flex-container">
        <div class="xp-description active">
          <h2 class="title-experience medium anime fromTop">
            <span class="stroke">Full stack</span> developper
            <span class="title-company anime fromRight">
              at GZones
            </span>
          </h2>
          <p class="description-experience anime fromBottom">
            Improvement of the design Refactoring code (AngularJS & JAVA) Use
            and development of API REST / JSON
          </p>
        </div>
        <div class="xp-description">
          <h2 class="title-experience medium anime fromTop">
            <span class="stroke">Full stack</span> developper
            <span class="title-company anime fromRight">
              at Influa
            </span>
          </h2>
          <p class="description-experience anime fromBottom">
            Integration: Bootstrap, HTML / CSS Wordpress: Premium Theme
            Modification (PHP)
          </p>
        </div>
        <div class="xp-description">
          <h2 class="title-experience medium anime fromTop">
            <span class="stroke">EXPERT</span> Informatique
            <span class="title-company">
              at Ibbu
            </span>
          </h2>
          <p class="description-experience anime fromBottom">
            IT expert for the Cdiscount & RS Components: Consulting and sales
            (Student employment)
          </p>
        </div>
        <div class="xp-description">
          <h2 class="title-experience medium anime fromTop">
            <span class="stroke">FULL STACK</span> Developper
            <span class="title-company">
              at Parker + Parker
            </span>
          </h2>
          <p class="description-experience anime fromBottom">
            Integration: Bootstrap, HTML / CSS Wordpress: Theme development
            Symfony
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperiencesList",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.flex-parent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.input-flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  position: relative;
  z-index: 11;
  transform: rotate(90deg);
  position: absolute;
  left: -1px;

  @media screen and (max-width: 375px) {
    transform: rotate(0deg);
    top: 50px;
  }
}

.input {
  margin: 57px;
  width: 9px;
  height: 9px;
  background-color: white;
  position: relative;
  border-radius: 50%;
}
.input:hover {
  cursor: pointer;
}
.input::before,
.input::after {
  content: "";
  display: block;
  position: absolute;
  z-index: -1;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  width: 30vw;
  height: 1px;
}
.input::before {
  left: calc(-4vw + 12.5px);
}
.input::after {
  right: calc(-4vw + 12.5px);
}
.input.active {
  background-color: #131313;
  border: 1px solid white;
  height: 101px;
  width: 101px;
}
.input.active::before {
  background-color: white;
}
.input.active::after {
  background-color: white;
}
.input.active span {
  font-weight: 700;
}
.input.active span::before {
  font-size: 13px;
}
.input.active span::after {
  font-size: 15px;
}
.input.active ~ .input,
.input.active ~ .input::before,
.input.active ~ .input::after {
  background-color: white;
}
.input span {
  width: 1px;
  height: 1px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: hidden;
}
.input span::before,
.input span::after {
  visibility: visible;
  position: absolute;
  left: 50%;
  top: 50%;
}
.input.active span::after {
  content: attr(data-year);
  top: 25px;
  transform: translateX(-50%);
  transform: rotate(-90deg) translate(85%, -90%);
  @media screen and (max-width: 375px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotateZ(0deg);
  }
  font-size: 14px;
  display: block;
}

.input span::after {
  display: none;
}

.description-flex-container {
  width: 620px;
  font-weight: 400;
  font-size: 22px;
  max-width: 1000px;
  position: absolute;
  left: 560px;

  @media screen and (max-width: 375px) {
    left: 0px;
    bottom: 250px;
    width: 100vw;
  }
}
.description-flex-container .xp-description {
  margin-top: 0;
  display: none;
}
.description-flex-container .xp-description.active {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .title-experience {
    position: relative;

    .title-company {
      position: absolute;
      background-color: #f2c94c;
      color: black;
      font-family: "Favorit Bold";
      font-size: 18px;
      padding: 11px;
      right: 60px;
      bottom: -20px;
      border-radius: 2px;
      transform: rotate(-3deg);
      @media screen and (max-width: 375px) {
        font-size: 14px;
      }
    }
  }

  .description-experience {
    max-width: 344px;
    padding-top: 16px;
    margin-right: 64px;
    font-family: "Favorit Regular" !important;
    font-weight: 400 !important;
    font-size: 18px;
    @media screen and (max-width: 375px) {
      font-size: 38px;
      margin-right: 0px;
      font-size: 14px;
    }
  }
}

@media (min-width: 1250px) {
  .input::before {
    left: -37.5px;
  }

  .input::after {
    right: -37.5px;
  }
}
@media (max-width: 850px) {
  .input {
    width: 17px;
    height: 17px;
  }
  .input::before,
  .input::after {
    height: 3px;
  }
  .input::before {
    left: calc(-4vw + 8.5px);
  }
  .input::after {
    right: calc(-4vw + 8.5px);
  }
}
@media (max-width: 600px) {
  .flex-parent {
    justify-content: initial;
  }

  .input-flex-container {
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: auto;
    margin-top: 15vh;
  }

  .input {
    width: 30px;
    height: 30px;
    margin: 0 10px 50px;
    background-color: white;
  }
  .input::before,
  .input::after {
    content: none;
  }
  .input span {
    width: 100%;
    height: 100%;
    display: block;
  }
  .input span::before {
    top: calc(100% + 5px);
    transform: translateX(-50%);
    text-indent: 0;
    text-align: center;
  }
  .input span::after {
    top: 50%;
    transform: translate(-50%, -50%);
    color: #ecf0f1;
  }

  .description-flex-container {
    margin-top: 30px;
    text-align: center;
  }
}
@media (max-width: 400px) {
  body {
    min-height: 950px;
  }
}
</style>
