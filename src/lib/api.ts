import { User, Preferences, Organization } from '@/types';

// Simulation de données
const mockUser: User = {
  id: '1',
  firstName: 'Simon',
  lastName: 'Alt',
  email: 'simon.alt@example.com',
  phoneNumber: '+237 695 840 8714',
  country: 'Cameroon',
  avatar: undefined
};

const mockPreferences: Preferences = {
  language: 'English',
  timezone: 'GMT+1',
  notifications: {
    email: true,
    push: true,
    sms: false
  },
  financialNotifications: {
    organizationBalance: true,
    personalBalance: false,
    lowBalanceAlert: true,
    dailyReport: false
  }
};

const mockOrganization: Organization = {
  id: 'org-1',
  name: 'Workspace name',
  balance: 1200
};

// Simule un délai réseau
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  user: {
    get: async (): Promise<User> => {
      await delay(300);
      return mockUser;
    },
    update: async (data: Partial<User>): Promise<User> => {
      await delay(500);
      Object.assign(mockUser, data);
      return mockUser;
    },
    uploadAvatar: async (file: File): Promise<string> => {
      await delay(800);
      return URL.createObjectURL(file);
    }
  },
  
  preferences: {
    get: async (): Promise<Preferences> => {
      await delay(300);
      return mockPreferences;
    },
    update: async (data: Partial<Preferences>): Promise<Preferences> => {
      await delay(500);
      Object.assign(mockPreferences, data);
      return mockPreferences;
    }
  },

  organization: {
    get: async (): Promise<Organization> => {
      await delay(300);
      return mockOrganization;
    }
  }
};
