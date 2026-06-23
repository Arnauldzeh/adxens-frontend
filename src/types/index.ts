export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  avatar?: string;
}

export interface NotificationSettings {
  email: boolean;
  push: boolean;
  sms: boolean;
}

export interface FinancialNotifications {
  organizationBalance: boolean;
  personalBalance: boolean;
  lowBalanceAlert: boolean;
  dailyReport: boolean;
}

export interface Organization {
  id: string;
  name: string;
  balance: number;
}

export interface Preferences {
  language: string;
  timezone: string;
  notifications: NotificationSettings;
  financialNotifications: FinancialNotifications;
}
