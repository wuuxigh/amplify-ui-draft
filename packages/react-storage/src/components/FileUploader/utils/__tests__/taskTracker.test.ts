import { taskTracker, TaskTrackerOutput } from '../taskTracker';

describe('taskTracker', () => {
  let tracker: TaskTrackerOutput<string>;

  beforeEach(() => {
    tracker = taskTracker<string>();
  });

  describe.each([
    {
      name: 'recordTasksCompleted',
      getFunction: (tracker: TaskTrackerOutput<string>) =>
        tracker.recordTasksCompleted,
    },
    {
      name: 'recordTasksCanceled',
      getFunction: (tracker: TaskTrackerOutput<string>) =>
        tracker.recordTasksCanceled,
    },
    {
      name: 'recordTasksFailed',
      getFunction: (tracker: TaskTrackerOutput<string>) =>
        tracker.recordTasksFailed,
    },
  ])('$name', ({ getFunction }) => {
    it('should correctly record tasks', () => {
      tracker.recordTasksToProcess(['task1', 'task2']);
      getFunction(tracker)(['task1', 'task2']);
      expect(tracker.validate()).toBe(true);
    });

    it('should fail on wrong number of tasks', () => {
      tracker.recordTasksToProcess(['task1', 'task2']);
      getFunction(tracker)(['task1']);
      expect(tracker.validate()).toBe(false);
    });

    it('should handle empty array', () => {
      getFunction(tracker)([]);
      expect(tracker.validate()).toBe(true);
    });

    it('should handle multiple calls', () => {
      tracker.recordTasksToProcess(['task1', 'task2', 'task3']);
      getFunction(tracker)(['task1']);
      getFunction(tracker)(['task2', 'task3']);
      expect(tracker.validate()).toBe(true);
    });
  });

  describe('validate', () => {
    it('should return true when all tasks are accounted for', () => {
      tracker.recordTasksToProcess(['task1', 'task2', 'task3', 'task4']);
      tracker.recordTasksCompleted(['task1']);
      tracker.recordTasksCanceled(['task2']);
      tracker.recordTasksFailed(['task3', 'task4']);
      expect(tracker.validate()).toBe(true);
    });

    it('should return false when not all tasks are accounted for', () => {
      tracker.recordTasksToProcess(['task1', 'task2', 'task3']);
      tracker.recordTasksCompleted(['task1']);
      tracker.recordTasksCanceled(['task2']);
      expect(tracker.validate()).toBe(false);
    });

    it('should return true when no tasks are processed', () => {
      expect(tracker.validate()).toBe(true);
    });
  });

  describe('mixed scenarios', () => {
    it('should handle a mix of completed, canceled, and failed tasks', () => {
      tracker.recordTasksToProcess([
        'task1',
        'task2',
        'task3',
        'task4',
        'task5',
      ]);
      tracker.recordTasksCompleted(['task1', 'task2']);
      tracker.recordTasksCanceled(['task3']);
      tracker.recordTasksFailed(['task4', 'task5']);
      expect(tracker.validate()).toBe(true);
    });

    it('should handle tasks being processed in batches', () => {
      tracker.recordTasksToProcess(['task1', 'task2']);
      tracker.recordTasksCompleted(['task1']);
      tracker.recordTasksToProcess(['task3', 'task4']);
      tracker.recordTasksCanceled(['task2']);
      tracker.recordTasksFailed(['task3', 'task4']);
      expect(tracker.validate()).toBe(true);
    });

    it('should handle overlapping task status updates', () => {
      tracker.recordTasksToProcess(['task1', 'task2', 'task3']);
      tracker.recordTasksCompleted(['task1']);
      tracker.recordTasksFailed(['task2']);
      tracker.recordTasksCompleted(['task3']);
      tracker.recordTasksFailed(['task3']); // Overlapping status
      expect(tracker.validate()).toBe(false);
    });
  });
});
