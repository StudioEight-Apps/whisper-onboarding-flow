import { IPhoneMockup } from './IPhoneMockup';

export const LockScreenWidget = () => {
  return (
    <IPhoneMockup fadeBottom>
      <div className="relative h-[560px] bg-[#0a0a0a]">
        {/* Date header with app name */}
        <div className="flex items-center justify-center gap-2 pt-10">
          <span className="rounded-full border border-white/20 px-3 py-1 text-[11px] text-white/70">Mon 2</span>
          <span className="text-[11px] font-medium text-white/90">Your Whispers</span>
        </div>

        {/* Lock screen time */}
        <div className="flex flex-col items-center pt-2">
          <span className="text-[72px] font-light leading-none tracking-tight text-white/60">9:41</span>
        </div>

        {/* Widget placeholders below time */}
        <div className="mt-4 flex justify-center gap-3 px-6">
          <div className="flex-1 rounded-2xl border border-white/20 bg-white/5 px-3 py-3">
            <p className="text-center text-[11px] leading-tight text-white/70">
              Your whisper<br />will go here
            </p>
          </div>
          <div className="flex-1 rounded-2xl border border-white/20 bg-white/5 px-3 py-3">
            <p className="text-center text-[11px] leading-tight text-white/70">
              Your whisper<br />will go here
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
