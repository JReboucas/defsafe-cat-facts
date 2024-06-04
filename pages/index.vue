<template>
  <div class="min-h-screen flex flex-col">
    <!-- Cabeçalho -->
    <!-- O cabeçalho contém o título principal da página -->
    <header class="bg-[#22223B] shadow-md">
      <h2 class="text-white text-center py-6 text-2xl sm:text-3xl lg:text-4xl">THE DEFSAFE CAT PAGE</h2>
    </header>

    <!-- Corpo -->
    <!-- O corpo contém duas seções: uma para o fato do gato e outra para o componente CatFact -->
    <div class="flex flex-col lg:flex-row items-center justify-center bg-[#C9ADA7] flex-grow p-8">
      <!-- Lado Esquerdo -->
      <!-- A seção da esquerda contém o título, o fato do gato e o botão para atualizar o fato -->
      <div class="w-full lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left space-y-4">
        <h3 class="text-2xl font-bold">Curiosidades sobre Gatos</h3>
        <!-- Transição para fade in/out do fato do gato -->
        <transition name="fade" mode="out-in">
          <p class="text-lg font-medium" :key="store.fact">{{ store.fact }}</p>
        </transition>
        <!-- Botão para buscar um novo fato sobre gatos -->
        <button @click="fetchNewCatFact" class="flex items-center justify-center bg-[#22223B] text-white py-3 px-6 rounded shadow hover:bg-[#1b1b2e] mx-auto lg:mx-0">
          <span class="material-symbols-outlined mr-2">refresh</span>
          Novo Fato
        </button>
      </div>

      <!-- Lado Direito -->
      <!-- A seção da direita contém o componente CatFact -->
      <div class="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <CatFact />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CatFact from '../pages/components/CatFact.vue'
import { useCatFactStore } from '../store/CatFactStore'

// Inicialização do store para gerenciamento do estado dos fatos sobre gatos
const store = useCatFactStore()

// Função para buscar um novo fato sobre gatos com transição fade in/out
const fetchNewCatFact = async () => {
  await store.fetchCatFact()
}
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48;
}

/* Estilos para a transição fade in/out */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

  
  