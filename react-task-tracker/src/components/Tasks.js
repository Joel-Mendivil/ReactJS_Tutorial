import Task from './Tasks'

const Tasks = ({ tasks, onDelete }) => {
    return (
        <>
            {tasks.map(() => (
                <Task key={task.id} task={task}
                onDelete={onDelete}/>
            ))}
        </>
    )
}

export default Tasks