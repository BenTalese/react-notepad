import { useHistory } from "react-router-dom";
import filePlus from 'bootstrap-icons/icons/file-earmark-plus.svg';

export function Footer() {
    const history = useHistory();

    return (
        <footer className="border-top border-primary border-5 footer d-flex justify-content-center">
            <button className="btn btn-outline-secondary px-5 m-3" onClick={() => history.push(`/create`)}>
                <img src={filePlus} width="35" />
                
            </button>
        </footer>
    );
}