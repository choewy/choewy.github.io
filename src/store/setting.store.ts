import { useEffect } from 'react';
import { RecoilStore } from './claases';

export interface SettingStoreProps {
  theme: 'light' | 'dark';
}

export class SettingStore extends RecoilStore<SettingStoreProps> {
  constructor() {
    super({ theme: 'dark' });
  }

  useTheme() {
    const { theme } = this.useValue();

    const body = document.querySelector('body');

    useEffect(() => {
      if (body == null) {
        return;
      }

      body.className = theme;
    }, [theme, body]);
  }
}

export const settingStore = new SettingStore();
