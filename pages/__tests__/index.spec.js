import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import Index from '~/pages/index.vue'
import { useCatFactStore } from '~/store/CatFactStore'

// Mock para a função fetchCatFact
jest.mock('~/store/CatFactStore', () => {
  return {
    useCatFactStore: jest.fn(() => ({
      fact: 'Teste de fato sobre gatos',
      fetchCatFact: jest.fn()
    }))
  }
})

describe('Index Page', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Index, {
      global: {
        plugins: [createTestingPinia()]
      }
    })
  })

  it('deve renderizar o componente corretamente', () => {
    expect(wrapper.find('h2').text()).toBe('THE DEFSAFE CAT PAGE')
  })

  it('deve exibir o fato do gato', () => {
    expect(wrapper.find('p').text()).toBe('Teste de fato sobre gatos')
  })

  it('deve chamar a função fetchNewCatFact ao clicar no botão', async () => {
    const store = useCatFactStore()
    await wrapper.find('button').trigger('click')
    expect(store.fetchCatFact).toHaveBeenCalled()
  })

  it('deve aplicar transição de fade in/out', async () => {
    const store = useCatFactStore()
    await wrapper.find('button').trigger('click')
    expect(store.fetchCatFact).toHaveBeenCalled()
    const factElement = wrapper.find('p')
    expect(factElement.classes()).toContain('fade-enter-active')
  })
})
