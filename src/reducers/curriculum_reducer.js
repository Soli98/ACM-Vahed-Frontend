const FETCH_CURRICULUMS = "FETCH_CURRICULUMS"

export default function (state = {}, action = {}) {
    switch (action.type) {
        case FETCH_CURRICULUMS:
            return action.curriculums;
        default:
            return state;
    }
}