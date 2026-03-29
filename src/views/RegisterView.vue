<template>
  <div class="min-h-screen bg-[#06030d] text-white px-4 py-8 md:px-8">
    <div
      class="mx-auto grid min-h-[90vh] max-w-7xl overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0714] shadow-[0_0_60px_rgba(124,58,237,0.18)] md:grid-cols-2"
    >
      <!-- LADO ESQUERDO -->
      <div
        class="relative flex flex-col justify-between overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.28),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.22),_transparent_30%),linear-gradient(135deg,#120a22_0%,#090511_45%,#05030a_100%)] p-8 md:border-b-0 md:border-r md:p-12"
      >
        <div class="absolute inset-0 opacity-30">
          <div class="absolute left-10 top-10 h-32 w-32 rounded-full bg-violet-500/20 blur-3xl"></div>
          <div class="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl"></div>
        </div>

        <div class="relative z-10">
          <div class="mb-6 inline-flex items-center gap-3 rounded-full border border-violet-400/20 bg-white/5 px-4 py-2 backdrop-blur">
            <span class="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/20 text-xl">✚</span>
            <span class="text-sm font-medium tracking-wide text-violet-200">Cadastro inteligente</span>
          </div>

          <h1 class="max-w-md text-4xl font-bold leading-tight text-white md:text-6xl">
            MedAgenda
          </h1>

          <p class="mt-5 max-w-xl text-base leading-7 text-zinc-300 md:text-lg">
            Crie sua conta para acessar a plataforma da clínica e gerenciar consultas com mais agilidade e organização.
          </p>
        </div>

        <div class="relative z-10 my-8 flex flex-col gap-4">
          <div class="rounded-3xl border border-violet-400/15 bg-white/5 p-5 shadow-lg backdrop-blur">
            <div class="flex items-start gap-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/20 text-2xl">
                📅
              </div>
              <div>
                <h3 class="text-lg font-semibold text-white">Agendamento fácil</h3>
                <p class="mt-1 text-sm leading-6 text-zinc-300">
                  Organize consultas e tenha acesso rápido às informações.
                </p>
              </div>
            </div>
          </div>

          <div class="rounded-3xl border border-violet-400/15 bg-white/5 p-5 shadow-lg backdrop-blur">
            <div class="flex items-start gap-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/20 text-2xl">
                🏥
              </div>
              <div>
                <h3 class="text-lg font-semibold text-white">Gestão da clínica</h3>
                <p class="mt-1 text-sm leading-6 text-zinc-300">
                  Um sistema moderno para pacientes e secretários.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative z-10 hidden md:flex items-end justify-center">
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80"
            alt="Profissional da saúde"
            class="h-[280px] w-full max-w-md rounded-[28px] object-cover opacity-90 shadow-2xl ring-1 ring-white/10"
          />
        </div>
      </div>

      <!-- LADO DIREITO -->
      <div class="relative bg-[#0a0712] px-6 py-10 md:px-12">
        <div class="absolute inset-0 opacity-40">
          <div class="absolute right-10 top-10 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl"></div>
          <div class="absolute bottom-10 left-10 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl"></div>
        </div>

        <div class="relative z-10 mx-auto w-full max-w-2xl">
          <p class="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
            Novo acesso
          </p>

          <h2 class="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Criar conta
          </h2>

          <p class="mt-3 text-base text-zinc-400">
            Preencha seus dados para acessar o sistema.
          </p>

          <form class="mt-8 grid gap-4 md:grid-cols-2" @submit.prevent="handleRegister">
            <div class="md:col-span-2">
              <label class="mb-2 block text-sm font-medium text-zinc-200">Nome completo</label>
              <input
                v-model="form.name"
                type="text"
                placeholder="Digite seu nome completo"
                class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-zinc-500 focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
              />
            </div>

            <div>
              <label class="mb-2 block text-sm font-medium text-zinc-200">E-mail</label>
              <input
                v-model="form.email"
                type="email"
                placeholder="Digite seu e-mail"
                class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-zinc-500 focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
              />
            </div>

            <div>
              <label class="mb-2 block text-sm font-medium text-zinc-200">Senha</label>
              <input
                v-model="form.password"
                type="password"
                placeholder="Digite sua senha"
                class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-zinc-500 focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
              />
            </div>

            <div>
              <label class="mb-2 block text-sm font-medium text-zinc-200">Perfil</label>
              <select
                v-model="form.role"
                class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
              >
                <option value="patient" class="bg-[#120a22] text-white">Paciente</option>
                <option value="secretary" class="bg-[#120a22] text-white">Secretário</option>
              </select>
            </div>

            <div>
              <label class="mb-2 block text-sm font-medium text-zinc-200">CEP</label>
              <input
                v-model="form.cep"
                @blur="buscarCep"
                type="text"
                placeholder="Digite seu CEP"
                class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-zinc-500 focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
              />
            </div>

            <div class="md:col-span-2">
              <label class="mb-2 block text-sm font-medium text-zinc-200">Rua</label>
              <input
                v-model="form.street"
                type="text"
                placeholder="Rua"
                class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-zinc-500 focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
              />
            </div>

            <div>
              <label class="mb-2 block text-sm font-medium text-zinc-200">Bairro</label>
              <input
                v-model="form.neighborhood"
                type="text"
                placeholder="Bairro"
                class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-zinc-500 focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
              />
            </div>

            <div>
              <label class="mb-2 block text-sm font-medium text-zinc-200">Cidade</label>
              <input
                v-model="form.city"
                type="text"
                placeholder="Cidade"
                class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-zinc-500 focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
              />
            </div>

            <div class="md:col-span-2">
              <label class="mb-2 block text-sm font-medium text-zinc-200">Estado</label>
              <input
                v-model="form.state"
                type="text"
                placeholder="Estado"
                class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-zinc-500 focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
              />
            </div>

            <button
              type="submit"
              class="md:col-span-2 mt-2 w-full rounded-2xl bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 px-4 py-4 text-lg font-semibold text-white shadow-[0_10px_30px_rgba(124,58,237,0.35)] transition hover:scale-[1.01] hover:brightness-110"
            >
              Cadastrar
            </button>
          </form>

          <p v-if="message" class="mt-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-300">
            {{ message }}
          </p>

          <p v-if="errorMessage" class="mt-4 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-300">
            {{ errorMessage }}
          </p>

          <div class="my-8 flex items-center gap-4 text-zinc-500">
            <div class="h-px flex-1 bg-white/10"></div>
            <span class="text-sm">ou</span>
            <div class="h-px flex-1 bg-white/10"></div>
          </div>

          <router-link
            to="/"
            class="flex w-full items-center justify-center rounded-2xl border border-violet-400/20 bg-transparent px-4 py-4 text-lg font-semibold text-violet-300 transition hover:bg-violet-500/10 hover:text-white"
          >
            Entrar
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import axios from 'axios'
import api from '../api/axios'

const message = ref('')
const errorMessage = ref('')

const form = reactive({
  name: '',
  email: '',
  password: '',
  role: 'patient',
  cep: '',
  street: '',
  neighborhood: '',
  city: '',
  state: ''
})

const buscarCep = async () => {
  errorMessage.value = ''

  const cepLimpo = form.cep.replace(/\D/g, '')

  if (cepLimpo.length !== 8) return

  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cepLimpo}/json/`)

    if (data.erro) {
      errorMessage.value = 'CEP não encontrado.'
      return
    }

    form.street = data.logradouro || ''
    form.neighborhood = data.bairro || ''
    form.city = data.localidade || ''
    form.state = data.uf || ''
  } catch {
    errorMessage.value = 'Erro ao buscar CEP.'
  }
}

const handleRegister = async () => {
  message.value = ''
  errorMessage.value = ''

  try {
    const response = await api.post('/auth/register', form)
    message.value = response.data.message
  } catch (error: any) {
    errorMessage.value = error.response?.data?.message || 'Erro ao cadastrar usuário.'
  }
}
</script>