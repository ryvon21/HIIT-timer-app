import PauseSVG from './assets/images/pause.svg'

function PauseBtn(props) {
    return (
        <button {...props}>
            <img src={PauseSVG} alt="pause button" />
        </button>
    );
}

export default PauseBtn;