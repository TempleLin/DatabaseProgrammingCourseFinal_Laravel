class MusicsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: ''
        };
    }
    componentDidMount() {
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') //CSRF Token related to Laravel.
            },
            url:'/get_music_uploads',
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
                {this.state.contents}
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
