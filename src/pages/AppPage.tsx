import { useState } from 'react';
import AppSelector from '../components/appSelector/appSelector';
import * as LucideIcon from 'lucide-react'
import '../css/AppPage.css';

interface App {
  id: string;
  label: string;
  icon: string;
  url: string;
}

export default function AppPage() {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [selectedApps, setSelectedApps] = useState<App[]>([]);

  const availableApps = [
    {
      id: 'netflix',
      label: 'Netflix',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg',
      url: 'https://www.netflix.com'
    },
    {
      id: 'youtube',
      label: 'YouTube',
      icon: 'https://images.icon-icons.com/836/PNG/512/Youtube_icon-icons.com_66802.png',
      url: 'https://www.youtube.com'
    },
    {
      id: 'disney',
      label: 'Disney+',
      icon: 'https://m.media-amazon.com/images/I/719t3jd2NeL.png',
      url: 'https://www.disneyplus.com'
    },
    {
      id: 'prime',
      label: 'Prime Video',
      icon: 'https://play-lh.googleusercontent.com/04rBJNzGde7ZS3Il2UTM-xZ1HueDTTiHiYzGtl2Ie_INZM-JK-n1EVKI5J74ZFgCGPg',
      url: 'https://www.primevideo.com'
    },
    {
      id: 'plex',
      label: 'Plex',
      icon: 'https://m.media-amazon.com/images/I/21hopceMfJL.png',
      url: 'https://app.plex.tv/desktop/#!/'
    }
  ];

  const handleAddApp = (app: App) => {
    if (!selectedApps.some(selected => selected.id === app.id)) {
      setSelectedApps([...selectedApps, app]);
    }
    setIsSelectorOpen(false);
  };

  const handleRemoveApp = (id: string) => {
    setSelectedApps(selectedApps.filter(app => app.id !== id));
  };

  const openApp = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="app-page">
      <div className="app-page-header">
        <button
            className="open-selector-button"
            onClick={() => setIsSelectorOpen(true)}
          >
            <LucideIcon.Plus size={30}></LucideIcon.Plus>
          </button>
        </div>

        <div className="app-grid">
          {selectedApps.map(app => (
            <div key={app.id} className="app-card">
              <img
                src={app.icon}
                alt={app.label}
                className="app-icon"
                onClick={() => openApp(app.url)}
              />
              <div className="app-label">{app.label}</div>
              <button
                className="remove-app-button"
                onClick={() => handleRemoveApp(app.id)}
              >
                ×
              </button>
            </div>
          ))}
        </div>

        <AppSelector
          isOpen={isSelectorOpen}
          onClose={() => setIsSelectorOpen(false)}
          title="Add Apps to Home Screen"
        >
          <div className="app-selector-list">
            {availableApps.map(app => (
              <div
                key={app.id}
                className="app-selector-item"
                onClick={() => handleAddApp(app)}
              >
                <img src={app.icon} alt={app.label} className="app-selector-icon" />
                <span>{app.label}</span>
              </div>
            ))}
          </div>
        </AppSelector>
      </div>
    );
  }