import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PrimarySection from '@/app/LandingPage/PrimarySection';

describe('PrimarySection', () => {
  it('renders without crashing', () => {
    const { container } = render(<PrimarySection />);
    expect(container).toMatchSnapshot();
  });
});
