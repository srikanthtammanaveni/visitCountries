import './index.css'

const VisitedCountries = props => {
  const {each, RemoveButton} = props
  const {imageUrl, name, id} = each
  const onClickRemoveButton = () => {
    RemoveButton(id)
  }
  return (
    <li className="list-Item-Container">
      <img src={imageUrl} alt="thumbnail" className="image" />
      <div className="itemNameBtnContainer">
        <p className="thumbnailName">{name}</p>
        <button
          type="button"
          onClick={onClickRemoveButton}
          className="removeBtn"
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
