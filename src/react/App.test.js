import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

describe("Default service list", () => {
  beforeEach(() => {
    render(<App />);
  });
  test("Quick Actions panel should have title and 3 buttons", () => {
    // Title
    expect(screen.getByText(/Quick Links/i)).toBeInTheDocument();
    // `Add Service` buttons will be tested on next test.

    // `Deploy Gatsby Website` button
    expect(screen.getByText("Deploy Gatsby Website")).toBeInTheDocument();
    // `Deploy Node Project` button
    expect(screen.getByText("Deploy Node Project")).toBeInTheDocument();
  });
  test("Should be 3 `Add Service` buttons (modal is closed)", () => {
    // Note: Since the modal containing Service Form is closed, this test exclude the content of the modal.
    
    const buttons = screen.getAllByText("Add Service");
    expect(buttons.length).toEqual(3);
  });
});

describe("Showing default Service Form in modal", () => {

})
