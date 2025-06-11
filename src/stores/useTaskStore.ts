import { create } from 'zustand'

// Definición del tipo de una tarea
export interface Task {
  id: string
  text: string
  completed: boolean
}

// Definición del estado y acciones del store
interface TaskState {
  tasks: Task[]
  addTask: (text: string) => void
  toggleTask: (id: string) => void
  removeTask: (id: string) => void
}

// Store Zustand para gestionar tareas globalmente
export const useTaskStore = create<TaskState>((set) => ({
  tasks: [], // Lista de tareas
  // Añade una nueva tarea
  addTask: (text) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        { id: Date.now().toString(), text, completed: false },
      ],
    })),
  // Cambia el estado de completado de una tarea
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
  // Elimina una tarea por id
  removeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
})) 