import React from 'react';
import cross from 'bootstrap-icons/icons/x-lg.svg';

export function Row(props) {
    return (
        <div className="card mb-5 mt-3">
            <div className="card-header">
                <span className="me-1 pointer border-end p-2 pe-5 border-4 border-primary" onClick={() => props.onEdit(props.id)}>
                    {props.note.title.length > 30 ? props.note.title.substr(0, 30) + "..." : props.note.title}
                </span>
                <button className="btn position-absolute top-0 end-0 btn-danger" onClick={() => props.onDelete(props.id)}>
                    <img src={cross} width="25" />
                </button>
            </div>
            <div className="card-body pointer" onClick={() => props.onEdit(props.id)}>
                {props.note.content.length > 100 ? props.note.content.substr(0, 100) + "..." : props.note.content}
            </div>
            <div class="card-footer text-muted d-flex justify-content-between" onClick={() => props.onEdit(props.id)}>
                <span>Date Created: {props.note.dateCreated}</span>
                <span>Date Modified: {props.note.dateModified}</span>
            </div>
        </div>
    );
}