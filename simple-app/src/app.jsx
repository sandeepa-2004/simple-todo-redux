import {useState} from "react";
import {useDispatch} from "react-redux";
import {storeTask} from "./utilities/state/taskeslice.js";


const App = () => {
    const [task, setTask] = useState("")
    const dispatch = useDispatch()

    const hadleinput = (event)=>{

        setTask(event.target.value)
    }
    const addnewtask =()=>{
        dispatch(storeTask(task))
    }
    return (
        <div>
            <div className="mb-6">
                <label htmlFor="task" className=" mb-2 text-sm font-medium text-gray-900 dark:text-white m-8">Default
                    input</label>
                <input type="text" id="default-input"
                       onChange={hadleinput}
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg "/>
                <button type="button"
                        onClick={addnewtask}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 m-6 ">add new task
                </button>
            </div>
        </div>
    );
};

export default App;