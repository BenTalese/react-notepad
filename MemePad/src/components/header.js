import logo from '../logo.svg';
import { useLocation, useHistory } from 'react-router-dom';
import house from 'bootstrap-icons/icons/house-fill.svg';
import filePlus from 'bootstrap-icons/icons/file-earmark-plus.svg';
import trash from 'bootstrap-icons/icons/trash.svg';
import ReactTooltip from 'react-tooltip';

export function Header() {
    const history = useHistory();
    const location = useLocation();

    function renderClearButton() {
        if (location.pathname === "/") {
            return <div>
                <button
                    data-tip="This will permanently delete all notes"
                    className="nav-item btn btn-primary m-2 p-2"
                    onClick={() => history.push(`/confirmClearAll`)}
                >
                    <span>Clear All</span>
                    <img src={trash} className="ms-2" width="22" />
                </button>
                <ReactTooltip place="bottom" type="warning" effect="solid" />
            </div>
        }
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-dark border-bottom border-5 border-primary">
            <div class="container-fluid">
                <h1 class="navbar-brand">React MemePad</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
                        {renderClearButton()}
                        <button className="nav-item btn btn-primary m-2" onClick={() => history.push(`/`)}>
                            <span>All Notes</span>
                            <img src={house} className="ms-2" width="25" />
                        </button>
                        <button className="nav-item btn btn-primary m-2 p-2" onClick={() => history.push(`/create`)}>
                            <span>New Note</span>
                            <img src={filePlus} className="ms-2" width="22" />
                        </button>

                    </ul>
                    {/*<form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search all notes" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>*/}
                </div>
            </div>
        </nav>
    );
}