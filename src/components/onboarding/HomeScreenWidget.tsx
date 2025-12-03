import { IPhoneMockup } from './IPhoneMockup';
import widgetBgDeepreds from '@/assets/widget-bg-deepreds.png';
import widgetBgAmberforest from '@/assets/widget-bg-amberforest.png';
import widgetBgForest from '@/assets/widget-bg-forest.png';
import homescreenWallpaper from '@/assets/homescreen-wallpaper-gradient.png';
import whisperWidgetLogo from '@/assets/whisper-widget-logo.png';

export const HomeScreenWidget = () => {
  return (
    <IPhoneMockup fadeBottom>
      <div 
        className="relative h-[560px]"
        style={{ 
          backgroundImage: `url(${homescreenWallpaper})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Status bar - time only */}
        <div className="flex h-12 items-center justify-center px-6 pt-2">
          <span className="text-xs font-medium text-white">9:41</span>
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
            className="flex flex-col items-center justify-center overflow-hidden rounded-2xl p-4 text-center"
            style={{ 
              backgroundImage: `url(${widgetBgDeepreds})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '100px'
            }}
          >
            <img src={whisperWidgetLogo} alt="Whisper" className="mb-2 h-3 w-auto opacity-80" />
            <p className="font-serif text-[14px] font-medium leading-snug text-white">
              You have yet to meet everyone who is going to love you in this life.
            </p>
          </div>

          {/* Small Widgets Row - Square */}
          <div className="flex gap-3">
            <div 
              className="flex aspect-square flex-1 flex-col items-center justify-center overflow-hidden rounded-2xl p-3 text-center"
              style={{ 
                backgroundImage: `url(${widgetBgForest})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <img src={whisperWidgetLogo} alt="Whisper" className="mb-1 h-2.5 w-auto opacity-80" />
              <p className="font-serif text-[10px] font-medium leading-tight text-white">
                Create more than you consume.
              </p>
            </div>
            <div 
              className="flex aspect-square flex-1 flex-col items-center justify-center overflow-hidden rounded-2xl p-3 text-center"
              style={{ 
                backgroundImage: `url(${widgetBgAmberforest})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <img src={whisperWidgetLogo} alt="Whisper" className="mb-1 h-2.5 w-auto opacity-80" />
              <p className="font-serif text-[10px] font-medium leading-tight text-white">
                Do not give bad thoughts room to stick around.
              </p>
            </div>
          </div>
        </div>
      </div>
    </IPhoneMockup>
  );
};
