import { useState, useEffect } from 'react';
import { Storage } from '../services';
import { Row, Confirm } from '../components';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import empty from '../such-empty.jpg';

export function Home() {
    const [notes, setNotes] = useState([]);
    const history = useHistory();

    // function to pull up notes from storage only once on page load
    useEffect(() => {
        setNotes(Storage.getItem("notes", []));
    }, []);

    // function to check whether or not all notes have been cleared from header clear button
    useEffect(() => {
        let storedNotes = Storage.getItem("notes", []);
        if (JSON.stringify(storedNotes) !== JSON.stringify(notes)) {
            setNotes(storedNotes);
        }
    }, [Storage.getItem("notes")]);

    function onDelete(id) {
        let temp = Array.from(notes);
        temp.splice(id, 1);
        setNotes(temp);
        Storage.setItem("notes", temp);
    }

    // function to trigger note deletion confirmation pop-up
    function delConfirm(id) {
        toast.warning(
            <Confirm msgTitle={"Are you sure?"} msg={"Deleting a note is permanent."} yes={() => onDelete(id)} />, {
                className: 'black-background',
                bodyClassName: "grow-font-size"
            })
    }

    function renderEmpty() {
        if (notes.length == 0) {
            return <img className="position-absolute top-50 start-50 translate-middle" src={empty}/>
        }
    }

    return (
        <div className="app-view">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-8">
                        {notes.map((note, id) =>
                            <Row
                                note={note}
                                id={id}
                                onDelete={delConfirm}
                                onEdit={() => history.push(`edit/${id}`)}
                            />
                        )}
                    </div>
                </div>
                {renderEmpty()}
            </div>

            <ToastContainer
                position="top-center"
                autoClose={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                theme="dark"
                pauseOnFocusLoss
                draggable={false}
            />
        </div>
    );
}