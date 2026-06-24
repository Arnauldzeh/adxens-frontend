'use client';

import React, { useState } from 'react';
import { Switch } from '@/components/ui/Switch';
import { Navbar } from '@/components/settings/Navbar';
import { Sidebar } from '@/components/settings/Sidebar';
import { HeaderSections } from '@/components/settings/HeaderSections';
import {
  Building2,
  Check,
  ChevronDown,
  CreditCard,
  FileBadge,
  Upload,
  Users,
} from 'lucide-react';

export default function SettingsPage() {
  // Sidebar mobile state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('General settings');

  // Original saved data
  const [initialData, setInitialData] = useState({
    firstName: 'Simon',
    lastName: 'Alt',
    phoneNumber: '695 840 8714',
    country: 'Cameroon',
    language: 'English',
    timezone: 'UTC-08:00 Pacific Time, US & Canada'
  });

  // Current editing data
  const [formData, setFormData] = useState({ ...initialData });

  // Notifications channels state
  const [notifications, setNotifications] = useState({
    email: true,
    sms: true,
    push: true
  });

  // Accordion active switches
  const [accordionSwitches, setAccordionSwitches] = useState({
    0: true,  // Security alerts (ON)
    1: false, // Billing (OFF)
    2: false, // Marketing (OFF)
    3: false  // Advanced settings (OFF)
  });

  // Sub-notifications inside expanded Security Alerts accordion
  const [subNotifications, setSubNotifications] = useState({
    newsAndUpdates: true,
    secureAlerts: false,
    newDeviceLogin: true,
    billingAndInvoice: false
  });

  // Expanded accordion state (0: Security alerts, 1: Billing, 2: Marketing, 3: Advanced, null: none)
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  // Check if form data has been modified compared to initialData
  const isFormDirty = Object.keys(formData).some(
    (key) => formData[key as keyof typeof formData] !== initialData[key as keyof typeof initialData]
  );

  // Check if notifications or sub-notifications have changed from original default values (optional, let's keep it simple: form dirty triggers banner)
  const isDirty = isFormDirty;

  const handleCancel = () => {
    setFormData({ ...initialData });
  };

  const handleSave = () => {
    setInitialData({ ...formData });
  };

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="relative w-full min-h-screen bg-[#EFEFEF] lg:bg-white">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Navigation Bar */}
      <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

      {/* Main Container - Responsive */}
      <div className="
        relative lg:absolute
        w-full lg:w-auto
        min-h-screen
        lg:min-h-0 lg:h-[calc(100vh-8px)]
        left-0 lg:left-[236px] lg:right-0
        top-0 lg:top-[8px]
        mt-[63px] lg:mt-0
        bg-white
        lg:border lg:border-[rgba(39,39,42,0.1)]
        lg:rounded-tl-[16px]
        px-4 sm:px-6 lg:px-0
        lg:overflow-hidden
      ">
        {/* Header sections: Description & Underline Tabs */}
        <HeaderSections activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Main content stack container - Frame 1000005262 */}
        <div className={`
          relative lg:absolute
          w-full lg:w-[842px]
          min-h-[1550px] lg:min-h-0 lg:h-[calc(100vh-192px)]
          left-0 lg:left-[21px]
          top-0 lg:top-[174px]
          flex flex-col 
          items-start
          p-0
          gap-[10px]
          py-6 lg:py-0
          pb-16 lg:pb-0
          lg:overflow-y-auto
          lg:overflow-x-hidden
          lg:scrollbar-hide
          ${activeTab === 'General settings' ? '' : 'hidden'}
        `}>
        
        {/* Personal Information Card */}
        <section className="
          w-full lg:w-[842px]
          min-h-[294px] lg:h-[294px]
          bg-[#FAFAFA]
          rounded-[16px]
          p-[10px]
          gap-[15px]
          flex flex-col lg:flex-row
          justify-between items-start
          border border-[rgba(0,0,0,0.02)]
        ">
          {/* Left panel: Info */}
          <div className="w-full lg:w-[228px] h-auto lg:h-[88px] flex flex-col justify-start items-start p-[20px] gap-[16px]">
            <div className="flex flex-col gap-[10px] w-full lg:w-[188px]">
              <h2 className="font-medium text-[18px] leading-[24px] tracking-[-0.01em] text-[#0E121B] m-0">
                Personal information
              </h2>
              <p className="font-normal text-[14px] leading-[20px] tracking-[-0.01em] text-[#6F6F77] m-0">
                Manage your bio data
              </p>
            </div>
          </div>

          {/* Right panel: Inputs Card */}
          <div className="
            w-full lg:w-[580px]
            min-h-[274px] lg:h-[274px]
            bg-white rounded-[6px]
            p-[20px]
            flex flex-col gap-[24px]
            border border-[rgba(0,0,0,0.03)]
          ">
            {/* Avatar upload */}
            <div className="flex flex-row items-center gap-[16px] h-[64px]">
              <div className="relative w-[64px] h-[64px] rounded-full overflow-hidden bg-[#F4F4F5] border border-[rgba(39,39,42,0.1)] flex items-center justify-center">
                <span className="text-[16px] font-bold text-gray-500">SA</span>
              </div>
              <div className="flex flex-col items-start gap-[4px]">
                <button className="h-[28px] px-[12px] py-[4px] bg-white border border-[rgba(39,39,42,0.15)] rounded-[6px] text-[12px] font-medium text-[#111115] hover:bg-gray-50 transition-colors cursor-pointer">
                  Upload
                </button>
                <p className="font-normal text-[11px] leading-[16px] text-[#6F6F77] m-0">
                  JPG, GIF or PNG. 1MB Max.
                </p>
              </div>
            </div>

            {/* Inputs: First Name & Last Name */}
            <div className="flex flex-col sm:flex-row gap-[16px] w-full">
              <div className="flex flex-col gap-[8px] w-full sm:w-[262px]">
                <label className="font-medium text-[14px] leading-[20px] tracking-[-0.01em] text-[#717171]">
                  First name
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full h-[36px] px-[12px] py-[8px] bg-[rgba(39,39,42,0.06)] border border-transparent rounded-[8px] text-[14px] leading-[20px] text-[#111115] focus:outline-none focus:ring-1 focus:ring-[#2F54D8] focus:border-[#2F54D8] transition-all"
                />
              </div>
              <div className="flex flex-col gap-[8px] w-[262px] h-[64px]">
                <label className="font-medium text-[14px] leading-[20px] tracking-[-0.01em] text-[#717171]">
                  Last name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full h-[36px] px-[12px] py-[8px] bg-[rgba(39,39,42,0.06)] border border-transparent rounded-[8px] text-[14px] leading-[20px] text-[#111115] focus:outline-none focus:ring-1 focus:ring-[#2F54D8] focus:border-[#2F54D8] transition-all"
                />
              </div>
            </div>

            {/* Inputs: Phone & Country */}
            <div className="flex flex-col sm:flex-row gap-[16px] w-full">
              <div className="flex flex-col gap-[8px] w-full sm:w-[262px]">
                <label className="font-medium text-[14px] leading-[20px] tracking-[-0.01em] text-[#717171]">
                  Phone number
                </label>
                <div className="flex flex-row gap-[8px] w-full h-[36px]">
                  <div className="relative">
                    <select className="h-[36px] pl-[10px] pr-[24px] py-[8px] bg-[rgba(39,39,42,0.06)] border-none rounded-[8px] text-[14px] leading-[20px] text-[#111115] font-medium appearance-none cursor-pointer focus:outline-none">
                      <option>+237</option>
                      <option>+1</option>
                      <option>+33</option>
                    </select>
                    <svg className="absolute right-[8px] top-1/2 -translate-y-1/2 w-[12px] h-[12px] text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="flex-1 h-[36px] px-[12px] py-[8px] bg-[rgba(39,39,42,0.06)] border border-transparent rounded-[8px] text-[14px] leading-[20px] text-[#111115] focus:outline-none focus:ring-1 focus:ring-[#2F54D8] focus:border-[#2F54D8] transition-all"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[8px] w-[262px] h-[64px]">
                <label className="font-medium text-[14px] leading-[20px] tracking-[-0.01em] text-[#717171]">
                  Country
                </label>
                <div className="relative w-full h-[36px]">
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full h-[36px] pl-[34px] pr-[30px] py-[8px] bg-[rgba(39,39,42,0.06)] border border-transparent rounded-[8px] text-[14px] leading-[20px] text-[#111115] appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#2F54D8]"
                  >
                    <option value="Cameroon">Cameroon</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Ghana">Ghana</option>
                  </select>
                  <span className="absolute left-[12px] top-1/2 -translate-y-1/2 text-[14px] pointer-events-none">
                    {formData.country === 'Cameroon' ? '🇨🇲' : formData.country === 'Nigeria' ? '🇳🇬' : '🇬🇭'}
                  </span>
                  <svg className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[14px] h-[14px] text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Preferences Card (height 486px) */}
        <section className="w-[842px] h-[486px] bg-[#FAFAFA] rounded-[16px] p-[10px] gap-[15px] flex flex-row justify-between items-start border border-[rgba(0,0,0,0.02)]">
          {/* Left panel: Info */}
          <div className="w-[228px] h-[88px] flex flex-col justify-start items-start p-[20px] gap-[16px]">
            <div className="flex flex-col gap-[10px] w-[188px] h-[48px]">
              <h2 className="font-medium text-[18px] leading-[24px] tracking-[-0.01em] text-[#0E121B] m-0">
                Preferences
              </h2>
              <p className="font-normal text-[14px] leading-[20px] tracking-[-0.01em] text-[#6F6F77] m-0">
                Make it yours
              </p>
            </div>
          </div>

          {/* Right panel: Two White Cards container */}
          <div className="w-[580px] h-[466px] flex flex-col gap-[10px]">
            {/* Card 1: Language */}
            <div className="w-[580px] h-[152px] bg-white rounded-[6px] p-[20px] flex flex-col gap-[24px] border border-[rgba(0,0,0,0.03)]">
              <h3 className="font-medium text-[18px] leading-[24px] tracking-[-0.01em] text-[#0E121B] m-0">
                Language
              </h3>
              <div className="flex flex-col gap-[8px] w-[540px] h-[64px]">
                <label className="font-medium text-[14px] leading-[20px] tracking-[-0.01em] text-[#717171]">
                  Language
                </label>
                <div className="relative w-full h-[36px]">
                  <select
                    value={formData.language}
                    onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                    className="w-full h-[36px] pl-[34px] pr-[30px] py-[8px] bg-[rgba(39,39,42,0.06)] border border-transparent rounded-[8px] text-[14px] leading-[20px] text-[#111115] appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#2F54D8]"
                  >
                    <option value="English">English</option>
                    <option value="Français">Français</option>
                    <option value="Español">Español</option>
                  </select>
                  <span className="absolute left-[12px] top-1/2 -translate-y-1/2 text-[14px] pointer-events-none">
                    {formData.language === 'English' ? '🇬🇧' : formData.language === 'Français' ? '🇫🇷' : '🇪🇸'}
                  </span>
                  <svg className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[14px] h-[14px] text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 2: Timezone */}
            <div className="w-[580px] h-[152px] bg-white rounded-[6px] p-[20px] flex flex-col gap-[24px] border border-[rgba(0,0,0,0.03)]">
              <h3 className="font-medium text-[18px] leading-[24px] tracking-[-0.01em] text-[#0E121B] m-0">
                Timezone
              </h3>
              <div className="flex flex-col gap-[8px] w-[540px] h-[64px]">
                <label className="font-medium text-[14px] leading-[20px] tracking-[-0.01em] text-[#717171]">
                  Timezone
                </label>
                <div className="relative w-full h-[36px]">
                  <select
                    value={formData.timezone}
                    onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
                    className="w-full h-[36px] pl-[12px] pr-[30px] py-[8px] bg-[rgba(39,39,42,0.06)] border border-transparent rounded-[8px] text-[14px] leading-[20px] text-[#111115] appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#2F54D8]"
                  >
                    <option value="UTC-08:00 Pacific Time, US & Canada">UTC-08:00 Pacific Time, US & Canada</option>
                    <option value="GMT+1">GMT+1 (West Africa Time)</option>
                    <option value="GMT+0">GMT+0 (Greenwich Mean Time)</option>
                  </select>
                  <svg className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[14px] h-[14px] text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notifications Card (height 750px) */}
        <section className="w-[842px] h-[750px] bg-[#FAFAFA] rounded-[16px] p-[10px] gap-[15px] flex flex-row justify-between items-start border border-[rgba(0,0,0,0.02)]">
          {/* Left panel: Info */}
          <div className="w-[228px] h-[88px] flex flex-col justify-start items-start p-[20px] gap-[16px]">
            <div className="flex flex-col gap-[10px] w-[188px] h-[48px]">
              <h2 className="font-medium text-[18px] leading-[24px] tracking-[-0.01em] text-[#0E121B] m-0">
                Notifications
              </h2>
              <p className="font-normal text-[14px] leading-[20px] tracking-[-0.01em] text-[#6F6F77] m-0">
                Setup your notifications preferences
              </p>
            </div>
          </div>

          {/* Right panel: Channels & Settings stack */}
          <div className="w-[580px] h-[730px] flex flex-col gap-[10px]">
            {/* Card 1: Notifications channels */}
            <div className="w-[580px] h-[256px] bg-white rounded-[6px] p-[20px] flex flex-col gap-[24px] border border-[rgba(0,0,0,0.03)]">
              <h3 className="font-medium text-[18px] leading-[24px] tracking-[-0.01em] text-[#0E121B] m-0">
                Notifications channels
              </h3>
              <div className="flex flex-col gap-[10px] w-[540px] h-[168px]">
                {/* Channel: Email */}
                <div className="w-[540px] h-[52px] bg-white border border-[rgba(0,0,0,0.05)] rounded-[8px] flex flex-row justify-between items-center p-[10px] gap-[10px]">
                  <div className="flex flex-row items-center gap-[10px]">
                    {/* Envelope Icon */}
                    <svg className="w-[24px] h-[24px] text-[#464646]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium text-[14px] leading-[20px] text-[#111115]">
                      Email
                    </span>
                  </div>
                  <Switch
                    checked={notifications.email}
                    onChange={(val) => setNotifications(prev => ({ ...prev, email: val }))}
                  />
                </div>

                {/* Channel: SMS */}
                <div className="w-[540px] h-[52px] bg-white border border-[rgba(0,0,0,0.05)] rounded-[8px] flex flex-row justify-between items-center p-[10px] gap-[10px]">
                  <div className="flex flex-row items-center gap-[10px]">
                    {/* Chat Icon */}
                    <svg className="w-[24px] h-[24px] text-[#464646]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="font-medium text-[14px] leading-[20px] text-[#111115]">
                      SMS
                    </span>
                  </div>
                  <Switch
                    checked={notifications.sms}
                    onChange={(val) => setNotifications(prev => ({ ...prev, sms: val }))}
                  />
                </div>

                {/* Channel: Push */}
                <div className="w-[540px] h-[52px] bg-white border border-[rgba(0,0,0,0.05)] rounded-[8px] flex flex-row justify-between items-center p-[10px] gap-[10px]">
                  <div className="flex flex-row items-center gap-[10px]">
                    {/* Bell Icon */}
                    <svg className="w-[24px] h-[24px] text-[#464646]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span className="font-medium text-[14px] leading-[20px] text-[#111115]">
                      Push
                    </span>
                  </div>
                  <Switch
                    checked={notifications.push}
                    onChange={(val) => setNotifications(prev => ({ ...prev, push: val }))}
                  />
                </div>
              </div>
            </div>

            {/* Card 2: Notifications settings (Accordions) */}
            <div className="w-[580px] h-[464px] bg-white rounded-[6px] p-[20px] flex flex-col gap-[24px] border border-[rgba(0,0,0,0.03)]">
              <h3 className="font-medium text-[18px] leading-[24px] tracking-[-0.01em] text-[#0E121B] m-0">
                Notifications settings
              </h3>
              
              <div className="w-[540px] flex flex-col gap-[10px]">
                {/* Accordion 1: Security alerts */}
                <div className="w-[521px] flex flex-col border border-[rgba(0,0,0,0.05)] rounded-[8px] overflow-hidden">
                  {/* Header Row */}
                  <div 
                    onClick={() => toggleAccordion(0)}
                    className="w-full h-[44px] bg-white px-[10px] py-[6px] flex flex-row justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex flex-row items-center gap-[10px]">
                      <span className="font-medium text-[14px] leading-[20px] text-[#414651]">
                        Security alerts
                      </span>
                    </div>
                    <div className="flex flex-row items-center gap-[10px]">
                      <Switch
                        checked={accordionSwitches[0]}
                        onChange={(val) => setAccordionSwitches(prev => ({ ...prev, 0: val }))}
                      />
                      <svg
                        className={`w-[24px] h-[24px] text-gray-400 transition-transform duration-200 ${openAccordion === 0 ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Expanded Sub-header (Channels checkboxes) */}
                  {openAccordion === 0 && (
                    <div className="w-full h-[40px] bg-[#F5F5F5] border-t border-[rgba(0,0,0,0.05)] px-[10px] flex flex-row justify-between items-center">
                      <span className="text-[14px] leading-[20px] text-[#414141]">
                        Select your notification channels:
                      </span>
                      <div className="flex flex-row items-center gap-[20px]">
                        {/* SMS Checkbox */}
                        <div 
                          onClick={() => setNotifications(prev => ({ ...prev, sms: !prev.sms }))}
                          className="flex flex-row items-center gap-[8px] cursor-pointer"
                        >
                          <div className={`w-[16px] h-[16px] rounded-[4px] flex items-center justify-center border transition-colors ${
                            notifications.sms 
                              ? 'bg-[#F9F5FF] border-[#2F54D8]' 
                              : 'bg-white border-gray-300'
                          }`}>
                            {notifications.sms && (
                              <svg className="w-[10px] h-[10px] text-[#2F54D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <span className="font-medium text-[14px] leading-[20px] text-[#414651]">
                            SMS
                          </span>
                        </div>

                        {/* Email Checkbox */}
                        <div 
                          onClick={() => setNotifications(prev => ({ ...prev, email: !prev.email }))}
                          className="flex flex-row items-center gap-[8px] cursor-pointer"
                        >
                          <div className={`w-[16px] h-[16px] rounded-[4px] flex items-center justify-center border transition-colors ${
                            notifications.email 
                              ? 'bg-[#F9F5FF] border-[#2F54D8]' 
                              : 'bg-white border-gray-300'
                          }`}>
                            {notifications.email && (
                              <svg className="w-[10px] h-[10px] text-[#2F54D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <span className="font-medium text-[14px] leading-[20px] text-[#414651]">
                            Email
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Expanded Details list (Toggles) */}
                  {openAccordion === 0 && (
                    <div className="w-full bg-white border-t border-[rgba(0,0,0,0.05)] p-[10px] flex flex-col gap-[10px]">
                      {/* Sub-notification: Receive news and updates */}
                      <div className="flex flex-row justify-between items-center h-[20px]">
                        <span className="text-[14px] leading-[20px] text-[#767676]">
                          Receive news and updates
                        </span>
                        <Switch
                          checked={subNotifications.newsAndUpdates}
                          onChange={(val) => setSubNotifications(prev => ({ ...prev, newsAndUpdates: val }))}
                        />
                      </div>

                      {/* Sub-notification: Secure account alerts */}
                      <div className="flex flex-row justify-between items-center h-[20px]">
                        <span className="text-[14px] leading-[20px] text-[#767676]">
                          Secure account alerts
                        </span>
                        <Switch
                          checked={subNotifications.secureAlerts}
                          onChange={(val) => setSubNotifications(prev => ({ ...prev, secureAlerts: val }))}
                        />
                      </div>

                      {/* Sub-notification: Get notified login device */}
                      <div className="flex flex-row justify-between items-center h-[20px]">
                        <span className="text-[14px] leading-[20px] text-[#767676]">
                          Get notified when someone logs in from a new device
                        </span>
                        <Switch
                          checked={subNotifications.newDeviceLogin}
                          onChange={(val) => setSubNotifications(prev => ({ ...prev, newDeviceLogin: val }))}
                        />
                      </div>

                      {/* Sub-notification: Billing and invoice */}
                      <div className="flex flex-row justify-between items-center h-[20px]">
                        <span className="text-[14px] leading-[20px] text-[#767676]">
                          Billing and invoice
                        </span>
                        <Switch
                          checked={subNotifications.billingAndInvoice}
                          onChange={(val) => setSubNotifications(prev => ({ ...prev, billingAndInvoice: val }))}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Accordion 2: Billing (Collapsed) */}
                <div className="w-[521px] flex flex-col border border-[rgba(0,0,0,0.05)] rounded-[8px] overflow-hidden">
                  <div 
                    onClick={() => toggleAccordion(1)}
                    className="w-full h-[44px] bg-white px-[10px] py-[6px] flex flex-row justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-[14px] leading-[20px] text-[#414651]">
                      Billing
                    </span>
                    <div className="flex flex-row items-center gap-[10px]">
                      <Switch
                        checked={accordionSwitches[1]}
                        onChange={(val) => setAccordionSwitches(prev => ({ ...prev, 1: val }))}
                      />
                      <svg
                        className={`w-[24px] h-[24px] text-gray-400 transition-transform duration-200 ${openAccordion === 1 ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  {openAccordion === 1 && (
                    <div className="w-full bg-white border-t border-[rgba(0,0,0,0.05)] p-[10px] text-[13px] text-gray-500">
                      Configure your billing notifications and receipt schedules.
                    </div>
                  )}
                </div>

                {/* Accordion 3: Marketing (Collapsed) */}
                <div className="w-[521px] flex flex-col border border-[rgba(0,0,0,0.05)] rounded-[8px] overflow-hidden">
                  <div 
                    onClick={() => toggleAccordion(2)}
                    className="w-full h-[44px] bg-white px-[10px] py-[6px] flex flex-row justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-[14px] leading-[20px] text-[#414651]">
                      Marketing
                    </span>
                    <div className="flex flex-row items-center gap-[10px]">
                      <Switch
                        checked={accordionSwitches[2]}
                        onChange={(val) => setAccordionSwitches(prev => ({ ...prev, 2: val }))}
                      />
                      <svg
                        className={`w-[24px] h-[24px] text-gray-400 transition-transform duration-200 ${openAccordion === 2 ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  {openAccordion === 2 && (
                    <div className="w-full bg-white border-t border-[rgba(0,0,0,0.05)] p-[10px] text-[13px] text-gray-500">
                      Configure your promotion, offer, and newsletter subscriptions.
                    </div>
                  )}
                </div>

                {/* Accordion 4: Advanced settings (Collapsed) */}
                <div className="w-[521px] flex flex-col border border-[rgba(0,0,0,0.05)] rounded-[8px] overflow-hidden">
                  <div 
                    onClick={() => toggleAccordion(3)}
                    className="w-full h-[44px] bg-white px-[10px] py-[6px] flex flex-row justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-[14px] leading-[20px] text-[#414651]">
                      Advanced settings
                    </span>
                    <div className="flex flex-row items-center gap-[10px]">
                      <Switch
                        checked={accordionSwitches[3]}
                        onChange={(val) => setAccordionSwitches(prev => ({ ...prev, 3: val }))}
                      />
                      <svg
                        className={`w-[24px] h-[24px] text-gray-400 transition-transform duration-200 ${openAccordion === 3 ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  {openAccordion === 3 && (
                    <div className="w-full bg-white border-t border-[rgba(0,0,0,0.05)] p-[10px] text-[13px] text-gray-500">
                      Configure developer API alerts, webhook triggers, and log access webhooks.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 4. Help & Support Card (Right Sidebar) - Hidden on mobile, visible on desktop */}
      <div className={`
        hidden lg:block
        absolute 
        w-[311px] 
        h-[320px] 
        left-[873px] 
        top-[174px] 
        bg-[#FAFAFA] 
        rounded-[16px] 
        p-[20px] 
        border border-[rgba(0,0,0,0.02)]
        ${activeTab === 'General settings' ? 'lg:block' : 'lg:hidden'}
      `}>
        {/* Frame 125 - Content Container */}
        <div className="flex flex-col gap-[16px] w-[271px] h-[280px]">
          {/* Text - Title + Description */}
          <div className="flex flex-col gap-[10px] w-[271px] h-[48px]">
            <h2 className="font-medium text-[18px] leading-[24px] tracking-[-0.01em] text-[#0E121B] m-0">
              Help & Support
            </h2>
            <p className="font-normal text-[14px] leading-[20px] tracking-[-0.01em] text-[#6F6F77] m-0">
              Get answer or contact support
            </p>
          </div>

          {/* Frame 1000005258 - Support items stack */}
          <div className="flex flex-col justify-center items-start gap-[8px] w-[271px] h-[216px]">
            {/* FAQs Button (Height 44px, White Card) */}
            <button className="flex flex-row items-center px-[8px] py-[10px] gap-[8px] w-[271px] h-[44px] bg-white border border-[rgba(0,0,0,0.03)] rounded-[8px] cursor-pointer hover:bg-gray-50 hover:shadow-sm transition-all text-left">
              <svg className="w-[24px] h-[24px] text-[#464646]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-normal text-[16px] leading-[24px] text-[#464646] tracking-[-0.02em]">
                FAQs
              </span>
            </button>

            {/* Help Center Button (Height 44px, White Card) */}
            <button className="flex flex-row items-center px-[8px] py-[10px] gap-[8px] w-[271px] h-[44px] bg-white border border-[rgba(0,0,0,0.03)] rounded-[8px] cursor-pointer hover:bg-gray-50 hover:shadow-sm transition-all text-left">
              <svg className="w-[24px] h-[24px] text-[#464646]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m0 10v-6m-6 6v-8m0 8a2 2 0 100-4m0 4a2 2 0 110-4m0-6V4m12 12v-2m0 2a2 2 0 100 4m0-4a2 2 0 110 4m0-12v-2" />
              </svg>
              <span className="font-normal text-[16px] leading-[24px] text-[#464646] tracking-[-0.02em]">
                Help Center
              </span>
            </button>

            {/* Frame 1000005259 - Transparent Action items container */}
            <div className="flex flex-col gap-[5px] w-[271px] h-[112px]">
              {/* Contact Support - Height 34px */}
              <button className="flex flex-row items-center px-[8px] py-[5px] gap-[8px] w-[271px] h-[34px] rounded-[8px] cursor-pointer hover:bg-[#2F54D8]/5 transition-colors text-left">
                <svg className="w-[24px] h-[24px] text-[#2F54D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-normal text-[14px] leading-[20px] tracking-[-0.02em] text-[#2F54D8]">
                  Contact support
                </span>
              </button>

              {/* Open a Ticket - Height 34px */}
              <button className="flex flex-row items-center px-[8px] py-[5px] gap-[8px] w-[271px] h-[34px] rounded-[8px] cursor-pointer hover:bg-[#2F54D8]/5 transition-colors text-left">
                <svg className="w-[24px] h-[24px] text-[#2F54D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="font-normal text-[14px] leading-[20px] tracking-[-0.02em] text-[#2F54D8]">
                  Open a ticket
                </span>
              </button>

              {/* Suggest a feature - Height 34px */}
              <button className="flex flex-row items-center px-[8px] py-[5px] gap-[8px] w-[271px] h-[34px] rounded-[8px] cursor-pointer hover:bg-[#2F54D8]/5 transition-colors text-left">
                <svg className="w-[24px] h-[24px] text-[#2F54D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span className="font-normal text-[14px] leading-[20px] tracking-[-0.02em] text-[#2F54D8]">
                  Suggest a feature
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {activeTab === 'Organization' && <OrganizationContent />}

      </div>

      {/* 5. Floating Save Banner */}
      {activeTab === 'General settings' && isDirty && (
        <div className="fixed bottom-[24px] left-[257px] w-[842px] bg-white border border-gray-200 border-l-[4px] border-l-[#2F54D8] rounded-[12px] p-[16px] flex flex-row items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.08)] z-[100] transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
          <span className="text-[16px] font-bold text-[#111115]">
            Save your updates
          </span>
          <div className="flex items-center gap-[12px]">
            <button
              onClick={handleCancel}
              className="px-[16px] py-[8px] bg-white border border-gray-300 rounded-[8px] text-[14px] font-semibold text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-[16px] py-[8px] bg-[#2F54D8] hover:bg-[#2F54D8]/95 text-white rounded-[8px] text-[14px] font-semibold transition-colors cursor-pointer shadow-sm"
            >
              Save changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function OrganizationContent() {
  const menuItems = [
    { label: 'Organization information', icon: Building2, active: true },
    { label: 'KYC/KYB Verification', icon: FileBadge },
    { label: 'Billing & Plan', icon: CreditCard },
    { label: 'Subscription', icon: Users },
  ];

  return (
    <div className="
      relative lg:absolute
      w-full lg:w-[calc(100%_-_42px)]
      min-h-[1114px] lg:min-h-0 lg:h-[calc(100vh-192px)]
      left-0 lg:left-[21px]
      top-0 lg:top-[174px]
      flex flex-col lg:flex-row
      items-start
      gap-[10px]
      py-6 lg:py-0
      pb-16 lg:pb-0
      lg:overflow-visible
    ">
      <div className="
        w-full lg:w-[891px]
        lg:h-full
        flex flex-col lg:flex-row
        items-start
        gap-[10px]
        lg:overflow-y-auto
        lg:overflow-x-hidden
        lg:scrollbar-hide
      ">
        <aside className="
          w-full lg:w-[256px]
          min-h-[212px]
          bg-white
          border border-[rgba(39,39,42,0.1)]
          rounded-[16px]
          p-[10px]
          flex flex-col
          gap-[8px]
          shrink-0
        ">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                type="button"
                className={`
                  w-full h-[32px]
                  flex items-center
                  gap-[6px]
                  rounded-[6px]
                  p-[6px]
                  text-left
                  transition-colors
                  ${item.active ? 'bg-[rgba(101,160,253,0.1)]' : 'bg-[rgba(39,39,42,0.0001)] hover:bg-[rgba(39,39,42,0.06)]'}
                `}
              >
                <Icon className={`h-[20px] w-[20px] ${item.active ? 'text-[#2F54D8]' : 'text-[#A1A1A9]'}`} strokeWidth={1.7} />
                <span className={`flex-1 px-[4px] text-[14px] font-medium leading-[20px] tracking-[-0.01em] ${item.active ? 'text-[#2F54D8]' : 'text-[#4E4E55]'}`}>
                  {item.label}
                </span>
                {item.active && <ChevronDown className="h-[16px] w-[16px] -rotate-90 text-[#2F54D8]" strokeWidth={1.8} />}
              </button>
            );
          })}
        </aside>

        <div className="w-full lg:w-[625px] flex flex-col gap-[10px]">
          <section className="
            w-full lg:w-[625px]
            min-h-[667px]
            rounded-[16px]
            bg-[#FAFAFA]
            p-[10px]
            flex flex-col
            gap-[15px]
            border border-[rgba(0,0,0,0.02)]
          ">
            <div className="flex flex-col gap-[10px] p-[20px] w-full lg:w-[338px]">
              <h2 className="m-0 text-[18px] font-medium leading-[24px] tracking-[-0.01em] text-[#0E121B]">
                Organization Informations
              </h2>
              <p className="m-0 text-[14px] font-normal leading-[20px] tracking-[-0.01em] text-[#6F6F77]">
                Manage your organization profile informations
              </p>
            </div>

            <div className="w-full lg:w-[605px] min-h-[544px] rounded-[6px] bg-white p-[20px] flex flex-col gap-[24px] border border-[rgba(0,0,0,0.03)]">
              <div className="flex items-center gap-[16px]">
                <div className="relative flex h-[64px] w-[64px] items-center justify-center overflow-hidden rounded-[6px] border border-[rgba(39,39,42,0.1)] bg-gradient-to-b from-[#E4E4E7] to-[#FAFAFA]">
                  <span className="text-[18px] font-semibold text-[#2F54D8]">A</span>
                </div>
                <button className="flex h-[28px] items-center gap-[4px] rounded-[6px] border border-[rgba(39,39,42,0.15)] bg-white px-[8px] text-[14px] font-medium leading-[20px] text-[#111115] shadow-[0_1px_2px_rgba(0,0,0,0.05),inset_0_-1px_0_rgba(0,0,0,0.08)] hover:bg-gray-50">
                  <Upload className="h-[14px] w-[14px]" strokeWidth={1.8} />
                  Upload
                </button>
                <p className="m-0 text-[12px] leading-[16px] tracking-[-0.01em] text-[#6F6F77]">
                  JPG, GIF or PNG. 1MB Max.
                </p>
              </div>

              <div className="flex w-full flex-col gap-[40px]">
                <div className="flex flex-col gap-[20px]">
                  <OrgInput label="Organization name" required value="Adxens" />
                  <OrgSelect label="Organization type" required value="Digital finance" />
                </div>

                <div className="grid w-full grid-cols-1 gap-[16px] sm:grid-cols-2">
                  <OrgSelect label="Industry" value="Fintech" />
                  <OrgSelect label="Company size" value="11-50 employees" />
                  <OrgSelect label="Country" value="Cameroon" />
                  <OrgInput label="Registration ID" value="ADX-2026-0192" />
                </div>
              </div>
            </div>
          </section>

          <section className="
            w-full lg:w-[625px]
            min-h-[256px]
            rounded-[16px]
            bg-[#FAFAFA]
            p-[10px]
            flex flex-col
            gap-[15px]
            border border-[rgba(0,0,0,0.02)]
          ">
            <div className="flex flex-col gap-[10px] p-[20px]">
              <h2 className="m-0 text-[18px] font-medium leading-[24px] tracking-[-0.01em] text-[#0E121B]">
                Organization Preferences
              </h2>
              <p className="m-0 text-[14px] font-normal leading-[20px] tracking-[-0.01em] text-[#6F6F77]">
                Configure defaults used across the workspace
              </p>
            </div>

            <div className="w-full lg:w-[605px] rounded-[6px] bg-white p-[20px] flex flex-col gap-[20px] border border-[rgba(0,0,0,0.03)]">
              <OrgSelect label="Default currency" value="XAF - Central African CFA franc" />
              <OrgSelect label="Workspace language" value="English" />
              <div className="flex flex-wrap items-center gap-[40px]">
                {['Finance', 'Marketing', 'Operations'].map((label, index) => (
                  <label key={label} className="flex h-[20px] items-center gap-[8px] text-[14px] font-medium leading-[20px] text-[#414651]">
                    <span className={`flex h-[16px] w-[16px] items-center justify-center rounded-[8px] border ${index === 2 ? 'border-[#2F54D8] bg-[#F9F5FF]' : 'border-[#D5D7DA] bg-white'}`}>
                      {index === 2 && <Check className="h-[10px] w-[10px] text-[#2F54D8]" strokeWidth={2.4} />}
                    </span>
                    {label}
                  </label>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="
        hidden lg:flex
        lg:absolute
        lg:left-[901px]
        lg:top-0
        w-[260px]
        min-h-[320px]
        rounded-[16px]
        bg-[#FAFAFA]
        p-[20px]
        flex-col
        gap-[16px]
        border border-[rgba(0,0,0,0.02)]
        shrink-0
      ">
        <div className="flex flex-col gap-[10px]">
          <h2 className="m-0 text-[18px] font-medium leading-[24px] tracking-[-0.01em] text-[#0E121B]">
            Help & Support
          </h2>
          <p className="m-0 text-[14px] leading-[20px] tracking-[-0.01em] text-[#6F6F77]">
            Get answer or contact support
          </p>
        </div>
        <div className="flex flex-col gap-[8px]">
          {['FAQs', 'Help Center', 'Contact support', 'Open a Ticket', 'Suggest a feature'].map((item, index) => (
            <button
              key={item}
              className={`
                h-[44px] rounded-[8px] px-[10px] text-left text-[14px] font-medium hover:bg-gray-50
                ${index < 2 ? 'bg-white text-[#464646]' : 'bg-transparent text-[#2F54D8]'}
              `}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function OrgInput({ label, value, required = false }: { label: string; value: string; required?: boolean }) {
  return (
    <label className="flex w-full flex-col gap-[8px]">
      <span className="flex items-center gap-[4px] text-[14px] font-medium leading-[20px] tracking-[-0.01em] text-[#111115]">
        {label}
        {required && <span className="font-semibold text-[#D42422]">*</span>}
      </span>
      <input
        defaultValue={value}
        className="h-[36px] w-full rounded-[8px] border border-transparent bg-[rgba(39,39,42,0.06)] px-[12px] text-[14px] leading-[20px] text-[#111115] outline-none transition-all focus:border-[#2F54D8] focus:ring-1 focus:ring-[#2F54D8]"
      />
    </label>
  );
}

function OrgSelect({ label, value, required = false }: { label: string; value: string; required?: boolean }) {
  return (
    <label className="flex w-full flex-col gap-[8px]">
      <span className="flex items-center gap-[4px] text-[14px] font-medium leading-[20px] tracking-[-0.01em] text-[#111115]">
        {label}
        {required && <span className="font-semibold text-[#D42422]">*</span>}
      </span>
      <span className="relative block h-[36px] w-full">
        <select
          defaultValue={value}
          className="h-[36px] w-full appearance-none rounded-[8px] border border-transparent bg-[rgba(39,39,42,0.06)] px-[12px] pr-[36px] text-[14px] leading-[20px] text-[#111115] outline-none transition-all focus:border-[#2F54D8] focus:ring-1 focus:ring-[#2F54D8]"
        >
          <option>{value}</option>
        </select>
        <ChevronDown className="pointer-events-none absolute right-[12px] top-1/2 h-[16px] w-[16px] -translate-y-1/2 text-[#A1A1A9]" strokeWidth={1.8} />
      </span>
    </label>
  );
}
