<template>
  <div class="min-h-screen bg-slate-100">
    <header class="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      <h1 class="text-2xl font-bold text-slate-800">MedAgenda</h1>
      <button @click="logout" class="text-red-500">Sair</button>
    </header>

    <main class="p-6 max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-slate-800 mb-6">Painel administrativo</h2>

      <div class="bg-white rounded-2xl shadow overflow-hidden">
        <table class="w-full text-left">
          <thead class="bg-slate-50">
            <tr>
              <th class="p-4">Paciente</th>
              <th class="p-4">Médico</th>
              <th class="p-4">Especialidade</th>
              <th class="p-4">Data</th>
              <th class="p-4">Hora</th>
              <th class="p-4">Status</th>
              <th class="p-4">Ação</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in appointments" :key="item._id" class="border-t">
              <td class="p-4">{{ item.patient?.name }}</td>
              <td class="p-4">{{ item.doctorName }}</td>
              <td class="p-4">{{ item.specialty }}</td>
              <td class="p-4">{{ item.date }}</td>
              <td class="p-4">{{ item.time }}</td>
              <td class="p-4">{{ item.status }}</td>
              <td class="p-4">
                <select
                  :value="item.status"
                  @change="updateStatus(item._id, $event)"
                  class="rounded-lg border border-slate-300 px-3 py-2"
                >
                  <option value="agendada">Agendada</option>
                  <option value="cancelada">Cancelada</option>
                  <option value="atendida">Atendida</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p v-if="message" class="mt-4 text-green-600 font-medium">{{ message }}</p>
      <p v-if="errorMessage" class="mt-2 text-red-600 font-medium">{{ errorMessage }}</p>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import api from '../api/axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const appointments = ref<any[]>([])
const message = ref('')
const errorMessage = ref('')

const loadAppointments = async () => {
  try {
    const { data } = await api.get('/appointments')
    appointments.value = data
  } catch (error: any) {
    errorMessage.value = error.response?.data?.message || 'Erro ao carregar agendamentos.'
  }
}

const updateStatus = async (id: string, event: Event) => {
  const target = event.target as HTMLSelectElement

  try {
    const { data } = await api.patch(`/appointments/${id}/status`, {
      status: target.value
    })

    message.value = data.message
    await loadAppointments()
  } catch (error: any) {
    errorMessage.value = error.response?.data?.message || 'Erro ao atualizar status.'
  }
}

const logout = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('token')
  router.push('/')
}

onMounted(loadAppointments)
</script>