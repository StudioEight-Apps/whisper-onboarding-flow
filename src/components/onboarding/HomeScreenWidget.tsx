import { ChevronRight } from 'lucide-react';
import { IPhoneMockup } from './IPhoneMockup';
import widgetBgDeepreds from '@/assets/widget-bg-deepreds.png';
import widgetBgAmberforest from '@/assets/widget-bg-amberforest.png';
import widgetBgForest from '@/assets/widget-bg-forest.png';
import homescreenWallpaper from '@/assets/homescreen-wallpaper.webp';
import whisperWidgetLogo from '@/assets/whisper-widget-logo.png';

export const HomeScreenWidget = () => {
  return (
    <IPhoneMockup>
      <div 
        className="relative h-[560px]"
        style={{ 
          backgroundImage: `url(${homescreenWallpaper})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Status bar */}
        <div className="flex h-12 items-center justify-between px-6 pt-2">
          <div className="flex items-center gap-1">
            <span className="text-xs font-medium text-white">9:41</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex gap-0.5">
              <div className="h-2.5 w-0.5 rounded-full bg-white" />
              <div className="h-3 w-0.5 rounded-full bg-white" />
              <div className="h-3.5 w-0.5 rounded-full bg-white" />
              <div className="h-4 w-0.5 rounded-full bg-white" />
            </div>
            <div className="ml-1 h-3 w-6 rounded-sm border border-white">
              <div className="m-0.5 h-2 w-4 rounded-sm bg-white" />
            </div>
          </div>
        </div>
        
        {/* Edit mode header */}
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            <span className="text-lg leading-none text-white">+</span>
          </div>
          <span className="text-sm font-medium text-white/70">Done</span>
        </div>

        {/* Widgets */}
        <div className="space-y-3 px-4 pt-2">
          {/* Large Widget */}
          <div 
            className="relative overflow-hidden rounded-2xl p-4 text-center"
            style={{ 
              backgroundImage: `url(${widgetBgDeepreds})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <img src={whisperWidgetLogo} alt="Whisper" className="mx-auto mb-2 h-4 w-auto opacity-80" />
            <p className="font-serif text-[15px] font-medium leading-snug text-white">
              You have yet to meet everyone who is going to love you in this life.
            </p>
          </div>

          {/* Small Widgets Row */}
          <div className="flex gap-3">
            <div 
              className="flex-1 overflow-hidden rounded-2xl p-3 text-center"
              style={{ 
                backgroundImage: `url(${widgetBgForest})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <img src={whisperWidgetLogo} alt="Whisper" className="mx-auto mb-1 h-3 w-auto opacity-80" />
              <p className="font-serif text-[11px] font-medium leading-tight text-white">
                Create more than you consume.
              </p>
            </div>
            <div 
              className="flex-1 overflow-hidden rounded-2xl p-3 text-center"
              style={{ 
                backgroundImage: `url(${widgetBgAmberforest})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <img src={whisperWidgetLogo} alt="Whisper" className="mx-auto mb-1 h-3 w-auto opacity-80" />
              <p className="font-serif text-[11px] font-medium leading-tight text-white">
                Do not give bad thoughts room to stick around.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom fade and arrow */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent">
          <div className="absolute bottom-4 right-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-purple">
              <ChevronRight className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </IPhoneMockup>
  );
};
