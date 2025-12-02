import { ReactNode } from 'react';
import whisperLogo from '@/assets/whisper-logo.svg';
import { PaginationDots } from './PaginationDots';

interface OnboardingScreenProps {
  heading: string;
  body: string;
  backgroundImage: string;
  buttonText: string;
  buttonPosition?: 'right' | 'center';
  currentScreen: number;
  totalScreens: number;
  onNext: () => void;
}

export const OnboardingScreen = ({
  heading,
  body,
  backgroundImage,
  buttonText,
  buttonPosition = 'right',
  currentScreen,
  totalScreens,
  onNext,
}: OnboardingScreenProps) => {
  return (
    <div 
      className="relative flex min-h-screen flex-col bg-background bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Logo */}
      <div className="flex justify-center pt-[60px]">
        <img 
          src={whisperLogo} 
          alt="Whisper" 
          className="h-7"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col items-center justify-center px-8">
        <div className="max-w-[360px] text-center" style={{ marginTop: '-10%' }}>
          <h1 className="font-serif text-[30px] font-medium leading-tight tracking-tight text-foreground">
            {heading}
          </h1>
          <p className="mt-3.5 font-sans text-[17px] leading-relaxed text-foreground/85">
            {body}
          </p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 px-6 pb-10">
        <div className="flex items-end justify-between">
          {/* Pagination */}
          <div className="flex-1">
            <PaginationDots total={totalScreens} current={currentScreen} />
          </div>
          
          {/* Button */}
          {buttonPosition === 'right' ? (
            <button
              onClick={onNext}
              className="font-sans text-[16px] font-medium text-foreground transition-opacity hover:opacity-70"
            >
              {buttonText}
            </button>
          ) : (
            <div className="flex-1" />
          )}
        </div>
        
        {/* Centered button for screen 4 */}
        {buttonPosition === 'center' && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={onNext}
              className="rounded-full bg-foreground px-8 py-3.5 font-sans text-[16px] font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
