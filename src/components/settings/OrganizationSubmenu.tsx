'use client';

import { 
  Building2, 
  FileBadge, 
  CreditCard, 
  Users, 
  Receipt,
  ShieldCheck,
  Coins,
  ChevronRight 
} from 'lucide-react';

interface OrganizationSubmenuProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function OrganizationSubmenu({ activeSection, onSectionChange }: OrganizationSubmenuProps) {
  const menuItems = [
    { id: 'organization-info', label: 'Organization information', icon: Building2 },
    { id: 'kyc-verification', label: 'KYC/KYB Verification', icon: FileBadge },
    { id: 'billing-plan', label: 'Billing & Plan', icon: CreditCard },
    { id: 'subscription', label: 'Subscription', icon: Users },
    { id: 'payment-history', label: 'Payment history', icon: Receipt },
    { id: 'rate-permissions', label: 'Rate & Permissions', icon: ShieldCheck },
    { id: 'currency', label: 'Currency', icon: Coins },
  ];

  return (
    <aside className="
      w-full lg:w-[256px]
      h-auto lg:h-[292px]
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
        const isActive = activeSection === item.id;
        
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSectionChange(item.id)}
            className={`
              w-full lg:w-[236px]
              h-[32px]
              flex items-center
              gap-[6px]
              rounded-[6px]
              p-[6px]
              text-left
              transition-colors
              ${isActive 
                ? 'bg-[rgba(101,160,253,0.1)]' 
                : 'bg-[rgba(39,39,42,0.0001)] hover:bg-[rgba(39,39,42,0.06)]'
              }
            `}
          >
            <Icon 
              className={`h-[20px] w-[20px] ${isActive ? 'text-[#2F54D8]' : 'text-[#A1A1A9]'}`} 
              strokeWidth={1.7} 
            />
            <div className="
              flex-1 
              flex items-center
              px-[4px]
              h-[20px]
            ">
              <span className={`
                text-[14px] font-medium 
                leading-[20px] tracking-[-0.01em] 
                ${isActive ? 'text-[#2F54D8]' : 'text-[#4E4E55]'}
              `}>
                {item.label}
              </span>
            </div>
            {isActive && (
              <div className="
                flex items-center justify-center
                w-[20px] h-[20px]
              ">
                <ChevronRight 
                  className="h-[16px] w-[16px] -rotate-90 text-[#2F54D8]" 
                  strokeWidth={1.8} 
                />
              </div>
            )}
          </button>
        );
      })}
    </aside>
  );
}
