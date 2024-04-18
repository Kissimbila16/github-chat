var style={
    style:'',
    top:'0%'

}

export default function Chat() {
    return (
        <main className="h-auto w-auto" style={{marginTop:style.top,paddingLeft:'15%'}} >
            <div className="d-flex items-center w-100 text-left mt-3">
                <h4 className="fs-2 fw-light text-white m-2">
                    user on moment
                </h4>
                <h4 className="fs-2 m-2">
                    <i className="bi bi-x-square-fill text-white m-2"></i>
                </h4>
            </div>
            <hr className="border-2 text-white w-75" />
            <section className="d-grid col-xl-12 col-sm-12 col-lg-12 col-12 row-12 w-100 h-100">
                <div className="col-xl-12 col-lg-6 col-sm-12" style={{marginBottom:'55%'}}>

                </div>
                <div className="col-xl-9 m-2 col-sm-12 col-lg-11 row-12 d-flex mt-0" style={{height:'auto'}}>
                    <div className="input-group mb-3 mt-3 d-flex" style={{height:'45px'}}>
                        <input type="text" className="form-control col-sm-12 col-xl-6 col-lg-6" style={{ outline: '0', boxShadow: '0 0 0 0' }} placeholder="search users in git chat" aria-label="Username" aria-describedby="basic-addon1" />
                        <button className="input-group-text search" id="basic-addon1"><i className="bi bi-send-fill color fw-bolder"></i></button>
                    </div>
                </div>            </section>


        </main>
    );
}