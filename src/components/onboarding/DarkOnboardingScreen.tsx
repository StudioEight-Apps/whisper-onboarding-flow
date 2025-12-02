import { ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PaginationDots } from './PaginationDots';

interface DarkOnboardingScreenProps {
  heading: string;
  body: string;
  mockup: ReactNode;
  currentScreen: number;
  totalScreens: number;
  buttonStyle?: 'full' | 'arrow';
  onNext: () => void;
  onBack: () => void;
}

export const DarkOnboardingScreen = ({
  heading,
  body,
  mockup,
  currentScreen,
  totalScreens,
  buttonStyle = 'full',
  onNext,
  onBack,
}: DarkOnboardingScreenProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-background-dark">
      {/* Back button */}
      <div className="px-6 pt-14">
        <button 
          onClick={onBack}
          className="flex h-10 w-10 items-center justify-center text-brand-purple transition-opacity hover:opacity-70"
        >
          <ChevronLeft className="h-7 w-7" />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-6 pt-4">
        <div className="max-w-[360px]">
          <h1 className="font-serif text-[26px] font-semibold leading-tight tracking-tight text-primary-foreground">
            {heading}
          </h1>
          <p className="mt-3 font-sans text-[16px] leading-relaxed text-primary-foreground/70">
            {body}
          </p>
        </div>

        {/* Mockup */}
        <div className="flex flex-1 items-center justify-center py-8">
          {mockup}
        </div>
      </div>

      {/* Bottom */}
      <div className="px-6 pb-10">
        {buttonStyle === 'arrow' ? (
          <div className="mb-6 flex justify-end">
            <button
              onClick={onNext}
              className="flex items-center gap-1 font-sans text-[16px] font-medium text-primary-foreground transition-opacity hover:opacity-70"
            >
              Continue
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        ) : (
          <button
            onClick={onNext}
            className="mb-6 w-full rounded-full bg-primary-foreground py-4 font-sans text-[16px] font-medium text-background-dark transition-opacity hover:opacity-90"
          >
            Continue
          </button>
        )}
        
        <div className="flex justify-center">
          <PaginationDots total={totalScreens} current={currentScreen} isDark />
        </div>
      </div>
    </div>
  );
};
