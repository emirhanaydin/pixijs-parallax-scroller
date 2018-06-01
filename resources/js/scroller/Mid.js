function Mid(velocity) {
    this.velocity = velocity;

    let texture = resources["resources/images/bg-mid.png"].texture;
    TilingSprite.call(this, texture, texture.width, texture.height);

    this.tilePosition = this.tileTransform.position;
}

Mid.prototype = Object.create(TilingSprite.prototype);
Mid.prototype.constructor = Mid;

Mid.prototype.update = function (delta) {
    this.tilePosition.x += this.velocity * delta;
};