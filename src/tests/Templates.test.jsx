import { render, screen } from '@testing-library/react';
// import App from '../App';
import Templates from '../features/templates/Templates';

it('Test if the title of the page is correct', () => {
  render(<Templates />);
  const title = screen.getByTitle('FormPl.us React Tailwind Test');
  expect(title).toBeInTheDocument();
});
