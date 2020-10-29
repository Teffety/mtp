<template>
  <div class="main">
    <button class="clear__storage" @click.prevent="clearStorage"> Clear Storage</button>
    <MglMap 
      :accessToken="mapToken" 
      :min-zoom='0' 
      :max-zoom="15"
      :zoom="zoom"
      :center="coord"
      ref="map"
      mapStyle='mapbox://styles/mapbox/streets-v11'
    >
      <MglMarker v-for="item in geoJson" 
        :key="item.id"
        :coordinates="item.geometry.coordinates" 
        :color="item.geometry.color" 
        @click="clickMarker(item.geometry.coordinates)"
      >
        <MglPopup anchor="top" :closeButton="false" >
          <video class="video" :src="item.properties.camera_url" controls></video>
        </MglPopup>
      </MglMarker>
    </MglMap>
  </div>
</template>
<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglMarker,MglPopup } from "vue-mapbox";

import {mapState} from 'vuex'

export default {
  name: 'Main',
  data()
  {
    return {
      coord: [37.61036396, 55.7495549],
      zoom: 10
    }
  },
  components: 
  {
    MglMap, MglMarker, MglPopup
  },
  computed:
  {
    ...mapState('auth',
    {
      accessUserToken: s => s.accessUserToken,
      mapToken: s => s.mapToken
    }),
    geoJson()
    {
      return this.$store.state.map.geoJson.features
    }
  },
  // created() {
  //   this.mapbox = Mapbox;
  // },
  mounted()
  {
    this.accessUserToken === undefined &&  this.$router.push({ path:'/login'})
  },
  methods:
  {
    clickMarker(coord)
    {
      const asyncActions = this.$refs.map.actions;
      asyncActions.flyTo({
        center: coord,
        zoom: 13,
        speed: 4
      })
    },
    clearStorage()
    {
      localStorage.clear()
    }
  }
}
</script>