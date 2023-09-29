
function Card( {img,text}) {
  return (
    <div className="card">
        <img src={img} alt="" />
        <p className="text">{text}</p>
    </div>
  )
}

export default Card