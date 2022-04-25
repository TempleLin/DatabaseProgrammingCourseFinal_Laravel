const {
    Component,
    Fragment
} = React;

/**
 * TODO: Change ALL_SOUNDS_GALLERY to MUSIC_GALLERY and SOUND_GALLERY individually. Change Homepage to single landing page.
 * TODO: Login form.
 * TODO: Register form.
 */

//'Symbol' is similar to enum in JS.
const ALL_SOUNDS_GALLERY = Symbol('all_sounds_gallery');
const UPLOAD_FORM = Symbol('upload_form');
const LOGIN_FORM = Symbol('login_form');
const REGISTER_FORM = Symbol('register_form');

const SOUND_TYPE_ID = '0'
const MUSIC_TYPE_ID = '1'

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
                    <button className="btn btn btn-outline-success text-light round-btn" onClick={() => {this.props.handlerUseContent(ALL_SOUNDS_GALLERY)}}>Home</button>
                    {/*<form action="/" method={'GET'} className={'top_nav_left_padding'}>*/}
                    {/*    <input className="btn btn-outline-success text-light round-btn" type="submit" value="Home"/>*/}
                    {/*</form>*/}
                    <div action="/musics" className={'top_nav_left_padding top_nav_top_padding'}>
                        <button className="btn btn-sm btn-outline-success text-light round-btn">Musics</button>
                    </div>
                    <div action="/sounds" className={'top_nav_left_padding top_nav_top_padding'}>
                        <button className="btn btn-sm btn-outline-success text-light round-btn">Sounds</button>
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
                                onClick={() => {this.props.handlerUseContent(LOGIN_FORM)}}>Login/Register</button>
                    </div>
                </div>
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
            <div className={'sidenav'}>
                <a href={'#'}>About</a>
                <a href={'#'}>Services</a>
                <a href={'#'}>Clients</a>
                <a href={'#'}>Contact</a>
            </div>
        );
    }
}

class GalleryContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            allImgs: ''
        };
    }
    componentDidMount() {
        CompsAnims.slowlySlideInRoot();
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') //CSRF Token related to Laravel.
            },
            url:'/get_all_uploads',
            method: "GET",
            dataType: 'json', //Response to expect.
            // data: new FormData(this),
            // processData: false, //Stops jQuery processing any of the data.
            // contentType: false, //Forces jQuery not to add a Content-Type header.
            success: (data) => {
                let allImgsJSXArray = []; //JSX elements pushed to array can be automatically recognized and converted by React when render.
                data.forEach((element) => {
                    allImgsJSXArray.push(
                        <div className="responsive whiteText" key={element.name}>
                            <div className="gallery">
                                <a target="_blank">
                                    <img src={element.thumbnail_file_loc} alt="" width="600" height="400"/>
                                    <div className="desc">{element.name}</div>
                                </a>
                            </div>
                        </div>
                    );
                });
                console.log(allImgsJSXArray);
                // $('#mainContents').append(allImgsStr);
                this.setState({allImgs: allImgsJSXArray});
            },error:function(data){
                console.log(data);
            }
        });
    }
    render() {
        return(
            <Fragment>
                {this.state.allImgs}
                {/*<div className="responsive whiteText">*/}
                {/*    <div className="gallery">*/}
                {/*        <a target="_blank" href="img_5terre.jpg">*/}
                {/*            <img src="https://source.unsplash.com/random/600x600?water" alt="Cinque Terre" width="600" height="400"/>*/}
                {/*        </a>*/}
                {/*        <div className="desc">Add a description of the image here</div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </Fragment>
        );
    }
}

class UploadForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoriesType: '-1'
        };
    }
    componentDidMount() {
        CompsAnims.slowlySlideInUploadForm();

        //Prevent default form submits, use ajax to send json request.
        $('#upload_form').on('submit', function(e){
            e.preventDefault();

            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') //CSRF Token related to Laravel.
                },
                url:'/upload_file',
                method: "POST",
                dataType: 'text', //Response to expect.
                data: new FormData(this),
                processData: false, //Stops jQuery processing any of the data.
                contentType: false, //Forces jQuery not to add a Content-Type header.
                success:function (data) {
                    switch (data) {
                        case 'FILE NULL':
                            alert('One or both uploaded files are NULL!');
                            break;
                        case 'FILE UNMATCHED':
                            alert('Filetype unmatched!');
                            break;
                        case 'NoSoundNoMusicSelect':
                            alert('No Sound nor Music Type Selected!');
                            break;
                        case 'SUCCESS':
                            alert('Upload success!');
                            break;
                        case 'DUPLICATE_PRIMARY_KEY':
                            alert('Failed: Name for upload already taken.');
                            break;
                    }
                    console.log('Upload result message: ' + data);
                },error:function(data){
                    console.log(data);
                }
            });
        });
    }
    render() {
        return (
            <div className="center" id={'uploadFormDiv'}>
                <form name="form" method="post" action="/upload_file" encType="multipart/form-data"
                      className="form-group upload_form" id={'upload_form'}>
                    <label htmlFor={'nameForUpload'} className={'whiteText'}>Name for your Upload: &nbsp;</label>
                    <input type="text" name={'nameForUpload'} id={'nameForUpload'} placeholder={'enter a name'} required={true}/>
                    <br/>
                    <br/>
                    <label htmlFor={'picFileSelect'} className={'whiteText'}>Select Thumbnail (.jpg, .png., .svg)</label> <br/>
                    <input type="file" name="picFileSelect" className={'whiteText'} id={'picFileSelect'} required={true}/><br/><br/>
                    <label htmlFor={'soundFileSelect'} className={'whiteText'}>Select Sound File (.mp3, .wav, .aac)</label> <br/>
                    <input type="file" name="soundFileSelect" className={'whiteText'} id={'soundFileSelect'} required={true}/><br/><br/>
                    <label htmlFor="soundType" className={'whiteText'}>Sound or Music: &nbsp;</label>
                    <select name="soundType" id="soundType" onChange={this.getCategories}>
                        <option value='-1'></option>
                        <option value={SOUND_TYPE_ID}>Sound</option>
                        <option value={MUSIC_TYPE_ID}>Music</option>
                    </select>
                    <br/>
                    <label htmlFor="categories" className={'whiteText'}>Category:</label>
                    <select name="categories" id="categories">
                        {this.setCategories()}
                    </select>
                    <br/>
                    <input type="submit" name="submit" value="Upload" className="btn btn-primary"/>
                </form>
            </div>
        );
    }

    setCategories = () => {
        if (this.state.categories) {
            return Object.keys(this.state.categories).map((e, i) => {
                const categoryJSON = this.state.categories[e];
                // Each item in React list should have 'key' prop.
                return <option key={i} value={categoryJSON.id}>{categoryJSON.category}</option>;
            });
        }
    }

    getCategories = (event) => {
        let value = event.target.value;
        console.log('Value: ' + value);
        console.log('Click Sound or Music.');
        this.setState({categoriesType: value});
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') //CSRF Token related to Laravel.
            },
            url:'/get_categories',
            method: "GET",
            dataType: 'json',
            data: {'sound_type': value},
            // processData: false,
            // contentType: false,
            success: (data) => {
                this.setState({'categories': data})
                // console.log(this.state.categories);
            },error: (data) => {
                console.log(data);
            }
        });
    }
}

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        CompsAnims.slowlySlideInLoginForm();
    }
    render() {
        return (
            <div className="center">
                <div id={'loginFormDiv'}>
                    <form action={'/login'} method={'POST'}>
                        <label htmlFor={'loginUsername'} className={'whiteText'}>Username:</label>
                        <input type="text" id={'loginUsername'} name={'loginUsername'}/>
                        <br/>
                        <label htmlFor={'loginPassword'} className={'whiteText'}>Password:</label>
                        <input type="password" id={'loginPassword'} name={'loginPassword'}/>
                        <br/>
                        <input type="submit" value={'Login'} className={'btn btn-primary'}/>
                    </form>
                </div>
            </div>
        );
    }
}

function Footer() {
    return (
        <small className={"whiteText fixed-bottom copyright"}>@2021 Database Programming Course Group Final Project. All rights reserved.</small>
    )
}

class SinglePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            useContent: ALL_SOUNDS_GALLERY
        };
    }
    //Handle to be called by child component to change state and therefore change render result.
    handlerUseContent = (comp) => { this.setState({useContent: comp}); }

    render() {
        const selectWhichContentToUse = () => {
            switch (this.state.useContent) {
                case ALL_SOUNDS_GALLERY:
                    return <GalleryContainer/>
                case UPLOAD_FORM:
                    return <UploadForm/>;
                case LOGIN_FORM:
                    return <LoginForm/>;
            }
        };
        return (
            <Fragment>
                <TopNavBar handlerUseContent={this.handlerUseContent}/>
                <SideNav/>
                <div id={'mainContents'}>
                    {selectWhichContentToUse()}
                    <Footer/>
                </div>
            </Fragment>
        );
    }
}

ReactDOM.render(<SinglePage/>, document.querySelector("#root"));
