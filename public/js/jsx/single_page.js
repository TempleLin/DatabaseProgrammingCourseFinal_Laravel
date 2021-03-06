function Footer() {
    return (
        <small className={"whiteText fixed-bottom copyright"}>@2021 Database Programming Course Group Final Project. All rights reserved.</small>
    )
}

class SinglePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            useContent: HOME_PAGE,
            sideNavContent: SIDENAV_HOME_CONTENTS
        };
    }
    //Handle to be called by child component to change state and therefore change render result.
    handlerUseContent = (comp) => { this.setState({useContent: comp}); }
    handlerSideNavContent = (comp) => {this.setState({sideNavContent: comp});}

    render = () => {
        const selectMainContentToUse = () => {
            switch (this.state.useContent) {
                case HOME_PAGE:
                    return <HomePage/>;
                case MUSICS_GALLERY:
                    return <MusicsContainer/>;
                case SOUNDS_GALLERY:
                    return <SoundsContainer/>;
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
                <a className={'navbar_brand whiteText'} onClick={() => {
                    this.handlerUseContent(HOME_PAGE);
                    this.handlerSideNavContent(SIDENAV_HOME_CONTENTS);
                }}><h4>SoundHeaven</h4></a>
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
