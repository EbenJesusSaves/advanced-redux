import { useContext } from 'react';
import ApplicationContext from '../context';
import Task from './task';
import { useSelector } from 'react-redux';

const TaskList = () => {
  const { tasks } = useSelector((s: any) => s);

  return (
    <section className="task-list">
      {tasks &&
        tasks.entities.map((task: any) => <Task key={task.id} task={task} />)}
    </section>
  );
};

export default TaskList;
