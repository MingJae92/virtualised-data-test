import { describe,  vi, expect } from "vitest";


import { render, screen, waitFor } from "@testing-library/react";
import Virtualiseddata from "../component/Virtualiseddata";
import axios from "axios";

vi.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Virtualised data component", () => {
  const mockProducts = [
    { id: 1, description: "Product A" },
    { id: 2, description: "Product B" },
  ];

  it("Display product after successful fetch", async () => {
    mockedAxios.get.mockImplementation(() =>
      Promise.resolve({ data: mockProducts })
    );

    render(<Virtualiseddata/>)

    await waitFor(()=>{
      expect(screen.getByText("Product A")).toBeInTheDocument()
      expect(screen.getByText("Product B")).toBeInTheDocument()
    })
  });
});


