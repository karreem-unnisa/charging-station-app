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
import axios from 'axios'
import ChargerList from '../components/ChargerList.vue'
import ChargerForm from '../components/ChargerForm.vue'
import ChargerMap from '../components/ChargerMap.vue'

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
        const url = `${import.meta.env.VITE_API_BASE_URL}/api/chargers`
        console.log('Fetching from:', url)
        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        this.chargers = res.data
      } catch (err) {
        console.error('Failed to load chargers:', err)
        alert('Could not load chargers. Please check your network or login status.')
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

<style scoped>
.dashboard-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
  background-color: #f5f7fa;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.left-panel {
  width: 30%;
  padding: 1.5rem;
  background-color: #ffffff;
  border-right: 1px solid #ddd;
  overflow-y: auto;
}

.right-panel {
  flex: 1;
  position: relative;
}

.add-station-btn {
  background-color: #0077ff;
  color: white;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.add-station-btn:hover {
  background-color: #005ed6;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  width: 600px;
  max-width: 90%;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.modal-close-btn {
  position: absolute;
  top: 10px;
  right: 12px;
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
}
</style>
