<template>
  <div class="contactRoot">
    <h2>Schedule an <span>appointment</span></h2>
    <form method="post">
      <div class="formRow">
        <label for="name anime fromTop">Hey my name is </label>
        <input type="text" id="name" name="name" required />
        <label for="subject">and I'm looking for</label>
        <select name="subject anime fromTop" id="subject required">
          <option value="discuss">Discuss</option>
          <option value="quote">Quotation</option>
          <option value="project">Project</option>
        </select>
      </div>
      <div class="formRow anime fromTop">
        <label for="mail">Get in touch with me at</label>
        <input type="email" id="mail" name="mail" required />
      </div>
      <div class="formRow anime fromTop">
        <input type="checkbox" id="aggrement" name="aggrement" required />
        <label for="aggrement" class="checkbox-label"
          >I accept all terms and conditions</label
        >
      </div>
      <div class="formRow anime fromTop">
        <button type="submit">Send enquiry</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contactRoot {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 80vw;
  margin-top: 48px;

  @media screen and (min-width: 1024px) {
    margin-top: 0;
  }

  h2 {
    font-family: "Akira";
    font-weight: 900;
    font-size: 25px;
    margin: 0;
    color: white !important;

    @media screen and (min-width: 1024px) {
      font-size: 59px !important;
      max-width: 700px;
      text-align: left;
    }

    span {
      color: transparent;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: rgba(255, 255, 255, 1) !important;
    }
  }

  .formRow {
    position: relative;
    margin-bottom: 24px;

    .checkbox-label {
      margin-left: 12px;
      @media screen and (max-width: 375px) {
        margin-left: 32px;
      }
    }
  }
}
</style>
