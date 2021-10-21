
const Images = ({ imgArr, margin }) => {
    const style = {
        width: ` ${imgArr.length * 100}% `,
        marginLeft: `-${margin}%`,
    }

    return (
        <div className="img_wrapper"
            style={style}>
            { imgArr.map((elem, index) =>
                <div>
                    <img
                        src={elem.img}
                        alt="img"
                        className="img_slider"
                    />
                    <span className="history">
                        {elem.history}
                    </span>

                </div>
            )}

        </div>
    );
}

export default Images;