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
            <nav className="navbar">
                <form className="form-inline">
                    <form action="/" method={'GET'}>
                        <input className="btn btn-outline-success text-light round-btn" type="submit" value="Home" />
                    </form>
                    <button className="btn btn-sm btn-outline-secondary text-light round-btn" type="button"
                            onClick="location.href = 'viewAttendees.php';">Musics
                    </button>
                    <button className="btn btn-sm btn-outline-secondary text-light round-btn" type="button"
                            onClick="location.href = 'viewAttendees.php';">Sounds
                    </button>
                </form>
                <form className="d-flex">
                    <form action="/uploading" method={'GET'}>
                        <input className="btn btn-outline-success text-light round-btn" type="submit" value="Upload" />
                    </form>
                    <button className="btn btn-outline-success text-light form-inline round-btn"
                            type="button">Login/Register
                    </button>
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
