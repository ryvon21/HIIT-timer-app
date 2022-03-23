import RunSVG from './assets/images/running.svg'

function NewExercise(props) {
    return (
        <button {...props} className="wide-btn">
            <img src={RunSVG} alt="running shoe icon" />
            New Exercise
        </button>
    );
}

export default NewExercise;