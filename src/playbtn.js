import PlaySVG from './assets/images/play.svg'

function PlayBtn(props) {
    return (
        <button {...props}>
            <img src={PlaySVG} alt="play button" />
        </button>
    );
}

export default PlayBtn;