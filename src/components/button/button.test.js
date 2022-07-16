import { expect, fixture, oneEvent } from "@open-wc/testing";
import { html } from "lit";
import { stub } from "sinon";
import "./index";

describe("button", () => {
  it("should render default props", async () => {
    const element = await fixture(html`<dsc-button>Label testing</dsc-button>`);
    await expect(element.disabled).to.equal(false);
    await expect(element.loading).to.equal(false);
  });

  it("should set loading to true in loading state", async () => {
    const element = await fixture(
      html`<dsc-button loading>Label testing</dsc-button>`
    );
    await expect(element.loading).to.equal(true);
    await expect(
      element.shadowRoot
        .querySelector("button")
        .classList.contains("button--loading")
    ).to.equal(true);
  });

  it("should call method when button is clicked", async () => {
    const element = await fixture(
      html`<dsc-button loading>Label testing</dsc-button>`
    );
    const handleClick = stub(element, "_handleClick");
    element.requestUpdate();
    await element.updateComplete;
    element.shadowRoot.querySelector("button").click();
    expect(handleClick).to.have.been.called;
  });

  it("should call dscClick when button is clicked", async () => {
    const element = await fixture(
      html`<dsc-button loading>Label testing</dsc-button>`
    );
    const listener = oneEvent(element, "dscClick");
    element.shadowRoot.querySelector("button").click();
    expect(await listener).to.not.be.empty;
  });
});
