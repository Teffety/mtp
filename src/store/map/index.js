export default {
  namespaced: true,
  state: {
    geoJson: {
      "type": "FeatureCollection",
      "features": [    
        {
          "id": 1,
          "type": "Feature",
          "properties": {
            "camera_url": "http://docs.evostream.com/sample_content/assets/hls-bunny-166/playlist.m3u8",
          },
          "geometry": {
            "type": "Point",
            "color": 'red',
            "coordinates": [
              37.614666223526, 55.757687657800545
            ]
          }    
        },
        {    
          "id": 2,
          "type": "Feature",
          "properties": {
            "camera_url": "http://docs.evostream.com/sample_content/assets/hls-bunny-166/playlist.m3u8",
            },
          "geometry": {
            "type": "Point",
            "color": 'blue',
            "coordinates": [
              37.61912941932678, 55.75677001512557
            ]
          }
        }
      ]
    }
  }
}