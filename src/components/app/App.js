import {useHttp} from '../../hooks/http.hook';
import {useEffect} from 'react';
import { useDispatch, useSelector  } from 'react-redux';

import {newsFetched, newsError, updateNews} from '../../actions/news'

import Spinner from '../spinner/Spinner';
import NewsFeed from '../newsFeed/newsFeed';
import Error from '../error/error';

import './app.scss';

const App = () => {

    const newsUrlJSON = 'https://my-json-server.typicode.com/stas3112rus/news-feed/news/'; 

    const {newsLoadingStatus, status, updateTime, lastNewsId} = useSelector(state => state.newsFeed)

    const dispatch = useDispatch();
    const {request} = useHttp();    

    const intervalUpdate = (lastNewsId)=>{
        setInterval(() => {
            request(newsUrlJSON)
                .then(data=>{
                    if (data[data.length-1].id > lastNewsId){
                        dispatch(updateNews(data))
                        console.log("we update");
                    } else{
                        console.log ("Threre aren't new news")
                    }
                })
                .catch(()=> console.log("we can't fetch new news"));

          }, updateTime);
    }

    useEffect(() => {
        request(newsUrlJSON)
            .then(data=>dispatch(newsFetched(data)))
            .catch(()=>dispatch(newsError()));
            
            intervalUpdate();
    },[]);

  
    
    const getContext = () =>{
        if (newsLoadingStatus === 'error') {
            return <Error/>
        }
        return status === 'loading' ? <Spinner/> : <NewsFeed/>
    }   

    const context =  getContext();

    return (
        <main className="app">
            <div className="container">
                <h1>Новостная лента</h1>
                {context}
            </div>
        </main>
    )
}

export default App;