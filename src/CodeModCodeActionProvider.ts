import * as vscode from 'vscode';

import { commandIds, isSupportedLanguage } from './const';
import { isSelection } from './utils/isSelection';

export class CodeModCodeActionProvider implements vscode.CodeActionProvider {
    public async provideCodeActions(
        document: vscode.TextDocument,
        selection: vscode.Range | vscode.Selection,
        context: vscode.CodeActionContext,
        token: vscode.CancellationToken
    ): Promise<vscode.Command[]> {
        if (!isSupportedLanguage(document.languageId)) {
            vscode.window.showInformationMessage('not supported language');
            return [];
        }
        vscode.window.showInformationMessage('supported language');
        // if (!isSelection(selection)) {
        //     // Complex commands, run-on-save etc
        //     return [];
        // }

        return [
            {
                command: 'editor.emmet.action.wrapWithAbbreviation',
                title: 'Wrap with Abbreviation',
                arguments: [],
                tooltip: 'Wrap with Abbreviation',
            }
        ];
    }
}
