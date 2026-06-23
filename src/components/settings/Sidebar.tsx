'use client';

import React from 'react';
import { useOrganization } from '@/hooks/useOrganization';

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  badge?: number;
  active?: boolean;
  hasSubmenu?: boolean;
}

export function Sidebar() {
  const { organization } = useOrganization();

  const items: SidebarItem[] = [
    { 
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
      label: 'Home' 
    },
    { 
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M11 5.882a5.008 5.008 0 014.288 4.118L18 10v3l-2.712.5a5.008 5.008 0 01-4.288 4.118" /></svg>,
      label: 'Ad accounts', 
      badge: 2,
      hasSubmenu: true
    },
    { 
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
      label: 'Wallet',
      hasSubmenu: true
    },
    { 
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      label: 'Teams',
      hasSubmenu: true 
    },
    { 
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
      label: 'Affiliate program' 
    }
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col">
      <div className="p-4">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-6">
          <svg className="w-7 h-7 text-black" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.5 12c1.8-1.2 4-3.5 4-5.5 0-1.8-1.2-3-3-3-1.8 0-3.5 1.8-5 4-1.5-2.2-3.2-4-5-4-1.8 0-3 1.2-3 3 0 2 2.2 4.3 4 5.5-1.8 1.2-4 3.5-4 5.5 0 1.8 1.2 3 3 3 1.8 0 3.5-1.8 5-4 1.5 2.2 3.2 4 5 4 1.8 0 3-1.2 3-3 0-2-2.2-4.3-4-5.5z" />
          </svg>
          <span className="text-xl font-bold tracking-tight text-gray-900">adxens</span>
        </div>

        {/* Workspace Selector */}
        <div className="mb-6">
          <button className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-sm font-semibold text-gray-900">Workspace name</span>
            </div>
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-3 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <kbd className="absolute right-3 top-2.5 text-xs text-gray-400 font-mono bg-white border border-gray-200 rounded px-1.5 py-0.5">
            /
          </kbd>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1">
          {items.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                item.active
                  ? 'bg-gray-100 text-gray-900 font-medium'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-gray-500">{item.icon}</span>
                <span>{item.label}</span>
              </div>
              <div className="flex items-center gap-2">
                {item.badge && (
                  <span className="bg-blue-600 text-white text-xs font-semibold rounded-full px-2 py-0.5 min-w-[20px] text-center">
                    {item.badge}
                  </span>
                )}
                {item.hasSubmenu && (
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </div>
            </button>
          ))}
        </nav>
      </div>

      {/* Bottom Plan Card */}
      <div className="mt-auto p-4">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
          <p className="text-xs text-gray-600 mb-1">You're currently on the</p>
          <p className="text-sm font-semibold text-gray-900 mb-2">Starter plan</p>
          <button className="text-xs text-blue-600 hover:text-blue-700 font-medium hover:underline">
            Upgrade to
          </button>
        </div>
      </div>
    </aside>
  );
}
