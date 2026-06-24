'use client';

import { useState } from 'react';
import { Home, CreditCard, Wallet, Settings, ChevronRight, X } from 'lucide-react';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ isOpen = false, onClose = () => {} }: SidebarProps) {
  const [activeMenu, setActiveMenu] = useState('settings');

  return (
    <>
      {/* Overlay (mobile only) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:absolute
        w-[280px] sm:w-[236px]
        h-screen lg:h-[864px]
        left-0 top-0
        bg-[#FAFAFA]
        flex flex-col items-start p-0
        transition-transform duration-300 ease-in-out
        z-40 lg:z-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Close button (mobile only) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 lg:hidden p-2 hover:bg-gray-200 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Logo Userbar - z-index: 4 */}
        <div className="flex flex-row items-center px-[16px] py-[24px] gap-[8px] w-full h-[72px] flex-none order-0 self-stretch z-[4]">
          <div className="w-[110px] h-[24px] flex items-center justify-start">
            <span className="font-bold text-[18px] tracking-tight text-[#131314]">ADXENS</span>
          </div>
        </div>

        {/* User Profile Bar - z-index: 3 */}
        <div className="flex flex-row items-center px-[12px] py-[22px] gap-[12px] w-full h-[68px] bg-[rgba(39,39,42,0.0001)] border-b border-[rgba(39,39,42,0.1)] flex-none order-1 z-[3]">
          <div className="flex flex-row justify-center items-center w-[24px] h-[24px]">
            <div className="relative w-[24px] h-[24px] rounded-[6px] bg-[#F4F4F5] border border-[rgba(39,39,42,0.1)] overflow-hidden flex items-center justify-center">
              <img 
                src="/avatar.png" 
                alt="Simon Alt" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="hidden text-[10px] font-bold text-gray-500">SA</span>
            </div>
          </div>

          <span className="flex-1 font-medium text-[14px] leading-[20px] tracking-[-0.01em] text-[#111115]">
            Simon Alt
          </span>

          <div className="flex flex-row justify-center items-center w-[20px] h-[20px]">
            <ChevronRight className="w-4 h-4 text-[#A1A1A9] rotate-90" />
          </div>
        </div>

        {/* Menu Container - z-index: 2, flex-grow: 1 */}
        <div className="flex flex-col items-start p-[12px] gap-[20px] w-full flex-1 order-2 z-[2] overflow-y-auto">
          {/* Search Input */}
          <div className="flex flex-col items-start gap-[8px] w-full h-[32px] px-2 sm:px-0">
            <div className="flex flex-row justify-center items-center w-full h-[32px] bg-[rgba(39,39,42,0.06)] rounded-[8px]">
              <div className="flex flex-row justify-center items-center px-[8px] py-[6px] gap-[6px] w-full h-[32px]">
                <div className="flex flex-row items-center gap-[2px] flex-1 h-[20px]">
                  <div className="flex flex-row items-center px-[4px] flex-1 h-[20px]">
                    <span className="font-normal text-[14px] leading-[20px] tracking-[-0.01em] text-[#6F6F77]">
                      Search
                    </span>
                  </div>
                  <div className="flex flex-row justify-center items-center px-[4px] w-[20px] min-w-[20px] h-[20px] border border-[rgba(39,39,42,0.1)] rounded-[4px]">
                    <span className="font-medium text-[12px] leading-[16px] tracking-[-0.01em] text-[#6F6F77]">
                      /
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col items-start gap-[2px] w-full px-2 sm:px-0">
            {/* Home */}
            <button
              onClick={() => {
                setActiveMenu('home');
                onClose();
              }}
              className={`flex flex-row justify-between items-center px-[6px] py-[6px] gap-[6px] w-full h-[32px] rounded-[6px] cursor-pointer transition-colors ${
                activeMenu === 'home' ? 'bg-[rgba(47,84,216,0.1)]' : 'bg-[rgba(39,39,42,0.0001)] hover:bg-gray-100'
              }`}
            >
              <div className="flex flex-row items-center gap-[6px]">
                <Home className={`w-5 h-5 ${activeMenu === 'home' ? 'text-[#2F54D8]' : 'text-[#4E4E55]'}`} strokeWidth={1.5} />
                <span className={`font-medium text-[14px] leading-[20px] tracking-[-0.01em] ${activeMenu === 'home' ? 'text-[#2F54D8]' : 'text-[#4E4E55]'}`}>
                  Home
                </span>
              </div>
            </button>

            {/* Transactions */}
            <button
              onClick={() => {
                setActiveMenu('transactions');
                onClose();
              }}
              className={`flex flex-row justify-between items-center px-[6px] py-[6px] gap-[6px] w-full h-[32px] rounded-[6px] cursor-pointer transition-colors ${
                activeMenu === 'transactions' ? 'bg-[rgba(47,84,216,0.1)]' : 'bg-[rgba(39,39,42,0.0001)] hover:bg-gray-100'
              }`}
            >
              <div className="flex flex-row items-center gap-[6px]">
                <CreditCard className={`w-5 h-5 ${activeMenu === 'transactions' ? 'text-[#2F54D8]' : 'text-[#4E4E55]'}`} strokeWidth={1.5} />
                <span className={`font-medium text-[14px] leading-[20px] tracking-[-0.01em] ${activeMenu === 'transactions' ? 'text-[#2F54D8]' : 'text-[#4E4E55]'}`}>
                  Transactions
                </span>
              </div>
              <div className="flex flex-row items-center gap-[6px]">
                <div className="flex flex-row justify-center items-center p-[2px] w-[20px] h-[20px] bg-[#2F54D8] border border-[rgba(39,39,42,0.1)] rounded-[9999px]">
                  <span className="font-medium text-[12px] leading-[16px] tracking-[-0.01em] text-white">
                    2
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-[#A1A1A9] rotate-90" />
              </div>
            </button>

            {/* Wallet */}
            <button
              onClick={() => {
                setActiveMenu('wallet');
                onClose();
              }}
              className={`flex flex-row justify-between items-center px-[6px] py-[6px] gap-[6px] w-full h-[32px] rounded-[6px] cursor-pointer transition-colors ${
                activeMenu === 'wallet' ? 'bg-[rgba(47,84,216,0.1)]' : 'bg-[rgba(39,39,42,0.0001)] hover:bg-gray-100'
              }`}
            >
              <div className="flex flex-row items-center gap-[6px]">
                <Wallet className={`w-5 h-5 ${activeMenu === 'wallet' ? 'text-[#2F54D8]' : 'text-[#4E4E55]'}`} strokeWidth={1.5} />
                <span className={`font-medium text-[14px] leading-[20px] tracking-[-0.01em] ${activeMenu === 'wallet' ? 'text-[#2F54D8]' : 'text-[#4E4E55]'}`}>
                  Wallet
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-[#A1A1A9] rotate-90" />
            </button>

            {/* Cards */}
            <button
              onClick={() => {
                setActiveMenu('cards');
                onClose();
              }}
              className={`flex flex-row justify-between items-center px-[6px] py-[6px] gap-[6px] w-full h-[32px] rounded-[6px] cursor-pointer transition-colors ${
                activeMenu === 'cards' ? 'bg-[rgba(47,84,216,0.1)]' : 'bg-[rgba(39,39,42,0.0001)] hover:bg-gray-100'
              }`}
            >
              <div className="flex flex-row items-center gap-[6px]">
                <CreditCard className={`w-5 h-5 ${activeMenu === 'cards' ? 'text-[#2F54D8]' : 'text-[#4E4E55]'}`} strokeWidth={1.5} />
                <span className={`font-medium text-[14px] leading-[20px] tracking-[-0.01em] ${activeMenu === 'cards' ? 'text-[#2F54D8]' : 'text-[#4E4E55]'}`}>
                  Cards
                </span>
              </div>
            </button>

            {/* Integration */}
            <button
              onClick={() => {
                setActiveMenu('integration');
                onClose();
              }}
              className={`flex flex-row justify-between items-center px-[6px] py-[6px] gap-[6px] w-full h-[32px] rounded-[6px] cursor-pointer transition-colors ${
                activeMenu === 'integration' ? 'bg-[rgba(47,84,216,0.1)]' : 'bg-[rgba(39,39,42,0.0001)] hover:bg-gray-100'
              }`}
            >
              <div className="flex flex-row items-center gap-[6px]">
                <svg className={`w-5 h-5 ${activeMenu === 'integration' ? 'text-[#2F54D8]' : 'text-[#4E4E55]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                <span className={`font-medium text-[14px] leading-[20px] tracking-[-0.01em] ${activeMenu === 'integration' ? 'text-[#2F54D8]' : 'text-[#4E4E55]'}`}>
                  Integration
                </span>
              </div>
            </button>

            {/* Settings - ACTIVE */}
            <button
              onClick={() => {
                setActiveMenu('settings');
                onClose();
              }}
              className={`flex flex-row justify-between items-center px-[6px] py-[6px] gap-[6px] w-full h-[32px] rounded-[6px] cursor-pointer transition-colors ${
                activeMenu === 'settings' ? 'bg-[rgba(47,84,216,0.1)]' : 'bg-[rgba(39,39,42,0.0001)] hover:bg-gray-100'
              }`}
            >
              <div className="flex flex-row items-center gap-[6px]">
                <Settings className={`w-5 h-5 ${activeMenu === 'settings' ? 'text-[#2F54D8]' : 'text-[#4E4E55]'}`} strokeWidth={1.5} />
                <span className={`font-medium text-[14px] leading-[20px] tracking-[-0.01em] ${activeMenu === 'settings' ? 'text-[#2F54D8]' : 'text-[#4E4E55]'}`}>
                  Settings
                </span>
              </div>
              <div className="flex flex-row items-center gap-[6px]">
                <div className="flex flex-row justify-center items-center p-[2px] w-[18px] h-[20px] bg-[#F8B12D] border border-[rgba(39,39,42,0.1)] rounded-[9999px]">
                  <span className="font-medium text-[12px] leading-[16px] tracking-[-0.01em] text-white">
                    !
                  </span>
                </div>
                <ChevronRight className={`w-5 h-5 ${activeMenu === 'settings' ? 'text-[#2F54D8]' : 'text-[#A1A1A9]'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Upgrade Card - Bottom */}
        <div className="hidden lg:flex flex-col items-start p-[12px] gap-[8px] w-full h-[209px] flex-none order-3 self-stretch z-[1]">
          <div className="relative w-full h-[145px] rounded-[10px]">
            <div className="absolute w-full h-[142px] left-0 top-0 flex flex-col items-start p-[12px] gap-[10px] border border-[#2F54D8] rounded-[10px] bg-white">
              <p className="w-full font-normal text-[14px] leading-[20px] tracking-[-0.01em] text-[#575757]">
                You're currently on the Starter plan. Upgrade to access lower fees, advanced features.
              </p>
              <button className="flex flex-row justify-center items-center px-[8px] py-[4px] gap-[4px] w-full h-[28px] bg-white border border-[rgba(39,39,42,0.15)] shadow-[0px_1px_2px_rgba(0,0,0,0.05),inset_0px_-1px_0px_rgba(0,0,0,0.08)] rounded-[6px] cursor-pointer hover:bg-gray-50 transition-colors">
                <span className="font-medium text-[14px] leading-[20px] tracking-[-0.01em] text-[#111115]">
                  Upgrade
                </span>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
