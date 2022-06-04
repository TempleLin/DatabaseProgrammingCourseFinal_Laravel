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
                <div id="landing_page_bg">
                    <div id={'landing_page_contents'}>
                        <p className={'whiteText landing_page_text1'}>為你的創作<br/>來點節拍跳動</p>
                        <p className={'whiteText landing_page_text2'}>讓你的靈感<br/>用音樂來呈現</p>
                        <button className={'btn btn-primary'}>立即加入SoundHeaven</button>
                    </div>
                </div>
                {/*{this.state.contents}*/}
            </Fragment>
        );
    }
}
