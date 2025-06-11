'use client'

import { useTaskStore } from '@/stores/useTaskStore'
import { useRef } from 'react'

// Componente para mostrar la lista de tareas y permitir acciones sobre ellas
export const TaskList = () => {
  // Acciones y estado global de tareas desde Zustand
  const { tasks, toggleTask, removeTask } = useTaskStore()
  const listRef = useRef<HTMLUListElement>(null)

  // Si no hay tareas, muestra un mensaje motivacional
  if (tasks.length === 0) {
    return <p className="text-gray-400 text-center italic">¡Sin tareas! Disfruta tu día ✨</p>
  }

  return (
    // Lista de tareas
    <ul ref={listRef} className="space-y-4">
      {tasks.map((task) => (
        // Tarjeta de cada tarea
        <li
          key={task.id}
          className={`flex items-center justify-between p-4 rounded-2xl shadow-md border border-blue-100 bg-gradient-to-r from-white via-blue-50 to-purple-50 transition-all duration-200 group hover:shadow-xl hover:scale-[1.02]`}
        >
          {/* Checkbox y texto de la tarea */}
          <label className="flex items-center gap-3 cursor-pointer w-full">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)} // Marca como completada o pendiente
              className="accent-purple-500 w-5 h-5 rounded-lg border-2 border-blue-300 transition-all duration-200 focus:ring-2 focus:ring-purple-300"
            />
            <span className={`flex-1 text-lg font-medium transition-colors duration-200 ${task.completed ? 'line-through text-gray-400' : 'text-gray-800 group-hover:text-blue-700'}`}>{task.text}</span>
          </label>
          {/* Botón para eliminar la tarea */}
          <button
            onClick={() => removeTask(task.id)}
            className="ml-4 p-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full shadow hover:scale-110 hover:from-red-600 hover:to-pink-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
            title="Eliminar"
          >
            {/* Icono de eliminar */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </li>
      ))}
    </ul>
  )
} 