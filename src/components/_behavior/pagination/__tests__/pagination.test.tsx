import { render, screen, fireEvent } from "@testing-library/react";
import { Pagination } from "..";
import usePagination from "@/src/components/_behavior/pagination/usePagination";

jest.mock("@/src/components/_behavior/pagination/usePagination", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    currentItems: ["A", "B"],
    currentPage: 1,
    nextPage: jest.fn(),
    prevPage: jest.fn(),
    setCurrentPage: jest.fn(),
    pages: [1, 2, 3],
    totalPages: 3,
  })),
}));

describe("Pagination Component", () => {
  
  it("deve renderizar items usando o render()", () => {
    render(
      <Pagination
        data={[]}
        render={(items) => <div data-testid="items">{items.join(",")}</div>}
      />
    );

    expect(screen.getByTestId("items")).toHaveTextContent("A,B");
  });

  it("deve renderizar todos os botões de página", () => {
    render(<Pagination data={[]} render={() => <div />} />);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("deve chamar setCurrentPage quando clicar em uma página", () => {
    const mockSetCurrentPage = jest.fn();

    // sobrescreve o mock apenas para este teste
    (usePagination as jest.Mock).mockReturnValueOnce({
      currentItems: [],
      currentPage: 1,
      nextPage: jest.fn(),
      prevPage: jest.fn(),
      setCurrentPage: mockSetCurrentPage,
      pages: [1, 2, 3],
      totalPages: 3,
    });

    render(<Pagination data={[]} render={() => <div />} />);

    fireEvent.click(screen.getByText("2"));
    expect(mockSetCurrentPage).toHaveBeenCalledWith(2);
  });

  it("deve chamar nextPage ao clicar no botão de avançar", () => {
    const mockNext = jest.fn();

    (usePagination as jest.Mock).mockReturnValueOnce({
      currentItems: [],
      currentPage: 1,
      nextPage: mockNext,
      prevPage: jest.fn(),
      setCurrentPage: jest.fn(),
      pages: [1, 2, 3],
      totalPages: 3,
    });

    render(<Pagination data={[]} render={() => <div />} />);

    const buttons = screen.getAllByRole("button");
    const nextButton = buttons[buttons.length - 1];

    fireEvent.click(nextButton);
    expect(mockNext).toHaveBeenCalled();
  });

  it("deve chamar prevPage ao clicar no botão de voltar", () => {
    const mockPrev = jest.fn();

    (usePagination as jest.Mock).mockReturnValueOnce({
      currentItems: [],
      currentPage: 2,
      nextPage: jest.fn(),
      prevPage: mockPrev,
      setCurrentPage: jest.fn(),
      pages: [1, 2, 3],
      totalPages: 3,
    });

    render(<Pagination data={[]} render={() => <div />} />);

    const prevButton = screen.getAllByRole("button")[0];
    fireEvent.click(prevButton);

    expect(mockPrev).toHaveBeenCalled();
  });
});
