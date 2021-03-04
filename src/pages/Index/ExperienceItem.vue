<template> </template>

<script>
import { onMounted } from "vue";
export default {
  name: "ExperienceItem",
  setup() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.experiencesList {
  height: 500px;
}
.flex-parent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  h2 {
    font-family: "Akira";
    font-weight: 900;
    font-size: 34px;
    margin: 0;
    color: white !important;

    @media screen and (min-width: 1024px) {
      font-size: 60px !important;
      text-align: left;
    }

    .stroke {
      color: transparent;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: rgba(255, 255, 255, 1) !important;
    }
  }
}

.input-flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45vw;
  z-index: 11;
  transform: rotate(90deg);
  position: absolute;
  left: 35px;
  overflow: hidden;

  @media screen and (max-width: 850px) {
    transform: rotate(0deg);
    top: 50px;
    left: 0;
  }

  @media (min-width: 365px) and (max-width: 1024px) {
    transform: rotate(0deg);
    left: inherit;
    top: 32px;
  }

  &:before {
    content: "";
    background-color: #fff;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    @media screen and (max-width: 850px) {
      display: none;
    }
  }

  &:after {
    content: "";
    background-color: #fff;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    @media screen and (max-width: 850px) {
      display: none;
    }
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
  top: 50%;
  transform: rotate(-90deg) translate(25%, -100%);
  @media screen and (max-width: 850px) {
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

  @media (min-width: 365px) and (max-width: 1024px) {
    left: inherit;
    top: 270px;
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
      bottom: -30px;
      border-radius: 2px;
      transform: rotate(-3deg);
      @media screen and (max-width: 375px) {
        font-size: 14px;
        bottom: -40px;
      }
      @media (min-width: 365px) and (max-width: 1024px) {
        bottom: -40px;
      }
    }
  }

  .description-experience {
    max-width: 344px;
    padding-top: 16px;
    margin-right: 64px;
    font-family: "Favorit Regular" !important;
    text-align: left;
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
    width: 15px;
    height: 15px;
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
</style>
