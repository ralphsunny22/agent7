  
<script setup>
  import Sidebar from '../components/Sidebar.vue';
  import HeaderSection from '../components/HeaderSection.vue';
  import InviteModal from "../components/modal/InviteModal.vue";
  import { ref, computed } from 'vue';

  const showInviteModal = ref(false);
        
    const users = ref([
    { name: 'John Doe', email: 'johndoe@example.com', role: 'Owner', status: 'Active', lastActive: '28 Mar 3:43 PM', completionRate: '100%' },
    { name: 'Jane Doe', email: 'janedoe@example.com', role: 'SuperAdmin', status: 'Suspended', lastActive: '28 Mar 3:43 PM', completionRate: '50%' },
    { name: 'Bob Smith', email: 'bobsmith@example.com', role: 'Admin', status: 'Active', lastActive: '28 Mar 3:43 PM', completionRate: '48%' },
    { name: 'Alice Johnson', email: 'alicejohnson@example.com', role: 'Owner', status: 'Pending', lastActive: '28 Mar 3:43 PM', completionRate: '100%' },
    { name: 'John Doe', email: 'johndoe@example.com', role: 'Owner', status: 'Active', lastActive: '28 Mar 3:43 PM', completionRate: '100%' },
    { name: 'Jane Doe', email: 'janedoe@example.com', role: 'SuperAdmin', status: 'Suspended', lastActive: '28 Mar 3:43 PM', completionRate: '50%' },
    { name: 'Bob Smith', email: 'bobsmith@example.com', role: 'Admin', status: 'Active', lastActive: '28 Mar 3:43 PM', completionRate: '48%' },
    { name: 'Alice Johnson', email: 'alicejohnson@example.com', role: 'Owner', status: 'Pending', lastActive: '28 Mar 3:43 PM', completionRate: '100%' },
    { name: 'John Doe', email: 'johndoe@example.com', role: 'Owner', status: 'Active', lastActive: '28 Mar 3:43 PM', completionRate: '100%' },
    { name: 'Jane Doe', email: 'janedoe@example.com', role: 'SuperAdmin', status: 'Suspended', lastActive: '28 Mar 3:43 PM', completionRate: '50%' },
    { name: 'Bob Smith', email: 'bobsmith@example.com', role: 'Admin', status: 'Active', lastActive: '28 Mar 3:43 PM', completionRate: '48%' },
    { name: 'Alice Johnson', email: 'alicejohnson@example.com', role: 'Owner', status: 'Pending', lastActive: '28 Mar 3:43 PM', completionRate: '100%' },
    { name: 'John Doe', email: 'johndoe@example.com', role: 'Owner', status: 'Active', lastActive: '28 Mar 3:43 PM', completionRate: '100%' },
    { name: 'Jane Doe', email: 'janedoe@example.com', role: 'SuperAdmin', status: 'Suspended', lastActive: '28 Mar 3:43 PM', completionRate: '50%' },
    { name: 'Bob Smith', email: 'bobsmith@example.com', role: 'Admin', status: 'Active', lastActive: '28 Mar 3:43 PM', completionRate: '48%' },
    { name: 'Alice Johnson', email: 'alicejohnson@example.com', role: 'Owner', status: 'Pending', lastActive: '28 Mar 3:43 PM', completionRate: '100%' },
    { name: 'John Doe', email: 'johndoe@example.com', role: 'Owner', status: 'Active', lastActive: '28 Mar 3:43 PM', completionRate: '100%' },
    { name: 'Jane Doe', email: 'janedoe@example.com', role: 'SuperAdmin', status: 'Suspended', lastActive: '28 Mar 3:43 PM', completionRate: '50%' },
    { name: 'Bob Smith', email: 'bobsmith@example.com', role: 'Admin', status: 'Active', lastActive: '28 Mar 3:43 PM', completionRate: '48%' },
    { name: 'Alice Johnson', email: 'alicejohnson@example.com', role: 'Owner', status: 'Pending', lastActive: '28 Mar 3:43 PM', completionRate: '100%' },
    ]);
    const search = ref('');
    const currentPage = ref(1);
    const itemsPerPage = 10;

    const filteredUsers = computed(() => {
    return users.value.filter((user) => {
        return user.name.toLowerCase().includes(search.value.toLowerCase()) ||
        user.email.toLowerCase().includes(search.value.toLowerCase()) ||
        user.role.toLowerCase().includes(search.value.toLowerCase()) ||
        user.status.toLowerCase().includes(search.value.toLowerCase()) ||
        user.lastActive.toLowerCase().includes(search.value.toLowerCase()) ||
        user.completionRate.toLowerCase().includes(search.value.toLowerCase());
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
  
</script>

<template>
<div class="container">
    <Sidebar/>
    <div class="main">
        <HeaderSection/>

        <!-- dynamic content -->
        <div class="mt-5">

            <div class="d-flex justify-content-between align-items-center mb-3">
                <div class="d-flex gap-3 align-items-center">
                    <div class="title">Team Members</div>
                    <div><i class="bi bi-gear-fill"></i></div>
                </div>

                <div class="d-flex justify-content-between align-items-center gap-3">
                    <div class="p-2 d-flex gap-2 rounded" style="background-color: #fafafa; cursor: pointer;" @click="showInviteModal = true">
                        <span class="text-primary"><i class="bi bi-person-plus-fill"></i></span>
                        <small class="text-primary text-small">Invite Team Member</small>
                    </div>

                    <div class="p-2 d-flex gap-2 rounded" style="background-color: #fafafa;">
                        <span class="text-primary"><i class="bi bi-download"></i></span>
                        <small class="text-primary text-small">Export data</small>
                    </div>
                </div>
                
            </div>
            
            
            <div class="filters row">
                <div class="form-group col-md-2">
                    <label for="" class="text-dark textlight">Role selection</label>
                    <select name="" id="" class="form-control">
                        <option value="">All</option>
                    </select>
                </div>

                <div class="form-group col-md-2">
                    <label for="" class="textlight">Status</label>
                    <select name="" id="" class="form-control">
                        <option value="">All</option>
                    </select>
                </div>

                <div class="form-group col-md-2">
                    <label for="" class="textlight">Last active</label>
                    <select name="" id="" class="form-control">
                        <option value="">Less than 3 hours</option>
                    </select>
                </div>

                <div class="form-group col-md-6">
                    <label for="" class="invisible">Search</label>
                    <input type="text" class="form-control" v-model="search" placeholder="Search...">
                </div>


                
            </div>
            
            <table class="table">
            <thead>
                <tr>
                <th>Name</th>
                <th>Email Address</th>
                <th>Role</th>
                <th>Status</th>
                <th>Last Active</th>
                <th>Completion Rate</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in paginatedUsers" :key="index">
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.role }}</td>
                <td>{{ user.status }}</td>
                <td>{{ user.lastActive }}</td>
                <td>{{ user.completionRate }}</td>
                <td>
                    <div class="text-center"><i class="bi bi-three-dots"></i></div>
                </td>
                </tr>
            </tbody>
            </table>
            <div class="pagination">
                <button :disabled="currentPage === 1" @click="currentPage--" class="px-2 rounded" :class="{'active-btn':currentPage != 1}">Prev</button>
                <span>{{ currentPage }} of {{ totalPages }}</span>
                <button :disabled="currentPage === totalPages" @click="currentPage++" class="px-2 rounded" :class="{'active-btn':currentPage != totalPages}">Next</button>
            </div>
        </div>
        <!-- dynamic content -->
        <InviteModal v-show="showInviteModal" @close-modal="showInviteModal = false"/>
    </div>
</div>


</template>
  
  <style lang="scss" scoped>
.main{
    margin-top: 1.4rem;
}
.title {
	font-family: var(--montserrat-font-family);
	font-weight: 600 !important;
	font-size: 18px !important;
	color: rgba(0,0,0);
}
.textlight {
	font-family: var(--montserrat-font-family);
	font-weight: 500 !important;
	font-size: 14px !important;
	color: rgba(0,0,0,0.7);
}
.textBold {
	font-family: var(--montserrat-font-family);
	font-weight: 500 !important;
	font-size: 14px !important;
	color: rgba(0,0,0);
}
  table {
    border-collapse: collapse;
    width: 100%;
  }
  table th,
  table td {
    border: 1px solid #fafafa;
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
  .active-btn{
    background-color: var(--brand-color);
    color: #fff;
  }
  </style>
  