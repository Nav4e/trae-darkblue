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
}
