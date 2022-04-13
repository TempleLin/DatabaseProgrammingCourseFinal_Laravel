const {
    Component,
    Fragment
} = React;

//'Symbol' is similar to enum in JS.
const ALL_SOUNDS_GALLERY = Symbol('all_sounds_gallery');
const UPLOAD_FORM = Symbol('upload_form');

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
                    <button className="btn btn-outline-success text-light round-btn" onClick={() => {this.props.handlerUseContent(ALL_SOUNDS_GALLERY)}}>Home</button>
                    {/*<form action="/" method={'GET'} className={'top_nav_left_padding'}>*/}
                    {/*    <input className="btn btn-outline-success text-light round-btn" type="submit" value="Home"/>*/}
                    {/*</form>*/}
                    <form action="/musics" method={'GET'} className={'top_nav_left_padding top_nav_top_padding'}>
                        <input className="btn btn-sm btn-outline-secondary text-light round-btn" type="submit" value="Musics" />
                    </form>
                    <form action="/sounds" method={'GET'} className={'top_nav_left_padding top_nav_top_padding'}>
                        <input className="btn btn-sm btn-outline-secondary text-light round-btn" type="submit" value="Sounds" />
                    </form>
                </div>
                <div className="d-flex">
                    <button className="btn btn-outline-success text-light round-btn" onClick={() => {this.props.handlerUseContent(UPLOAD_FORM)}}>Upload</button>
                    {/*<form action="/uploading" method={'GET'}>*/}
                    {/*    <input className="btn btn-outline-success text-light round-btn" type="submit" value="Upload"*/}
                    {/*           onClick={this.props.handleUseImageContainer}/>*/}
                    {/*</form>*/}
                    <form action="/login_register" method={'GET'}>
                        <input className="btn btn-outline-success text-light form-inline round-btn" type="submit" value="Login/Register" />
                    </form>
                </div>
            </nav>
        );
    }
}

class GalleryContainer extends Component{
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

class UploadForm extends Component {
    componentDidMount() {
        CompsAnims.slowlySlideInUploadForm();

        //Prevent default form submits, use ajax to send json request.
        $('#upload_form').on('submit', function(e){
            e.preventDefault();

            let $this = $(this); //alias form reference

            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') //CSRF Token related to Laravel.
                },
                url:'/upload_file',
                method: "POST",
                dataType: 'text',
                data: new FormData(this),
                processData: false,
                contentType: false,
                success:function (data) {
                    switch (data) {
                        case 'FILE NULL':
                            alert('One or both uploaded files are NULL!');
                            break;
                        case 'FILE UNMATCHED':
                            alert('Filetype unmatched!');
                            break;
                        case 'SUCCESS':
                            alert('Upload success!');
                            break;
                    }
                },error:function(data){
                    console.log(data);
                }
            });
        });
    }
    render() {
        return (
            <Fragment>
                <div id="tsparticles"></div>

                <div className="center">
                    <form name="form" method="post" action="/upload_file" encType="multipart/form-data"
                          className="form-group upload_form" id={'upload_form'}>
                        <label htmlFor={'nameForUpload'} className={'whiteText'}>Name for your Upload: &nbsp;</label>
                        <input type="text" name={'nameForUpload'} className={'whiteText'} id={'nameForUpload'} placeholder={'enter a name'} required={true}/>
                        <br/>
                        <br/>

                        <label htmlFor={'picFileSelect'} className={'whiteText'}>Select Thumbnail (.jpg, .png., .svg)</label> <br/>
                        <input type="file" name="picFileSelect" className={'whiteText'} id={'picFileSelect'} required={true}/><br/><br/>

                        <label htmlFor={'soundFileSelect'} className={'whiteText'}>Select Sound File (.mp3, .wav, .aac)</label> <br/>
                        <input type="file" name="soundFileSelect" className={'whiteText'} id={'soundFileSelect'} required={true}/><br/><br/>

                        {/*<input type="radio" value={'Music'} name={'soundType'} id={'musicSound'} required={true}/>*/}
                        {/*<label htmlFor={'musicSound'} className={'whiteText'}>Music</label>*/}
                        {/*<br/>*/}
                        {/*<input type="radio" value={'Sound'} className={'whiteText'} name={'soundType'} id={'soundSound'} required={true}/>*/}
                        {/*<label htmlFor={'soundSound'} className={'whiteText'}>Sound</label>*/}
                        <label htmlFor="soundType" className={'whiteText'}>Sound or Music: &nbsp;</label>
                        <select name="soundType" id="soundType">
                            <option value="0">Sound</option>
                            <option value="1">Music</option>
                        </select>
                        <br/>
                        <br/>
                        <input type="submit" name="submit" value="Upload" className="btn btn-primary"/>
                    </form>
                </div>
            </Fragment>
        );
    }

    getCategories() {

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

function Footer() {
    return (
        <small className={"whiteText fixed-bottom copyright"}>@2021 Database Programming Course Group Final Project. All rights reserved.</small>
    )
}

function BlankComponent() {
    return (
        <Fragment/>
    );
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
            }
        };
        return (
            <Fragment>
                <TopNavBar handlerUseContent={this.handlerUseContent}/>
                <SideNav/>
                <div>
                    {selectWhichContentToUse()}
                    <Footer/>
                </div>
            </Fragment>
        );
    }
}

ReactDOM.render(
    <SinglePage/>, document.querySelector("#root"));
