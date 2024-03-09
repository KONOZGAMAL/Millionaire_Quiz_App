
import PropTypes from 'prop-types';
export default function Button({resetQuiz}){
  return (
    <div className="btn">
   <input type="button" value="Restart"
     onClick={resetQuiz}/>
    </div>
  )
}
Button.propTypes = {
  resetQuiz: PropTypes.func.isRequired,
};