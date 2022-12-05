import { defineStore } from "pinia";
import axios from "axios";

export const userData = defineStore("userData", {
  state: () => ({
    data: [],
    login: false,
    shop: [],
  }),

  getters: {

  },
  actions: {
  //   purchase(index){
  //     this.shop.push({
  //         Titles: this.data[index].Titles,
  //         Posters: this.data[index].Posters,
  //     });
  //     console.log(this.data[index].Posters);
  // },
    async getMovies() {
      this.data = [];
      let response = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/day",
        {
          params: {
            api_key: "dae84c7eae2f2c63d4bdf1e712d56304",
            include_adult: "false",
          },
        }
      );
      for (let stuff of response.data.results) {
        this.data.push({
          Titles: stuff.title,
          Posters: "https://image.tmdb.org/t/p/w500/" + stuff.poster_path 
        })
        }
      }
    },
  })
