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
                this.setState({categories: data})
                // console.log(this.state.categories);
            },error: (data) => {
                console.log(data);
            }
        });
    }
}
