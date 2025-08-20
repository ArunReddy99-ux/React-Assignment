import React, { useEffect, useState } from 'react'
import './App.css'
import { InputField } from './components/InputField/InputField'
import { DataTable, Column } from './components/DataTable/DataTable'

type Person = { id: number; name: string; age: number; email: string }

const columns: Column<Person>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'age', title: 'Age', dataIndex: 'age', sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email' },
]

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [dark, setDark] = useState(true)

  const data: Person[] = [
    { id: 1, name: 'Alice', age: 24, email: 'alice@example.com' },
    { id: 2, name: 'Bob', age: 29, email: 'bob@example.com' },
    { id: 3, name: 'Charlie', age: 31, email: 'charlie@example.com' },
  ]

  useEffect(() => {
    const html = document.documentElement
    if (dark) html.classList.add('dark')
    else html.classList.remove('dark')
  }, [dark])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 transition-colors">
      <div className="max-w-3xl mx-auto space-y-8">
        <header className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">UI Components Demo</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">InputField and DataTable built with React + TypeScript + Tailwind</p>
          </div>
          <button
            onClick={() => setDark((d) => !d)}
            className="h-9 rounded-md px-3 text-sm bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600"
            aria-label="Toggle dark mode"
          >
            {dark ? 'Switch to Light' : 'Switch to Dark'}
          </button>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">InputField</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField label="Name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} showClear variant="outlined" />
            <InputField label="Email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} helperText="We will not spam you" variant="filled" />
            <InputField label="Password" type="password" placeholder="••••••" showPasswordToggle variant="ghost" />
            <InputField label="Invalid sample" helperText="This is a helper copy" />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">DataTable</h2>
          <DataTable<Person> data={data} columns={columns} selectable />
        </section>
      </div>
    </div>
  )
}

export default App
