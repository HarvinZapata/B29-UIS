import Vue from 'vue';
import Ejemplo from '../Ejemplo.vue';

describe('Ejemplo', () => {
    it('Contienen el hook de created', () => {
        expect(typeof Ejemplo.created).toBe('function');
    });

    it('Contiene los valores por defecto esperados', () => {
        expect(typeof Ejemplo.data).toBe('function');
        const data = Ejemplo.data();
        expect(data.message).toBe('Esto es un string');
    });

    it('Existe correctamente la data al momento del Mounted', () => {
        const vm = new Vue(Ejemplo).$mount();
        expect(vm.message).toBe('Created');
    })

    it('El render esta correcto', () => {
        const Constructor = Vue.extend(Ejemplo);
        const vm = new Constructor().$mount();
        expect(vm.$el.textContent).toBe('Created');
    })
});