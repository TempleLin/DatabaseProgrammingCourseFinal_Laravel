const {
    Component,
    Fragment
} = React;

class ImagesContainer extends Component{
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

ReactDOM.render(
    <div>
        <ImagesContainer/>
        <Footer/>
    </div>
    , document.querySelector("#root"));
