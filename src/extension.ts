import * as vscode from "vscode";
import { ExtensionContext, languages } from "vscode";
import { supportedLanguages } from "./const";
import { CodeModCodeActionProvider } from "./CodeModCodeActionProvider";

export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    languages.registerCodeActionsProvider(
      supportedLanguages,
      new CodeModCodeActionProvider()
    )
  );

  registerStatusBarItem(context);
}

function registerStatusBarItem(context: ExtensionContext) {
  // 创建一个状态栏项目
  const statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );

  // 设置显示的文本
  statusBarItem.text = "📝 Todo";
  // 设置提示文本
  statusBarItem.tooltip = "查看待办";
  // 设置点击命令
  statusBarItem.command = "trae-darkblue.openTodo";

  // 注册命令
  let disposable = vscode.commands.registerCommand(
    "trae-darkblue.openTodo",
    () => {
      // 这里替换成你想要打开的文件路径
      const filePath = vscode.Uri.file(
        "/Users/nav4e/Library/Mobile\ Documents/iCloud\~md\~obsidian/Documents/EagerMko/汇总/待办事项.md"
      );

      vscode.workspace
        .openTextDocument(filePath)
        .then((document) => {
          vscode.window.showTextDocument(document);
        })
        .then(
          () => {},
          (error) => {
            vscode.window.showErrorMessage("无法打开文件：" + error);
          }
        );
    }
  );

  // 显示状态栏项目
  statusBarItem.show();

  // 将状态栏项目和命令添加到订阅中
  context.subscriptions.push(statusBarItem);
  context.subscriptions.push(disposable);
}
