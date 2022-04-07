const {
    Component,
    Fragment
} = React;

class TopNavBar extends Component {
    componentDidMount() {
        CompsAnims.slowlySlideInNavbar();
    }
    render() {
        return (
            <nav className="navbar">
                <form className="form-inline">
                    <button className="btn btn-outline-success text-light round-btn" type="button"
                            onClick="location.href = 'index.php';">Home
                    </button>
                    <button className="btn btn-sm btn-outline-secondary text-light round-btn" type="button"
                            onClick="location.href = 'viewAttendees.php';">Musics
                    </button>
                    <button className="btn btn-sm btn-outline-secondary text-light round-btn" type="button"
                            onClick="location.href = 'viewAttendees.php';">Sounds
                    </button>
                </form>
                <form className="d-flex">
                    <button className="btn btn-outline-success text-light round-btn" type="button"
                            onClick="location.href = 'upload.php';">Upload
                    </button>
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

class ImagesContainer extends Component{
    componentDidMount() {
        CompsAnims.slowlySlideInRoot();
    }
    render() {
        return(
            <Fragment>
                {/*<div className={"image_gallery_wrapper"}>*/}
                {/*    <img src="https://source.unsplash.com/random/600x600?water" alt=""/>*/}
                {/*    <img src="https://source.unsplash.com/random/600x600?summer" alt=""/>*/}
                {/*    <img src="https://source.unsplash.com/random/600x600?plants" alt=""/>*/}
                {/*    <img src="https://source.unsplash.com/random/600x600?snow" alt=""/>*/}
                {/*    <img src="https://source.unsplash.com/random/600x600?roses" alt=""/>*/}
                {/*    <img src="https://source.unsplash.com/random/600x600?sky" alt=""/>*/}
                {/*    <img src="https://source.unsplash.com/random/600x600?nature" alt=""/>*/}
                {/*    <img src="https://source.unsplash.com/random/600x600?blossom" alt=""/>*/}
                {/*    <img src="https://source.unsplash.com/random/600x600?ice" alt=""/>*/}
                {/*    <img src="https://source.unsplash.com/random/600x600?spring" alt=""/>*/}
                {/*</div>*/}
                <div className="responsive whiteText">
                    <div className="gallery">
                        <a target="_blank" href="img_5terre.jpg">
                            <img src="https://source.unsplash.com/random/600x600?water" alt="Cinque Terre" width="600" height="400"/>
                        </a>
                        <div className="desc">Add a description of the image here</div>
                    </div>
                </div>
                <div className="responsive whiteText">
                    <div className="gallery">
                        <a target="_blank" href="img_forest.jpg">
                            <img src="https://source.unsplash.com/random/600x600?summer" alt="Forest" width="600" height="400"/>
                        </a>
                        <div className="desc">Add a description of the image here</div>
                    </div>
                </div>
                <div className="responsive whiteText">
                    <div className="gallery">
                        <a target="_blank" href="img_forest.jpg">
                            <img src="https://source.unsplash.com/random/600x600?summer" alt="Forest" width="600" height="400"/>
                        </a>
                        <div className="desc">Add a description of the image here</div>
                    </div>
                </div>
                <div className="responsive whiteText">
                    <div className="gallery">
                        <a target="_blank" href="img_forest.jpg">
                            <img src="https://source.unsplash.com/random/600x600?summer" alt="Forest" width="600" height="400"/>
                        </a>
                        <div className="desc">Add a description of the image here</div>
                    </div>
                </div>
                <div className="responsive whiteText">
                    <div className="gallery">
                        <a target="_blank" href="img_forest.jpg">
                            <img src="https://source.unsplash.com/random/600x600?summer" alt="Forest" width="600" height="400"/>
                        </a>
                        <div className="desc">Add a description of the image here</div>
                    </div>
                </div>
                <div className="responsive whiteText">
                    <div className="gallery">
                        <a target="_blank" href="img_5terre.jpg">
                            <img src="https://source.unsplash.com/random/600x600?water" alt="Cinque Terre" width="600" height="400"/>
                        </a>
                        <div className="desc">Add a description of the image here</div>
                    </div>
                </div>
                <div className="responsive whiteText">
                    <div className="gallery">
                        <a target="_blank" href="img_5terre.jpg">
                            <img src="https://source.unsplash.com/random/600x600?water" alt="Cinque Terre" width="600" height="400"/>
                        </a>
                        <div className="desc">Add a description of the image here</div>
                    </div>
                </div>
                <div className="responsive whiteText">
                    <div className="gallery">
                        <a target="_blank" href="img_5terre.jpg">
                            <img src="https://source.unsplash.com/random/600x600?water" alt="Cinque Terre" width="600" height="400"/>
                        </a>
                        <div className="desc">Add a description of the image here</div>
                    </div>
                </div>
                <div className="responsive whiteText">
                    <div className="gallery">
                        <a target="_blank" href="img_5terre.jpg">
                            <img src="https://source.unsplash.com/random/600x600?water" alt="Cinque Terre" width="600" height="400"/>
                        </a>
                        <div className="desc">Add a description of the image here</div>
                    </div>
                </div>
                <div className="responsive whiteText">
                    <div className="gallery">
                        <a target="_blank" href="img_5terre.jpg">
                            <img src="https://source.unsplash.com/random/600x600?water" alt="Cinque Terre" width="600" height="400"/>
                        </a>
                        <div className="desc">Add a description of the image here</div>
                    </div>
                </div>
                <div className="responsive whiteText">
                    <div className="gallery">
                        <a target="_blank" href="img_5terre.jpg">
                            <img src="https://source.unsplash.com/random/600x600?water" alt="Cinque Terre" width="600" height="400"/>
                        </a>
                        <div className="desc">Add a description of the image here</div>
                    </div>
                </div>
                <div className="responsive whiteText">
                    <div className="gallery">
                        <a target="_blank" href="img_5terre.jpg">
                            <img src="https://source.unsplash.com/random/600x600?water" alt="Cinque Terre" width="600" height="400"/>
                        </a>
                        <div className="desc">Add a description of the image here</div>
                    </div>
                </div>
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
    <div>
        <ImagesContainer/>
        <Footer/>
    </div>
    , document.querySelector("#root"));

ReactDOM.render(
    <TopNavBar/>, document.querySelector('#theNavBar')
);

ReactDOM.render(
    <SideNav/>, document.querySelector('.sidenav')
);