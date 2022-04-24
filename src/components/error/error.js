import errorImg from '../../img/error.gif'
import './error.scss'

const Error = () => {
    return(
        <div className='error'>
            <h2>При загрузке новостей - произошла ошибка</h2>
            <img src={errorImg} alt="Произошла ошибка" />
        </div>
    )
}

export default Error;