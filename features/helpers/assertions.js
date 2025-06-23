import { expect } from 'chai';
import { elementGetText, elementIsDisplayed, elementIsClickable } from './element-action-utils.js';

export const assertBrowserUrl = async (text) => {
  await browser.pause(2000); //to handle for expect not directly check when page loaded
  expect(await browser.getUrl()).to.include(text);
};

export const assertElementText = async (element , text) => {
  expect(await elementGetText(element)).equal(text);
};

export const assertIncludeText = async (element , text) => {
  expect(await elementGetText(element)).include(text);
};

export const assertElementIsDisplayed = async (element) => {
  expect(await elementIsDisplayed(element)).to.be.true;
};

export const assertElementIsNotDisplayed = async (element) => {
  expect(await elementIsDisplayed(element)).to.be.false;
};

export const assertElementIsNotClickable = async (element) => {
  expect(await elementIsClickable(element)).to.be.false;
};

export const assertElementIsClickable = async (element) => {
  expect(await elementIsClickable(element)).to.be.true;
};
