import './app.scss';
import Spinner from '../spinner/Spinner';
import News from '../news/News';

const App = () => {
    
    return (
        <main className="app">
            <div className="container">
                <h1>Новостная лента</h1>
                <Spinner />
                <News />
            </div>
        </main>
    )
}

export default App;