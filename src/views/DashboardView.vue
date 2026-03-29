<template>
  <div class="min-h-screen bg-[#06030d] text-white">
    <div class="flex min-h-screen">
      <!-- SIDEBAR -->
      <aside class="hidden w-72 border-r border-white/10 bg-[#090511] px-6 py-8 lg:flex lg:flex-col">
        <div>
          <div class="mb-8 inline-flex items-center gap-3 rounded-full border border-violet-400/20 bg-white/5 px-4 py-2 backdrop-blur">
            <span class="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/20 text-xl">✚</span>
            <span class="text-sm font-medium tracking-wide text-violet-200">MedAgenda</span>
          </div>

          <h1 class="text-3xl font-bold text-white">Painel do Paciente</h1>
          <p class="mt-3 text-sm leading-6 text-zinc-400">
            Acompanhe seus agendamentos, próxima consulta e alertas importantes em um só lugar.
          </p>
        </div>

        <nav class="mt-10 flex flex-col gap-3">
          <router-link
            to="/dashboard"
            class="rounded-2xl border border-violet-400/20 bg-gradient-to-r from-violet-600/20 to-fuchsia-500/10 px-4 py-3 font-medium text-violet-200 transition hover:border-violet-400/40 hover:bg-violet-500/10"
          >
            Dashboard
          </router-link>

          <router-link
            to="/agendamentos"
            class="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-medium text-zinc-300 transition hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"
          >
            Agendamentos
          </router-link>

          <button
            @click="logout"
            class="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-left font-medium text-red-300 transition hover:bg-red-500/15"
          >
            Sair
          </button>
        </nav>

        <div class="mt-auto rounded-[28px] border border-violet-400/15 bg-white/5 p-5 shadow-lg backdrop-blur">
          <p class="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
            MedAgenda
          </p>
          <h3 class="mt-3 text-xl font-semibold text-white">
            Gestão médica moderna
          </h3>
          <p class="mt-2 text-sm leading-6 text-zinc-400">
            Uma experiência mais organizada, visual e prática para acompanhar suas consultas.
          </p>
        </div>
      </aside>

      <!-- CONTEÚDO -->
      <main class="flex-1">
        <!-- TOPO MOBILE + DESKTOP -->
        <header class="border-b border-white/10 bg-[#090511]/80 px-5 py-4 backdrop-blur md:px-8">
          <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
                Dashboard
              </p>
              <h2 class="mt-2 text-3xl font-bold text-white md:text-4xl">
                Visão geral
              </h2>
            </div>

            <div class="flex flex-wrap items-center gap-3">
              <router-link
                to="/agendamentos"
                class="rounded-2xl border border-violet-400/20 bg-white/5 px-4 py-3 text-sm font-medium text-zinc-200 transition hover:bg-violet-500/10"
              >
                Ver agendamentos
              </router-link>

              <button
                @click="logout"
                class="rounded-2xl bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(124,58,237,0.35)] transition hover:brightness-110 lg:hidden"
              >
                Sair
              </button>
            </div>
          </div>
        </header>

        <section class="px-5 py-8 md:px-8">
          <!-- HERO -->
          <div
            class="relative overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.28),_transparent_30%),linear-gradient(135deg,#120a22_0%,#090511_45%,#05030a_100%)] p-8 shadow-[0_0_60px_rgba(124,58,237,0.12)]"
          >
            <div class="absolute right-0 top-0 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl"></div>
            <div class="absolute bottom-0 left-10 h-32 w-32 rounded-full bg-fuchsia-500/10 blur-3xl"></div>

            <div class="relative z-10 grid gap-8 lg:grid-cols-[1.4fr,0.9fr] lg:items-center">
              <div>
                <p class="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
                  Bem-vindo ao seu painel
                </p>
                <h3 class="mt-3 text-3xl font-bold text-white md:text-5xl">
                  Acompanhe suas consultas com mais clareza
                </h3>
                <p class="mt-4 max-w-2xl text-base leading-7 text-zinc-300">
                  Visualize seus agendamentos, acompanhe a próxima consulta e fique atento aos alertas do clima em uma interface moderna e organizada.
                </p>
              </div>

              <div class="rounded-[28px] border border-violet-400/15 bg-white/5 p-5 backdrop-blur">
                <div class="space-y-4">
                  <div class="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p class="text-sm text-zinc-400">Status do sistema</p>
                    <p class="mt-2 text-lg font-semibold text-emerald-300">Tudo pronto para acompanhar</p>
                  </div>

                  <div class="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p class="text-sm text-zinc-400">Resumo rápido</p>
                    <p class="mt-2 text-lg font-semibold text-white">
                      {{ totalAppointments }} consulta<span v-if="totalAppointments !== 1">s</span> registrada<span v-if="totalAppointments !== 1">s</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- CARDS -->
          <div class="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div class="rounded-[28px] border border-violet-400/15 bg-white/5 p-6 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:border-violet-400/30">
              <div class="flex items-center justify-between">
                <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/20 text-2xl">
                  📅
                </div>
                <span class="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">
                  Consultas
                </span>
              </div>

              <p class="mt-5 text-sm text-zinc-400">Consultas agendadas</p>
              <h3 class="mt-2 text-4xl font-bold text-white">{{ totalAppointments }}</h3>
              <p class="mt-3 text-sm leading-6 text-zinc-400">
                Veja quantos atendimentos você já possui registrados no sistema.
              </p>
            </div>

            <div class="rounded-[28px] border border-violet-400/15 bg-white/5 p-6 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:border-violet-400/30">
              <div class="flex items-center justify-between">
                <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/20 text-2xl">
                  ⏰
                </div>
                <span class="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">
                  Próxima
                </span>
              </div>

              <p class="mt-5 text-sm text-zinc-400">Próxima consulta</p>
              <h3 class="mt-2 text-2xl font-bold text-white">
                {{ nextAppointment }}
              </h3>
              <p class="mt-3 text-sm leading-6 text-zinc-400">
                Acompanhe rapidamente a data e horário do seu próximo atendimento.
              </p>
            </div>

            <div class="rounded-[28px] border border-violet-400/15 bg-white/5 p-6 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:border-violet-400/30 md:col-span-2 xl:col-span-1">
              <div class="flex items-center justify-between">
                <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/20 text-2xl">
                  ☁️
                </div>
                <span class="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">
                  Clima
                </span>
              </div>

              <p class="mt-5 text-sm text-zinc-400">Alerta do clima</p>
              <h3 class="mt-2 text-2xl font-bold text-violet-200">
                {{ weatherAlert }}
              </h3>
              <p class="mt-3 text-sm leading-6 text-zinc-400">
                Fique atento a possíveis condições climáticas antes da sua consulta.
              </p>
            </div>
          </div>

          <!-- BLOCO EXTRA -->
          <div class="mt-8 grid gap-6 xl:grid-cols-[1.2fr,0.8fr]">
            <div class="rounded-[28px] border border-white/10 bg-[#0b0714] p-6 shadow-lg">
              <h3 class="text-xl font-semibold text-white">Resumo do paciente</h3>
              <p class="mt-2 text-sm leading-6 text-zinc-400">
                Seu painel foi pensado para oferecer uma visualização simples, moderna e clara das principais informações do sistema.
              </p>

              <div class="mt-6 grid gap-4 md:grid-cols-2">
                <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p class="text-sm text-zinc-400">Navegação rápida</p>
                  <p class="mt-2 font-medium text-white">Acesse agendamentos com facilidade</p>
                </div>

                <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p class="text-sm text-zinc-400">Experiência moderna</p>
                  <p class="mt-2 font-medium text-white">Visual padronizado para todo o sistema</p>
                </div>
              </div>
            </div>

            <div class="rounded-[28px] border border-violet-400/15 bg-white/5 p-6 shadow-lg backdrop-blur">
              <p class="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
                Ações rápidas
              </p>

              <div class="mt-5 flex flex-col gap-3">
                <router-link
                  to="/agendamentos"
                  class="rounded-2xl border border-violet-400/20 bg-violet-500/10 px-4 py-3 font-medium text-violet-200 transition hover:bg-violet-500/20"
                >
                  Ver meus agendamentos
                </router-link>

                <router-link
                  to="/dashboard"
                  class="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-medium text-zinc-200 transition hover:bg-white/10"
                >
                  Atualizar painel
                </router-link>

                <button
                  @click="logout"
                  class="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-left font-medium text-red-300 transition hover:bg-red-500/15"
                >
                  Sair da conta
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import api from '../api/axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const totalAppointments = ref(0)
const nextAppointment = ref('Nenhuma')
const weatherAlert = ref('Sem alerta')

const loadData = async () => {
  try {
    const { data } = await api.get('/appointments/mine')
    totalAppointments.value = data.length

    if (data.length > 0) {
      nextAppointment.value = `${data[0].date} às ${data[0].time}`
      weatherAlert.value = data[0].weatherAlert || 'Sem alerta'
    }
  } catch (error) {
    console.log(error)
  }
}

const logout = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('token')
  router.push('/')
}

onMounted(loadData)
</script>