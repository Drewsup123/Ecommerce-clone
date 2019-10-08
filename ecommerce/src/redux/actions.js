// /* 
//   Action Types Go Here!
//   Be sure to export each action type so you can pull it into your reducer
// */
export const CHANGE_TEST = "CHANGE_TEST";
// export const ADDBOARD = "ADD_BOARD";
// export const ADDBOARDID = "ADDBOARDID"

export const changeTest = () => dispatch => {
    dispatch({type: CHANGE_TEST, payload:"changed"})
}
