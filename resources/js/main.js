PIXI.utils.skipHello();

let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = loader.resources,
    TilingSprite = PIXI.extras.TilingSprite,
    Texture = PIXI.Texture;

let app;
let stage;
let scroller;

let state = {
    update: null,
    list: null
};

function init() {
    let gameCanvas = document.getElementById("game-canvas");
    app = new Application({
        width: gameCanvas.width,
        height: gameCanvas.height,
        view: gameCanvas,
        backgroundColor: 0xffffff
    });
    stage = app.stage;

    loader
        .add("resources/images/bg-far.png")
        .add("resources/images/bg-mid.png")
        .load(setup);
}

function setup() {
    scroller = new Scroller(stage);

    state.update = play;
    state.list = [scroller];

    app.ticker.add(delta => update(delta));
}

function update(delta) {
    state.update(delta);
}

function play(delta) {
    for (let obj of state.list) {
        obj.update(delta);
    }
}