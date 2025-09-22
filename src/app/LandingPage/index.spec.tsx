import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import LandingPage from '@/app/LandingPage';

describe('LandingPage', () => {
  it('renders without crashing', () => {
    const { container } = render(<LandingPage />);
    expect(container).toMatchSnapshot();
  });
});
