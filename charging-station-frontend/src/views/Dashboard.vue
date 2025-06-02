<template>
  <div class="dashboard-container">
    <div class="left-panel">
      <button class="add-station-btn" @click="showForm = true">➕ Add Station</button>
      <ChargerList :chargers="chargers" @charger-deleted="fetchChargers" />
    </div>
    <div class="right-panel">
      <ChargerMap :chargers="chargers" />
    </div>

    <!-- Modal -->
    <div v-if="showForm" class="modal-overlay" @click.self="showForm = false">
      <div class="modal-content">
        <button class="modal-close-btn" @click="showForm = false">✖</button>
        <ChargerForm @charger-added="handleChargerAdded" />
      </div>
    </div>
  </div>
</template>

<script>
import ChargerList from '../components/ChargerList.vue'
import ChargerForm from '../components/ChargerForm.vue'
import ChargerMap from '../components/ChargerMap.vue'
import axios from 'axios'

export default {
  components: {
    ChargerList,
    ChargerForm,
    ChargerMap
  },
  data() {
    return {
      chargers: [],
      showForm: false
    }
  },
  methods: {
    async fetchChargers() {
      try {
        const res = await axios.get('http://localhost:5000/api/chargers', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        this.chargers = res.data
      } catch (err) {
        alert('Could not load chargers.')
      }
    },
    handleChargerAdded() {
      this.showForm = false
      this.fetchChargers()
    }
  },
  mounted() {
    this.fetchChargers()
  }
}
</script>

<style src="../assets/Dashboard.css"></style>
