import { IPhoneMockup } from './IPhoneMockup';
import widgetBgAmberforest from '@/assets/widget-bg-amberforest.png';

export const LockScreenWidget = () => {
  return (
    <IPhoneMockup>
      <div className="relative h-[560px] bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a]">
        {/* Lock screen time */}
        <div className="flex flex-col items-center pt-16">
          <span className="text-[72px] font-light leading-none tracking-tight text-white">9:41</span>
          <span className="mt-1 text-sm font-medium text-white/70">Monday, December 2</span>
        </div>

        {/* Whisper Widget */}
        <div className="mt-8 px-6">
          <div 
            className="overflow-hidden rounded-2xl p-4"
            style={{ 
              backgroundImage: `url(${widgetBgAmberforest})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <span className="mb-1 block font-sans text-[10px] font-medium uppercase tracking-wider text-white/80">Whisper</span>
            <p className="font-serif text-[15px] font-medium leading-snug text-white">
              Your vision is real; keep moving one step at a time.
            </p>
          </div>
        </div>

        {/* Lock screen indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="h-1 w-32 rounded-full bg-white/30" />
        </div>
      </div>
    </IPhoneMockup>
  );
};
