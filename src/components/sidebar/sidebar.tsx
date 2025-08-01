import type { ReactNode } from 'react';
import './sidebar.css';
import * as LucideIcon from 'lucide-react'

type SidebarProps = {
  isOpen: boolean;
  onToggle: () => void;
  children?: ReactNode;
};

export default function Sidebar({ isOpen, onToggle, children }: SidebarProps) {
  return (
    <>
      {/* Toggle Button - now fixed outside the sidebar */}
      <button
        id="toggleSidebar"
        className={`sidebar-toggle ${isOpen ? 'open' : ''}`}
        onClick={onToggle}
      >
        {isOpen ? <LucideIcon.X size={28}/> : <LucideIcon.Menu size={28}/>}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav className="sidebar-content">
          {children}
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && <div className="sidebar-overlay" onClick={onToggle} />}
    </>
  );
}