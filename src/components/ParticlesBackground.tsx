import { memo, useMemo, forwardRef } from 'react';
import Particles from '@tsparticles/react';
import type { Container as ParticlesContainer } from '@tsparticles/engine';
import { PARTICLES_CONFIG } from '../constants';

interface ParticlesBackgroundProps {
  onLoaded?: (container: ParticlesContainer | undefined) => void;
}

const ParticlesBackground = memo(
  forwardRef<HTMLDivElement, ParticlesBackgroundProps>(({ onLoaded }, ref) => {
    const particlesLoaded = useMemo(
      () => (container: ParticlesContainer | undefined): void => {
        onLoaded?.(container);
      },
      [onLoaded]
    );

    // Memoize style objects to prevent re-renders
    const containerStyle = useMemo(
      () => ({
        position: 'fixed' as const,
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: -1,
        opacity: 1,
      }),
      []
    );

    const particlesStyle = useMemo(
      () => ({
        width: '100%',
        height: '100%',
      }),
      []
    );

    return (
      <div ref={ref} style={containerStyle}>
        <Particles
          id="tsparticles"
          loaded={particlesLoaded}
          options={PARTICLES_CONFIG}
          style={particlesStyle}
        />
      </div>
    );
  }),
  // Never re-render - component is completely static
  () => true
);

ParticlesBackground.displayName = 'ParticlesBackground';

export default ParticlesBackground;
