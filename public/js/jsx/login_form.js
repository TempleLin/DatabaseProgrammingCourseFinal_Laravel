class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        CompsAnims.slowlySlideInLoginForm();
        //Prevent default form submits, use ajax to send json request.
        $('#loginForm').on('submit', function(e){
            e.preventDefault();
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') //CSRF Token related to Laravel.
                },
                url:'/login',
                method: "POST",
                dataType: 'text', //Response to expect.
                data: new FormData(this),
                processData: false, //Stops jQuery processing any of the data.
                contentType: false, //Forces jQuery not to add a Content-Type header.
                success:function (data) {
                    console.log('Login result message: ' + data);
                    if (data === 'LOGIN_SUCCESS') {
                        location.reload();
                    }
                },error:function(data){
                    console.log(data);
                }
            });
        });
        $('#loginForm > .register_text').on('click', () => {
            this.props.handlerUseContent(REGISTER_FORM);
        });
    }
    render() {
        return (
            <div className="center">
                <div id={'loginFormDiv'}>
                    <form action={'/login'} method={'POST'} id={'loginForm'}>
                        <label htmlFor={'loginUsername'} className={'whiteText'}>Username:</label>
                        <input type="text" id={'loginUsername'} name={'loginUsername'}/>
                        <br/>
                        <label htmlFor={'loginPassword'} className={'whiteText'}>Password:</label>
                        <input type="password" id={'loginPassword'} name={'loginPassword'}/>
                        <br/>
                        <span className={'text-primary register_text'} onClick={() => {this.props.handlerUseContent(REGISTER_FORM)}}>Register</span>
                        <input type="submit" value={'Login'} className={'btn btn-primary'}/>
                    </form>
                </div>
            </div>
        );
    }
}
