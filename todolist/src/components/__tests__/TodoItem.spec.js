import { mount } from '@vue/test-utils'
import { BCol, BButton, BRow } from 'bootstrap-vue'

import TodoItem from '../TodoItem.vue'

describe('TodoItem', () =>{
    it('Se renderiza correctamente los Props', () => {
        const wrapper = mount(TodoItem, {
            stubs:{
                BCol, BButton, BRow
            },
            propsData: {
                todo: {
                    text: "Todo 1",
                    donje: true
                }
            }
        })

        expect(wrapper.find('.todoItem__text').text()).toBe('Todo 1');
        expect(wrapper.find('.btn.btn-primary').text()).toBe('Editar');
    })
})