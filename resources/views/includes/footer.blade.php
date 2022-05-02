<!--Bootstrap container class end.-->
</div>

<!-- Option 1: Bootstrap Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

<!--jQuery-->
<script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossorigin="anonymous"></script>

<!-- first include tsParticles engine -->
<script src="https://cdn.jsdelivr.net/npm/tsparticles-engine"></script>

<!-- then include any tsParticles plugin needed -->
<script src="https://cdn.jsdelivr.net/npm/tsparticles/tsparticles.bundle.min.js"></script>

<!-- then include jquery wrapper -->
<script src="https://cdn.jsdelivr.net/npm/jquery-particles"></script>

<!--React-->
<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

{{--Essential React component across all pages.--}}
<script src="{{asset('js/utils_constants.js')}}" type="text/babel"></script>
<script src="{{asset('js/jsx/top_nav_bar.js')}}" type="text/babel"></script>
<script src="{{asset('js/jsx/side_nav.js')}}" type="text/babel"></script>
<script src="{{asset('js/jsx/gallery_container.js')}}" type="text/babel"></script>
<script src="{{asset('js/jsx/upload_form.js')}}" type="text/babel"></script>
<script src="{{asset('js/jsx/register_form.js')}}" type="text/babel"></script>
<script src="{{asset('js/jsx/login_form.js')}}" type="text/babel"></script>
<script src="{{asset('js/jsx/single_page.js')}}" type="text/babel"></script>
