'use client';

import { useState } from 'react';
import { Navbar } from '@/components/settings/Navbar';
import { Sidebar } from '@/components/settings/Sidebar';
import { HeaderSections } from '@/components/settings/HeaderSections';
import { OrganizationSubmenu } from '@/components/settings/OrganizationSubmenu';

export default function OrganizationPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('kyc-verification');

  return (
    <div className="relative w-full min-h-screen bg-[#EFEFEF] lg:bg-white">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Navigation Bar */}
      <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

      {/* Main Container - Responsive */}
      <div className="
        relative
        w-full lg:w-[1204px]
        min-h-screen
        lg:min-h-[1697px]
        left-0 lg:left-auto lg:right-0
        top-0 lg:top-[8px]
        mt-[63px] lg:mt-0
        bg-white
        lg:border lg:border-[rgba(39,39,42,0.1)]
        lg:rounded-tl-[16px]
        px-4 sm:px-6 lg:px-0
      ">
        {/* Header sections: Description & Underline Tabs */}
        <HeaderSections activeTab="Organization" />

        {/* Main content area with submenu and content */}
        <div className="
          relative lg:absolute
          w-full lg:w-[calc(100%_-_42px)]
          min-h-[600px]
          left-0 lg:left-[21px]
          top-0 lg:top-[174px]
          flex flex-col lg:flex-row
          items-start
          gap-[10px]
          py-6 lg:py-0
          pb-16 lg:pb-0
        ">
          {/* Organization Submenu */}
          <OrganizationSubmenu 
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />

          {/* Main content stack container - Frame 1000005262 */}
          <div className="
            w-full lg:w-[625px]
            flex flex-col 
            items-start
            gap-[10px]
          ">
            {/* KYC/KYB Verification Section */}
            {activeSection === 'kyc-verification' && (
              <section className="
                w-full lg:w-[625px]
                h-auto lg:h-[272px]
                bg-[#FAFAFA]
                rounded-[16px]
                p-[20px]
                gap-[15px]
                flex flex-col
                justify-center
                items-center
                border border-[rgba(0,0,0,0.02)]
              ">
                {/* Frame 1000005276 - Content Container */}
                <div className="
                  flex flex-col
                  justify-center
                  items-center
                  gap-[10px]
                  w-full lg:w-[585px]
                  h-auto lg:h-[232px]
                ">
                  {/* Frame 125 - Text & Icon Container */}
                  <div className="
                    flex flex-col
                    items-center
                    gap-[16px]
                    w-full lg:w-[372px]
                    h-auto lg:h-[232px]
                  ">
                    {/* Frame 1000005278 - Icon + Title + Description */}
                    <div className="
                      flex flex-col
                      items-center
                      gap-[20px]
                      w-full lg:w-[372px]
                      h-auto lg:h-[176px]
                    ">
                      {/* Component 15 - Icon Badge */}
                      <div className="
                        flex flex-row
                        items-center
                        justify-center
                        p-[20px]
                        gap-[10px]
                        w-[72px]
                        h-[72px]
                        bg-[#FFF2ED]
                        rounded-full
                      ">
                        <svg className="w-[32px] h-[32px]" viewBox="0 0 32 32" fill="none">
                          <path d="M16 2L4 8V14C4 21 16 30 16 30C16 30 28 21 28 14V8L16 2Z" fill="#F8B12D"/>
                          <path d="M12 16L14.5 18.5L20 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>

                      {/* Title */}
                      <h2 className="
                        m-0
                        w-auto lg:w-[179px]
                        h-[24px]
                        font-medium
                        text-[18px]
                        leading-[24px]
                        tracking-[-0.01em]
                        text-center
                        text-[#0E121B]
                      ">
                        KYC/KYB Verification
                      </h2>

                      {/* Description */}
                      <p className="
                        m-0
                        w-full lg:w-[372px]
                        h-auto lg:h-[40px]
                        font-normal
                        text-[14px]
                        leading-[20px]
                        tracking-[-0.01em]
                        text-center
                        text-[#6F6F77]
                      ">
                        You haven't verified your Organization. Please proceed to your KYC/KYB verification.
                      </p>
                    </div>

                    {/* Button - Begin Verification */}
                    <button className="
                      flex flex-row
                      justify-center
                      items-center
                      px-[40px]
                      py-[8px]
                      gap-[10px]
                      w-full lg:w-[199px]
                      h-[36px]
                      bg-gradient-to-b from-[#597EFF] to-[#1745E8]
                      border border-[rgba(32,32,32,0.35)]
                      shadow-[inset_0px_0px_7.2px_rgba(255,255,255,0.69)]
                      rounded-[7px]
                      cursor-pointer
                      hover:opacity-90
                      transition-opacity
                    ">
                      <span className="
                        font-medium
                        text-[14px]
                        leading-[20px]
                        tracking-[-0.01em]
                        text-white
                        text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.15)]
                      ">
                        Begin Verification
                      </span>
                    </button>
                  </div>
                </div>
              </section>
            )}

            {/* Organization Information Section - Placeholder */}
            {activeSection === 'organization-info' && (
              <section className="
                w-full lg:w-[625px]
                min-h-[400px]
                bg-[#FAFAFA]
                rounded-[16px]
                p-[20px]
                flex flex-col
                gap-[15px]
                border border-[rgba(0,0,0,0.02)]
              ">
                <h2 className="text-[18px] font-medium text-[#0E121B]">Organization Information</h2>
                <p className="text-[14px] text-[#6F6F77]">Manage your organization profile information</p>
              </section>
            )}

            {/* Billing & Plan Section - Placeholder */}
            {activeSection === 'billing-plan' && (
              <section className="
                w-full lg:w-[625px]
                min-h-[400px]
                bg-[#FAFAFA]
                rounded-[16px]
                p-[20px]
                flex flex-col
                gap-[15px]
                border border-[rgba(0,0,0,0.02)]
              ">
                <h2 className="text-[18px] font-medium text-[#0E121B]">Billing & Plan</h2>
                <p className="text-[14px] text-[#6F6F77]">Manage your billing and subscription plan</p>
              </section>
            )}

            {/* Subscription Section - Placeholder */}
            {activeSection === 'subscription' && (
              <section className="
                w-full lg:w-[625px]
                min-h-[400px]
                bg-[#FAFAFA]
                rounded-[16px]
                p-[20px]
                flex flex-col
                gap-[15px]
                border border-[rgba(0,0,0,0.02)]
              ">
                <h2 className="text-[18px] font-medium text-[#0E121B]">Subscription</h2>
                <p className="text-[14px] text-[#6F6F77]">Manage your subscription settings</p>
              </section>
            )}
          </div>
        </div>

        {/* Help & Support Card (Right Sidebar) - Hidden on mobile, visible on desktop */}
        <div className="
          hidden lg:block
          absolute 
          w-[311px] 
          h-[320px] 
          left-[1109px] 
          top-[192px] 
          bg-[#FAFAFA] 
          rounded-[16px] 
          p-[20px] 
          border border-[rgba(0,0,0,0.02)]
        ">
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
              {/* FAQs Button */}
              <button className="flex flex-row items-center px-[8px] py-[10px] gap-[8px] w-[271px] h-[44px] bg-white border border-[rgba(0,0,0,0.03)] rounded-[8px] cursor-pointer hover:bg-gray-50 hover:shadow-sm transition-all text-left">
                <svg className="w-[24px] h-[24px] text-[#464646]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-normal text-[16px] leading-[24px] text-[#464646] tracking-[-0.02em]">
                  FAQs
                </span>
              </button>

              {/* Help Center Button */}
              <button className="flex flex-row items-center px-[8px] py-[10px] gap-[8px] w-[271px] h-[44px] bg-white border border-[rgba(0,0,0,0.03)] rounded-[8px] cursor-pointer hover:bg-gray-50 hover:shadow-sm transition-all text-left">
                <svg className="w-[24px] h-[24px] text-[#464646]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m0 10v-6m-6 6v-8m0 8a2 2 0 100-4m0 4a2 2 0 110-4m0-6V4m12 12v-2m0 2a2 2 0 100 4m0-4a2 2 0 110 4m0-12v-2" />
                </svg>
                <span className="font-normal text-[16px] leading-[24px] text-[#464646] tracking-[-0.02em]">
                  Help Center
                </span>
              </button>

              {/* Frame 1000005259 - Action items */}
              <div className="flex flex-col gap-[5px] w-[271px] h-[112px]">
                <button className="flex flex-row items-center px-[8px] py-[5px] gap-[8px] w-[271px] h-[34px] rounded-[8px] cursor-pointer hover:bg-[#2F54D8]/5 transition-colors text-left">
                  <svg className="w-[24px] h-[24px] text-[#2F54D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-normal text-[14px] leading-[20px] tracking-[-0.02em] text-[#2F54D8]">
                    Contact support
                  </span>
                </button>

                <button className="flex flex-row items-center px-[8px] py-[5px] gap-[8px] w-[271px] h-[34px] rounded-[8px] cursor-pointer hover:bg-[#2F54D8]/5 transition-colors text-left">
                  <svg className="w-[24px] h-[24px] text-[#2F54D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="font-normal text-[14px] leading-[20px] tracking-[-0.02em] text-[#2F54D8]">
                    Open a ticket
                  </span>
                </button>

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
      </div>
    </div>
  );
}
