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
                        <p className={'whiteText landing_page_text1'}>為你的創作<br/>來點節拍跳動</p>
                        <p className={'whiteText landing_page_text2'}>讓你的靈感<br/>用音樂來呈現</p>
                        <button className={'btn btn-primary'}>立即加入SoundHeaven</button>
                    </div>
                    <p className={'whiteText landing_page_text3'}>SoundHeaven 我的超人</p>
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                        <div className="feature col">
                            <div
                                className="feature-icon d-inline-flex align-items-center justify-content-center bg-dark bg-gradient text-white fs-2 mb-3">
                                <i className="fa-solid fa-music"></i>
                            </div>
                            <h4 className={'whiteText'}>豐富音樂音效資源</h4>
                            <p className={'whiteText'}>
                                SoundHeaven 擁有豐富、多元且高品質的聲音素材，所有素材依照類型進行分類，透過網站內的搜尋框中盡情尋找你所有的靈感。
                            </p>
                            <a href="#" className="icon-link d-inline-flex align-items-center">
                                前往素材庫
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
                            <h4 className={'whiteText'}>不錯過任何素材</h4>
                            <p className={'whiteText'}>
                                有時感覺來得太突然怕抓不住嗎？<br/>註冊SoundHeaven 帳號，為素材貼上愛心標籤，回頭一切都還在。
                            </p>
                            <a href="#" className="icon-link d-inline-flex align-items-center">
                                前往個人檔案
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
                            <h4 className={'whiteText'}>喜歡就下載吧</h4>
                            <p className={'whiteText'}>
                                不用再擔心版權問題！
                                <br/>SoundHeaven 所有素材內容皆可供任何情形之合理使用，免費用戶每月享5次下載。
                            </p>
                            <a href="#" className="icon-link d-inline-flex align-items-center">
                                前往訂閱方
                                {/*<svg className="bi" width="1em" height="1em">*/}
                                {/*    <use xlink:href="#chevron-right"/>*/}
                                {/*</svg>*/}
                            </a>
                        </div>
                    </div>
                </div>
                {/*{this.state.contents}*/}
            </Fragment>
        );
    }
}
