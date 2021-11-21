import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Storage, SessionStorage } from '../services';
import { Confirm } from '../components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Create() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [charCount, setCharCount] = useState(0);
    const history = useHistory();
    let changesSaved = false;
    const initialNoteCount = Storage.getItem("notes", []).length;

    useEffect(() => {
        SessionStorage.setSessionItem("tempTitle", title);
        SessionStorage.setSessionItem("tempContent", content);
        changesSaved = false;
    }, [title, content]);

    function verifySaveSuccess() {
        let currentNoteCount = Storage.getItem("notes", []).length;
        if (currentNoteCount > initialNoteCount) {
            changesSaved = true;
            toast.success("Saved!", { autoClose: 2500 });
        } else {
            toast.error("There was an issue saving...", { autoClose: 2500 });
        }
    }

    function onSave() {
        if (title != "" && content != "" && !changesSaved) {
            let d = new Date();
            let now = d.toLocaleTimeString() + ", " + d.toDateString();
            let newNote = { title: title, content: content, dateCreated: now, dateModified: now, dateAccessed: now, charCount: charCount};
            let notes = Storage.getItem("notes", []);
            notes.push(newNote);
            Storage.setItem("notes", notes);
            verifySaveSuccess();
            history.push(`edit/${notes.indexOf(newNote)}`);
        } else if (changesSaved) {
            toast.info("No changes to save.", { autoClose: 2500 });
        } else if (title == "") {
            toast.warning("Please enter a title!", { autoClose: 2500 });
        } else {
            toast.warning("Cannot save an empty note.", { autoClose: 2500 });
        }
    }

    function onClose() {
        if(title == "" && content == "") {
            history.push(`/`);
        } else if (changesSaved) {
            Clear();
            history.push(`/`);
        } else {
            toast.warning(<Confirm msgTitle={"Are you sure?"} msg={"Unsaved changes won't be saved."} yes={() => history.push(`/`)} />);
        }
    }

    function Clear() {
        SessionStorage.removeSessionItem("tempTitle");
        SessionStorage.removeSessionItem("tempContent");
        setTitle("");
        setContent("");
    }

    return (
        <div className="container-fluid app-view">
            <div className="row m-2 justify-content-center">
                <input
                    className="col-8 me-4"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Usually people give their note a title..."
                />
                <button className="col-1 me-2 btn btn-success" onClick={onSave}>Save</button>
                <button className="col-1 btn btn-danger" onClick={onClose}>Close</button>
            </div>
            <div className="row justify-content-center">
                <textarea
                    className="col-10 typeSpace m-2 overflow-scroll"
                    rows="20"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    placeholder="Wow, it's almost as if you could write something here..."
                />
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


























/*

import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Storage, SessionStorage } from '../services';
import { Confirm } from '../components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Create() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const history = useHistory();
    let changesSaved = false;
    const initialNoteCount = Storage.getItem("notes", []).length;

    useEffect(() => {
        SessionStorage.setSessionItem("tempTitle", title);
        SessionStorage.setSessionItem("tempContent", content);
        changesSaved = false;
    }, [title, content]);

    function verifySaveSuccess() {
        let currentNoteCount = Storage.getItem("notes", []).length;
        if (currentNoteCount > initialNoteCount) {
            changesSaved = true;
            toast.success("Saved!", { autoClose: 2500 });
        } else {
            toast.error("There was an issue saving...", { autoClose: 2500 });
        }
    }

    function onSave() {
        if (title != "" && content != "" && !changesSaved) {
            let d = new Date();
            let now = d.toDateString() + ", " + d.toLocaleTimeString();
            let newNote = { title: title, content: content, dateCreated: now, dateModified: now };
            let notes = Storage.getItem("notes", []);
            if (notes.length > initialNoteCount) {
                notes[notes.length-1]
            }
            notes.push(newNote);
            Storage.setItem("notes", notes);
            verifySaveSuccess();
        } else if (changesSaved) {
            toast.info("No changes to save.", { autoClose: 2500 });
        } else if (title == "") {
            toast.warning("Please enter a title!", { autoClose: 2500 });
        } else {
            toast.warning("Cannot save an empty note.", { autoClose: 2500 });
        }
    }

    function onClose() {
        if(title == "" && content == "") {
            history.push(`/`);
        } else if (changesSaved) {
            Clear();
            history.push(`/`);
        } else {
            toast.warning(<Confirm msgTitle={"Are you sure?"} msg={"Unsaved changes won't be saved."} yes={() => history.push(`/`)} />);
        }
    }

    function Clear() {
        SessionStorage.removeSessionItem("tempTitle");
        SessionStorage.removeSessionItem("tempContent");
        setTitle("");
        setContent("");
    }

    return (
        <div className="container-fluid app-view">
            <div className="row m-2 justify-content-center">
                <input
                    className="col-8 me-4"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Usually people give their note a title..."
                />
                <button className="col-1 me-2 btn btn-success" onClick={onSave}>Save</button>
                <button className="col-1 btn btn-danger" onClick={onClose}>Close</button>
            </div>
            <div className="row justify-content-center">
                <textarea
                    className="col-10 typeSpace m-2 overflow-scroll"
                    rows="20"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    placeholder="Wow, it's almost as if you could write something here..."
                />
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

*/