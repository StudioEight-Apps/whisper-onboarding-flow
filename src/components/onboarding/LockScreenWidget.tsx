import { IPhoneMockup } from './IPhoneMockup';
import lockscreenWallpaper from '@/assets/lockscreen-wallpaper.png';

export const LockScreenWidget = () => {
  return (
    <IPhoneMockup fadeBottom>
      <div 
        className="relative h-[560px]"
        style={{ 
          backgroundImage: `url(${lockscreenWallpaper})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Date header */}
        <div className="flex items-center justify-center pt-10">
          <span className="text-[13px] font-medium text-white/90">Monday, November 11th</span>
        </div>

        {/* Lock screen time */}
        <div className="flex flex-col items-center pt-1">
          <span className="text-[72px] font-light leading-none tracking-tight text-white">9:41</span>
        </div>

        {/* Single widget below time */}
        <div className="mt-4 flex justify-center px-6">
          <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3">
            <p className="text-center text-[11px] leading-tight text-white/90">
              Bad day or<br />bad moment?
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
