<template>
   <div class="charger-form-container">
    <h3>Add New Charger</h3>
    <form @submit.prevent="handleSubmit">
      <input v-model="form.name" placeholder="Name" required />
      <input v-model.number="form.latitude" placeholder="Latitude" type="number" step="0.0001" />
      <input v-model.number="form.longitude" placeholder="Longitude" type="number" step="0.0001" />
      <select v-model="form.status">
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      <input v-model.number="form.powerOutput" placeholder="Power Output (kW)" type="number" required />
      <select v-model="form.connectorType">
        <option value="Type1">Type1</option>
        <option value="Type2">Type2</option>
      </select>
      <button type="submit">Add Charger</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      form: {
        name: '',
        latitude: '',
        longitude: '',
        status: 'Active',
        powerOutput: '',
        connectorType: 'Type1'
      }
    }
  },
  methods: {
    async handleSubmit() {
      try {
        const res = await axios.post('http://localhost:5000/api/chargers', {
          name: this.form.name,
          location: {
            latitude: this.form.latitude,
            longitude: this.form.longitude
          },
          status: this.form.status,
          powerOutput: this.form.powerOutput,
          connectorType: this.form.connectorType
        }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })

        alert('Charger added successfully!')
        this.$emit('charger-added') // tell parent to reload
        this.resetForm()
      } catch (err) {
        alert('Failed to add charger: ' + err.response?.data?.message)
      }
    },
    resetForm() {
      this.form = {
        name: '',
        latitude: '',
        longitude: '',
        status: 'Active',
        powerOutput: '',
        connectorType: 'Type1'
      }
    }
  }
}
</script>

<style src="../assets/styles.css"></style>