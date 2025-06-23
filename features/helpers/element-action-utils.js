export const elementWaitForDisplayed = async (element, waitingTime) => {
  if (waitingTime === undefined) {
    waitingTime = 40000;
  }
  await element.waitForDisplayed({ timeout: waitingTime });
};

export const elementWaitForClickable = async (element, waitingTime) => {
  if (waitingTime === undefined) {
    waitingTime = 40000;
  }
  await element.waitForClickable({ timeout: waitingTime });
};

export const elementScrollIntoClick = async (element) => {
  await element.waitForExist();
  await element.scrollIntoView({ block: 'center', inline: 'nearest' });
  await element.click();
};

export const elementScrollIntoView = async (element) => {
  await element.waitForExist();
  await element.scrollIntoView({ block: 'center', inline: 'nearest' });
};

export const elementWaitForDisplayedIntoClick = async (element) => {
  await element.waitForDisplayed({ block: 'center', inline: 'nearest' });
  await element.click();
};

export const elementClick = async (element) => {
  await element.click();
};

export const elementIsDisplayedInViewport = async (element) => {
  return await element.isDisplayedInViewport();
};

export const elementIsDisplayed = async (element) => {
  return await element.isDisplayed();
};

export const elementIsExisting = async (element) => {
  return await element.isExisting();
};

export const elementWaitForExist = async (element) => {
  return await element.waitForExist();
};

export const elementIsClickable = async (element) => {
  return await element.isClickable();
};

export const elementGetText = async (element) => {
  return await element.getText();
};

export const elementSetValue = async (element, value) => {
  return await element.setValue(value);
};

export const elementAddValue = async (element, value) => {
  return await element.addValue(value);
};

export const elementSelectByText = async (element, value) => {
  return await element.selectByVisibleText(value);
};

export const elementselectByAttribute = async (element, value) => {
  return await element.selectByAttribute('value', value);
};

export const elementGetValue = async (element, value) => {
  return await element.getValue(value);
};

export const elementSelectbyIndex = async (element, value) => {
  return await element.selectByIndex(value);
};
