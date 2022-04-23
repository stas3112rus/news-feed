import './news.scss';
import Button from '../button/Button';
import authorDefault from '../../img/author-default.png';
import send from '../../icons/send.svg' ;
import hiddenMessage from '../../icons/hidden-mesage.svg';
import options from '../../icons/options.svg';
import star from '../../icons/star.svg';
import notImage from '../../img/Image_not_available.png';

const News = () => {

    return (
        <div className="news">
            <div className="news__author-photo">
                <img src={authorDefault} alt="Фото автора" className="news__author-photo-img"/>
            </div>
            <div className="news__top">
                <div className="news__top-left">
                    <div className="news__author-name">Nina Malofeeva</div>
                    <div className="news__text-main-post">Текст поста в соц. сетях если это комментарий</div>
                </div>
                <div className="news__top-right">
                    <div className="buttons news_buttons">
                        <Button name='Левый'/>
                        <Button name='Центр'/>
                        <Button name='Правый'/>
                    </div>
                    <div className="news__icons">
                        <a href="123" className="news__icon">
                            <img src={send} alt=""/>
                        </a>
                        <a href="123" className="news__icon">
                            <img src={hiddenMessage} alt=""/>
                        </a>
                        <a href="123" className="news__icon">
                            <img src={options} alt=""/>
                        </a>
                        <a href="123" className="news__icon">
                            <img src={star} alt="" className="news_selected"/>
                        </a>
                    </div>
                </div>           

            </div>
          
            <div className="news__time">
                15:57
            </div>
            <div className="news__text">
                <div className="news__text-main">
                    "Россия 1" не боится снимать сериалы о сложных и неоднозначных периодах в истории нашей страны. Это и "В круге первом", и "Жизнь и судьба", и "Зулейха". Идёт работа над "Одним днём Ивана Денисовича". Вопрос Антону Златопольскому -почему вы считаете 
                </div>                    
                <a href="123" className="news__link-next">
                    Далее
                </a>
            </div> 
             
            <div>
            
            </div>
            <div className='news__photo'>
                <img src={notImage} alt="Картинка новости"/>
            </div>
            <div className="news__tags">
                <a href="123" className="news__tags-link">
                    #Новое
                </a>
                <a href="123" className="news__tags-link">
                    #Эксперт
                </a>

            </div> 

        </div>
    )
}

export default News;