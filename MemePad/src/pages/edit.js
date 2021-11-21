import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Storage, SessionStorage } from '../services';

export function Edit() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        parseInt(id);
        let note = Storage.getItem("notes", [])[id];
        setTitle(note.title);
        setContent(note.content);
    }, []);

    useEffect(() => {
        SessionStorage.setSessionItem("tempTitle", title);
        SessionStorage.setSessionItem("tempContent", content);
    }, [title, content]);

    function onSave() {
        let notes = Storage.getItem("notes", []);
        notes[id].title = title;
        notes[id].content = content;
        Storage.setItem("notes", notes);
        Clear();
        history.push(`/`);
    }

    function Clear() {
        SessionStorage.removeSessionItem("tempTitle");
        SessionStorage.removeSessionItem("tempContent");
        setTitle("");
        setContent("");
    }

    return (
        <div className="container-fluid">
            <div className="row m-2 justify-content-center">
                <input
                    className="col-6 me-4"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Title"
                />
                <button className="col-2 btn btn-success" onClick={onSave}>Save</button>
            </div>
            <div className="row justify-content-center">
                <textarea
                    className="col-8 typeSpace overflow-scroll m-2"
                    rows="20"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    placeholder="..."
                />
            </div>
        </div>
    );
}