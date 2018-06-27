"use strict";
exports.__esModule = true;
var Like = /** @class */ (function () {
    function Like(_likeCount, _isLiked) {
        if (_likeCount === void 0) { _likeCount = 0; }
        if (_isLiked === void 0) { _isLiked = false; }
        this._likeCount = _likeCount;
        this._isLiked = _isLiked;
        if (this._likeCount < 0) {
            throw Error;
        }
    }
    ;
    Like.prototype.like = function () {
        this._likeCount += 1;
        this._isLiked = true;
    };
    Like.prototype.unlike = function () {
        if (this._likeCount <= 0) {
            throw Error;
        }
        else {
            this._likeCount -= 1;
            this._isLiked = false;
        }
    };
    Like.prototype.clicked = function () {
        if (this._isLiked) {
            this.unlike();
        }
        else {
            this.like();
        }
    };
    Object.defineProperty(Like.prototype, "likeCount", {
        get: function () {
            return this._likeCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "isLiked", {
        get: function () {
            return this._isLiked;
        },
        enumerable: true,
        configurable: true
    });
    return Like;
}());
exports.Like = Like;
