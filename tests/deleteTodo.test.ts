import { test, expect, defineConfig } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

let todoPage;

test.afterEach(async ({ page }, testInfo) => {
    await page.screenshot({ path: `screenshots/${testInfo.title}.png`, fullPage: true });
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
