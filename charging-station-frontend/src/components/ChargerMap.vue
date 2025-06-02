<template>
  <div id="map" class="map-container"></div>
</template>

<script>
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  name: 'ChargerMap',
  props: ['chargers'],
  data() {
    return {
      map: null,
      markers: []
    }
  },
  mounted() {
    this.initMap()
  },
  watch: {
    chargers: {
      immediate: true,
      handler(newChargers) {
        if (this.map && newChargers.length) {
          this.renderMarkers()
        }
      }
    }
  },
  methods: {
    initMap() {
      this.map = L.map('map').setView([12.9716, 77.5946], 13)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(this.map)
    },
    renderMarkers() {
      // Clear old markers first
      this.markers.forEach(marker => this.map.removeLayer(marker))
      this.markers = []

      // Add new markers
      this.chargers.forEach(charger => {
        if (charger.location?.latitude && charger.location?.longitude) {
          const marker = L.marker([charger.location.latitude, charger.location.longitude])
            .addTo(this.map)
            .bindPopup(`
              <strong>${charger.name}</strong><br>
              Power: ${charger.powerOutput} kW<br>
              Status: ${charger.status}<br>
              Connector: ${charger.connectorType}
            `)
          this.markers.push(marker)
        }
      })
    }
  }
}
</script>

<style scoped>
/* Make sure map takes full height and width of container */
.map-container {
  height: 100%;
  width: 100%;
}
</style>
