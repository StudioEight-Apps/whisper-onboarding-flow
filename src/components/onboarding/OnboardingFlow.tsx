import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { OnboardingScreen } from './OnboardingScreen';
import { DarkOnboardingScreen } from './DarkOnboardingScreen';
import { HomeScreenWidget } from './HomeScreenWidget';
import { LockScreenWidget } from './LockScreenWidget';

import bg1 from '@/assets/bg1-cream-scribble.png';
import bg2 from '@/assets/bg2-cream-scribble-dense.png';
import bg3 from '@/assets/bg3-cream-scribble-diagonal.png';
import bg4 from '@/assets/bg4-cream-scribble-plane.png';

const TOTAL_SCREENS = 6;

const lightScreens = [
  {
    heading: "Your thoughts were meant to pass through, not live inside you.",
    body: "Give your mind space to breathe, your journal can hold the rest.",
    backgroundImage: bg1,
    buttonText: "Continue ›",
    buttonPosition: 'right' as const,
  },
  {
    heading: "Your inner voice can be harsh.",
    body: "Whisper helps you replace harsh thoughts with better ones, with positive guidance throughout the day.",
    backgroundImage: bg2,
    buttonText: "Continue ›",
    buttonPosition: 'right' as const,
  },
  {
    heading: "A smarter way to journal. It listens and it responds.",
    body: "Whisper learns from what you write and talks back through guidance on your widgets.",
    backgroundImage: bg3,
    buttonText: "Continue ›",
    buttonPosition: 'right' as const,
  },
  {
    heading: "Begin your journaling journey.",
    body: "Start your first reflection and let Whisper begin sending mantras to guide you.",
    backgroundImage: bg4,
    buttonText: "Start Journaling",
    buttonPosition: 'center' as const,
  },
];

const darkScreens = [
  {
    heading: "Add our smart widget to your home screen",
    body: "On your Home Screen, press and hold a blank space, then tap the + icon.",
    mockup: <HomeScreenWidget />,
  },
  {
    heading: "Receive whispers without needing to unlock your phone",
    body: "Set up widgets to display them on your phone's Lock Screen.",
    mockup: <LockScreenWidget />,
  },
];

export const OnboardingFlow = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    watchDrag: true,
    loop: false,
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  }, [emblaApi]);

  const handleNext = useCallback(() => {
    if (currentIndex < TOTAL_SCREENS - 1) {
      scrollTo(currentIndex + 1);
    } else {
      console.log('Onboarding complete - navigate to signup');
    }
  }, [currentIndex, scrollTo]);

  const handleBack = useCallback(() => {
    if (currentIndex > 0) {
      scrollTo(currentIndex - 1);
    }
  }, [currentIndex, scrollTo]);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on('select', onSelect);
    onSelect();
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="h-full" ref={emblaRef}>
        <div className="flex h-full">
          {lightScreens.map((screen, index) => (
            <div key={index} className="min-w-0 flex-[0_0_100%]">
              <OnboardingScreen
                {...screen}
                currentScreen={index}
                totalScreens={TOTAL_SCREENS}
                onNext={handleNext}
              />
            </div>
          ))}
          
          {darkScreens.map((screen, index) => (
            <div key={index + 4} className="min-w-0 flex-[0_0_100%]">
              <DarkOnboardingScreen
                {...screen}
                currentScreen={index + 4}
                totalScreens={TOTAL_SCREENS}
                onNext={handleNext}
                onBack={handleBack}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
