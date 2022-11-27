import {createEvent, createEffect, createStore, forward} from "effector";
import {createGate} from "effector-react";

export const fetchUsersFx = createEffect(async () => {
    const res = await fetch('https://swapi.dev/api/people')
    const payload = await res.json()
    return payload
})

export const changeUser = createEvent()

export const $users = createStore([])

export const UsersGate = createGate()
UsersGate.open.watch(() => console.log('open'))

$users.on(fetchUsersFx.doneData, (state, payload) => payload.results
    .map(user => (
        {
            name: user.name,
            height: user.height,
            birth_year: user.birth_year,
            id: `${user.name}-${user.birth_year}`
        }
    ))
)

$users.on(changeUser, (state, payload) => {
    const newState = [...state]
    const editedUser = state.findIndex(user => user.id === payload.id)
    newState[editedUser] = payload
    return newState
})

$users.watch(state => console.log(state))

forward({
        from: UsersGate.open,
        to: fetchUsersFx
    }
)