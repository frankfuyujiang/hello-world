import { Like } from './like.component';

let like = new Like();
like.clicked();
console.log(`totallikes: ${like.likeCount}, buttonSelected: ${like.isLiked}`);
like.clicked();
console.log(`totallikes: ${like.likeCount}, buttonSelected: ${like.isLiked}`);
let anotherLike = new Like(50,true);
anotherLike.clicked();
console.log(`totallikes: ${anotherLike.likeCount}, buttonSelected: ${anotherLike.isLiked}`);
anotherLike.clicked();
console.log(`totallikes: ${anotherLike.likeCount}, buttonSelected: ${anotherLike.isLiked}`);