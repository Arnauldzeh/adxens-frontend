'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Avatar } from '@/components/ui/Avatar';
import { Switch } from '@/components/ui/Switch';

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    firstName: 'Simon',
    lastName: 'Alt',
    phoneNumber: '695 840 8714',
    country: 'Cameroon',
    language: 'English',
    timezone: 'GMT+1'
  });

  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    financialOps: true,
    orgBalance: true,
    personalBalance: false,
    lowBalanceAlert: true,
    dailyReport: false
  });

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex-1">
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Settings</h1>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm">
                💰 $1 200
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">🔗</button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">❓ Help</button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">🔔</button>
              <div className="flex items-center gap-2">
                <Avatar src={undefined} alt="Simon Alt" size="sm" fallback="SA" />
                <span className="text-sm font-medium">Simon Alt</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="px-8 py-6">
          <p className="text-gray-600 mb-6">
            Manage your account, preferences, and security all in one place.
          </p>

          {/* Tabs */}
          <div className="flex gap-6 border-b border-gray-200 mb-8">
            <button className="pb-3 px-1 border-b-2 border-blue-600 text-blue-600 font-medium">
              General settings
            </button>
            <button className="pb-3 px-1 text-gray-600 hover:text-gray-900">
              Organization
            </button>
            <button className="pb-3 px-1 text-gray-600 hover:text-gray-900">
              Security
            </button>
            <button className="pb-3 px-1 text-gray-600 hover:text-gray-900">
              Terms & Conditions
            </button>
            <button className="pb-3 px-1 text-gray-600 hover:text-gray-900">
              About Adxens
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="col-span-2 space-y-8">
              {/* Personal Information */}
              <section className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-semibold mb-1">Personal information</h2>
                <p className="text-sm text-gray-600 mb-6">Manage your bio data</p>

                <div className="flex items-start gap-6 mb-6">
                  <div className="relative">
                    <Avatar src={undefined} alt="Simon Alt" size="lg" fallback="SA" />
                    <button className="absolute -top-1 -right-1 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">
                      ✓
                    </button>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      Upload
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">
                      JPG, GIF or PNG. 1MB Max.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="First name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                  <Input
                    label="Last name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                  <Input
                    label="Phone number"
                    value={formData.phoneNumber}
                    placeholder="+237"
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>Cameroon</option>
                      <option>Nigeria</option>
                      <option>Ghana</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* Preferences */}
              <section className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-semibold mb-1">Preferences</h2>
                <p className="text-sm text-gray-600 mb-6">Make it yours</p>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-3">Language</h3>
                    <p className="text-sm text-gray-600 mb-2">Select a default language</p>
                    <select
                      value={formData.language}
                      onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>🇬🇧 English</option>
                      <option>🇫🇷 Français</option>
                      <option>🇪🇸 Español</option>
                    </select>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">Timezone</h3>
                    <p className="text-sm text-gray-600 mb-2">Select your timezone</p>
                    <select
                      value={formData.timezone}
                      onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>GMT+1</option>
                      <option>GMT+0</option>
                      <option>GMT-5</option>
                    </select>
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-medium">📧 Email Notifications</h4>
                        <p className="text-sm text-gray-600">workspacemail@gmail.com</p>
                      </div>
                      <Switch
                        checked={notifications.email}
                        onChange={(checked) => setNotifications({ ...notifications, email: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-medium">🔔 Push Notifications</h4>
                      </div>
                      <Switch
                        checked={notifications.push}
                        onChange={(checked) => setNotifications({ ...notifications, push: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">📱 SMS Notifications</h4>
                        <p className="text-sm text-gray-600">+237 656 007 043</p>
                      </div>
                      <Switch
                        checked={notifications.sms}
                        onChange={(checked) => setNotifications({ ...notifications, sms: checked })}
                      />
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-medium mb-4">Notifications settings</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-medium">Financial operations</span>
                          <Switch
                            checked={notifications.financialOps}
                            onChange={(checked) => setNotifications({ ...notifications, financialOps: checked })}
                          />
                        </div>
                        <p className="text-sm text-gray-600 mb-3">Select your notifications channels</p>
                        <div className="flex gap-4 mb-4">
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <span className="text-sm">SMS</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" defaultChecked className="rounded" />
                            <span className="text-sm">Email</span>
                          </label>
                        </div>

                        <div className="space-y-3 pl-4 border-l-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Organization balance transactions</span>
                            <Switch
                              checked={notifications.orgBalance}
                              onChange={(checked) => setNotifications({ ...notifications, orgBalance: checked })}
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Personal balance transactions</span>
                            <Switch
                              checked={notifications.personalBalance}
                              onChange={(checked) => setNotifications({ ...notifications, personalBalance: checked })}
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Notify me when Organization balance is less than $100</span>
                            <Switch
                              checked={notifications.lowBalanceAlert}
                              onChange={(checked) => setNotifications({ ...notifications, lowBalanceAlert: checked })}
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Daily financial report</span>
                            <Switch
                              checked={notifications.dailyReport}
                              onChange={(checked) => setNotifications({ ...notifications, dailyReport: checked })}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div>
              <section className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-semibold mb-1">Help & Support</h2>
                <p className="text-sm text-gray-600 mb-4">Get answer or contact support</p>

                <div className="space-y-3">
                  <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg text-left">
                    <span>❓</span>
                    <span className="text-sm">FAQs</span>
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg text-left">
                    <span>📚</span>
                    <span className="text-sm">Help Center</span>
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg text-left">
                    <span>💬</span>
                    <span className="text-sm text-blue-600">Contact support</span>
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg text-left">
                    <span>🎫</span>
                    <span className="text-sm text-blue-600">Open a Ticket</span>
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg text-left">
                    <span>💡</span>
                    <span className="text-sm text-blue-600">Suggest a feature</span>
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
