import { describe, vi, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import Virtualiseddata from "../component/Virtualiseddata";
import axios from "axios";

vi.mock("axios");

const mockedAxios = axios as unknown as {
  get: jest.Mock;
};

describe("Virtualised data component", () => {
  const mockProducts = [
    { id: 1, description: "Product A" },
    { id: 2, description: "Product B" },
  ];

  it("Displays products after successful fetch", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockProducts });

    render(<Virtualiseddata />);

    await waitFor(() => {
      expect(screen.getByText("Product A")).toBeInTheDocument();
      expect(screen.getByText("Product B")).toBeInTheDocument();
    });
  });

  it("Shows error message when fetch fails", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("Server error"));

    render(<Virtualiseddata />);

    await waitFor(() => {
      expect(
        screen.getByText(/error loading server data/i)
      ).toBeInTheDocument();
    });
  });
});
