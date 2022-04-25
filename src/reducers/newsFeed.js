const initialState = {
    status: "loading",
    directionNewsDirectly: true,    
    allNews: [],
    newsOnFirst: 10,
    firstNewsId: 0,
    lastNewsId: 0,
    newsLoadingStatus: "idle",
    updateTime: 5000
}

const newsFeed = (state = initialState, action) => {
    switch (action.type) {
        case 'NEWS_FETCHED' :
            return {
                ...state,
                status: 'idle',
                allNews: action.payload,
                firstNewsId: action.payload.length < state.newsOnFirst ? 
                             action.payload[0].id : 
                             action.payload[action.payload.length-state.newsOnFirst].id, 
                lastNewsId: action.payload[action.payload.length-1].id
            }
        case 'UPDATE_NEWS' :
             return {
                ...state,
                allNews: action.payload,
                lastNewsId: action.payload[action.payload.length-1].id
             }   
        case 'NEWS_ERROR' : 
            return{
                ...state, 
                newsLoadingStatus: 'error'
            }
        
        case "REVERSE" : {
            return {
                ...state,
               directionNewsDirectly: !state.directionNewsDirectly,
               allNews: action.payload

            }
        }

        default: return state
    }
}

export default newsFeed;