import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'

describe('Testa a aplicação por completo', () => {
  it('Verifica se a palavra carregando aparece na tela no início da aplicação', () => {
    render(<App />);

    const loading = screen.getByText(/carregando/i);
    
    expect(loading).toBeInTheDocument();
  });

  it('Verifica se o jogo com o texto Minecraft é renderizado na tela após a saída do carregando', async () => {
    render(<App />);
    const loading = screen.getByText(/carregando/i);
    await waitForElementToBeRemoved(loading);

    const gameToBeOnScreen = screen.getAllByText(/minecraft/i);

    expect(gameToBeOnScreen[0]).toBeInTheDocument();
  })

  it('Verifica se a tela de detalhes exibe as informações Release Year e Sales, do jogo correspondente', async () => {
    render(<App />);
    const loading = screen.getByText(/carregando/i);
    await waitForElementToBeRemoved(loading);
    const allLinksToDetails = screen.getAllByRole('link', { name: /Ver Detalhes/i});
    userEvent.click(allLinksToDetails[1]);
    const loading2 = screen.getByText(/carregando/i);
    await waitForElementToBeRemoved(loading2);
    // screen.logTestingPlaygroundURL();
    const releaseYear = screen.queryByText(/Release Year: 2013/i);
    const sales = screen.queryByText(/Sales: 115.000.000/i);

    expect(releaseYear).toBeInTheDocument();
    expect(sales).toBeInTheDocument();
  })
});