import SubtractSVG from './assets/images/minus.svg'

function SubtractBtn(props) {
    return (
        <button {...props}>
            <img src={SubtractSVG} alt="decrement icon" />
        </button>
    );
}

export default SubtractBtn;