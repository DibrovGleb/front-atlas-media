import './Aside.sass'
import Review from './Review'
import { reviews } from './reviews'

export default function Aside() {
  return (
    <aside>
      {reviews.map((x,i) => <Review key={x.nick} img={x.imgUrl} name={x.name}
        nick={x.nick} review={x.review} i={i}/>)}
    </aside>
  )
}
