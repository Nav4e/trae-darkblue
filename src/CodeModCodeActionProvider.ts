import * as vscode from "vscode";

import { commandIds, isSupportedLanguage } from "./const";
import { isSelection } from "./utils/isSelection";

export class CodeModCodeActionProvider implements vscode.CodeActionProvider {
  public async provideCodeActions(
    document: vscode.TextDocument,
    selection: vscode.Range | vscode.Selection,
    context: vscode.CodeActionContext,
    token: vscode.CancellationToken
  ): Promise<vscode.Command[]> {
    if (!isSupportedLanguage(document.languageId)) {
      return [];
    }

    // @ts-ignore
    const line = document.lineAt(selection.active.line).text;
    if (!line.includes("<")) {
      return [];
    }

    return [
      {
        command: "editor.emmet.action.wrapWithAbbreviation",
        title: "Emmet: Wrap with Abbreviation",
        arguments: [],
        tooltip: "Emmet: Wrap with Abbreviation",
      },
      {
        command: "editor.emmet.action.removeTag",
        title: "Emmet: Remove Tag",
        arguments: [],
        tooltip: "Emmet: Remove Tag",
      },
      {
        command: "editor.emmet.action.splitJoinTag",
        title: "Emmet: Split Join Tag",
        arguments: [],
        tooltip: "Emmet: Split Join Tag",
      },
    ];
  }
}
