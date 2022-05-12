
let theAudio = $('audio').audioPlayer();

let canvas = document.querySelector("canvas");
let audio = document.querySelector("audio");
// console.log(audio);
let wave = new Wave(audio, canvas);

canvasWidthHeightResponsive();

let allSidebarClickables = $('a.sidebarClickable');

/*
For more information about how to add different kinds of animations, search my ImportantCodingTests repository (JavaScript/WaveJS).
 */
let allCurrentAnims = {
    _wave: {
        enable: true,
        obj: new wave.animations.Wave({
            lineColor: "white",
            lineWidth: 10,
            fillColor: { gradient: ["#FA8BFF", "#2BD2FF", "#2BFF88"] },
            mirroredX: true,
            count: 60,
            rounded: true,
        }),
        _html: allSidebarClickables.eq(0)
    },
    _cubes: {
        enable: false,
        obj: new wave.animations.Cubes({
            top: true,
            count: 60,
            cubeHeight: 10,
            fillColor: { gradient: ["#FAD961", "#F76B1C"] },
            lineColor: "rgba(0,0,0,0)",
            radius: 10,
        }),
        _html: allSidebarClickables.eq(1)
    },
    _circles: {
        enable: true,
        obj: new wave.animations.Circles({
            lineColor: { gradient: ["#FAD961", "#FAD961", "#F76B1C"], rotate: 90 },
            lineWidth: 4,
            diameter: 20,
            count: 10,
            frequencyBand: "base",
        }),
        _html: allSidebarClickables.eq(2)
    },
    _glob: {
        enable: false,
        obj: new wave.animations.Glob({
            fillColor: { gradient: ["#FAD961", "#FAD961", "#F76B1C"], rotate: 45 },
            lineColor: "white",
            glow: { strength: 15, color: "#FAD961" },
            lineWidth: 10,
            count: 45,
        }),
        _html: allSidebarClickables.eq(3)
    },
    _shine: {
        enable: true,
        obj: new wave.animations.Shine({
            lineColor: "#FAD961",
            glow: { strength: 15, color: "#FAD961" },
            diameter: 300,
            lineWidth: 10,
        }),
        _html: allSidebarClickables.eq(4)
    },
    _square: {
        enable: false,
        obj: new wave.animations.Square({
            lineColor: { gradient: ["#21D4FD", "#B721FF"] },
        }),
        _html: allSidebarClickables.eq(5)
    },
    _arcs: {
        enable: true,
        obj: new wave.animations.Arcs({
            lineWidth: 4,
            lineColor: { gradient: ["#21D4FD", "#216bff"] },
            diameter: 500,
            fillColor: { gradient: ["#21D4FD", "#21D4FD", "#2160ff"], rotate: 45 },
        }),
        _html: allSidebarClickables.eq(6)
    }
}

checkAndSetWaveAnimations();

//Needs to resize canvas explicitly when window resizes.
$(window).on('resize', () => {
    canvasWidthHeightResponsive();
});

function canvasWidthHeightResponsive() {
    //.audioplayer (The audio playing bar) is 96px, which is set under audioplayer.css. Only need to keep canvas slightly less than the audioplayer.
    canvas.height = window.innerHeight - 100;
    canvas.width = window.innerWidth;
}

function checkAndSetWaveAnimations() {
    wave.clearAnimations();
    for (let _anim in allCurrentAnims) {
        if (allCurrentAnims[_anim].enable) {
            wave.addAnimation(allCurrentAnims[_anim].obj);
            allCurrentAnims[_anim]._html.addClass('whiteBackgroundForBar');
        } else {
            allCurrentAnims[_anim]._html.removeClass('whiteBackgroundForBar');
        }
    }
}

//Collapsing or expanding sidebar. (Tutorial link for the sidebar: https://medium.com/@9cv9official/create-a-beautiful-hover-triggered-expandable-sidebar-with-simple-html-css-and-javascript-9f5f80a908d1)
$('#mySidebar').on('mouseover', function openSidebar() {
    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
}).on('mouseleave', function closeSidebar() {
    document.getElementById("mySidebar").style.width = "85px";
    document.getElementById("main").style.marginLeft = "85px";
});

$('.sidebarClickable').on('click', function() {
    let text = '_' + $(this).children().eq(1).text().trim().toLowerCase();
    let anim = allCurrentAnims[text];
    anim.enable = !anim.enable;
    checkAndSetWaveAnimations();
});
