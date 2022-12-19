import { defineStore } from "pinia";
import axios from "axios";

export const userData = defineStore("userData", {
  state: () => ({
    data: [],
    login: true,
    modal: false,
    shop: {},
    id: 0,
    modalData: [],
  }),

  getters: {

  },
  actions: {
    purchase(){
      console.log(this.modalData[0].Id)
      if (!this.shop[this.modalData[0].Id]){
        this.shop[this.modalData[0].Id] = {
          Poster: this.modalData[0].Posters,
          Title: this.modalData[0].Titles,
          Desc: this.modalData[0].Description,
        }
      }
      else{
        alert("You have already added this to your cart!");
      }
      this.modal = false;
      console.log(this.shop);
      // console.log(this.modalData[0].Titles);
      this.modalData = [];
    },

    load(index){
      // console.log(this.data[index].Ids)
      this.id = this.data[index].Ids
  },

  async specificMovie(){
    this.modalData = [];
    let response = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.id}`,{
        params: {
          api_key: "dae84c7eae2f2c63d4bdf1e712d56304",
          append_to_response: "videos",
        },
      })
    console.log(response.data);
        this.modalData.push({
          Titles: response.data.title,
          Posters: "https://image.tmdb.org/t/p/w500/" + response.data.poster_path,
          Description: response.data.overview,
          ReleaseDate: response.data.release_date,
          Id: response.data.id,
        })
        // console.log(modalData);
      },

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
          Posters: "https://image.tmdb.org/t/p/w500/" + stuff.poster_path, 
          Ids: stuff.id,
        })
        // console.log(stuff);
        }
      }
    },
  })