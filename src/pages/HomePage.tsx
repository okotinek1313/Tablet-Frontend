import '../css/HomePage.css'
import * as LucideIcons from 'lucide-react'

export default function HomePage() {
  return (
    <div className="homepage">
      <button id={"toggleSidebar"}><LucideIcons.Menu size={28}></LucideIcons.Menu></button>
    </div>
  )
}