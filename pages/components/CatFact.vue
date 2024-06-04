<template>
  <div class="flex flex-col lg:flex-row bg-gray-100 p-4 rounded-lg shadow-lg">
    <!-- Imagem Grande à Esquerda -->
    <div class="flex-shrink-0 mb-4 lg:mb-0 lg:mr-4">
      <img :src="imageLarge" alt="Cat" class="w-64 h-64 rounded-lg" />
    </div>
    
    <!-- Coluna de Imagens Menores à Direita -->
    <div class="flex flex-col space-y-4">
      <img :src="imageSmall1" alt="Cat" class="w-32 h-32 rounded-lg" />
      <img :src="imageSmall2" alt="Cat" class="w-32 h-32 rounded-lg" />
    </div>
  </div>
</template>
  
  <script setup>
  const imageLarge = '/images/kitty1.webp'
  const imageSmall1 = '/images/kitty2.webp'
  const imageSmall2 = '/images/kitty3.webp'
  </script>
  
  
  