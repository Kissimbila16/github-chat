
import Chat from "../chat/page";
import Default from "../layout/default/page";
import Head from "../layout/header/page";
import SideBar from "../layout/sidebar/page";
var style = {
    color: 'text-danger',
    div: 'd-flex w-100 h-100',
    page: 'page-config d-flex h-auto w-100',
    sidebar: 'sidebar-config',
    content: 'w-100 h-100 d-grid'
};
export default function Dashboard() {
    return (
        <main>
            <div className={style.page}>
                <div className={style.sidebar}>
                    <SideBar />
                </div>
                <div className={style.content}>
                    <Head />
                    <Chat />
                </div>
            </div>
        </main>
    );
}