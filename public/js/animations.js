/**
 *  Since React render is async, jQuery code get executed before React renders complete.
 * Therefore, animations should be functions that will get called by a component when it finishes rendering.
 * componentDidMount() method in each component are callback methods that execute when finishes rendering.
 */

class CompsAnims {
    static slowlySlideInNavbar() {
        $('.navbar').hide().slideToggle('slow');
    }
    static slowlySlideInSideNav() {
        $('.sidenav').hide().slideToggle('slow');
    }
    static slowlySlideInRoot() {
        $('#root').hide().slideToggle('slow');
    }
    static slowlySlideInUploadForm() {
        $('.upload_form').hide().slideToggle('slow');
    }
}

/**
 * These are not React component; their animations can get set regularly here.
 */
$(function() {
    $('#tsparticles').fadeIn(2250);
});

/**
 * tsparticles animations
 */
$("#tsparticles")
    .particles()
    .init(
        {
            background: {
                color: {
                    value: "#000000",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 40,
                    },
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#00e8ff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: false, //Setting this to false prevents the particles' speed increase.
                },
                move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 6,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    random: true,
                    value: 5,
                },
            },
            detectRetina: true,
        },
        function (container) {
            // container is the particles container where you can play/pause or stop/start.
            // the container is already started, you don't need to start it manually.
        }
    );

/**
 * -------------------------------------------
 */
