<template>
  <div class="home">
    <h2 class="title">Vídeos</h2>
    <div class="container">
      <table>
        <tr>
          <th>Video Name</th>
        </tr>
        <tr v-if="$apollo.queries.videos.loading">
          <td>Loading...</td>
        </tr>
        <tr v-for="video in videos" :key="video.id">
          <td>{{video.name}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'home',
  data() {
    return {
      videos: [],
    };
  },
  apollo: {
    videos: {
      query: gql`query {
        allVideos(first: 5) {
          id
          name
        }
      }`,
      update: data => data.allVideos,
    },
  },
};
</script>

<style lang="stylus">
.title
  color grey
.container
  justify-items center
table
  width 100%
  border 1px solid grey
  border-radius 10px
  box-shadow 2px 1px 2px
td
  border 1px solid grey
  border-radius 5px
  cursor pointer
th
  border 1px solid grey
  border-radius 5px
</style>
