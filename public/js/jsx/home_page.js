class HomePage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            contents: ''
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
                                {/*Send GET request data alongside URL.*/}
                                <a href={'/sound_player?fileLink=' + element.sound_file_loc} target={'_blank'}>
                                    <img src={element.thumbnail_file_loc} alt="" width="600" height="400" />
                                    <div className="desc whiteText">{element.name}</div>
                                </a>
                            </div>
                        </div>
                    );
                });
                console.log(allImgsJSXArray);
                // $('#mainContents').append(allImgsStr);
                this.setState({contents: allImgsJSXArray});
            },error:function(data){
                console.log(data);
            }
        });
    }
    render() {
        return(
            <Fragment>
                <div id="landing_page_contents">
                    <div id={'landing_page_bg'}>
                        <p className={'whiteText landing_page_text1'}>???????????????<br/>??????????????????</p>
                        <p className={'whiteText landing_page_text2'}>???????????????<br/>??????????????????</p>
                        <button className={'btn btn-primary'}>????????????SoundHeaven</button>
                    </div>
                    <p className={'whiteText landing_page_text3'}>SoundHeaven ????????????</p>
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                        <div className="feature col">
                            <div
                                className="feature-icon d-inline-flex align-items-center justify-content-center bg-dark bg-gradient text-white fs-2 mb-3">
                                <i className="fa-solid fa-music"></i>
                            </div>
                            <h4 className={'whiteText'}>????????????????????????</h4>
                            <p className={'whiteText'}>
                                SoundHeaven ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                            </p>
                            <a href="#" className="icon-link d-inline-flex align-items-center">
                                ???????????????
                                {/*<svg className="bi" width="1em" height="1em">*/}
                                {/*    <use xlink:href="#chevron-right"/>*/}
                                {/*</svg>*/}
                            </a>
                        </div>
                        <div className="feature col">
                            <div
                                className="feature-icon d-inline-flex align-items-center justify-content-center bg-dark bg-gradient text-white fs-2 mb-3">
                                <i className="fa-solid fa-heart"></i>
                            </div>
                            <h4 className={'whiteText'}>?????????????????????</h4>
                            <p className={'whiteText'}>
                                ?????????????????????????????????????????????<br/>??????SoundHeaven ???????????????????????????????????????????????????????????????
                            </p>
                            <a href="#" className="icon-link d-inline-flex align-items-center">
                                ??????????????????
                                {/*<svg className="bi" width="1em" height="1em">*/}
                                {/*    <use xlink:href="#chevron-right"/>*/}
                                {/*</svg>*/}
                            </a>
                        </div>
                        <div className="feature col">
                            <div
                                className="feature-icon d-inline-flex align-items-center justify-content-center bg-dark bg-gradient text-white fs-2 mb-3">
                                <i className="fa-solid fa-download"></i>
                            </div>
                            <h4 className={'whiteText'}>??????????????????</h4>
                            <p className={'whiteText'}>
                                ??????????????????????????????
                                <br/>SoundHeaven ??????????????????????????????????????????????????????????????????????????????5????????????
                            </p>
                            <a href="#" className="icon-link d-inline-flex align-items-center">
                                ???????????????
                                {/*<svg className="bi" width="1em" height="1em">*/}
                                {/*    <use xlink:href="#chevron-right"/>*/}
                                {/*</svg>*/}
                            </a>
                        </div>
                    </div>
                    <p className={'whiteText landing_page_text3'}>??????SoundHeaven</p>
                    <div className="landingpage_signupform">
                        <div className="row">
                            <div className="col-md-8 offset-md-2 text-left">
                                <p className={'whiteText'}>????????????</p>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" aria-label="Sizing example input"
                                           aria-describedby="inputGroup-sizing-default"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 offset-md-2 text-left">
                                <p className={'whiteText'}>???????????????</p>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" aria-label="Sizing example input"
                                           aria-describedby="inputGroup-sizing-default"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 offset-md-2 text-left">
                                <p className={'whiteText'}>??????</p>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" aria-label="Sizing example input"
                                           aria-describedby="inputGroup-sizing-default"/>
                                </div>
                            </div>
                            <div className="col-md-8 offset-md-2 text-end">
                                <a className="btn btn-primary" href="">??????</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/*{this.state.contents}*/}
            </Fragment>
        );
    }
}
