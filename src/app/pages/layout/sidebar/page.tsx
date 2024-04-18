export default function SideBar() {
    var style = {
        color: 'color fs-2 text-center mt-4',
        width: 'w-100 h-100 d-grid',
        height: 'sidebar-config',
        list: 'text-left fw-bolder d-grid h-50 text-dark mt-2 mb-0 row',
        btn: 'btn bnt-lg btn-color mt-3',
        readme: 'color footer-p',
        link: 'color'
    };
    return (
        <section className={style.height}>
            <div className={style.width}>
                <h1 className={style.color}>
                <i className="bi bi-github"></i> <br />
                    Git-chat
                </h1>
                <ul className={style.list}>
                    <li><button className={style.btn} style={{marginLeft:'-2%'}}><i className="bi bi-chat-left"></i> Messages</button></li>
                    <li><button className={style.btn} style={{marginLeft:'-2%'}}><i className="bi bi-people"></i> Groups</button></li>
                    <li><button className={style.btn} style={{marginLeft:'-2%'}}><i className="bi bi-info-square-fill"></i> about</button></li>
                    <li><button className={style.btn} style={{marginLeft:'-2%'}}><i className="bi bi-house"></i> home</button></li>
                </ul>
                <footer>
                    <p className={style.readme}>all reserved to <a href="#domingos" className={style.link}>Github</a> </p>
                </footer>
            </div>
        </section>
    );
}