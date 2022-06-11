class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        CompsAnims.slowlySlideInRegisterForm();
        $('#registerForm').on('submit', function(e) {
            e.preventDefault();
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') //CSRF Token related to Laravel.
                },
                url: '/register',
                method: "POST",
                dataType: 'text', //Response to expect.
                data: new FormData(this),
                processData: false, //Stops jQuery processing any of the data.
                contentType: false, //Forces jQuery not to add a Content-Type header.
                success: function (data) {
                    console.log('Register result message: ' + data);
                    alert('Register success!');
                    location.reload();
                }, error: function (data) {
                    console.log(data);
                }
            });
        });
    }
    render() {
        return (
            <div className="center">
                <div id={'registerFormDiv'}>
                    <form action={'/register'} method={'POST'} id={'registerForm'}>
                        <label htmlFor={'regEmail'} className={'whiteText'}>Email:</label>
                        <input type="text" id={'regEmail'} name={'regEmail'}/>
                        <br/>
                        <label htmlFor={'regUsername'} className={'whiteText'}>Username:</label>
                        <input type="text" id={'regUsername'} name={'regUsername'}/>
                        <br/>
                        <label htmlFor={'regPassword'} className={'whiteText'}>Password:</label>
                        <input type="password" id={'regPassword'} name={'regPassword'}/>
                        <br/>
                        <label htmlFor={'regPasswordAgain'} className={'whiteText'}>Password Again:</label>
                        <input type="password" id={'regPasswordAgain'} name={'regPasswordAgain'}/>
                        <br/>
                        <input type="submit" value={'Register'} className={'btn btn-primary'}/>
                    </form>
                </div>
            </div>
        );
    }
}
