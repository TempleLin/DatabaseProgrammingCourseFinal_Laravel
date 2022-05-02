class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: null,
            sound_type: 0
        };
    }
    componentDidMount() {
        CompsAnims.slowlySlideInSideNav();
    }
    selectContents = () => {
        switch (this.props.sideNavContent) {
            case SIDENAV_HOME_CONTENTS:
                return (
                    <Fragment>
                        <a href={'#'}>About</a>
                        <a href={'#'}>Services</a>
                        <a href={'#'}>Clients</a>
                        <a href={'#'}>Contact</a>
                    </Fragment>
                );
            case SIDENAV_SOUND_CATEGORIES:
                this.getCategories(SOUND_TYPE_ID);
                return (
                    <Fragment>
                        {this.setCategories()}
                    </Fragment>
                );
            case SIDENAV_MUSIC_CATEGORIES:
                this.getCategories(MUSIC_TYPE_ID);
                return (
                    <Fragment>
                        {this.setCategories()}
                    </Fragment>
                );
            default:
                return <Fragment></Fragment>;
        }
    }
    render() {
        return (
            <div className={'sidenav'}>
                {this.selectContents()}
            </div>
        );
    }

    setCategories = () => {
        if (this.state.categories) {
            return Object.keys(this.state.categories).map((e, i) => {
                const categoryJSON = this.state.categories[e];
                // Each item in React list should have 'key' prop.
                return <a key={i} href={'#'}>{categoryJSON.category}</a>;
            });
        }
    }

    getCategories = (type) => {
        //Prevent recursive re-rendering due to setState() inside "success" callback.
        if (this.state.sound_type === type) {
            return;
        }
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') //CSRF Token related to Laravel.
            },
            url:'/get_categories',
            method: "GET",
            dataType: 'json',
            data: {'sound_type': type},
            // processData: false,
            // contentType: false,
            success: (data) => {
                this.setState({categories: data});
                this.setState({sound_type: type});
            },error: (data) => {
                console.log(data);
            }
        });
    }
}
