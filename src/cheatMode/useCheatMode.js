import { useEffect, useState } from 'react';

const SEQUENCE = ['r', 'a', 'n', 'y'];

const useCheatMode = () => {
  const [cheatMode, setCheatMode] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleKeydown = (event) => {
      try {
        const raw = event?.key;
        if (raw == null) return;
        const key = String(raw).toLowerCase();
        const nextIndex = key === SEQUENCE[index] ? index + 1 : 0;
        if (nextIndex === SEQUENCE.length) {
          setCheatMode(true);
          setIndex(0);
          return;
        }
        setIndex(nextIndex);
      } catch (_) {
        setIndex(0);
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [index]);

  useEffect(() => {
    if (!cheatMode) return undefined;
    const timer = setTimeout(() => setCheatMode(false), 12000);
    return () => clearTimeout(timer);
  }, [cheatMode]);

  useEffect(() => {
    document.body.classList.toggle('cheat-mode', cheatMode);
  }, [cheatMode]);

  return { cheatMode, overlayClass: cheatMode ? 'cheat-active' : '' };
};

export default useCheatMode;
