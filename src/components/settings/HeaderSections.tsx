'use client';

import React from 'react';

type HeaderSectionsProps = {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
};

export function HeaderSections({ activeTab = 'General settings', onTabChange }: HeaderSectionsProps) {
  const tabs = [
    'General settings',
    'Organization',
    'Security',
    'Terms & Conditions',
    'About Adxens'
  ];

  return (
    <>
      {/* Frame 114 - Description + Search - Responsive */}
      <div className="
        absolute 
        w-full lg:w-[calc(100%_-_42px)] 
        h-auto lg:h-[52px] 
        left-0 lg:left-[21px] 
        top-[20px] lg:top-[64px]
        flex flex-col lg:flex-row 
        justify-between 
        items-start lg:items-center 
        py-[10px] 
        px-4 lg:px-0
        gap-[12px] lg:gap-[20px]
      ">
        <p className="w-full lg:w-[418px] font-normal text-[14px] leading-[20px] tracking-[-0.01em] text-[#6F6F77] m-0">
          Manage your account, preferences, and security all in one place.
        </p>

        {/* Search Container */}
        <div className="w-full lg:w-[220px] h-[32px] bg-[rgba(39,39,42,0.06)] rounded-[8px] flex items-center px-[10px] gap-[8px] hover:bg-[rgba(39,39,42,0.09)] transition-colors shrink-0">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
            <circle cx="7" cy="7" r="5" stroke="#6F6F77" strokeWidth="1.5"/>
            <path d="M11 11L14 14" stroke="#6F6F77" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input
            type="text"
            placeholder="Search for settings"
            className="flex-1 bg-transparent border-none text-[14px] leading-[20px] text-[#111115] focus:outline-none placeholder-[#6F6F77]"
          />
          <div className="flex justify-center items-center px-1.5 h-5 bg-white border border-[rgba(39,39,42,0.1)] rounded text-[10px] font-medium text-[#6F6F77] flex-shrink-0">
            /
          </div>
        </div>
      </div>

      {/* Underline Tabs - Responsive with horizontal scroll on mobile */}
      <div className="
        absolute 
        w-full lg:w-[calc(100%_-_42px)] 
        h-[48px] 
        min-h-[48px]
        left-0 lg:left-[21px] 
        top-[100px] lg:top-[116px]
        flex flex-row 
        items-center 
        gap-[16px] 
        border-b border-[rgba(39,39,42,0.1)]
        overflow-x-auto
        px-4 lg:px-0
        scrollbar-hide
      ">
        {tabs.map((tab, index) => {
          const widths = ['112px', '88px', '59px', '132px', '97px'];
          const isActive = activeTab === tab;
          
          return (
            <button
              key={index}
              type="button"
              onClick={() => onTabChange?.(tab)}
              style={{ width: widths[index] }}
              className={`
                flex justify-center items-center 
                py-[6px] px-[2px] 
                h-[48px] 
                min-h-[48px]
                bg-[rgba(39,39,42,0.0001)] 
                rounded-none 
                cursor-pointer 
                transition-colors
                whitespace-nowrap
                flex-shrink-0
                box-border
                ${isActive ? 'border-b-[1.5px] border-[#2F54D8]' : 'hover:border-b-[1.5px] hover:border-gray-300'}
              `}
            >
              <div className="flex flex-row items-center gap-[4px]">
                <div className="flex justify-center items-center px-[2px]">
                  <span className={`font-medium text-[14px] leading-[20px] tracking-[-0.01em] ${
                    isActive ? 'text-[#2F54D8]' : 'text-[#6F6F77]'
                  }`}>
                    {tab}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}
