

export class Like{
	constructor(private _likeCount: number=0, private _isLiked: boolean=false){
		if (this._likeCount < 0){
			throw Error;
		}
	};
	private like(){
		this._likeCount +=1;
		this._isLiked = true;
	}
	private unlike(){
		if (this._likeCount <= 0){
			throw Error;
		}else{
		this._likeCount -=1;
		this._isLiked = false
		}
	}
	clicked(){
		if (this._isLiked){
			this.unlike();
		}else{
			this.like();
		}
	}
	get likeCount(){
		return this._likeCount;
	}
	get isLiked(){
		return this._isLiked;
	}


}