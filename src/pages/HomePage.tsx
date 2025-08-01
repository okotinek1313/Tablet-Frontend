import { useState } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import '../css/HomePage.css';

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="homepage">
      <Sidebar
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
      >
        <a href="/">Home</a>
        <a href="/apps">Apps</a>
      </Sidebar>
    </div>
  );
}