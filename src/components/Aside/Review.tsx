export default function Review({ img, name, nick, review, i }: { img: string, name: string, nick: string, review: string, i: number }) {
  const even = i % 2 == 0
  return (
    <div className={'review-container ' + (even ? 'even' : 'odd')}>
      <div className="review-img-info">
        <img width={48} src={img} alt="" />
        <div className="review-info">
          <p>{name}</p>
          <p>{nick}</p>
        </div>
      </div>
      <p className="review-text">
        {review}
      </p>
    </div>
  )
}
