import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

class ListsService {
  createList(newList) {
    AppState.lists.push(newList)
    logger.log(AppState.lists)
  }
}

export const listsService = new ListsService()
