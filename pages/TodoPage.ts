import { Page, Locator } from '@playwright/test';
import playwrightConfig from '../playwright.config';

export class TodoPage {
  readonly page: Page;
  readonly todoInput: Locator;
  readonly addButton: Locator;
  readonly todoList: Locator;
  readonly firstTodo: Locator;
  readonly todoCheckBox:Locator;
  readonly deletButton:Locator;
  readonly allTab:Locator;
  readonly activeTab :Locator;
  readonly completedTab :Locator;
  readonly clearcompletedButton:Locator;

  constructor(page: Page) {
    this.page = page;
    this.todoInput = page.locator('[id="todo-input"]');
    this.addButton = page.locator('#add-todo');
    this.todoList = page.locator('.todo-list');
    this.todoCheckBox = page.locator('xpath = .//*[@class="toggle"]');
    this.firstTodo = page.locator("xpath =.//label[@data-testid='todo-item-label']");
    this.deletButton = page.locator('xpath = .//*[@class="clear-completed"]')
  
    this.allTab= page.locator('xpath=.//*[@href="#/"]');
    this.activeTab= page.locator('xpath=.//*[@href="#/active"]');
    this.completedTab = page.locator('xpath=.//*[@href="#/completed"]');

    this.clearcompletedButton=page.locator('xpath = .//*[@class="clear-completed"]')
  }

  async getAllTabVisiblity(){
    return this.allTab.isVisible();
  }

  async getActiveTabVisiblity(){
    return this.activeTab.isVisible();
  }

  async getCompletedButtonVisibility(){

    return this.completedTab.isVisible();
  }

  async getClearCompletedButtonVisibility(){

    return this.clearcompletedButton.isVisible();
  }

  async addTodo(todoText: string) {
    await this.todoInput.fill(todoText);
    await this.page.keyboard.press('Enter');
  }

  async getFirstTodoText(){
    return this.firstTodo.textContent();
  }

  async editFirstTododText(todoText:string){

    await this.firstTodo.dblclick();
    await this.page.keyboard.press('T+e+s+t');
    await this.page.keyboard.press('Enter');

  }

  async selectTodoCheckBox(){

    await this.todoCheckBox.click();

  }

  async clickOnDeletButton(){

    await this.deletButton.click();
  
  }

  async validateAllTheTabs(){

  }
}
