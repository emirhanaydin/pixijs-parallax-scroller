function Scroller(stage) {
    this.far = new Far(-0.128);
    this.mid = new Mid(-0.64);
    this.mid.y = 128;

    stage.addChild(this.far, this.mid);
}

Scroller.prototype.update = function (delta) {
    this.far.update(delta);
    this.mid.update(delta);
};