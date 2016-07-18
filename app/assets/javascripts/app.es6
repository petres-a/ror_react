

let commentStore = new Store()

var AppDispatcher = new Flux.Dispatcher()

AppDispatcher.register((payload) => {
  switch(payload.actionType) {
    case Constants.ADD_COMMENT:
      commentStore.addComment(payload.comment)
      commentStore.emitChange()
      break
    default:
      // default
  }
})

// Actions
class Actions{
  addComment(params) {
    AppDispatcher.dispatch({
      actionType: Constants.ADD_COMMENT,
      comment: params
    })
  }
}

let commentActions = new Actions()