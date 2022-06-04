function Footer() {
    return (
        <small className={"whiteText fixed-bottom copyright"}>@2021 Database Programming Course Group Final Project. All rights reserved.</small>
    )
}

class SinglePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            useContent: ALL_SOUNDS_GALLERY,
            sideNavContent: SIDENAV_HOME_CONTENTS
        };
    }
    //Handle to be called by child component to change state and therefore change render result.
    handlerUseContent = (comp) => { this.setState({useContent: comp}); }
    handlerSideNavContent = (comp) => {this.setState({sideNavContent: comp});}

    render = () => {
        const selectMainContentToUse = () => {
            switch (this.state.useContent) {
                case ALL_SOUNDS_GALLERY:
                    return <GalleryContainer/>;
                case MUSICS_GALLERY:
                    return <MusicsContainer/>;
                case UPLOAD_FORM:
                    return <UploadForm/>;
                case LOGIN_FORM:
                    return <LoginForm handlerUseContent={this.handlerUseContent}/>;
                case REGISTER_FORM:
                    return <RegisterForm handlerUseContent={this.handlerUseContent}/>;
            }
        };
        return (
            <Fragment>
                <TopNavBar handlerUseContent={this.handlerUseContent} handlerSideNavContent={this.handlerSideNavContent}/>
                <SideNav sideNavContent={this.state.sideNavContent}/>
                <div id={'mainContents'}>
                    {selectMainContentToUse()}
                    <Footer/>
                </div>
            </Fragment>
        );
    }
}

ReactDOM.render(<SinglePage/>, document.querySelector("#root"));
