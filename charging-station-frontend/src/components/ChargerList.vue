<template>
    <div class="charger-list-container">
    
    <h2>All Chargers</h2>

    <!-- Filters -->
    <div class="filter-section">
      <label>Status:</label>
      <select v-model="filters.status">
        <option value="">All</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      <label>Connector:</label>
      <select v-model="filters.connectorType">
        <option value="">All</option>
        <option value="Type1">Type1</option>
        <option value="Type2">Type2</option>
      </select>
    </div>

    <!-- Charger List -->
    <div v-if="filteredChargers.length === 0" class="no-chargers">No chargers found.</div>


    <ul class="charger-list">
      <li v-for="(charger, index) in filteredChargers" :key="charger._id">
        <div v-if="editIndex === index">
          <!-- Edit Mode -->
          <input v-model="editForm.name" />
          <input v-model.number="editForm.location.latitude" type="number" step="0.0001" />
          <input v-model.number="editForm.location.longitude" type="number" step="0.0001" />
          <select v-model="editForm.status">
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <input v-model.number="editForm.powerOutput" />
          <select v-model="editForm.connectorType">
            <option value="Type1">Type1</option>
            <option value="Type2">Type2</option>
          </select>
          <button @click="saveEdit(charger._id)">Save</button>
          <button @click="cancelEdit">Cancel</button>
        </div>
        <div v-else>
          <!-- View Mode -->
          <strong>{{ charger.name }}</strong><br />
          Power: {{ charger.powerOutput }} kW<br />
          Status: {{ charger.status }}<br />
          Connector: {{ charger.connectorType }}<br />
          <button @click="editCharger(index, charger)">Edit</button>
          <button @click="deleteCharger(charger._id)">Delete</button>
        </div>
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['chargers'],
  data() {
    return {
      filters: {
        status: '',
        connectorType: ''
      },
      editIndex: null,
      editForm: {}
    }
  },
  computed: {
    filteredChargers() {
      return this.chargers.filter(c => {
        const statusMatch = this.filters.status ? c.status === this.filters.status : true
        const connectorMatch = this.filters.connectorType ? c.connectorType === this.filters.connectorType : true
        return statusMatch && connectorMatch
      })
    }
  },
  methods: {
    editCharger(index, charger) {
      this.editIndex = index
      this.editForm = JSON.parse(JSON.stringify(charger)) // deep copy
    },
    cancelEdit() {
      this.editIndex = null
      this.editForm = {}
    },
    async saveEdit(id) {
      try {
        await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/chargers/${id}`, data)
, this.editForm, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
        alert('Charger updated!')
        this.cancelEdit()
        this.$emit('charger-deleted') // triggers re-fetch
      } catch (err) {
        alert('Update failed: ' + err.response?.data?.message || err.message)
      }
    },
    async deleteCharger(id) {
      if (!confirm('Delete this charger?')) return
      try {
        await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/chargers/${id}`, this.editForm, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})

        this.$emit('charger-deleted')
      } catch (err) {
        alert('Delete failed')
      }
    }
  }
}
</script>


<style src="../assets/liststyles.css"></style>
