<script setup>

</script>

<template>
  <div class="footer">
    <div class="socials">
      <a href="https://github.com/alxchan" class = "github">
      </a>
      <a href="https://youtube.com/" class = "youtube">
      </a>
      <a href="https://twitter.com/" class = "twitter">
      </a>
      <a href="mailto:alex.chan@student.tdsb.on.ca" class = "email">
      </a>
    </div>
    <div class="contact">
      <div class="details">
        <h1 style="margin-left: 0px; font-size: 20px;">Contact Information</h1>
        <p>Address Street NY</p>
        <p>1-123-123-1234</p>
        <p>Name Name</p>
      </div>
      <div class="details">
        <h1 style="margin: 0px; font-size: 20px;">For General Inquiries</h1>
        <p>fakeemail@gmail.com</p>
        <p>1-456-567-8910</p>
      </div>
      <div class="details">
        <h1 style="margin: 0px; font-size: 20px;">For Purchase Inquiries</h1>
        <p>fakeemail@gmail.com</p>
        <p>1-456-567-8910</p>
      </div>
    </div>
    <div class="list">
      <p style="text-align: start; font-size: 20px;">Links:</p>
      <a href="https://github.com/alxchan">
        <li>Terms</li>
      </a>
      <a href="https://github.com/alxchan">
        <li>Privacy</li>
      </a>
      <a href="https://github.com/alxchan">
        <li>Support</li>
      </a>
      <a href="https://github.com/alxchan">
        <li>Careers</li>
      </a>

    </div>
  </div>
</template>

<style scoped>
p {
  margin: 0.5%;
}

.contact {
  display: flex;
  flex-basis: 100%;
}

.details {
  margin-left: 2.5%;
  margin-top: 3%
}

.socials {
  flex-basis: 90%;
  padding-bottom: 1%;
  display: flex;
}

.email {
  background-image: url(../envelope-solid.svg);
  height: 90%;
  width: 25%;
  padding-left: 10%;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
}

.youtube {
  align-self: center;
  background-image: url(../youtube.svg);
  height: 90%;
  width: 25%;
  padding-left: 10%;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
}

.github {
  align-self: center;
  background-image: url(../github.svg);
  height: 90%;
  width: 25%;
  padding-left: 10%;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
}

.twitter {
  align-self: center;
  background-image: url(../twitter.svg);
  height: 90%;
  width: 22%;
  padding-left: 10%;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
}

h1 {
  flex-basis: 15%;
  align-self: center;
}

.footer {
  display: flex;
  padding-top: 1vh;
  width: 100vw;
  height: 16vh;
  background-color: red;
  flex-direction: row;
}

.list {
  flex-basis: 20%;
  font-size: 15px;
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-left: 4%;
  text-align: start;
}

li {
  margin-top: 5%;
}
</style>