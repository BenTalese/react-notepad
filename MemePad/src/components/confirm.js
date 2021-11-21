export function Confirm(props, { closeToast }) {
    return (
        <div>
            <p>{props.msgTitle}</p>
            <p>{props.msg}</p>
            <button className="btn btn-success me-3" onClick={props.yes}>YES</button>
            <button className="btn btn-danger" onClick={closeToast}>NO</button>
        </div>
    );
}