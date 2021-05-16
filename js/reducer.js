let state;

//dispatching an initial action to set up our initial state
function changeState(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREASE_COUNT":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function dispatch(action) {
  state = changeState(state, action);
  render();
}

function render() {
  document.body.textContent = state.count;
}

//dispatching an initial action to render the view
dispatch({ type: "@@INIT" });
