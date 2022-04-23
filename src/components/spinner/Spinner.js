import './Spinner.scss'

const Spinner = () => {
    return (
        <div className="spinner">
            <div className="spinner-border mx-auto mt-5 spinner_block" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>

    )
}

export default Spinner;