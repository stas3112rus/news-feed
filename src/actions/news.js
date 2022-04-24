export const newsFetched = (news) => {
    return {
        type: 'NEWS_FETCHED',
        payload: news
    }
}

export const newsError = () =>{
    return {
        type: 'NEWS_ERROR'
    }
}

export const updateNews = (news) => {
    return{
        type: 'UPDATE_NEWS',
        payload: news
    }
}

export const reverse = (reversed) => {
    return {
        type: "REVERSE",
        payload: reversed
    }
}

