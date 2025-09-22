import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CaseStudySection from '@/app/LandingPage/CaseStudySection/index.tsx';

describe('CaseStudySection', () => {
  it('renders without crashing', () => {
    const { container } = render(<CaseStudySection />);
    expect(container).toMatchSnapshot();
  });
});
