function Far(velocity) {
    this.velocity = velocity;

    let texture = resources["resources/images/bg-far.png"].texture;
    TilingSprite.call(this, texture, texture.width, texture.height);

    this.tilePosition = this.tileTransform.position;
}

Far.prototype = Object.create(TilingSprite.prototype);
Far.prototype.constructor = Far;

Far.prototype.update = function (delta) {
    this.tilePosition.x += this.velocity * delta;
};