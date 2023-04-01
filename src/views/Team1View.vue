<script>

export default {
    data() {
      return {
        
        perPage: 3,
        currentPage: 1,
        // rows: 1,
        search: "",

        employees: [
          { id: 101, name: 'Sam', location: 'Lagos',},
          { id: 102, name: 'Jane', location: 'Abuja', },
          { id: 103, name: 'Joe', location: 'Ikeja', },
          { id: 104, name: 'Vic', location: 'Lagos', },
          { id: 105, name: 'Loe', location: 'Kenya', },
          { id: 106, name: 'Ben', location: 'Ago', },
          { id: 107, name: 'Fred', location: 'Enugu', },
          { id: 108, name: 'Tax', location: 'Lagos', },
          { id: 109, name: 'Nun', location: 'Aba', },
          { id: 110, name: 'Brad', location: 'Lagos', },
          { id: 111, name: 'Kune', location: 'London', },
        ],
        fields: [
          { key: 'id', sortable: true },
          { key: 'name', sortable: true, },
          { key: 'location', sortable: true, },
          { key: 'delete', label: 'Delete' },
        ],
      }
    },
    // methods: {
    //     // onFiltered(filteredItems) {
    //     //   this.rows = filteredItems.length
    //     //   this.currentPage = 1
    //     // },
    // },
    computed: {
      rows() {
        return this.employees.filter(
          (employee, i) => employee.name.toLowerCase().includes(this.search.toLowerCase()) || employee.location.toLowerCase().includes(this.search.toLowerCase())
          )    
      }

    },
    // mounted() {
    //   this.rows = this.employees.length
    // },
  }


</script>

<template>
  <div class="overflow-auto">
    
    <b-form-input
      v-model="search"
      type="search"
      placeholder="Type to filter data"
    ></b-form-input>

    <b-table
      id="my-table"
      
      :items="rows"
      :fields="fields"
      
      :per-page="perPage"
      :current-page="currentPage"
      small

    ></b-table>

    <b-pagination
      v-model="currentPage"
      :total-rows="rows.length"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>
  </div>
</template>

<style lang="scss" scoped>

</style>