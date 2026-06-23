'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Avatar } from '@/components/ui/Avatar';
import { Switch } from '@/components/ui/Switch';

export default function SettingsPage() {
  const [initialData, setInitialData] = useState({
    firstName: 'Simon',
    lastName: 'Alt',
    phoneNumber: '695 840 8714',
    country: 'Cameroon',
    language: 'English',
    timezone: 'GMT+1'
  });

  const [formData, setFormData] = useState({ ...initialData });

  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false
  });

  const isDirty = Object.keys(formData).some(
    (key) => formData[key as keyof typeof formData] !== initialData[key as keyof typeof initialData]
  );

  const handleCancel = () => {
    setFormData({ ...initialData });
  };

  const handleSave = () => {
    setInitialData({ ...formData });
  };

  return (
    <>
      {/* Header - Fixed */}
      <header className="bg-white border-b border-gray-200 px-8 py-4 flex-shrink-0">
        {/* Row 1: Title and Header Actions */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          </div>
          <div className="flex items-center gap-3">
            {/* Balance Pill */}
            <button className="flex items-center justify-between h-[42px] w-[140px] pl-[15px] pr-[6px] py-[6px] gap-[10px] bg-[#F4F4F4] text-gray-900 border border-black/[0.07] rounded-[28px] text-sm font-semibold hover:bg-gray-200/80 transition-colors cursor-pointer">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span>$1 200</span>
              <svg className="w-4 h-4 text-gray-500 hover:text-gray-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
            </button>
            
            {/* Help Pill */}
            <button className="flex items-center h-[38px] px-[12px] py-[6px] gap-[10px] bg-[#F4F4F4] text-gray-900 border border-black/[0.07] rounded-[28px] text-sm font-semibold hover:bg-gray-200/80 transition-colors cursor-pointer" title="Help">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Help</span>
            </button>
            
            {/* Notifications Bell */}
            <button className="w-[42px] h-[42px] flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors cursor-pointer" title="Notifications">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>

            {/* Profile Dropdown with verified badge and up/down chevron */}
            <button className="flex items-center h-[42px] gap-2 pl-3 border-l border-gray-200 hover:bg-gray-50 rounded-lg px-2 transition-colors cursor-pointer">
              <div className="relative">
                <Avatar src="/avatar.png" alt="Simon Alt" size="sm" fallback="SA" />
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-blue-600 text-white rounded-full flex items-center justify-center border border-white">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <span className="text-sm font-semibold text-gray-900">Simon Alt</span>
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Row 2: Description and Search Settings */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-gray-500 font-normal">
            Manage your account, preferences, and security all in one place.
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for settings"
              className="pl-3 pr-10 py-1.5 w-64 border border-gray-200 rounded-lg text-sm bg-gray-50 hover:bg-gray-100/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <svg className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Row 3: Tabs */}
        <div className="flex gap-6 border-b border-gray-200">
          <button className="pb-3 px-1 border-b-2 border-blue-600 text-blue-600 font-semibold text-sm">
            General settings
          </button>
          <button className="pb-3 px-1 text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors cursor-pointer">
            Organization
          </button>
          <button className="pb-3 px-1 text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors cursor-pointer">
            Payment methods
          </button>
          <button className="pb-3 px-1 text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors cursor-pointer">
            Security
          </button>
          <button className="pb-3 px-1 text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors cursor-pointer">
            Role & Permission
          </button>
          <button className="pb-3 px-1 text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors cursor-pointer">
            Billing & subcription
          </button>
        </div>
      </header>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto bg-white">
        <div className="px-8 py-6">

          <div className="grid grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="col-span-3 space-y-6">
              {/* Save your updates banner */}
              {isDirty && (
                <div className="bg-white border border-gray-200 border-l-4 border-l-blue-600 rounded-xl p-4 flex items-center justify-between shadow-sm">
                  <span className="text-base font-bold text-gray-900">Save your updates</span>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={handleCancel}
                      className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={handleSave}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-colors cursor-pointer"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              )}

              {/* Personal Information Card */}
              <section className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex gap-8">
                  {/* Left: Title */}
                  <div className="w-36 flex-shrink-0">
                    <h2 className="text-base font-semibold text-gray-900 mb-1">Personal information</h2>
                    <p className="text-sm text-gray-500 mb-4">Manage your bio data</p>
                    <div className="border-b border-gray-100 w-full"></div>
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="relative">
                        <Avatar src="/avatar.png" alt="Simon Alt" size="lg" fallback="SA" />
                        <button className="absolute -top-1 -right-1 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-sm hover:bg-blue-700 transition-colors">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex-1">
                        <Button variant="outline" size="sm" className="mb-2">
                          Upload
                        </Button>
                        <p className="text-xs text-gray-500">
                          JPG, GIF or PNG. 1MB Max.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          First name
                        </label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full px-3 py-2.5 border-none rounded-lg text-sm bg-[#F1F5F9] text-gray-900 font-medium focus:ring-1 focus:ring-gray-400 focus:outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Last name
                        </label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-white text-gray-900 font-medium focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone number
                        </label>
                        <div className="flex gap-2">
                          <div className="relative flex-shrink-0">
                            <select className="w-24 pl-3 pr-8 py-2.5 border-none rounded-lg text-sm bg-[#F1F5F9] text-gray-900 font-medium focus:ring-1 focus:ring-gray-400 focus:outline-none appearance-none transition-all cursor-pointer">
                              <option>+237</option>
                              <option>+1</option>
                              <option>+33</option>
                            </select>
                            <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                          <input
                            type="text"
                            value={formData.phoneNumber}
                            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                            className="flex-1 px-3 py-2.5 border-none rounded-lg text-sm bg-[#F1F5F9] text-gray-900 font-medium focus:ring-1 focus:ring-gray-400 focus:outline-none transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Country
                        </label>
                        <div className="relative">
                          <select
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            className="w-full pl-10 pr-8 py-2.5 border-none rounded-lg text-sm bg-[#F1F5F9] text-gray-900 font-medium focus:ring-1 focus:ring-gray-400 focus:outline-none appearance-none transition-all cursor-pointer"
                          >
                            <option>Cameroon</option>
                            <option>Nigeria</option>
                            <option>Ghana</option>
                          </select>
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-base">
                            🇨🇲
                          </div>
                          <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Preferences Card */}
              <section className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex gap-8">
                  {/* Left: Title */}
                  <div className="w-36 flex-shrink-0">
                    <h2 className="text-base font-semibold text-gray-900 mb-1">Preferences</h2>
                    <p className="text-sm text-gray-500 mb-4">Make it yours</p>
                    <div className="border-b border-gray-100 w-full"></div>
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 space-y-6">
                    {/* Language */}
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Language</h3>
                      <p className="text-sm text-gray-500 mb-3">Select a default language</p>
                      <div className="relative">
                        <select
                          value={formData.language}
                          onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                          className="w-full pl-10 pr-10 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 text-gray-900 font-medium focus:bg-white focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none appearance-none transition-all"
                        >
                          <option>English</option>
                          <option>Français</option>
                          <option>Español</option>
                        </select>
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-base">
                          🇬🇧
                        </div>
                        <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    {/* Timezone */}
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Timezone</h3>
                      <p className="text-sm text-gray-500 mb-3">Edit your timezone</p>
                      <select
                        value={formData.timezone}
                        onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 text-gray-900 font-medium focus:bg-white focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none appearance-none transition-all"
                      >
                        <option>UTC-08:00 Pacific Time, US & Canada</option>
                        <option>GMT+1</option>
                        <option>GMT+0</option>
                      </select>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Sidebar */}
            <div className="col-span-1">
              <section className="bg-[#F8FAFC] border border-gray-200/80 rounded-2xl p-6 sticky top-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-1">Help & Support</h2>
                <p className="text-sm text-gray-500 mb-4">Get answer or contact support</p>

                <div className="space-y-2">
                  <button className="w-full flex items-center gap-3 px-3 py-2.5 bg-white rounded-lg shadow-sm hover:shadow transition-all text-left group cursor-pointer">
                    <svg className="w-5 h-5 text-gray-500 group-hover:text-gray-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700 font-medium group-hover:text-gray-900 transition-colors">FAQs</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2.5 bg-white rounded-lg shadow-sm hover:shadow transition-all text-left group cursor-pointer">
                    <svg className="w-5 h-5 text-gray-500 group-hover:text-gray-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m0 10v-6m-6 6v-8m0 8a2 2 0 100-4m0 4a2 2 0 110-4m0-6V4m12 12v-2m0 2a2 2 0 100 4m0-4a2 2 0 110 4m0-12v-2" />
                    </svg>
                    <span className="text-sm text-gray-700 font-medium group-hover:text-gray-900 transition-colors">Help Center</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-blue-50 rounded-lg transition-colors text-left group cursor-pointer">
                    <svg className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 18v-6a9 9 0 0118 0v6M3 18a3 3 0 003-3h1a3 3 0 003-3v-3a3 3 0 00-3-3H3m18 9a3 3 0 01-3 3h-1a3 3 0 01-3-3v-3a3 3 0 013-3h3" />
                    </svg>
                    <span className="text-sm text-blue-600 font-medium group-hover:text-blue-700 transition-colors">Contact support</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-blue-50 rounded-lg transition-colors text-left group cursor-pointer">
                    <svg className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-sm text-blue-600 font-medium group-hover:text-blue-700 transition-colors">Open a Ticket</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-blue-50 rounded-lg transition-colors text-left group cursor-pointer">
                    <svg className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span className="text-sm text-blue-600 font-medium group-hover:text-blue-700 transition-colors">Suggest a feature</span>
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
