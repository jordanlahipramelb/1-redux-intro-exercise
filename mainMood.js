// setup store with redux reducer
const store = Redux.createStore(moodReducer);
// subscribe renderMood to mood changes
const mood = document.querySelector("#mood");

const angryBtn = document.querySelector("#angry");
const sadBtn = document.querySelector("#sad");
const confusedBtn = document.querySelector("#confused");
const happyBtn = document.querySelector("#happy");

angryBtn.addEventListener("click", function () {
  store.dispatch({ type: "ANGRY", payload: "ˋ皿ˊ" });
});

sadBtn.addEventListener("click", function () {
  store.dispatch({ type: "SAD", payload: ";_;" });
});

confusedBtn.addEventListener("click", function () {
  store.dispatch({ type: "CONFUSED", payload: "⊙.☉" });
});

happyBtn.addEventListener("click", function () {
  store.dispatch({ type: "HAPPY", payload: "ʘ‿ʘ" });
});

function renderMood() {
  mood.innerText = store.getState().mood;
}

renderMood();

store.subscribe(renderMood);
/** Adds a change listener. It will be called any time an action is dispatched, and some part of the state tree may potentially have changed. You may then call getState() to read the current state tree inside the callback. */
