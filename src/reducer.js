export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: "BQDNa46SM1TBLSwJnI0m3ydd9UXXBLVouUckXifTlX09F79KaHhiU6swstbFwn2jtXfzotfdPrObvjYBlT4AjtROfL4G22tsgX4Ee-Ifd8fjoq8spA82dnnbAbw7NLEeG3QLITyoh04iV0iFmIhFEcNLgGbkzncI",
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            };
        
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        
        default:
             return state;
    }
};

export default reducer;