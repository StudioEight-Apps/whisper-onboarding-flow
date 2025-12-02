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
    <div className="relative flex min-h-screen flex-col bg-background-dark">
      {/* Back button */}
      <div className="px-6 pt-8">
        <button 
          onClick={onBack}
          className="flex h-10 w-10 items-center justify-center text-brand-purple transition-opacity hover:opacity-70"
        >
          <ChevronLeft className="h-7 w-7" />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-6 pt-2">
        <div className="max-w-[360px]">
          <h1 className="font-serif text-[21px] font-semibold leading-tight tracking-tight text-primary-foreground">
            {heading}
          </h1>
          <p className="mt-2 font-sans text-[13px] leading-relaxed text-primary-foreground/70">
            {body}
          </p>
        </div>

        {/* Mockup */}
        <div className="flex flex-1 items-center justify-center py-4">
          {mockup}
        </div>
      </div>

      {/* Arrow button - absolute bottom right */}
      {buttonStyle === 'arrow' && (
        <button
          onClick={onNext}
          className="absolute bottom-32 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple transition-opacity hover:opacity-80"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      )}

      {/* Full width button */}
      {buttonStyle === 'full' && (
        <div className="px-6 pb-10">
          <button
            onClick={onNext}
            className="mb-6 w-full rounded-full bg-primary-foreground py-4 font-sans text-[16px] font-medium text-background-dark transition-opacity hover:opacity-90"
          >
            Continue
          </button>
        </div>
      )}

      {/* Pagination dots */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <PaginationDots total={totalScreens} current={currentScreen} isDark />
      </div>
    </div>
  );
};
