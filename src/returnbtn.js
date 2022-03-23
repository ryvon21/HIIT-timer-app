import ReturnSVG from './assets/images/return.svg'

function ReturnBtn(props) {
    return (
        <button {...props} className="return-btn">
            <img src={ReturnSVG} alt="return button" />
        </button>
    );
}

export default ReturnBtn;