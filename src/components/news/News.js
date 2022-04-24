import './news.scss';

import { useState } from 'react';

import Button from '../button/Button';
import authorDefault from '../../img/author-default.png';
import send from '../../icons/send.svg' ;
import hiddenMessage from '../../icons/hidden-mesage.svg';
import options from '../../icons/options.svg';
import star from '../../icons/star.svg';
import notImage from '../../img/Image_not_available.png';

const News = ({id, author, time, text, urlNews, newsImage, tags}) => {    
    const [selected, setSelected] = useState(()=>{
        const saved = localStorage.getItem(id);
        const initialValue = JSON.parse(saved);
        return initialValue || false;
    });   

    const onSelect = (e) => {
        e.preventDefault();
        
        localStorage.setItem(id, !selected);
        setSelected(!selected);
    }

    const {name, photo, textMainPost} = author;
    const photoAuthor = photo ? photo : authorDefault
    const photoNews = newsImage ? newsImage : notImage;

    const tagsOnPage = tags.map(tag=>{
        return <a key={`${id}-${tag.tag}`} href={tag.url} className="news__tags-link">{tag.tag}</a>
    })

    const classSelect = selected ? "news_selected" : null;

    return (
        <div className="news">
            <div className="news__author-photo">
                <img src={photoAuthor} alt={`фото автора ${name}`} className="news__author-photo-img"/>
            </div>
            <div className="news__top">
                <div className="news__top-left">
                    <div className="news__author-name">{name}</div>
                    <div className="news__text-main-post">{textMainPost}</div>
                </div>
                <div className="news__top-right">
                    <div className="buttons news_buttons">
                        <Button key={`${id}-left`} name='Левый'/>
                        <Button key={`${id}-center`} name='Центр'/>
                        <Button key={`${id}-right`} name='Правый'/>
                    </div>
                    <div className="news__icons">
                        <a href={"123"} className="news__icon">
                            <img src={send} alt=""/>
                        </a>
                        <a href="123" className="news__icon">
                            <img src={hiddenMessage} alt=""/>
                        </a>
                        <a href="123" className="news__icon">
                            <img src={options} alt=""/>
                        </a>
                        <a href="123" 
                            className="news__icon"
                            onClick={(e)=>onSelect(e)}
                            >
                            <img src={star} alt="" className={classSelect}/>
                        </a>
                    </div>
                </div>           

            </div>          
            <div className="news__time">
                {time}
            </div>
            <div className="news__text">
                <div className="news__text-main">
                    {text}
                </div>                    
                <a href={urlNews} className="news__link-next">
                    Далее
                </a>
            </div> 
             
            <div>
            
            </div>
            <div className='news__photo'>
                <img src={photoNews} alt="Картинка новости"/>
            </div>
            <div className="news__tags">
                {tagsOnPage}
            </div> 
        </div>
    )
}

export default News;