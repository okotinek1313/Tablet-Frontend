import { useState } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import '../css/HomePage.css';
import * as LucideIcon from 'lucide-react'
import { useNavigate } from 'react-router-dom';


export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const lucideIconSize = 28;

  const navigate = useNavigate();

  function goToApps(): void{
    navigate('/apps');
  }

  return (
    <div className="homepage">
      <Sidebar
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
      >
        <button id={"appsSidebarButton"} className={"lucideIcon"} onClick={goToApps}><LucideIcon.LayoutGrid size={lucideIconSize} /></button>
      </Sidebar>

      <div className="home-page-content">
        <button id="local-content"><LucideIcon.HardDrive size={128} /></button>
      </div>
    </div>
  );
}