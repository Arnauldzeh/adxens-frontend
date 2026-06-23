'use client';

import React from 'react';
import { useOrganization } from '@/hooks/useOrganization';

interface SidebarItem {
  icon: string;
  label: string;
  badge?: number;
  active?: boolean;
}

export function Sidebar() {
  const { organization } = useOrganization();

  const items: SidebarItem[] = [
    { icon: '🏠', label: 'Home' },
    { icon: '📊', label: 'Ad accounts', badge: 2 },
    { icon: '💳', label: 'Wallet' },
    { icon: '👥', label: 'Teams' },
    { icon: '🔗', label: 'Affiliate program' }
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-4">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold">
          X
        </div>
        <span className="font-semibold">adxens</span>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between p-2 border border-gray-200 rounded-lg mb-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-black rounded"></div>
            <span className="text-sm">{organization?.name || 'Workspace'}</span>
          </div>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="absolute right-3 top-2.5 text-gray-400 text-xs">/</span>
      </div>

      <nav className="space-y-1">
        {items.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
              item.active
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center gap-2">
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>
            {item.badge && (
              <span className="bg-blue-600 text-white text-xs rounded-full px-2 py-0.5">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-xs">
          <p className="text-gray-600">You're currently on the</p>
          <p className="font-semibold">Starter plan</p>
          <button className="text-blue-600 hover:underline mt-1">Upgrade to</button>
        </div>
      </div>
    </aside>
  );
}
