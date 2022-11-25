<template>
  <h1>Welcome to a Movie Searcher!</h1>
  <div id="getform">
    <form class="form" @submit.prevent="findMovie()">
      <input type="text" class="search" placeholder="Search Movies Here!" ref="search">
      <input type="submit" class="submit" />
    </form>
    <form @submit.prevent="getMovie()">
      <input type="submit" value="GET" class="getButton" />
    </form>
    <select class="select" ref="select">
      <option v-for="ids in values" :value="ids.id">{{ ids.title }}</option>
    </select>
  </div>


  <div class="movieData" v-if="loaded">
    <h2 class="title" v-html=title></h2>
    <div class="extraDiv" ref="extraDiv">
      <img :src="img" />
      <div v-if="traileriframe">
        <iframe :src="traileriframe"></iframe>
      </div>
    </div>
    <p class=movieInfo v-html=p></p>
    <h2 class="video">Videos</h2>
    <div class="videos">
      <div v-for="items in video">
        <iframe :src="items"></iframe>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, defineComponent, VueElement } from 'vue'
import axios from 'axios';

const select = ref()
const search = ref();
const values = ref([])
const title = ref(null)
const img = ref()
const traileriframe = ref()
const p = ref()
const video = ref([])
const loaded = ref()

let findMovie = function () {
  loaded.value = false
  let query = search.value.value;
  values.value = [];
  let response = axios.get("https://api.themoviedb.org/3/search/movie", {
    params: {
      api_key: "dae84c7eae2f2c63d4bdf1e712d56304",
      query: query,
    },
  });

  response = response.then((moviesData) => {
    for (let movie of moviesData.data.results) {
      values.value.push({
        title: movie.title,
        id: movie.id,
      })
      console.log(values);
    }
  });
}

const getMovie = function () {

  let specific = axios.get(
    `https://api.themoviedb.org/3/movie/${select.value.value}`, {
    params: {
      api_key: "dae84c7eae2f2c63d4bdf1e712d56304",
      append_to_response: "videos",
    },
  }
  )

  specific = specific.then((specificData) => {
    loaded.value = true
    var g = "";
    for (let i in specificData.data.genres) {
      g += specificData.data.genres[i].name + ", ";
    }

    var pc = "";
    for (let i in specificData.data.production_companies) {
      pc += specificData.data.production_companies[i].name + ", ";
    }

    var prod = "";
    for (let i in specificData.data.production_countries) {
      prod += specificData.data.production_countries[i].name + ", ";
    }

    if (specificData.data.videos.results.filter((trailer) => trailer.type === "Trailer").length > 0) {
      traileriframe.value = `https://www.youtube.com/embed/${specificData.data.videos.results
          .filter((trailer) => trailer.type === "Trailer")
          .at(0).key
        }`;
    }

    else {
      traileriframe.value = ``;
    }

    title.value = specificData.data.title
    img.value = `https://image.tmdb.org/t/p/w500${specificData.data.poster_path}`;
    p.value = `Status: ${specificData.data.status}
        <br> Release Date: ${specificData.data.release_date} -- Popularity: ${specificData.data.popularity}
        <br> Overview: ${specificData.data.overview} <br> Vote Average: ${specificData.data.vote_average}  -- Vote Count ${specificData.data.vote_count}
        <br> Genre: ${g} <br> Production Companies: ${pc}  -- Production Countries: ${prod}
        <br> Runtime: ${specificData.data.runtime} minutes
        <br> Homepage: <a href = ${specificData.data.homepage}>${specificData.data.homepage}</a> `;

    video.value = [];
    for (let i = 0; i < specificData.data.videos.results.length; i++) {
      if (specificData.data.videos.results.at(i).type != "Trailer") {
        video.value.push(`https://www.youtube.com/embed/${specificData.data.videos.results.at(i).key}`);
      }
    }
  });
}

</script>
   
   
<style scoped>
* {
  text-decoration: none;
  color: white;
}

div {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.title {
  text-align: center;
  width: 100vw;
  font-size: 50px;
  margin: 0;
  font-weight: bold;
}

.extraDiv {
  width: 100vw;
  align-items: center;
  justify-content: center;
}

.videos {
  width: 100vw;
  align-items: center;
  justify-content: center;
}

iframe {
  width: 500px;
  aspect-ratio: 16/9;
}

.getButton {
  height: 27px;
  background-color: rgb(4, 10, 24);
}

#getform {
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 20px solid rgb(255, 255, 255, 0.1);
}

.getButton:hover {
  box-shadow: 0px 1px 5px rgb(255 255 255);
  ;
}

.submit {
  height: 27px;
  background-color: rgb(4, 10, 24);
}

.submit:hover {
  box-shadow: 0px 1px 5px rgb(255 255 255);
}

h1 {
  font-size: 50px;
  width: 100vw;
  text-align: center;
}

.extraDiv {
  box-shadow: 0px 0px 20px 5px black;
  align-self: center;
  justify-self: center;
}

.video {
  margin: 0;
  width: 100vw;
  font-size: 50px;
  text-align: center;
  font-weight: bold
}

.videos {
  padding: 1rem 2rem;
  border-bottom: 5px solid rgb(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;

}

img {
  height: 281.25px;
}

p {
  width: 95vw;
  flex-wrap: wrap;
  font-size: 20px;
}

iframe {
  width: 500px;
  aspect-ratio: 16/9;
}

img {
  height: 281.25px;
}

.movieInfo {
  color: white;
  padding: 1rem 2rem;
  background-color: rgba(43, 43, 43, 0.5);
  border-top: 5px solid rgb(255, 255, 255, 0.1);
  border-bottom: 5px solid rgb(255, 255, 255, 0.1);
}

.select {
  height: 27px;
  background-color: rgba(43, 43, 43, 0.5);
  border: none;
  border-radius: 5%;
}

select:hover {
  box-shadow: 0px 1px 5px rgb(255 255 255);
}

select:focus {
  outline: none;
}

.search {
  height: 27px;
  background-color: rgba(43, 43, 43, 0.5);
  border: none;
  border-radius: 5%;
}

.search:hover {
  box-shadow: 0px 1px 5px rgb(255 255 255);
}

.search:focus {
  outline: none;
}
</style>
  