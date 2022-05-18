class TopNavBar extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        CompsAnims.slowlySlideInNavbar();
    }
    render() {
        return (
            <nav className={"navbar"}>
                <div className="d-flex">
                    <button className="btn btn btn-outline-success text-light round-btn" onClick={() => {
                        this.props.handlerUseContent(ALL_SOUNDS_GALLERY);
                        this.props.handlerSideNavContent(SIDENAV_HOME_CONTENTS);
                    }}>Home</button>
                    {/*<form action="/" method={'GET'} className={'top_nav_left_padding'}>*/}
                    {/*    <input className="btn btn-outline-success text-light round-btn" type="submit" value="Home"/>*/}
                    {/*</form>*/}
                    <div action="/musics" className={'top_nav_left_padding top_nav_top_padding'}>
                        <button className="btn btn-sm btn-outline-success text-light round-btn" onClick={() => {this.props.handlerSideNavContent(SIDENAV_MUSIC_CATEGORIES)}}>Musics</button>
                    </div>
                    <div action="/sounds" className={'top_nav_left_padding top_nav_top_padding'}>
                        <button className="btn btn-sm btn-outline-success text-light round-btn" onClick={() => {this.props.handlerSideNavContent(SIDENAV_SOUND_CATEGORIES)}}>Sounds</button>
                    </div>
                </div>
                <div className="d-flex">
                    <button className="btn btn-outline-success text-light round-btn" onClick={() => {this.props.handlerUseContent(UPLOAD_FORM)}}>Upload</button>
                    {/*<form action="/uploading" method={'GET'}>*/}
                    {/*    <input className="btn btn-outline-success text-light round-btn" type="submit" value="Upload"*/}
                    {/*           onClick={this.props.handleUseImageContainer}/>*/}
                    {/*</form>*/}
                    <div action="/login_register">
                        <button className="btn btn-outline-success text-light form-inline round-btn"
                                onClick={() => {
                                    if (!$('#loggedIn')) {
                                        this.props.handlerUseContent(LOGIN_FORM)
                                    } else {
                                        location.reload();
                                    }
                                }}>
                            {(!$('#loggedIn'))? <span>Login/Register</span> : <span>Logout</span>}
                        </button>
                    </div>
                </div>
            </nav>
        );
    }
}
