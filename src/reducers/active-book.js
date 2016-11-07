// State
export default function(state=null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
        	// Don't mutate the values
            return action.payload
    }
    // Redux don't allow undefined.
    return state
}
