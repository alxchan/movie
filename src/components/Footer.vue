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
        <h1 style="margin-left: 0px; font-size: 20px;">About</h1>
        <li>FAQ</li>
        <li>Application</li>
        <li>Documentation</li>
      </div>
    </div>
    <div class="list">
      <h1 style="font-size: 20px;">Links:</h1>
      <a href="https://github.com/alxchan">
        <li>Terms</li>
      </a>
      <a href="https://github.com/alxchan">
        <li>Privacy</li>
      </a>
      <a href="https://github.com/alxchan">
        <li>Support</li>
      </a>

    </div>
  </div>
</template>

<style scoped>


.socials{
  padding: 10%;
  display: flex;
  grid-column: 1 / 3;
  background-color: white;
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
.footer{
  display: grid;
  grid-template-columns: repeat(5,1fr);
  height: 20vh;
  width: 100vw;
}

.list{
  padding: 10%;
}

.contact{
  padding: 10%;
}

p {
  margin: 0.5%;
}

h1 {
  flex-basis: 15%;
  align-self: center;
}

li {
  margin-top: 5%;
  list-style: none;
}
</style>