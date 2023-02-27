import './index.css'

const CountryList = props => {
  const {each, ClickOnVisit} = props
  const {name, id, isVisited} = each
  const onClickButton = () => {
    ClickOnVisit(id)
  }
  return (
    <>
      <li className="Item">
        <p className="headingName">{name}</p>
        {isVisited ? (
          <p className="visitedBtn">Visited</p>
        ) : (
          <button type="button" onClick={onClickButton} className="visitBtn">
            Visit
          </button>
        )}
      </li>
      <hr className="HrLine" />
    </>
  )
}

export default CountryList
