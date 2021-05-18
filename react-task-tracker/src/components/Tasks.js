import Task from './Tasks'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {tasks.map(() => (
                <Task key={task.id} task={task}
                onDelete={onDelete} onToggle={onToggle} />
            ))}
        </>
    )
}

export default Tasks