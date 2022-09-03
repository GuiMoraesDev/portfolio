import React from "react";

import { render } from "tests/test.utils";

import Text from "./index";

describe("Text component", () => {
  it("should render correctly", () => {
    const { container } = render(<Text id="test-Text" label="test-Text" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render visible", () => {
    const { container } = render(<Text id="test-Text" label="test-Text" />);

    expect(container.firstChild).toBeVisible();
  });
});
