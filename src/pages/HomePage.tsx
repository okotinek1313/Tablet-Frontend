import { useState } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import '../css/HomePage.css';
import * as LucideIcon from 'lucide-react'

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const lucideIconSize = 28;

  return (
    <div className="homepage">
      <Sidebar
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
      >
        <button id={"homeSidebarButton"} className={"lucideIcon"}><LucideIcon.Home size={lucideIconSize}></LucideIcon.Home></button>
        <button id={"appsSidebarButton"} className={"lucideIcon"}><LucideIcon.LayoutGrid size={lucideIconSize}></LucideIcon.LayoutGrid></button>
      </Sidebar>

      
    </div>
  );
}