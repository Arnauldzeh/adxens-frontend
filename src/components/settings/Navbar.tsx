'use client';

import { useState } from 'react';
import { Wallet, EyeOff, CircleHelp, Bell, BadgeCheck, Menu } from 'lucide-react';

interface NavbarProps {
  onMenuClick: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  return (
    <nav className="
      fixed lg:absolute
      w-full lg:w-auto
      h-[63px]
      left-0 lg:left-[237px]
      right-0
      top-0 lg:top-[9px]
      bg-white
      lg:rounded-[17px]
      border-b lg:border-none border-[rgba(39,39,42,0.08)]
      flex flex-row items-center
      px-4 lg:px-[20px]
      py-[16px]
      gap-[10px]
      z-50
      overflow-visible
    ">
      {/* Left: Hamburger + Title */}
      <div className="flex flex-row items-center gap-3 min-w-0 flex-1">
        {/* Hamburger Menu (mobile only) */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Menu className="w-6 h-6 text-[#111115]" />
        </button>

        {/* Title */}
        <h1 className="font-medium text-[20px] lg:text-[24px] leading-[120%] tracking-[-0.02em] text-[#111115] m-0">
          Settings
        </h1>
      </div>

      {/* Right: Actions */}
      <div className="flex flex-row justify-end items-center gap-2 lg:gap-[10px] h-[42px] shrink-0">
        {/* 1. Wallet / Solde (hidden on mobile) */}
        <div className="hidden md:flex flex-row items-center pl-[15px] pr-[6px] py-[6px] gap-[10px] h-[42px] bg-[#F4F4F4] border border-[rgba(0,0,0,0.07)] rounded-[28px]">
          <div className="flex items-center gap-[8px]">
            <Wallet className="w-5 h-5 text-[#2F54D8]" strokeWidth={1.5} />
            <span className="font-semibold text-[14px] leading-5 tracking-tight text-[#111115]">
              {isBalanceVisible ? '$1 200' : '••••'}
            </span>
          </div>
          <button
            onClick={() => setIsBalanceVisible(!isBalanceVisible)}
            className="flex items-center justify-center w-[30px] h-[30px] bg-[rgba(141,141,141,0.17)] rounded-full hover:bg-[rgba(141,141,141,0.25)] transition-colors"
            title={isBalanceVisible ? 'Masquer le solde' : 'Afficher le solde'}
          >
            <EyeOff className="w-[18px] h-[18px] text-[#4E4E55]" strokeWidth={2} />
          </button>
        </div>

        {/* 2. Help (hidden on small mobile) */}
        <button className="hidden sm:flex flex-row justify-center items-center px-[10px] py-[6px] gap-[6px] h-[32px] bg-white border border-dashed border-[rgba(39,39,42,0.15)] rounded-[9999px] cursor-pointer hover:bg-gray-50 transition-colors">
          <CircleHelp className="w-4 h-4 text-[#71717A]" strokeWidth={1.5} />
          <span className="hidden lg:block font-medium text-[14px] leading-[20px] tracking-[-0.01em] text-[#71717A]">
            Help
          </span>
        </button>

        {/* 3. Notifications (always visible) */}
        <button 
          className="w-[36px] h-[36px] flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors cursor-pointer" 
          title="Notifications"
        >
          <Bell className="w-5 h-5 text-[#27272A]" strokeWidth={2} />
        </button>

        {/* 4. Avatar + User (simplified on mobile) */}
        <div className="flex flex-row justify-end items-center p-[4px] gap-[8px] h-[40px] bg-[rgba(39,39,42,0.0001)] rounded-[12px] cursor-pointer hover:bg-gray-50 transition-colors">
          {/* Avatar with badge */}
          <div className="relative w-[32px] h-[32px] rounded-full overflow-hidden flex items-center justify-center">
            <img 
              src="/avatar.png" 
              alt="Simon Alt" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden w-full h-full bg-gradient-to-b from-[#E4E4E7] to-[#FAFAFA] border border-[rgba(39,39,42,0.1)] flex items-center justify-center">
              <span className="text-[12px] font-bold text-gray-600">SA</span>
            </div>
            {/* Badge vérifié */}
            <div className="absolute -top-[2px] -right-[2px] w-[14px] h-[14px] bg-[#437DFC] rounded-full border-2 border-white flex items-center justify-center">
              <BadgeCheck className="w-[10px] h-[10px] text-white fill-white" strokeWidth={0} />
            </div>
          </div>
          
          {/* User name (hidden on small screens) */}
          <span className="hidden xl:block font-semibold text-[14px] leading-[20px] tracking-[-0.01em] text-[#111115]">
            Simon Alt
          </span>
          
          {/* Dropdown chevron (hidden on mobile) */}
        </div>
      </div>
    </nav>
  );
}
