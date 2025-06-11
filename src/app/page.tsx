

import { TaskInput } from '@/components/TaskInput'
import { TaskList } from '@/components/TaskList'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-100 p-4">
      <div className="w-full max-w-lg p-8 bg-white rounded-3xl shadow-2xl border border-blue-100">
        <h1 className="text-3xl font-extrabold mb-8 text-center bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight drop-shadow-sm">
          Gestor de Tareas con Zustand
        </h1>
        <TaskInput />
        <TaskList />
      </div>
    </main>
  )
}


