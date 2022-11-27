import {createDomain} from "effector";

export const usersDomain = createDomain('users')

export const fetchUsersFx = usersDomain.createEffect(async () => {
    const res = await fetch('https://swapi.dev/api/people')
    const payload = await res.json()
    return payload
})

export const changeUser = usersDomain.createEvent()

export const $users = usersDomain.createStore([])

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