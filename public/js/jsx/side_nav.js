class SideNav extends Component {
    componentDidMount() {
        CompsAnims.slowlySlideInSideNav();
    }
    selectContents = () => {
        switch (this.props.sideNavContent) {
            case SIDENAV_HOME_CONTENTS:
                return (
                    <div className={'sidenav'}>
                        <a href={'#'}>About</a>
                        <a href={'#'}>Services</a>
                        <a href={'#'}>Clients</a>
                        <a href={'#'}>Contact</a>
                    </div>
                );
            default:
                return <Fragment></Fragment>;
        }
    }
    render() {
        return this.selectContents();
    }
}
