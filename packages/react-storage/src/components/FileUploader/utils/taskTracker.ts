export interface TaskTrackerOutput<T> {
  recordTasksToProcess: (tasks: T[]) => void;
  recordTasksCompleted: (task: T[]) => void;
  recordTasksCanceled: (task: T[]) => void;
  recordTasksFailed: (task: T[]) => void;
  validate: () => boolean;
}

export const taskTracker = <T>(): TaskTrackerOutput<T> => {
  let totalTasks = 0;
  let completeTasks = 0;
  let canceledTasks = 0;
  let failedTasks = 0;

  return {
    recordTasksToProcess: (tasks: T[]) => {
      totalTasks += tasks.length;
    },
    recordTasksCompleted: (tasks: T[]) => {
      completeTasks += tasks.length;
    },
    recordTasksCanceled: (tasks: T[]) => {
      canceledTasks += tasks.length;
    },
    recordTasksFailed: (tasks: T[]) => {
      failedTasks += tasks.length;
    },
    validate: () => totalTasks === completeTasks + canceledTasks + failedTasks,
  };
};
