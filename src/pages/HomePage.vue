<template>
  <div class="container-fluid">
    <div class="row mt-4 d-flex justify-content-center">
      <div class="col-6 text-center">
        <form @submit.prevent="createList">
          <div class="form-group">
            <input
              type="text"
              name="title"
              placeholder="Name of List"
              minlength="3"
              maxlength="15"
              required
              v-model="state.newList.title"
            />
            <button class="btn-primary ml-2" type="submit">Create List</button>
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-4 d-flex">
        <List v-for="list in state.lists" :key="list.id" :list="list" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { listsService } from '../services/ListsService'
import { generateId } from '../utils/GenerateId'
import { AppState } from '../AppState'

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      lists: computed(() => AppState.lists),
      newList: {}
    })
    return {
      state,
      createList() {
        state.newList.id = generateId()
        listsService.createList(state.newList)
        state.newList = {}
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
