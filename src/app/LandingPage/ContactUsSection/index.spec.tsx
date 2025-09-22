import { MockedProvider } from '@apollo/client/testing/react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ContactUsSection from '@/app/LandingPage/ContactUsSection';

describe('ContactUsSection', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <MockedProvider>
        <ContactUsSection />
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
