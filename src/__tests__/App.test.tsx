import { describe, it, expect } from "@rstest/core";
import { render, screen } from "@testing-library/react";
import { App } from "../app/App";

describe("App component", () => {
    it("renders headin and image", () => {
        render(<App />);
        expect(screen.getByText("Quattro Auspicious Beasts"))
            .toBeTruthy();
        const img = screen.getByAltText("Quattro Auspicious Beasts");
        expect(img).toBeTruthy();
        expect(img.getAttribute("src")).toBeTruthy();
    });
});


