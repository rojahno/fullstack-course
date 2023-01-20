import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HelloWorld from "../HelloWorld.vue";

describe("Test title", () => {
  it("renders properly", () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: "IDATT2105 Fullstack" },
    });
    expect(wrapper.text()).toContain("IDATT2105 Fullstack");
  });
});
