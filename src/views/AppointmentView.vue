<template>
  <div class="min-h-screen bg-[#06030d] text-white">
    <div class="flex min-h-screen">
      
      <!-- SIDEBAR -->
      <aside class="hidden w-72 border-r border-white/10 bg-[#090511] px-6 py-8 lg:flex lg:flex-col">
        <h1 class="text-2xl font-bold text-white mb-6">MedAgenda</h1>

        <nav class="flex flex-col gap-3">
          <router-link to="/dashboard" class="text-zinc-300 hover:text-white">Dashboard</router-link>
          <router-link to="/agendamentos" class="text-violet-300 font-semibold">Agendamentos</router-link>
          <button @click="logout" class="text-red-400 text-left mt-4">Sair</button>
        </nav>
      </aside>

      <!-- CONTEÚDO -->
      <main class="flex-1 p-6 md:p-10">
        
        <h2 class="text-3xl font-bold mb-6">Agendar consulta</h2>

        <!-- FORM -->
        <div class="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lg">
          <form class="grid md:grid-cols-2 gap-4" @submit.prevent="agendar">

            <input v-model="form.doctorName" placeholder="Nome do médico"
              class="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-zinc-400 outline-none focus:border-violet-500" />

            <input v-model="form.specialty" placeholder="Especialidade"
              class="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-zinc-400 outline-none focus:border-violet-500" />

            <input v-model="form.date" type="date"
              class="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-white outline-none focus:border-violet-500" />

            <input v-model="form.time" type="time"
              class="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-white outline-none focus:border-violet-500" />

            <input v-model="form.address.cep" @blur="buscarCep" placeholder="CEP"
              class="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-zinc-400 outline-none focus:border-violet-500" />

            <input v-model="form.address.street" placeholder="Rua"
              class="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-zinc-400 outline-none focus:border-violet-500" />

            <input v-model="form.address.neighborhood" placeholder="Bairro"
              class="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-zinc-400 outline-none focus:border-violet-500" />

            <input v-model="form.address.city" placeholder="Cidade"
              class="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-zinc-400 outline-none focus:border-violet-500" />

            <input v-model="form.address.state" placeholder="Estado"
              class="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-zinc-400 outline-none focus:border-violet-500 md:col-span-2" />

            <button
              class="md:col-span-2 w-full bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-semibold py-3 rounded-xl transition hover:brightness-110">
              Confirmar agendamento
            </button>
          </form>

          <p v-if="message" class="mt-4 text-green-400">{{ message }}</p>
          <p v-if="errorMessage" class="mt-2 text-red-400">{{ errorMessage }}</p>
        </div>

        <!-- LISTA -->
        <div class="mt-10">
          <h3 class="text-2xl font-bold mb-4">Minhas consultas</h3>

          <div v-if="appointments.length === 0" class="text-zinc-400">
            Nenhuma consulta agendada.
          </div>

          <div v-else class="grid md:grid-cols-2 gap-6">
            <div
              v-for="item in appointments"
              :key="item._id"
              class="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur shadow-lg hover:scale-[1.02] transition"
            >
              <div class="flex justify-between items-center mb-3">
                <h4 class="text-lg font-semibold text-white">
                  {{ item.specialty }}
                </h4>
                <span class="text-xs bg-violet-500/20 text-violet-300 px-3 py-1 rounded-full">
                  {{ item.status }}
                </span>
              </div>

              <p class="text-zinc-300"><strong>Médico:</strong> {{ item.doctorName }}</p>
              <p class="text-zinc-300"><strong>Data:</strong> {{ item.date }}</p>
              <p class="text-zinc-300"><strong>Hora:</strong> {{ item.time }}</p>

              <div class="mt-3 text-sm text-violet-300">
                ☁️ {{ item.weatherAlert }}
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import axios from 'axios'
import api from '../api/axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const message = ref('')
const errorMessage = ref('')
const appointments = ref<any[]>([])

const form = reactive({
  doctorName: '',
  specialty: '',
  date: '',
  time: '',
  address: {
    cep: '',
    street: '',
    neighborhood: '',
    city: '',
    state: ''
  }
})

const buscarCep = async () => {
  const cepLimpo = form.address.cep.replace(/\D/g, '')

  if (cepLimpo.length !== 8) return

  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cepLimpo}/json/`)
    form.address.street = data.logradouro || ''
    form.address.neighborhood = data.bairro || ''
    form.address.city = data.localidade || ''
    form.address.state = data.uf || ''
  } catch {
    errorMessage.value = 'Erro ao buscar CEP.'
  }
}

const loadAppointments = async () => {
  try {
    const { data } = await api.get('/appointments/mine')
    appointments.value = data
  } catch {
    errorMessage.value = 'Erro ao carregar consultas.'
  }
}

const agendar = async () => {
  try {
    const { data } = await api.post('/appointments', form)
    message.value = data.message
    await loadAppointments()
  } catch (error: any) {
    errorMessage.value = error.response?.data?.message || 'Erro ao agendar'
  }
}

const logout = () => {
  localStorage.clear()
  router.push('/')
}

onMounted(loadAppointments)
</script>