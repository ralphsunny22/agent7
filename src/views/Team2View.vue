<template>
    <div>
      <input type="text" v-model="search" placeholder="Search...">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in paginatedUsers" :key="index">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
      <div class="pagination">
        <button :disabled="currentPage === 1" @click="currentPage--">Prev</button>
        <span>{{ currentPage }} of {{ totalPages }}</span>
        <button :disabled="currentPage === totalPages" @click="currentPage++">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    setup() {
      const users = ref([
        { name: 'John Doe', email: 'johndoe@example.com' },
        { name: 'Jane Doe', email: 'janedoe@example.com' },
        { name: 'Bob Smith', email: 'bobsmith@example.com' },
        { name: 'Alice Johnson', email: 'alicejohnson@example.com' },
      ]);
      const search = ref('');
      const currentPage = ref(1);
      const itemsPerPage = 2;
  
      const filteredUsers = computed(() => {
        return users.value.filter((user) => {
          return user.name.toLowerCase().includes(search.value.toLowerCase()) ||
            user.email.toLowerCase().includes(search.value.toLowerCase());
        });
      });
  
      const totalPages = computed(() => {
        return Math.ceil(filteredUsers.value.length / itemsPerPage);
      });
  
      const paginatedUsers = computed(() => {
        const startIndex = (currentPage.value - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredUsers.value.slice(startIndex, endIndex);
      });
  
      return {
        users,
        search,
        currentPage,
        itemsPerPage,
        filteredUsers,
        totalPages,
        paginatedUsers,
      };
    },
  };
  </script>
  
  <style>
  table {
    border-collapse: collapse;
    width: 100%;
  }
  table th,
  table td {
    border: 1px solid black;
    padding: 8px;
  }
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }
  .pagination button {
    margin: 0 8px;
  }
  </style>
  