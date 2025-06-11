'use client'

import { useState } from 'react'
import { useTaskStore } from '@/stores/useTaskStore'

// Componente para añadir nuevas tareas al store global
export const TaskInput = () => {
  // Estado local para el texto del input
  const [text, setText] = useState('')
  // Acción para añadir tarea desde el store Zustand
  const addTask = useTaskStore((state) => state.addTask)

  // Maneja el evento de añadir tarea
  const handleAdd = () => {
    if (text.trim().length === 0) return // Evita añadir tareas vacías
    addTask(text.trim()) // Añade la tarea al store
    setText('') // Limpia el input
  }

  return (
    // Contenedor del input y botón
    <div className="flex gap-2 w-full mb-6">
      {/* Input para escribir la tarea */}
      <input
        type="text"
        className="flex-1 px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition text-gray-900 placeholder-gray-400 bg-white shadow-md font-medium text-base outline-none"
        placeholder="¿Qué necesitas hacer?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        maxLength={60}
      />
      {/* Botón para añadir la tarea */}
      <button
        onClick={handleAdd}
        className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-500 text-white rounded-xl font-bold shadow-lg hover:scale-105 hover:from-blue-700 hover:to-pink-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
        title="Añadir tarea"
      >
        {/* Icono de añadir */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
        Añadir
      </button>
    </div>
  )
} 