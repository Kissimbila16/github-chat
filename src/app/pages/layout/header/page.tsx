var style = {
    pos: 'd-flex w-100 bground-secondary',
    search: ''
}
export default function Head() {
    return (
        <header className={style.pos} style={{ height: '60px', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 className="text-white fs-5 text-left p-4 d-flex align-center" style={{ fontWeight: '200' }}>
                <i className="bi bi-justify-left rounded-2 fs-1 mt-2" style={{ marginLeft: '-12%' }}></i> &nbsp;
            </h4>
            <nav>
                <div className="input-group mb-3 mt-3 d-flex" style={{ marginLeft: '-4%' }}>
                    <input type="text" className="form-control col-sm-12 col-xl-6 col-lg-6" style={{outline:'0',boxShadow:'0 0 0 0'}} placeholder="search users in git chat" aria-label="Username" aria-describedby="basic-addon1" />
                    <button className="input-group-text search" id="basic-addon1"><i className="bi bi-search color fw-bolder"></i></button>
                </div>
            </nav>
        </header>
    );
}