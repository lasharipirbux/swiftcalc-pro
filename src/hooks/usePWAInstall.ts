import { useEffect, useState, useCallback } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

function checkIsStandalone(): boolean {
  if (typeof window === 'undefined') return false;
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as unknown as { standalone?: boolean }).standalone === true
  );
}

function checkIsIOSSafari(): boolean {
  if (typeof window === 'undefined') return false;
  const ua = window.navigator.userAgent;
  const isIOSDevice =
    /iPhone|iPad|iPod/i.test(ua) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  if (!isIOSDevice) return false;
  // Exclude third-party iOS browsers that cannot add to home screen the same way or identify Safari/WebKit
  const isThirdPartyIOS = /CriOS|FxiOS|EdgiOS|OPiOS/i.test(ua);
  return !isThirdPartyIOS;
}

export function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState<boolean>(() => checkIsStandalone());
  const [isIOSSafari, setIsIOSSafari] = useState<boolean>(false);

  useEffect(() => {
    setIsInstalled(checkIsStandalone());
    setIsIOSSafari(checkIsIOSSafari());

    const mediaQuery = window.matchMedia('(display-mode: standalone)');
    const handleDisplayModeChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsInstalled(true);
        setDeferredPrompt(null);
      }
    };

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);
    mediaQuery.addEventListener('change', handleDisplayModeChange);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      mediaQuery.removeEventListener('change', handleDisplayModeChange);
    };
  }, []);

  const install = useCallback(async () => {
    if (!deferredPrompt) return false;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsInstalled(true);
      setDeferredPrompt(null);
      return true;
    }
    return false;
  }, [deferredPrompt]);

  return {
    isInstallable: !isInstalled && Boolean(deferredPrompt),
    isInstalled,
    isIOSSafari: !isInstalled && !deferredPrompt && isIOSSafari,
    install,
  };
}
