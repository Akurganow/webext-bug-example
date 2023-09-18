import 'modern-css-reset'
import 'styles/newtab.css'
import { createRoot } from 'react-dom/client'
import NewTab from 'containers/NewTab'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(<NewTab />)
