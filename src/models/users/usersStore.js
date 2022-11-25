import {createDomain} from "effector";

export const usersDomain = createDomain('users')

export const fetchUsersFx = usersDomain.createEffect(async () => {
    const res = await fetch('https://swapi.dev/api/people')
    const payload = await res.json()
    return payload
})

export const changeUser = usersDomain.createEvent()

export const $users = usersDomain.createStore([])

$users.on(fetchUsersFx.doneData, (state, payload) => payload.results)

$users.on(changeUser, (state, payload) => {
    const newState = [...state]
    const editedUser = state.find(user => user.name === payload.name)
    editedUser.name = payload.changed
    return newState
})
$users.watch(state => console.log(state))