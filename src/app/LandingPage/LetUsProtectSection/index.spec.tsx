import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import LetUsProtectSection from '@/app/LandingPage/LetUsProtectSection';

describe('LetUsProtectSection', () => {
  it('renders without crashing', () => {
    const { container } = render(<LetUsProtectSection />);
    expect(container).toMatchSnapshot();
  });
});
