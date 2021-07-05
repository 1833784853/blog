import IStates from "./IStates"
export const state:IStates = ({
    counter: 0,
    menuColor: 'rgba(24,26,28,0)',
    scrollMoveSpace: 0
})

export const mutations = {
    increment(state:IStates) {
        console.log(state);
        state.counter++
    },
    setScrollMoveSpace(state:IStates,value:number) {
        console.log(state,value);
        state.scrollMoveSpace = value
    },
    setMenuColor(state:IStates,value:string) {
        state.menuColor = value
    }
}