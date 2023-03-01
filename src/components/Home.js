import Notes from './Notes';

export const Home = (props) => {
const {showAlert}= props           // Destructuring
    return (
        <div> 
            <Notes showAlert= {showAlert}/>
        </div>
    )
}
