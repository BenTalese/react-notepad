import { useHistory } from "react-router-dom";
import { Storage } from '../services';

export function ConfirmClearAll() {
    const history = useHistory();

    function clearNotes() {
        Storage.removeItem('notes');
        history.goBack();
    }

    return (
        <div className="container app-view">
            <div className="text-center justify-content-center p-5">
                <h1 className="text-white">Are you sure?</h1>
                <p className="text-white">This will permanently delete all stored notes. This is not reversable.</p>
                <button className="btn btn-success me-3" onClick={clearNotes}>YES</button>
                <button className="btn btn-danger" onClick={() => history.goBack()}>NO</button>
            </div>
        </div>
    );
}