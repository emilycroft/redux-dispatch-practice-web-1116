export let state


export function managePets(state={pets: []}, action){
  switch(action.type) {
    case 'ADD_PET':
      return {pets: [...state.pets, action.payload]}
    case 'REMOVE_PET':
      let i = state.pets.findIndex(pet => pet.id === action.payload)
      let pets = [...state.pets.slice(0, i), ...state.pets.slice(i + 1)]
      return Object.assign({}, state, {pets: pets})
    default:
      return state
  }
}


export function dispatch(action){
  state = managePets(state, action)
  render()
}


// export function render(){
//   let listItems = state.pets.map(function(pet) {
//     return `<li>${pet.name}</li>`
//   })
//   console.log(state)
//   document.getElementById('container').innerHtml = `<ul>${listItems.join("")}</ul>`
// }


export function render(){
  let listItems = state.pets.map((pet) =>  `<li>${pet.name}</li>` )
  document.getElementById('container').innerHtml = `<ul>${listItems.join("")}</ul>`
}
