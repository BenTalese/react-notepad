import { Header, Router, Footer } from './components';
import './customStyles.sass';
import "../node_modules/bootstrap/dist/js/bootstrap";

function App() {

    return (
        <div className="App">
            <Header />
            <Router />
            <Footer />
        </div>
    );
}

export default App;