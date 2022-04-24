import { useDispatch, useSelector  } from 'react-redux';
import {reverse} from '../../actions/news'
import News from "../news/News";

import './newsFeed.scss'

const NewsFeed = () => {
    const dispatch = useDispatch();
    const {allNews, firstNewsId, directionNewsDirectly} = useSelector(state => state.newsFeed)

    const buttonDirectName = directionNewsDirectly ? "Сначала старые" : "Сначала новые"

    const reversNews = () =>{
        const reversed = [...allNews];
        reversed.reverse();
        
        dispatch(reverse(reversed))
    }

    const renderNews = (arr) =>{
        if (arr.length === 0) return <h2>Новостей пока нет</h2>;

        return arr.map(({id, ...props}) => {
            return  id >= firstNewsId ? 
                        <News key={id} id={id}  {...props}/> : 
                        null
        })
    }


    const context = renderNews(allNews);  

    return (
        <>
            <div className="newsFeed__button">
                <button onClick={reversNews}>
                    {buttonDirectName}
                </button>
            </div>
            {context}
        </>
    )
}

export default NewsFeed