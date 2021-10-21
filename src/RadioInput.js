
const RadioInput = ({ imgArr, setChoose, imagNamber }) => {
  const handleChange = (e) => {
    setChoose(e.target.value);
  }

  return (
    <form className="radio_input">

      {
        imgArr.map((elem, index) =>
          <input
            type="radio"
            id={elem.id}
            value={index}
            onChange={handleChange}
            checked={imagNamber === `${index}`}
          />
        )
      }

    </form>
  )

}

export default RadioInput;