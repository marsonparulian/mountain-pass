/// DashboardPage tests
import React from "react";
import { render, screen } from "@testing-library/react";
import DashboardPage from "./DashboardPage";

describe("Dashboard page showing initial Service Form (modal)", () => {
    beforeEach(() => {
        render(<DashboardPage showServiceForm={true} />);
    })
    test("Should have few `Add Service` button", () => {
        // 5 `Add Service`. 1 button in top panel, 2 buttons in service list, 1 header & 1 button in Service form.
        expect(screen.getAllByText("Add Service")).toHaveLength(5);
    })
    test("Should  have input and label from `name`", () => {
        expect(screen.getByLabelText("Name")).toBeInTheDocument();
    });
})
