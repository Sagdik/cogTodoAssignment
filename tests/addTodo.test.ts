import { test, expect, defineConfig } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

let todoPage;

test.afterEach(async ({ page }, testInfo) => {
    await page.screenshot({ path: `screenshots/${testInfo.title}.png`, fullPage: true });
  });

test('User should be able to add a new todo', async ({ page }) => {
   
  todoPage = new TodoPage(page);
  
  await page.goto('https://todomvc.com/examples/react/dist/');
  
  await todoPage.addTodo('test data');

  const firstTodoText = await todoPage.getFirstTodoText();
  console.log(firstTodoText);
  expect(firstTodoText).toContain('test data');
});

test('User should be able to delete a new todo', async ({ page }) => {
    
    todoPage = new TodoPage(page);

    await page.goto('https://todomvc.com/examples/react/dist/');
  
    await todoPage.addTodo('test data');
  
    const firstTodoText = await todoPage.getFirstTodoText();

    console.log(firstTodoText);
    
    expect(firstTodoText).toContain('test data');

    await todoPage.selectTodoCheckBox();

    await todoPage.clickOnDeletButton();
  
});

test('User should be able to edit a new todo', async ({ page }) => {
    
    todoPage = new TodoPage(page);

    await page.goto('https://todomvc.com/examples/react/dist/');
  
    await todoPage.addTodo('test data');
  
    const firstTodoText = await todoPage.getFirstTodoText();
    
    expect(firstTodoText).toContain('test data');

    await todoPage.editFirstTododText('Test');

    const firstTodoText2 = await todoPage.getFirstTodoText();

    expect(firstTodoText2).toContain('test dataTest');

    await todoPage.selectTodoCheckBox();

    await todoPage.clickOnDeletButton();
  
});


test('User should be able to validate visible button on new todo', async ({ page }) => {
    
    todoPage = new TodoPage(page);

    await page.goto('https://todomvc.com/examples/react/dist/');
  
    await todoPage.addTodo('test data');
  
    expect(await todoPage.getActiveTabVisiblity()).toBeTruthy();
   
    expect(await todoPage.getAllTabVisiblity()).toBeTruthy();
   
    expect(await todoPage.getClearCompletedButtonVisibility()).toBeTruthy();
   
    expect(await todoPage.getCompletedButtonVisibility()).toBeTruthy();

    await todoPage.selectTodoCheckBox();

    await todoPage.clickOnDeletButton();

    expect(await todoPage.getActiveTabVisiblity()).toBeFalsy();
   
    expect(await todoPage.getAllTabVisiblity()).toBeFalsy();
   
    expect(await todoPage.getClearCompletedButtonVisibility()).toBeFalsy();
   
    expect(await todoPage.getCompletedButtonVisibility()).toBeFalsy();


});