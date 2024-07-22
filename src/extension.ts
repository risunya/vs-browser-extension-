import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "browser-in-explorer" is now active!');

	const disposable = vscode.commands.registerCommand('browser-in-explorer.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from browser-in-explorer!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
