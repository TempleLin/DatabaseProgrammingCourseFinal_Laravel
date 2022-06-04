class TopNavBar extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        CompsAnims.slowlySlideInNavbar();
    }
    render() {
        return (
            <div className={'top_navbar'}>
                <nav className={"navbar"}>
                    <div className="d-flex">
                        <div action="/musics" className={'top_nav_left_padding top_nav_top_padding'}>
                            <button className="btn btn-sm btn-outline-success text-light round-btn"
                                    onClick={() => {
                                        this.props.handlerSideNavContent(SIDENAV_MUSIC_CATEGORIES);
                                        this.props.handlerUseContent(MUSICS_GALLERY);
                                    }}>Musics</button>
                        </div>
                        <div action="/sounds" className={'top_nav_left_padding top_nav_top_padding'}>
                            <button className="btn btn-sm btn-outline-success text-light round-btn"
                                    onClick={() => {
                                        this.props.handlerSideNavContent(SIDENAV_SOUND_CATEGORIES);
                                        this.props.handlerUseContent(SOUNDS_GALLERY);
                                    }}>Sounds</button>
                        </div>
                    </div>
                    <div className="d-flex">
                        <button className="btn btn-outline-success text-light round-btn" onClick={() => {this.props.handlerUseContent(UPLOAD_FORM)}}>Upload</button>
                        <div action="/login_register">
                            <button className="btn btn-outline-success text-light form-inline round-btn"
                                    onClick={() => {
                                        if ($('#loggedIn').text() !== '1') {
                                            this.props.handlerUseContent(LOGIN_FORM)
                                        } else {
                                            $.ajax({
                                                headers: {
                                                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') //CSRF Token related to Laravel.
                                                },
                                                url:'/logout',
                                                method: "GET",
                                                dataType: 'text', //Response to expect.
                                                data: null,
                                                // processData: false, //Stops jQuery processing any of the data.
                                                // contentType: false, //Forces jQuery not to add a Content-Type header.
                                                success:function (data) {
                                                    if (data === 'LOGOUT_SUCCESS') {
                                                        location.reload();
                                                    }
                                                },error:function(data){
                                                    console.log(data);
                                                }
                                            });
                                        }
                                    }}>
                                {($('#loggedIn').text() !== '1')? <span>Login/Register</span> : <span>Logout</span>}
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
