import { ReactNode } from 'react';

interface IPhoneMockupProps {
  children: ReactNode;
}

export const IPhoneMockup = ({ children }: IPhoneMockupProps) => {
  return (
    <div className="relative mx-auto w-[280px]">
      {/* iPhone Frame */}
      <div className="relative rounded-[50px] border-[10px] border-[#1a1a1a] bg-[#1a1a1a] shadow-2xl">
        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-3 z-20 h-[28px] w-[100px] -translate-x-1/2 rounded-full bg-black" />
        
        {/* Chrome edge effect */}
        <div className="absolute inset-0 rounded-[40px] ring-1 ring-inset ring-white/20" />
        
        {/* Screen */}
        <div className="relative overflow-hidden rounded-[40px] bg-background">
          {children}
        </div>
      </div>
    </div>
  );
};
