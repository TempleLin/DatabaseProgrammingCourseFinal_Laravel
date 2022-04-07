const {
    Component,
    Fragment
} = React;

class TopNavBar extends Component {
    uploadPage = '{{ route(\'upload\') }}';

    componentDidMount() {
        CompsAnims.slowlySlideInNavbar();
    }
    render() {
        return (
            <nav className={"navbar"}>
                <form className="d-flex">
                    <form action="/" method={'GET'} className={'top_nav_left_padding'}>
                        <input className="btn btn-outline-success text-light round-btn" type="submit" value="Home" />
                    </form>
                    <form action="/musics" method={'GET'} className={'top_nav_left_padding top_nav_top_padding'}>
                        <input className="btn btn-sm btn-outline-secondary text-light round-btn" type="submit" value="Musics" />
                    </form>
                    <form action="/sounds" method={'GET'} className={'top_nav_left_padding top_nav_top_padding'}>
                        <input className="btn btn-sm btn-outline-secondary text-light round-btn" type="submit" value="Sounds" />
                    </form>
                </form>
                <form className="d-flex">
                    <form action="/uploading" method={'GET'}>
                        <input className="btn btn-outline-success text-light round-btn" type="submit" value="Upload" />
                    </form>
                    <form action="/login_register" method={'GET'}>
                        <input className="btn btn-outline-success text-light form-inline round-btn" type="submit" value="Login/Register" />
                    </form>
                </form>
            </nav>
        );
    }
}

class SideNav extends Component {
    componentDidMount() {
        CompsAnims.slowlySlideInSideNav();
    }
    render() {
        return (
            <Fragment>
                <a href={'#'}>About</a>
                <a href={'#'}>Services</a>
                <a href={'#'}>Clients</a>
                <a href={'#'}>Contact</a>
            </Fragment>
        );
    }
}

function Footer() {
    return (
        <small className={"whiteText fixed-bottom copyright"}>@2021 Database Programming Course Group Final Project. All rights reserved.</small>
    )
}

ReactDOM.render(
    <TopNavBar/>, document.querySelector('#theNavBar')
);

ReactDOM.render(
    <SideNav/>, document.querySelector('.sidenav')
);
