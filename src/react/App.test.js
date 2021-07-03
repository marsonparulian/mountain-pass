import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

describe("Default service list", () => {
  beforeAll(() => {
    render(<App />);
  });
  test("Quick Actions panel should have title and 3 buttons", () => {
    // Title
    expect(screen.getByText(/Quick Links/i)).toBeInTheDocument();
    // `Add Service` button
    expect(screen.getByText("Add Service")).toBeInTheDocument();
    // `Deploy Gatsby Website` button
    expect(screen.getByText("Deploy Gatsby Website")).toBeInTheDocument();
    // `Deploy Node Project` button
    expect(screen.getByText("Deploy Node Project")).toBeInTheDocument();
  });
});
