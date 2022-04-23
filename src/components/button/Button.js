import './button.scss';

const Button = ({name}) =>{
    return (
        <button className='buttons__button'>
            {name}
        </button>
    )
}

export default Button;