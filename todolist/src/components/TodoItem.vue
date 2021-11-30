<template>
    <b-row class="mb-2">
        <b-col cols="4" class="todoItem__text"> {{ todo.text }} </b-col>
        <b-col cols="2"> {{ todo.done }} </b-col>
        <b-col>
            <b-button variant="primary" @click="goToUpdateTodo"> Editar </b-button>
            <b-button variant="warning" @click="updateStatusTodo"> Estado </b-button>
            <b-button variant="danger" @click="deleteTodo"> Eliminar </b-button>
        </b-col>
    </b-row>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';

export default {
    name: 'TodoItem',
    props:{
        todo: {
            type: Object,
            required: true
        }
    },
    methods: {
        ...mapActions('todos', {
            _updateStatusTodo: 'updateStatusTodo',
            _deleteTodo: 'deleteTodo'
        }),
        ...mapMutations('todos', ['setTodo']),
        goToUpdateTodo(){
            this.setTodo(this.todo);
            this.$router.push({
                name: 'TodosUpdate',
                params: { id: this.todo.id }
            });
        },
        updateStatusTodo(){
            this._updateStatusTodo(this.todo);
        },
        deleteTodo(){
            this._deleteTodo(this.todo)
        }
    }
}
</script>