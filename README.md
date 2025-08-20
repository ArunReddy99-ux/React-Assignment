## UI Components: InputField and DataTable

This repository contains two reusable UI components built with React, TypeScript, TailwindCSS, and Storybook, plus a small demo app wired with Vite.

- InputField: labeled input with variants, sizes, validation, loading, optional clear button and password toggle, light/dark mode support.
- DataTable: generic, sortable table with optional row selection and friendly loading/empty states.

### Overview
The project is a component library starter with:
- A Vite + React + TypeScript app to demo components (`src/App.tsx`).
- Storybook 8 for interactive documentation and visual testing.
- Vitest + React Testing Library for unit and interaction tests.
- TailwindCSS for styling with a utility-first approach.

### Technologies Used
- React 18 + TypeScript
- Vite 4 (builder and dev server)
- TailwindCSS 3 + PostCSS + Autoprefixer
- Storybook 8 (Vite builder) + Chromatic (optional CI visual tests)
- Vitest + @testing-library/react + jsdom + jest-dom
- ESLint + @typescript-eslint + react-refresh plugins
- clsx (class composition)

### How the application works
- `src/main.tsx` bootstraps the app and renders `src/App.tsx` inside `React.StrictMode`.
- `src/App.tsx` demonstrates both components and provides a dark mode toggle by adding/removing the `dark` class on `<html>`.
- `InputField` manages styling via Tailwind variants, supports ARIA attributes (`aria-invalid`, `aria-describedby`), and optional UI helpers (clear, password visibility toggle, loading spinner).
- `DataTable<T>` accepts `data` and `columns` with strong typing, supports sortable columns, and optional selection. It’s used in the demo with a typed `Person` row model.

### Setup Instructions
Prerequisites: Node.js 18+ and npm.

1) Install dependencies
```bash
npm install
```

2) Run Storybook (recommended for component work)
```bash
npm run storybook
```

3) Run the demo app
```bash
npm run dev
```

4) Run tests
```bash
npm test
```

5) Lint
```bash
npm run lint
```

6) Build & preview (production)
```bash
npm run build && npm run preview
```

7) Publish to Chromatic (optional)
```bash
# one-time auth: will prompt
npx chromatic --project-token=<YOUR_CHROMATIC_PROJECT_TOKEN>
# or use env var
CHROMATIC_PROJECT_TOKEN=... npm run chromatic
```

uzeba/  
├─ index.html  
├─ package.json  
├─ package-lock.json  
├─ postcss.config.cjs  
├─ tailwind.config.cjs  
├─ tsconfig.json  
├─ tsconfig.node.json  
├─ vite.config.ts  
├─ vitest.setup.ts  
├─ README.md  
├─ public/  
│  └─ vite.svg  
├─ src/  
│  ├─ App.css
│  ├─ App.tsx  
│  ├─ index.css  
│  ├─ main.tsx   
│  ├─ vite-env.d.ts  
│  ├─ assets/  
│  └─ components/  
│     ├─ InputField/  
│     │  ├─ InputField.tsx  
│     │  ├─ InputField.stories.tsx  
│     │  ├─ InputField.test.tsx   
│     │  └─ index.ts  
│     └─ DataTable/  
│        ├─ DataTable.tsx  
│        ├─ DataTable.stories.tsx  
│        ├─ DataTable.test.tsx   
│        └─ index.ts  
└─ storybook-static/   (generated build output)
   ├─ index.html  
   ├─ iframe.html  
   ├─ favicon.svg  
   ├─ index.json  
   ├─ project.json  
   ├─ vite.svg  
   ├─ assets/  
   ├─ sb-addons/  
   ├─ sb-common-assets/  
   └─ sb-manager/  

### Scripts
- `dev`: start Vite dev server
- `build`: type-check then build for production
- `preview`: preview production build locally
- `test`: run unit/integration tests (Vitest)
- `coverage`: run tests with coverage
- `lint`: run ESLint
- `storybook`: run Storybook in dev mode
- `build-storybook`: build static Storybook
- `chromatic`: publish Storybook to Chromatic

### Approach
- Type-safety by design: `DataTable<T>` uses generics for compile-time safety; props are strongly typed.
- Accessibility first: labeled controls, ARIA attributes, keyboard focus styles, proper roles where needed.
- Styling via Tailwind utility classes; variants and conditional states composed with `clsx`.
- Documentation as code: Storybook stories cover variants, states, and interactions; suitable for Chromatic visual regression.
- Testing with Vitest + Testing Library to verify behavior and accessibility.
- Developer experience: fast Vite HMR, ESLint strictness, and small, readable components.

### Component APIs (quick reference)
InputField key props: `value`, `onChange`, `label`, `placeholder`, `helperText`, `errorMessage`, `disabled`, `invalid`, `variant` ('filled' | 'outlined' | 'ghost'), `size` ('sm' | 'md' | 'lg'), `type`, `showClear`, `showPasswordToggle`, `loading`.

DataTable key props: `data: T[]`, `columns: Column<T>[]`, optional `selectable`, and built-in sortable columns.

---

If you are developing a production application, consider enabling type-aware ESLint rules (project references) and adding React lint rules.
